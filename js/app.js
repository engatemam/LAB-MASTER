document.addEventListener('DOMContentLoaded', () => {
    // --- Audio Engine (Web Audio API) ---
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    const audioEngine = {
        playTone(freq, type, duration, vol = 0.1) {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.type = type;
            oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
            
            gainNode.gain.setValueAtTime(vol, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + duration);
        },
        playDing() {
            this.playTone(880, 'sine', 0.5, 0.1);
            setTimeout(() => this.playTone(1108, 'sine', 0.6, 0.1), 100);
        },
        playBuzz() {
            this.playTone(150, 'sawtooth', 0.3, 0.15);
            setTimeout(() => this.playTone(130, 'sawtooth', 0.4, 0.15), 150);
        },
        playTick() {
            this.playTone(1000, 'sine', 0.05, 0.05);
        },
        playAlarm() {
            for(let i=0; i<6; i++) {
                setTimeout(() => this.playTone(800, 'square', 0.2, 0.1), i * 300);
            }
        }
    };

    // --- CUSTOM SYS MODAL LOGIC ---
    const sysModal = document.getElementById('sys-modal');
    const sysModalContent = document.getElementById('sys-modal-content');
    const sysModalTitle = document.getElementById('sys-modal-title');
    const sysModalMsg = document.getElementById('sys-modal-msg');
    const sysModalBtns = document.getElementById('sys-modal-btns');

    function openSysModal(title, msg, buttons) {
        return new Promise(resolve => {
            sysModalTitle.innerHTML = title;
            sysModalMsg.innerHTML = msg;
            sysModalBtns.innerHTML = '';
            
            buttons.forEach(btn => {
                const b = document.createElement('button');
                b.className = btn.class || 'btn-primary';
                b.textContent = btn.text;
                b.addEventListener('click', () => {
                    closeSysModal();
                    resolve(btn.value);
                });
                sysModalBtns.appendChild(b);
            });
            
            sysModal.style.display = 'flex';
            requestAnimationFrame(() => {
                sysModalContent.style.opacity = '1';
                sysModalContent.style.transform = 'scale(1)';
            });
        });
    }

    function closeSysModal() {
        sysModalContent.style.opacity = '0';
        sysModalContent.style.transform = 'scale(0.9)';
        setTimeout(() => sysModal.style.display = 'none', 300);
    }

    window.customAlert = function(msg) {
        audioEngine.playBuzz();
        return openSysModal('⚠️ Alert', msg, [{ text: 'OK', value: true }]);
    };

    window.customConfirm = function(msg) {
        audioEngine.playTick();
        return openSysModal('❓ Confirm Action', msg, [
            { text: 'Cancel', value: false, class: 'btn-secondary' },
            { text: 'Yes, Proceed', value: true, class: 'btn-danger' }
        ]);
    };

    window.showRanksInfo = function() {
        audioEngine.playTick();
        const html = `
            <div style="text-align: left; line-height: 1.8;">
                <p style="color: var(--text-secondary); margin-bottom: 15px; font-size: 0.95rem;">You need <strong>500 XP</strong> for each level.</p>
                <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
                    <li style="margin-bottom: 8px; background: rgba(205, 127, 50, 0.1); padding: 5px 10px; border-radius: 8px; border-left: 3px solid #cd7f32;">🥉 <b style="color: #cd7f32;">Fresh Engineer</b> : Level 1+</li>
                    <li style="margin-bottom: 8px; background: rgba(192, 192, 192, 0.1); padding: 5px 10px; border-radius: 8px; border-left: 3px solid #c0c0c0;">🥈 <b style="color: #c0c0c0;">Junior Developer</b> : Level 5+</li>
                    <li style="margin-bottom: 8px; background: rgba(255, 215, 0, 0.1); padding: 5px 10px; border-radius: 8px; border-left: 3px solid #ffd700;">🥇 <b style="color: #ffd700;">Senior Engineer</b> : Level 10+</li>
                    <li style="margin-bottom: 8px; background: rgba(0, 255, 255, 0.1); padding: 5px 10px; border-radius: 8px; border-left: 3px solid #00ffff;">💎 <b style="color: #00ffff;">Tech Lead</b> : Level 20+</li>
                    <li style="margin-bottom: 8px; background: rgba(255, 0, 255, 0.1); padding: 5px 10px; border-radius: 8px; border-left: 3px solid #ff00ff;">🔮 <b style="color: #ff00ff;">Principal Architect</b> : Level 30+</li>
                    <li style="margin-bottom: 8px; background: rgba(255, 69, 0, 0.1); padding: 5px 10px; border-radius: 8px; border-left: 3px solid #ff4500;">👑 <b style="color: #ff4500;">Engineering Legend</b> : Level 50+</li>
                </ul>
                <div style="padding: 15px; background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--glass-border);">
                    <h4 style="color: var(--accent); margin-bottom: 8px;">How to earn XP?</h4>
                    <div style="font-size: 0.9rem; color: var(--text-secondary); display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                        <div>• Correct Answer: <b>+5</b></div>
                        <div>• Mistake Fix: <b>+15</b></div>
                        <div>• Survival Combo: <b>+50</b></div>
                    </div>
                </div>
            </div>
        `;
        openSysModal('🏆 Ranks & XP Guide', html, [{ text: 'Awesome!', value: true }]);
    };

    window.showToast = function(msg, icon = '🏆') {
        const toast = document.createElement('div');
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.background = 'var(--glass-bg)';
        toast.style.backdropFilter = 'blur(10px)';
        toast.style.color = '#fff';
        toast.style.padding = '15px 25px';
        toast.style.borderRadius = '12px';
        toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';
        toast.style.gap = '15px';
        toast.style.zIndex = '999999';
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        toast.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        toast.style.border = '1px solid var(--accent)';
        
        toast.innerHTML = `
            <div style="font-size: 2rem; filter: drop-shadow(0 0 5px rgba(255,255,255,0.5));">${icon}</div>
            <div>
                <div style="font-weight: bold; font-size: 1.1rem; margin-bottom: 3px; color: var(--accent);">Awesome!</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">${msg}</div>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
            audioEngine.playDing();
            setTimeout(() => audioEngine.playTone(1318.51, 'sine', 0.5, 0.1), 150);
            fireConfetti();
        }, 100);
        
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    };

    // --- CONFETTI ENGINE ---
    function fireConfetti() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '99999';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const pieces = [];
        const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'];
        
        for (let i = 0; i < 150; i++) {
            pieces.push({
                x: canvas.width / 2,
                y: canvas.height / 2 + 100,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 1) * 20 - 5,
                size: Math.random() * 10 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 10
            });
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let active = false;
            pieces.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.5; // gravity
                p.rotation += p.rotSpeed;
                
                if (p.y < canvas.height) active = true;
                
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
                ctx.restore();
            });
            
            if (active) requestAnimationFrame(animate);
            else document.body.removeChild(canvas);
        }
        animate();
    }

    // Achievements System
    let labAchievements = JSON.parse(localStorage.getItem('labAchievements')) || [];
    let labMistakes = JSON.parse(localStorage.getItem('labMistakes')) || [];
    // Clean up any empty string mistakes that might have been saved due to previous bug
    labMistakes = labMistakes.filter(m => m && m.trim() !== "");
    let labTotalQ = parseInt(localStorage.getItem('labTotalQ')) || 0;
    let labCorrectQ = parseInt(localStorage.getItem('labCorrectQ')) || 0;
    let labFcReviewedCount = parseInt(localStorage.getItem('labFcReviewedCount')) || 0;
    let labReviewMistakesCount = parseInt(localStorage.getItem('labReviewMistakesCount')) || 0;
    let maxSurvivalCombo = parseInt(localStorage.getItem('maxSurvivalCombo')) || 0;
    let labCurrentLevel = parseInt(localStorage.getItem('labCurrentLevel')) || 1;

    // --- ARCADE SURVIVAL MODE GLOBALS ---
    let survivalScore = 0;
    let survivalCombo = 1;
    let survivalTime = 30;
    let survivalInterval;
    let survivalQuestions = [];

    function saveStats() {
        let xp = (labTotalQ * 10) + (labCorrectQ * 5) + (labFcReviewedCount * 2) + (maxSurvivalCombo * 50) + (labReviewMistakesCount * 15);
        let level = Math.floor(xp / 500) + 1;
        if (level > labCurrentLevel) {
            labCurrentLevel = level;
            showToast(`You leveled up to Level ${level}!`, '🚀');
        }

        localStorage.setItem('labMistakes', JSON.stringify(labMistakes));
        localStorage.setItem('labTotalQ', labTotalQ);
        localStorage.setItem('labCorrectQ', labCorrectQ);
        localStorage.setItem('labFcReviewedCount', labFcReviewedCount);
        localStorage.setItem('labReviewMistakesCount', labReviewMistakesCount);
        localStorage.setItem('maxSurvivalCombo', maxSurvivalCombo);
        localStorage.setItem('labCurrentLevel', labCurrentLevel);
    }

    // 1. Data arrays mergingregation
    let rawQuestions = [];
    
    if (typeof lec01Data !== 'undefined') rawQuestions.push(...lec01Data);
    if (typeof lec02Data !== 'undefined') rawQuestions.push(...lec02Data);
    if (typeof lec03Data !== 'undefined') rawQuestions.push(...lec03Data);
    if (typeof lec04Data !== 'undefined') rawQuestions.push(...lec04Data);
    if (typeof lec05Data !== 'undefined') rawQuestions.push(...lec05Data);
    if (typeof lec06Data !== 'undefined') rawQuestions.push(...lec06Data);
    if (typeof examFinal2024 !== 'undefined') rawQuestions.push(...examFinal2024);
    if (typeof examMidterm2024 !== 'undefined') rawQuestions.push(...examMidterm2024);
    if (typeof examMidtermSummer2025 !== 'undefined') rawQuestions.push(...examMidtermSummer2025);
    if (typeof examQuiz2026 !== 'undefined') rawQuestions.push(...examQuiz2026);
    if (typeof examMidterm2026 !== 'undefined') rawQuestions.push(...examMidterm2026);

    // Normalize schema and clean options
    rawQuestions = rawQuestions.map(q => {
        let text = q.text || q.text || "";
        let options = q.options || [];
        let answer = q.answer !== undefined ? q.answer : (q.options && q.correctIndex !== undefined ? q.options[q.correctIndex] : undefined);
        
        if (text.toLowerCase().includes('true/false') || text.toLowerCase().includes('true or false')) {
            let correct = "True";
            if (answer && answer.toLowerCase().includes('false')) {
                correct = "False";
            }
            options = ["True", "False"];
            answer = correct;
        } else {
            // Deduplicate case-insensitively
            let uniqueOpts = [];
            let seen = new Set();
            options.forEach(opt => {
                let norm = String(opt).toLowerCase().replace(/\s+/g, ' ').trim();
                if (!seen.has(norm)) {
                    seen.add(norm);
                    uniqueOpts.push(opt);
                }
            });
            options = uniqueOpts;
        }

        return {
            category: q.category,
            text: text,
            options: options,
            answer: answer,
            explanation: q.explanation
        };
    });

    const globalStats = document.getElementById('global-stats');
    if (rawQuestions.length === 0) {
        globalStats.textContent = "Error: No data loaded. Check JS files.";
        return;
    }
    
    globalStats.textContent = `Total Questions Available: ${rawQuestions.length}`;
    
    const welcomeTotalQ = document.getElementById('welcome-total-q');
    if (welcomeTotalQ) welcomeTotalQ.textContent = rawQuestions.length;

    // 2. Extract Categories and Sort
    const categories = [...new Set(rawQuestions.map(q => q.category))];
    
    const categoryOrder = [
        "Lecture 01", "Lecture 02", "Lecture 03", 
        "Lecture 04", "Lecture 05", "Lecture 06",
        "Final 2024", "Midterm 2024", 
        "Midterm Summer 2025", "Midterm 2026", "Quiz 2026"
    ];

    categories.sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        if (indexA === -1 && indexB === -1) return a.localeCompare(b);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });

    const categoryFilters = document.getElementById('category-filters');
    
    categories.forEach(cat => {
        const label = document.createElement('label');
        label.className = 'custom-toggle-label';
        label.innerHTML = `
            <input type="checkbox" value="${cat}" class="cat-checkbox">
            <div class="toggle-glass">
                <span class="cat-name">${cat}</span>
                <div class="ios-switch"></div>
            </div>
        `;
        categoryFilters.appendChild(label);
    });

    const checkboxes = document.querySelectorAll('.cat-checkbox');
    const selectAllBtn = document.getElementById('select-all-btn');

    // Restore from LocalStorage
    try {
        const saved = JSON.parse(localStorage.getItem('labSavedCategories'));
        if (saved && Array.isArray(saved) && saved.length > 0) {
            // Visually check them first
            checkboxes.forEach(cb => {
                if (saved.includes(cb.value)) cb.checked = true;
            });
            updateToggleState();
            
            // Ask user if they want to keep them
            setTimeout(async () => {
                if(await customConfirm("Welcome back! We found your previous selections. Would you like to keep them?")) {
                    updateActiveQuestions();
                } else {
                    // Clear Categories
                    localStorage.removeItem('labSavedCategories');
                    checkboxes.forEach(cb => cb.checked = false);
                    updateActiveQuestions();
                    updateToggleState();
                    
                    // Clear Dashboard Stats
                    labTotalQ = 0;
                    labCorrectQ = 0;
                    labMistakes = [];
                    labAchievements = [];
                    saveStats();
                    localStorage.setItem('labAchievements', JSON.stringify([]));
                }
            }, 100); // slight delay for UI to paint
        }
    } catch(e) {}

    function updateToggleState() {
        const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        selectAllBtn.textContent = allChecked ? 'Deselect All' : 'Select All';
        
        const modeWarning = document.getElementById('mode-warning');
        if (modeWarning) {
            modeWarning.style.display = anyChecked ? 'none' : 'flex';
        }

        document.querySelectorAll('.mode-card').forEach(card => {
            if (!anyChecked) {
                card.classList.add('disabled-mode');
            } else {
                card.classList.remove('disabled-mode');
            }
        });
        
        if (!anyChecked) {
            document.querySelectorAll('input[name="mode"]').forEach(r => r.checked = false);
            // Fallback to welcome screen without relying on uninitialized 'screens' object
            const welcome = document.getElementById('welcome-screen');
            if (welcome && !welcome.classList.contains('active')) {
                document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
                welcome.classList.add('active');
            }
        }
    }

    // Auto-update Active Questions dynamically
    function updateActiveQuestions(isUserTriggered = false) {
        const selectedCats = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        localStorage.setItem('labSavedCategories', JSON.stringify(selectedCats));
        activeQuestions = rawQuestions.filter(q => selectedCats.includes(q.category));
        
        if (isUserTriggered) {
            if (screens && (screens.study.classList.contains('active') || screens.examConfig.classList.contains('active'))) {
                modeRadios.forEach(r => r.checked = false);
                switchScreen('welcome');
            }
        }
    }

    checkboxes.forEach(cb => {
        cb.addEventListener('click', (e) => {
            const isLocked = screens && ((screens.exam && screens.exam.classList.contains('active')) || (screens.survival && screens.survival.classList.contains('active')));
            if (isLocked) {
                e.preventDefault();
                customAlert('⚠️ Please finish your current exam before changing configurations!');
            }
        });
        cb.addEventListener('change', () => {
            updateToggleState();
            updateActiveQuestions(true);
        });
    });

    selectAllBtn.addEventListener('click', (e) => {
        const isLocked = screens && ((screens.exam && screens.exam.classList.contains('active')) || (screens.survival && screens.survival.classList.contains('active')));
        if (isLocked) {
            e.preventDefault();
            customAlert('⚠️ Please finish your current exam before changing configurations!');
            return;
        }
        const isDeselect = selectAllBtn.textContent === 'Deselect All';
        checkboxes.forEach(cb => cb.checked = !isDeselect);
        updateToggleState();
        updateActiveQuestions(true);
    });

    // Initialize button state
    updateToggleState();

    // Handle Exam Settings Visibility & Auto-start Modes
    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const isLocked = screens && ((screens.exam && screens.exam.classList.contains('active')) || (screens.survival && screens.survival.classList.contains('active')));
            if (isLocked) {
                e.preventDefault();
                e.stopPropagation();
                customAlert('⚠️ Please finish your current exam before changing modes!');
                return;
            }
            const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
            if (!anyChecked) {
                e.preventDefault();
                customAlert('⚠️ Please select at least one Category from the list first to unlock the modes!');
            }
        });
    });

    const modeRadios = document.querySelectorAll('input[name="mode"]');
    
    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const warningEl = document.getElementById('mode-warning');
            if (warningEl) warningEl.style.display = 'none';
            
            const mode = e.target.value;
            const selectedCats = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
            
            if (mode === 'search') {
                if (typeof closeMobileMenu === 'function') closeMobileMenu();
                switchScreen('search');
                return;
            }

            if (selectedCats.length === 0) {
                e.target.checked = false;
                customAlert("Please select at least one lecture or exam category before choosing a study mode!");
                return;
            }
            
            updateActiveQuestions();
            
            if (activeQuestions.length === 0) {
                customAlert("No questions found for the selected categories.");
                e.target.checked = false;
                return;
            }

            if (typeof closeMobileMenu === 'function') closeMobileMenu();

            if (mode === 'mistakes') {
                activeQuestions = activeQuestions.filter(q => labMistakes.includes(q.text));
                if (activeQuestions.length === 0) {
                    customAlert("Great job! You don't have any mistakes in the selected categories. 🎉");
                    e.target.checked = false;
                    return;
                }
                switchScreen('study');
                studyCurrentPage = 1;
                renderStudyPage();
            } else if (mode === 'study') {
                switchScreen('study');
                studyCurrentPage = 1;
                renderStudyPage();
            } else if (mode === 'survival') {
                switchScreen('survival');
                startSurvivalMode();
            } else if (mode === 'exam') {
                switchScreen('examConfig');
            }
        });
    });

    // --- CUSTOM NUMBER INPUT LOGIC ---
    document.querySelectorAll('.num-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('data-target');
            const step = parseInt(e.target.getAttribute('data-step')) || 1;
            const input = document.getElementById(targetId);
            if (!input) return;
            
            let val = parseInt(input.value) || 0;
            const min = parseInt(input.getAttribute('min')) || 0;
            const max = parseInt(input.getAttribute('max')) || 1000;
            
            if (e.target.classList.contains('plus')) {
                val += step;
            } else if (e.target.classList.contains('minus')) {
                val -= step;
            }
            
            if (val < min) val = min;
            if (val > max) val = max;
            
            input.value = val;
        });
    });

    // 3. Screens & State
    const screens = {
        welcome: document.getElementById('welcome-screen'),
        study: document.getElementById('study-screen'),
        examConfig: document.getElementById('exam-config-screen'),
        exam: document.getElementById('exam-screen'),
        results: document.getElementById('results-screen'),
        notes: document.getElementById('notes-content-screen'),
        dashboard: document.getElementById('dashboard-screen'),
        survival: document.getElementById('survival-screen')
    };

    function switchScreen(screenName, isLectureSelected = false) {
        Object.values(screens).forEach(s => {
            if (s) s.classList.remove('active');
        });
        if (screens[screenName]) screens[screenName].classList.add('active');
        
        // Update mobile layout state when switching screens
        if (typeof updateMobileModeState === 'function') {
            updateMobileModeState(screenName, isLectureSelected);
        }
    }

    const sidebars = {
        simulator: document.getElementById('sidebar-simulator'),
        notes: document.getElementById('sidebar-notes')
    };

    function switchSidebar(sidebarName) {
        Object.values(sidebars).forEach(s => {
            if (s) s.style.display = 'none';
        });
        if (sidebars[sidebarName]) sidebars[sidebarName].style.display = 'block';
    }

    let activeQuestions = [];

    // --- DASHBOARD LOGIC ---
    document.getElementById('exam-start-btn')?.addEventListener('click', () => {
        switchScreen('exam');
        initExamMode();
    });

    // Utilities
    document.querySelectorAll('.exit-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            if (screens && screens.exam && screens.exam.classList.contains('active')) {
                if (!(await customConfirm("Are you sure you want to quit? Your exam progress will be lost."))) return;
                if (timerInterval) clearInterval(timerInterval);
            } else if (screens && screens.survival && screens.survival.classList.contains('active')) {
                if (!(await customConfirm("Are you sure you want to surrender?"))) return;
                if (typeof survivalInterval !== 'undefined') clearInterval(survivalInterval);
            } else {
                if (typeof timerInterval !== 'undefined' && timerInterval) clearInterval(timerInterval);
            }
            
            modeRadios.forEach(r => r.checked = false);
            switchScreen('welcome');
        });
    });

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // --- TEXT TO SPEECH (TTS) ---
    function speakText(text) {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        
        // Remove HTML tags for clean reading
        let textToRead = text.replace(/<[^>]+>/g, '');
        
        const arabicIndex = textToRead.search(/[\u0600-\u06FF]/);
        
        if (arabicIndex !== -1) {
            const engPart = textToRead.substring(0, arabicIndex).trim();
            const arPart = textToRead.substring(arabicIndex).trim();
            
            if (engPart) {
                const u1 = new SpeechSynthesisUtterance(engPart);
                u1.lang = 'en-US';
                u1.rate = 0.9;
                window.speechSynthesis.speak(u1);
            }
            if (arPart) {
                const u2 = new SpeechSynthesisUtterance(arPart);
                u2.lang = 'ar-SA';
                u2.rate = 0.9;
                window.speechSynthesis.speak(u2);
            }
        } else {
            const u = new SpeechSynthesisUtterance(textToRead.trim());
            u.lang = 'en-US';
            u.rate = 0.9;
            window.speechSynthesis.speak(u);
        }
    }

    function formatExplanation(text) {
        if (!text) return '';
        let formatted = text.replace(/([a-zA-Z0-9.?!>])\s+([\u0600-\u06FF])/g, '$1<br><br>$2');
        formatted = formatted.replace(/([\u0600-\u06FF].*?)(?=<br>|$)/g, '<div dir="rtl" style="text-align: right; color: #a5b4fc; font-family: Tahoma, Arial, sans-serif; margin-top: 8px; line-height: 1.6;">$1</div>');
        return formatted;
    }
    
    function stopSpeaking() {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }

    // Stop speaking if clicking outside TTS button
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.tts-btn') && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    });

    // --- STUDY MODE LOGIC ---
    let studyCurrentPage = 1;
    const studyItemsPerPage = 1;
    const studyGrid = document.getElementById('study-grid');
    const studyPageInfo = document.getElementById('study-page-info');

    function initStudyMode() {
        studyCurrentPage = 1;
        renderStudyPage();
    }

    function renderStudyPage() {
        studyGrid.innerHTML = '';
        const totalPages = Math.ceil(activeQuestions.length / studyItemsPerPage) || 1;
        studyPageInfo.textContent = `Page ${studyCurrentPage} of ${totalPages}`;

        const prevBtn = document.getElementById('study-prev');
        const nextBtn = document.getElementById('study-next');
        if (prevBtn) {
            prevBtn.disabled = studyCurrentPage === 1;
            prevBtn.style.opacity = studyCurrentPage === 1 ? '0.4' : '1';
            prevBtn.style.cursor = studyCurrentPage === 1 ? 'not-allowed' : 'pointer';
        }
        if (nextBtn) {
            nextBtn.disabled = studyCurrentPage >= totalPages;
            nextBtn.style.opacity = studyCurrentPage >= totalPages ? '0.4' : '1';
            nextBtn.style.cursor = studyCurrentPage >= totalPages ? 'not-allowed' : 'pointer';
        }

        const start = (studyCurrentPage - 1) * studyItemsPerPage;
        const end = start + studyItemsPerPage;
        const pageQuestions = activeQuestions.slice(start, end);

        pageQuestions.forEach((q, idx) => {
            const globalIndex = start + idx + 1;
            const card = document.createElement('div');
            card.className = 'study-card';
            
            let optionsHtml = '';
            q.options.forEach(opt => {
                optionsHtml += `<div class="study-opt" data-opt="${opt.replace(/"/g, '&quot;')}">${opt}</div>`;
            });

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <span class="category-badge">${q.category}</span>
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Question ${globalIndex}</span>
                </div>
                <div class="study-question">${q.text}</div>
                <div class="study-options">${optionsHtml}</div>
                <div class="study-explanation">
                    <strong>Correct Answer:</strong> ${q.answer}<br>
                    <strong>Explanation:</strong> ${formatExplanation(q.explanation)}<br><br>
                    <button class="tts-btn" style="background: var(--accent-cyan); color: white; padding: 6px 12px; font-size: 0.9rem; cursor: pointer;">
                        🔊 Read Aloud
                    </button>
                </div>
            `;

            // Interaction
            const opts = card.querySelectorAll('.study-opt');
            const exp = card.querySelector('.study-explanation');
            const ttsBtn = card.querySelector('.tts-btn');

            ttsBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                speakText(q.explanation);
            });

            opts.forEach(optDiv => {
                optDiv.addEventListener('click', () => {
                    const selected = optDiv.getAttribute('data-opt');
                    if (selected === q.answer) {
                        optDiv.classList.add('correct');
                        audioEngine.playDing();
                        labTotalQ++;
                        labCorrectQ++;
                        if (labMistakes.includes(q.text)) {
                            labMistakes = labMistakes.filter(t => t !== q.text);
                        }
                        if (document.querySelector('input[name="mode"]:checked')?.value === 'mistakes') {
                            labReviewMistakesCount++;
                        }
                        saveStats();
                    } else {
                        optDiv.classList.add('incorrect');
                        audioEngine.playBuzz();
                        // highlight correct one
                        opts.forEach(o => {
                            if(o.getAttribute('data-opt') === q.answer) o.classList.add('correct');
                        });
                        labTotalQ++;
                        if (!labMistakes.includes(q.text)) {
                            labMistakes.push(q.text);
                        }
                        saveStats();
                    }
                    exp.classList.add('show');
                    // Disable further clicks
                    opts.forEach(o => o.style.pointerEvents = 'none');
                });
            });

            studyGrid.appendChild(card);
        });
    }

    document.getElementById('study-prev').addEventListener('click', () => {
        if (studyCurrentPage > 1) {
            stopSpeaking();
            studyCurrentPage--;
            renderStudyPage();
            window.scrollTo(0, 0);
        }
    });

    document.getElementById('study-next').addEventListener('click', () => {
        const totalPages = Math.ceil(activeQuestions.length / studyItemsPerPage);
        if (studyCurrentPage < totalPages) {
            stopSpeaking();
            studyCurrentPage++;
            renderStudyPage();
            window.scrollTo(0, 0);
        }
    });


    // --- EXAM MODE LOGIC ---
    let examQuestions = [];
    let examCurrentIndex = 0;
    let examScore = 0;
    let examIncorrect = [];
    let timerInterval = null;
    let timeRemaining = 0;
    let selectedAnswer = null;

    const examQText = document.getElementById('exam-question-text');
    const examOptions = document.getElementById('exam-options');
    const examCurrentQEl = document.getElementById('exam-current-q');
    const examTotalQEl = document.getElementById('exam-total-q');
    const timerDisplay = document.getElementById('timer-display');
    const examCatBadge = document.getElementById('exam-category-badge');

    function initExamMode() {
        const count = parseInt(document.getElementById('exam-count').value, 10);
        const timeMins = parseInt(document.getElementById('exam-time').value, 10);
        
        examQuestions = shuffle([...activeQuestions]).slice(0, count);
        examCurrentIndex = 0;
        examScore = 0;
        examIncorrect = [];
        examTotalQEl.textContent = examQuestions.length;
        
        timeRemaining = timeMins * 60;
        clearInterval(timerInterval);
        timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
        
        renderExamQuestion();
    }

    function updateTimer() {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishExam();
            return;
        }
        timeRemaining--;
        const m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
        const s = (timeRemaining % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${m}:${s}`;
    }

    function renderExamQuestion() {
        if (examCurrentIndex >= examQuestions.length) {
            endExam();
            return;
        }

        selectedAnswer = null;
        examCurrentQEl.textContent = examCurrentIndex + 1;
        
        // Update Progress Bar
        const progressEl = document.getElementById('exam-progress-bar');
        if (progressEl) {
            progressEl.style.width = `${((examCurrentIndex) / examQuestions.length) * 100}%`;
        }

        const q = examQuestions[examCurrentIndex];
        
        examCatBadge.textContent = q.category;
        examQText.textContent = q.text;
        examOptions.innerHTML = '';
        
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedAnswer = opt;
            });
            examOptions.appendChild(btn);
        });
    }

    document.getElementById('exam-next-btn').addEventListener('click', () => {
        if (!selectedAnswer) {
            customAlert('Please select an answer!');
            return;
        }

        const q = examQuestions[examCurrentIndex];
        if (selectedAnswer === q.answer) {
            examScore++;
        } else {
            examIncorrect.push({ q, selectedAnswer });
        }

        examCurrentIndex++;
        if (examCurrentIndex >= examQuestions.length) {
            finishExam();
        } else {
            renderExamQuestion();
        }
    });

    document.querySelector('.finish-early-btn').addEventListener('click', async () => {
        if(await customConfirm('Are you sure you want to finish early?')) {
            finishExam();
        }
    });

    function finishExam() {
        clearInterval(timerInterval);
        switchScreen('results');
        
        const answeredCount = examQuestions.length;
        labTotalQ += answeredCount;
        labCorrectQ += examScore;
        
        examIncorrect.forEach(item => {
            if (!labMistakes.includes(item.q.text)) {
                labMistakes.push(item.q.text);
            }
        });
        
        const correctQs = examQuestions.filter(q => !examIncorrect.find(inc => inc.q === q));
        correctQs.forEach(q => {
            if (labMistakes.includes(q.text)) {
                labMistakes = labMistakes.filter(t => t !== q.text);
            }
        });
        saveStats();
        checkAchievements();
        
        // Animate the final score circle
        const finalScoreEl = document.getElementById('final-score');
        const targetScore = Math.round((examScore / examQuestions.length) * 100);
        let currentScore = 0;
        
        finalScoreEl.textContent = '0%';
        const scoreInterval = setInterval(() => {
            if (currentScore >= targetScore) {
                clearInterval(scoreInterval);
                finalScoreEl.textContent = `${targetScore}%`;
                if (targetScore === 100) {
                    finalScoreEl.style.color = 'var(--accent)';
                    finalScoreEl.style.textShadow = '0 0 15px var(--accent)';
                    fireConfetti();
                }
            } else {
                currentScore++;
                finalScoreEl.textContent = `${currentScore}%`;
            }
        }, 15); // Fast counter
        
        document.getElementById('score-text').textContent = `You answered ${examScore} out of ${examQuestions.length} correctly.`;
        
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '';
        
        if (examIncorrect.length === 0) {
            reviewList.innerHTML = '<p style="color:var(--success)">Perfect score! No incorrect answers.</p>';
            return;
        }

        examIncorrect.forEach(item => {
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `
                <h4>${item.q.text}</h4>
                <p>Your answer: <span style="text-decoration:line-through;">${item.selectedAnswer}</span></p>
                <p class="review-correct-ans">Correct answer: ${item.q.answer}</p>
                <div class="review-exp">${formatExplanation(item.q.explanation)}</div>
            `;
            reviewList.appendChild(div);
        });
    }

    // --- TOP NAVIGATION TABS LOGIC ---
    const navTabs = document.querySelectorAll('.nav-tab');
    // --- ENTRY GATE LOGIC ---
    const entryGate = document.getElementById('entry-gate');
    document.querySelectorAll('.entry-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            if (entryGate) entryGate.classList.add('hidden');
            
            // Programmatically click the corresponding nav tab
            const tab = Array.from(navTabs).find(t => t.getAttribute('data-target') === target);
            if (tab) tab.click();
        });
    });

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const isLocked = screens && ((screens.exam && screens.exam.classList.contains('active')) || (screens.survival && screens.survival.classList.contains('active')));
            if (isLocked) {
                e.preventDefault();
                customAlert('⚠️ Please finish your current session (Exam or Survival) before changing tabs!');
                return;
            }
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const target = tab.getAttribute('data-target');
            if (target === 'simulator') {
                switchSidebar('simulator');
                switchScreen('welcome');
            } else if (target === 'notes') {
                switchSidebar('notes');
                switchScreen('notes');
            }
        });
    });

    // --- LECTURE NOTES RENDER LOGIC ---
    const lectureItems = document.querySelectorAll('.lecture-list li');
    const notesTitle = document.getElementById('notes-title');
    const notesBody = document.getElementById('notes-body');
    const imageModal = document.getElementById('image-modal');
    const modalDesc = document.getElementById('modal-desc');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');

    if (closeModal && imageModal) {
        closeModal.onclick = () => imageModal.style.display = "none";
        window.onclick = (e) => {
            if (e.target == imageModal) {
                imageModal.style.display = "none";
            }
        };
    }

    const getLectureData = (lecVar) => {
        switch(lecVar) {
            case 'notesLec01': return typeof notesLec01 !== 'undefined' ? notesLec01 : null;
            case 'notesLec02': return typeof notesLec02 !== 'undefined' ? notesLec02 : null;
            case 'notesLec03': return typeof notesLec03 !== 'undefined' ? notesLec03 : null;
            case 'notesLec04': return typeof notesLec04 !== 'undefined' ? notesLec04 : null;
            case 'notesLec05': return typeof notesLec05 !== 'undefined' ? notesLec05 : null;
            case 'notesLec06': return typeof notesLec06 !== 'undefined' ? notesLec06 : null;
            case 'notesProf': return typeof notesProf !== 'undefined' ? notesProf : null;
            default: return null;
        }
    };

    // --- LECTURE NOTES RENDER LOGIC ---
    // (Existing logic remains below)
    
    // --- MOBILE DRAWER LOGIC ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const leftSidebar = document.querySelector('.left-sidebar');

    function toggleMobileMenu() {
        leftSidebar.classList.toggle('mobile-open');
        mobileOverlay.classList.toggle('show');
    }

    function closeMobileMenu() {
        leftSidebar.classList.remove('mobile-open');
        mobileOverlay.classList.remove('show');
    }
    
    function updateMobileModeState(screenName, isLectureSelected = false) {
        if (screenName === 'welcome' || (screenName === 'notes' && !isLectureSelected)) {
            // Setup phase: Sidebar is the screen
            document.body.classList.remove('mode-active');
            closeMobileMenu();
        } else {
            // Work phase: Mode is active, Sidebar becomes hamburger menu
            document.body.classList.add('mode-active');
            
            const titleEl = document.querySelector('.mobile-title');
            if(titleEl) {
                if(screenName === 'notes') titleEl.innerText = 'Explanations';
                else if(screenName === 'examConfig') titleEl.innerText = 'Exam Settings';
                else if(screenName === 'exam') titleEl.innerText = 'Simulator';
                else if(screenName === 'study') titleEl.innerText = 'Study Mode';
                else if(screenName === 'survival') titleEl.innerText = 'Survival Mode';
                else if(screenName === 'results') titleEl.innerText = 'Results';
                else titleEl.innerText = 'LAB Course';
            }
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

    // (Auto-close menu when mode starts removed, now handled by Start button)
    
    lectureItems.forEach(item => {
        item.addEventListener('click', () => {
            // Lecture selected, switch to mode-active to read it
            if (typeof closeMobileMenu === 'function') closeMobileMenu();
            switchScreen('notes', true); // Route to the screen!
            // Original logic continues
            lectureItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            notesTitle.textContent = item.textContent;
            
            const lecVar = item.getAttribute('data-lec');
            const data = getLectureData(lecVar);
            
            if (!data) {
                notesBody.innerHTML = '<p>Notes data is still extracting or not found. Please wait a moment and try again...</p>';
                return;
            }
            
            notesBody.innerHTML = '';
            data.forEach(section => {
                const secDiv = document.createElement('div');
                secDiv.className = 'note-section';
                
                let html = `<h3 dir="rtl" class="arabic-text" style="color: var(--accent); margin-bottom: 15px;">${section.title}</h3>`;
                
                // 1. Concept Overview (Arabic/Bilingual)
                if (section.conceptOverview) {
                    html += `<div class="note-content arabic-text">${section.conceptOverview}</div>`;
                }

                // Fallback for old schema
                if (section.content && !section.conceptOverview) {
                    html += `<div class="note-content arabic-text">${section.content}</div>`;
                }



                // 3. Professor's Focus (Arabic callout + quote)
                if (section.profFocus) {
                    html += `<div class="exam-hint-callout arabic-text">
                                ${section.profFocus}
                             </div>`;
                }

                // Old format redText fallback
                if (section.redText && section.redText.length > 0) {
                    html += `<div style="margin-bottom:10px;" class="arabic-text">`;
                    section.redText.forEach(rt => {
                        html += `<span class="note-red-text">${rt}</span> `;
                    });
                    html += `</div>`;
                }

                // Old format quote fallback
                if (section.transcriptQuote) {
                    html += `<div class="note-quote arabic-text">"${section.transcriptQuote}"</div>`;
                }
                
                // 4. Visual Context (Mermaid.js strict enforcement)
                if (section.mermaidCode) {
                    html += `<div class="mermaid" style="margin: 20px 0; background: var(--card-bg); padding: 15px; border-radius: 8px; text-align: center;">
                                ${section.mermaidCode}
                             </div>`;
                }
                
                secDiv.innerHTML = html;
                notesBody.appendChild(secDiv);
            });

            // Re-run Mermaid parser on the newly injected HTML
            if (window.mermaid) {
                try {
                    window.mermaid.run({
                        querySelector: '.mermaid'
                    });
                } catch(e) {
                    console.log('Mermaid rendering skipped or failed:', e);
                }
            }

            // Scroll to the top of the page/container
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const rightContent = document.querySelector('.right-content');
            if (rightContent) {
                rightContent.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // --- GLOBAL RIPPLE EFFECT ---
    document.addEventListener('click', function (e) {
        const target = e.target.closest('.btn-primary, .btn-secondary, .btn-danger, .btn-small, .nav-tab, .study-opt, .cat-label, .lecture-list li');
        if (!target) return;
        
        target.classList.add('ripple-btn');
        
        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;
        
        const rect = target.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-circle');
        
        const existingRipple = target.querySelector('.ripple-circle');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        target.appendChild(circle);
        
        setTimeout(() => {
            circle.remove();
        }, 600);
    });

    // --- 3D TILT EFFECT ---
    const tiltElements = document.querySelectorAll('.mode-card, .lecture-list li');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = (y - centerY) / 6;
            const tiltY = (centerX - x) / 6;
            
            el.style.setProperty('--mouse-x', `${x}px`);
            el.style.setProperty('--mouse-y', `${y}px`);
            
            el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            el.style.transition = 'transform 0.3s ease';
        });
        el.addEventListener('mouseenter', () => {
            el.style.transition = 'none';
        });
    });

    // --- ANTI-COPY & SECURITY MEASURES ---
    // Prevent right-click menu
    document.addEventListener('contextmenu', e => e.preventDefault());
    
    // Prevent copy, cut, and dragging
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('dragstart', e => {
        if (e.target.tagName.toLowerCase() !== 'input') {
            e.preventDefault();
        }
    });
    
    // Prevent specific keyboard shortcuts
    document.addEventListener('keydown', e => {
        // Prevent F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
        }
        // Prevent Ctrl+Shift+I/J/C (DevTools)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
            e.preventDefault();
        }
        // Prevent Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
        }
        // Prevent Ctrl+S (Save), Ctrl+P (Print), Ctrl+C (Copy), Ctrl+A (Select All)
        if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P' || e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A')) {
            e.preventDefault();
        }
        
        // --- NATIVE KEYBOARD SHORTCUTS ---
        const studyScreen = document.getElementById('study-screen');
        const examScreen = document.getElementById('exam-screen');
        const survivalScreen = document.getElementById('survival-screen');
        
        let activeOptionsSelector = '';
        if (studyScreen && studyScreen.classList.contains('active')) {
            if (e.key === 'ArrowRight') { e.preventDefault(); document.getElementById('study-next')?.click(); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); document.getElementById('study-prev')?.click(); }
            activeOptionsSelector = '.study-options .study-opt';
        } else if (examScreen && examScreen.classList.contains('active')) {
            if (e.key === 'ArrowRight') { e.preventDefault(); document.getElementById('exam-next-btn')?.click(); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); document.getElementById('exam-prev-btn')?.click(); }
            activeOptionsSelector = '#exam-options .study-opt';
        } else if (survivalScreen && survivalScreen.classList.contains('active')) {
            activeOptionsSelector = '#survival-options .study-opt';
        }
        
        if (activeOptionsSelector) {
            const options = Array.from(document.querySelectorAll(activeOptionsSelector));
            if (options.length > 0) {
                // 1, 2, 3, 4 or a, b, c, d selection
                if ((e.key === '1' || e.key === 'a' || e.key === 'A') && options[0]) options[0].click();
                if ((e.key === '2' || e.key === 'b' || e.key === 'B') && options[1]) options[1].click();
                if ((e.key === '3' || e.key === 'c' || e.key === 'C') && options[2]) options[2].click();
                if ((e.key === '4' || e.key === 'd' || e.key === 'D') && options[3]) options[3].click();
                
                // Up/Down selection
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') {
                    e.preventDefault();
                    let currentIndex = options.findIndex(opt => opt.classList.contains('focused-opt'));
                    
                    if (e.key === 'ArrowDown') {
                        if (currentIndex < options.length - 1) currentIndex++;
                        else currentIndex = 0;
                    } else if (e.key === 'ArrowUp') {
                        if (currentIndex > 0) currentIndex--;
                        else currentIndex = options.length - 1;
                    } else if (e.key === 'Enter') {
                        if (currentIndex !== -1) {
                            options[currentIndex].click();
                        }
                        return;
                    }
                    
                    options.forEach(o => o.classList.remove('focused-opt'));
                    if (currentIndex !== -1) {
                        options[currentIndex].classList.add('focused-opt');
                        options[currentIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                    } else if (e.key !== 'Enter') {
                        options[0].classList.add('focused-opt');
                        options[0].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                    }
                }
            }
        }
        

    });



    // --- POMODORO TIMER LOGIC ---
    let pomoInterval;
    let pomoTime = 25 * 60;
    let pomoRunning = false;
    const pomoDisplay = document.getElementById('pomodoro-time');
    const pomoStartBtn = document.getElementById('pomo-start');
    
    function updatePomoDisplay() {
        const m = Math.floor(pomoTime / 60).toString().padStart(2, '0');
        const s = (pomoTime % 60).toString().padStart(2, '0');
        if (pomoDisplay) pomoDisplay.textContent = `${m}:${s}`;
    }
    
    document.getElementById('pomo-start')?.addEventListener('click', () => {
        if (pomoRunning) {
            clearInterval(pomoInterval);
            pomoRunning = false;
            pomoStartBtn.textContent = 'Start';
        } else {
            pomoRunning = true;
            pomoStartBtn.textContent = 'Pause';
            pomoInterval = setInterval(() => {
                if (pomoTime > 0) {
                    pomoTime--;
                    updatePomoDisplay();
                    if (pomoTime <= 10 && pomoTime > 0) audioEngine.playTick();
                } else {
                    clearInterval(pomoInterval);
                    pomoRunning = false;
                    pomoStartBtn.textContent = 'Start';
                    audioEngine.playAlarm();
                    speakText("Pomodoro session complete! Take a break."); // Voice alert!
                    customAlert("Pomodoro session complete! Take a break.");
                    pomoTime = 5 * 60;
                    updatePomoDisplay();
                }
            }, 1000);
        }
    });
    
    document.getElementById('pomo-reset')?.addEventListener('click', () => {
        clearInterval(pomoInterval);
        pomoRunning = false;
        pomoTime = 25 * 60;
        pomoStartBtn.textContent = 'Start';
        updatePomoDisplay();
    });

    // --- PREMIUM FEATURES LOGIC ---
    
    // Dashboard updates
    document.getElementById('dashboard-btn')?.addEventListener('click', () => {
        switchScreen('dashboard');
        
        const quotes = [
            "Engineering is the closest thing to magic that exists in the world.",
            "Success is the sum of small efforts, repeated day in and day out.",
            "Strive for progress, not perfection.",
            "The expert in anything was once a beginner.",
            "There is no elevator to success. You have to take the stairs.",
            "Hard work beats talent when talent doesn't work hard.",
            "It always seems impossible until it is done.",
            "Don't stop when you're tired. Stop when you're done."
        ];
        const quoteEl = document.getElementById('dash-quote');
        if (quoteEl) quoteEl.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
        
        let xp = (labTotalQ * 10) + (labCorrectQ * 5) + (labFcReviewedCount * 2) + (maxSurvivalCombo * 50) + (labReviewMistakesCount * 15);
        let level = Math.floor(xp / 500) + 1;
        let currentLevelXp = xp % 500;
        
        let rankData = { title: "Fresh Engineer", icon: "🥉", color: "#cd7f32" };
        if (level >= 5) rankData = { title: "Junior Developer", icon: "🥈", color: "#c0c0c0" };
        if (level >= 10) rankData = { title: "Senior Engineer", icon: "🥇", color: "#ffd700" };
        if (level >= 20) rankData = { title: "Tech Lead", icon: "💎", color: "#00ffff" };
        if (level >= 30) rankData = { title: "Principal Architect", icon: "🔮", color: "#ff00ff" };
        if (level >= 50) rankData = { title: "Engineering Legend", icon: "👑", color: "#ff4500" };

        document.getElementById('dash-rank').innerHTML = `<span style="display:inline-flex; align-items:center; gap:5px; padding: 2px 10px; border-radius: 20px; background: ${rankData.color}22; border: 1px solid ${rankData.color}; color: ${rankData.color}; box-shadow: 0 0 10px ${rankData.color}44;">${rankData.icon} ${rankData.title}</span>`;
        document.getElementById('dash-xp').textContent = currentLevelXp;
        document.getElementById('dash-xp-bar').style.width = `${(currentLevelXp / 500) * 100}%`;

        document.getElementById('dash-total-q').textContent = labTotalQ;
        const accuracy = labTotalQ === 0 ? 0 : Math.round((labCorrectQ / labTotalQ) * 100);
        document.getElementById('dash-accuracy').textContent = accuracy + '%';
        document.getElementById('dash-mistakes').textContent = labMistakes.length;
        renderAchievements();
    });

    document.getElementById('dash-reset-btn')?.addEventListener('click', async () => {
        if (await customConfirm("Are you sure you want to completely reset your Dashboard stats and achievements?")) {
            labTotalQ = 0;
            labCorrectQ = 0;
            labMistakes = [];
            labAchievements = [];
            labFcReviewedCount = 0;
            labReviewMistakesCount = 0;
            maxSurvivalCombo = 0;
            labCurrentLevel = 1;
            saveStats();
            localStorage.setItem('labAchievements', JSON.stringify([]));
            document.getElementById('dashboard-btn').click(); // refresh dashboard
            customAlert("Stats successfully reset!");
        }
    });

    // Theme Toggle
    const themeBtn = document.getElementById('theme-btn');
    const themes = ['dark', 'ocean-blue', 'forest-emerald', 'sunset-amber', 'amethyst-violet'];
    let currentTheme = localStorage.getItem('labTheme') || 'dark';
    if (!themes.includes(currentTheme)) currentTheme = 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    
    themeBtn?.addEventListener('click', () => {
        let idx = themes.indexOf(currentTheme);
        currentTheme = themes[(idx + 1) % themes.length];
        document.body.setAttribute('data-theme', currentTheme);
        localStorage.setItem('labTheme', currentTheme);
    });



    // Achievements System
    
    function checkAchievements() {
        const newlyUnlocked = [];
        if (!labAchievements.includes('firstblood') && labCorrectQ >= 1) newlyUnlocked.push('firstblood');
        if (!labAchievements.includes('century') && labTotalQ >= 100) newlyUnlocked.push('century');
        if (!labAchievements.includes('completionist') && labCorrectQ >= 339) newlyUnlocked.push('completionist');
        if (!labAchievements.includes('sharpshooter') && labTotalQ >= 100 && (labCorrectQ / labTotalQ) >= 0.9) newlyUnlocked.push('sharpshooter');
        if (!labAchievements.includes('perfect') && typeof examScore !== 'undefined' && typeof examQuestions !== 'undefined' && examScore === examQuestions.length && examQuestions.length > 0) newlyUnlocked.push('perfect');
        const hour = new Date().getHours();
        if (!labAchievements.includes('nightowl') && (hour >= 23 || hour <= 4)) newlyUnlocked.push('nightowl');
        if (!labAchievements.includes('earlybird') && (hour >= 5 && hour <= 9)) newlyUnlocked.push('earlybird');
        if (!labAchievements.includes('combomaster') && maxSurvivalCombo >= 10) newlyUnlocked.push('combomaster');
        if (!labAchievements.includes('survivorgod') && maxSurvivalCombo >= 20) newlyUnlocked.push('survivorgod');
        if (!labAchievements.includes('unbreakable') && typeof survivalScore !== 'undefined' && survivalScore >= 10000) newlyUnlocked.push('unbreakable');

        if (!labAchievements.includes('comebackkid') && labReviewMistakesCount >= 10) newlyUnlocked.push('comebackkid');
        if (!labAchievements.includes('flawless') && labMistakes.length === 0 && labTotalQ >= 50) newlyUnlocked.push('flawless');
        if (!labAchievements.includes('explorer') && activeQuestions.length >= rawQuestions.length && rawQuestions.length > 0) newlyUnlocked.push('explorer');
        
        newlyUnlocked.forEach(id => {
            labAchievements.push(id);
            const badge = allBadgesList?.find(b => b.id === id) || { title: 'Achievement Unlocked', icon: '🏆' };
            showToast(`Unlocked: ${badge.title}`, badge.icon);
        });
        localStorage.setItem('labAchievements', JSON.stringify(labAchievements));
    }

    const allBadgesList = [
        { id: 'firstblood', icon: '🩸', title: 'First Blood', desc: 'Answered your first question correctly' },
        { id: 'century', icon: '💯', title: 'Century Club', desc: 'Answered 100+ questions' },
        { id: 'completionist', icon: '🌌', title: 'Completionist', desc: 'Mastered 339+ correct answers' },
        { id: 'sharpshooter', icon: '🏹', title: 'Sharpshooter', desc: 'Maintained 90%+ accuracy over 100 Qs' },
        { id: 'perfect', icon: '🎯', title: 'The Perfectionist', desc: 'Scored 100% on an exam' },
        { id: 'combomaster', icon: '🔥', title: 'Combo Master', desc: 'Reached a 10x Combo in Survival' },
        { id: 'survivorgod', icon: '⚡', title: 'Survival God', desc: 'Reached a 20x Combo in Survival' },
        { id: 'unbreakable', icon: '🛡️', title: 'Unbreakable', desc: 'Reached 10,000+ Score in Survival' },

        { id: 'comebackkid', icon: '🔄', title: 'Comeback Kid', desc: 'Fixed 10 mistakes in Review Mode' },
        { id: 'flawless', icon: '✨', title: 'Flawless Mind', desc: 'Cleared all mistakes after 50+ Qs' },
        { id: 'explorer', icon: '🧭', title: 'The Explorer', desc: 'Selected all categories at once' },
        { id: 'nightowl', icon: '🦉', title: 'Night Owl', desc: 'Studied past midnight' },
        { id: 'earlybird', icon: '🌅', title: 'Early Bird', desc: 'Studied between 5 AM and 9 AM' }
    ];

    function renderAchievements() {
        const container = document.getElementById('achievements-container');
        if (!container) return;
        
        container.innerHTML = allBadgesList.map(b => {
            const unlocked = labAchievements.includes(b.id);
            return `
                <div style="background: ${unlocked ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0,0,0,0.3)'}; border: 1px solid ${unlocked ? '#10b981' : 'var(--glass-border)'}; border-radius: 8px; padding: 10px; width: 150px; text-align: center; opacity: ${unlocked ? '1' : '0.5'};">
                    <div style="font-size: 2rem;">${b.icon}</div>
                    <strong style="display: block; margin: 5px 0; font-size: 0.9rem;">${b.title}</strong>
                    <span style="font-size: 0.7rem; color: var(--text-secondary);">${b.desc}</span>
                </div>
            `;
        }).join('');
    }

    // --- ARCADE SURVIVAL MODE ---

    function startSurvivalMode() {
        survivalScore = 0;
        survivalCombo = 1;
        survivalTime = 30;
        survivalQuestions = [...activeQuestions];
        shuffle(survivalQuestions);
        document.getElementById('survival-score').textContent = 'Score: 0';
        document.getElementById('survival-combo').textContent = 'Combo: x1';
        document.getElementById('survival-timer').classList.remove('pulse-danger');
        
        clearInterval(survivalInterval);
        survivalInterval = setInterval(() => {
            survivalTime--;
            const tEl = document.getElementById('survival-timer');
            tEl.textContent = survivalTime;
            
            if (survivalTime <= 5 && survivalTime > 0) {
                tEl.classList.add('pulse-danger');
            } else {
                tEl.classList.remove('pulse-danger');
            }
            
            if (survivalTime <= 0) {
                tEl.textContent = '0';
                endSurvivalMode();
            }
        }, 1000);
        
        renderSurvivalQuestion();
    }

    function renderSurvivalQuestion() {
        if (survivalQuestions.length === 0) {
            survivalQuestions = [...activeQuestions];
            shuffle(survivalQuestions);
        }
        
        const q = survivalQuestions.pop();
        const qContainer = document.getElementById('survival-question-container');
        const qTextEl = document.getElementById('survival-q-text');
        
        qTextEl.innerHTML = q.text || "<em>Error: Question text missing. Please check console.</em>";
        console.log("Survival Question loaded:", q);
        
        const optsContainer = document.getElementById('survival-options');
        optsContainer.innerHTML = '';
        
        let opts = [...q.options];
        shuffle(opts);
        
        opts.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'study-opt';
            btn.innerHTML = `<span class="opt-text">${opt}</span>`;
            
            btn.addEventListener('click', () => {
                if (opt === q.answer) {
                    btn.classList.add('correct');
                    audioEngine.playDing();
                    survivalScore += 100 * survivalCombo;
                    survivalCombo++;
                    maxSurvivalCombo = Math.max(maxSurvivalCombo, survivalCombo);
                    survivalTime += 5; // +5 seconds
                    labTotalQ++;
                    labCorrectQ++;
                    saveStats();
                    
                    document.getElementById('survival-score').textContent = `Score: ${survivalScore}`;
                    document.getElementById('survival-combo').textContent = `Combo: x${survivalCombo}`;
                    
                    qContainer.style.borderColor = '#10b981';
                    qContainer.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        qContainer.style.borderColor = 'rgba(244, 63, 94, 0.3)';
                        qContainer.style.transform = 'none';
                        renderSurvivalQuestion();
                    }, 400);
                } else {
                    btn.classList.add('incorrect');
                    audioEngine.playBuzz();
                    survivalCombo = 1;
                    survivalTime -= 10; // -10 seconds
                    
                    labTotalQ++;
                    if (!labMistakes.includes(q.text)) {
                        labMistakes.push(q.text);
                    }
                    saveStats();
                    
                    qContainer.style.borderColor = '#f43f5e';
                    qContainer.classList.add('shake');
                    setTimeout(() => {
                        qContainer.style.borderColor = 'rgba(244, 63, 94, 0.3)';
                        qContainer.classList.remove('shake');
                        renderSurvivalQuestion();
                    }, 400);
                }
            });
            optsContainer.appendChild(btn);
        });
    }
    function endSurvivalMode() {
        clearInterval(survivalInterval);
        audioEngine.playAlarm();
        customAlert(`Time's up! You survived and scored ${survivalScore} points.`);
        switchScreen('welcome');
        modeRadios.forEach(r => r.checked = false);
    }
    
    // --- QURAN AUDIO ---
    const reciters = [
        { name: "ياسر الدوسري", url: "https://server11.mp3quran.net/yasser/" },
        { name: "مشاري العفاسي", url: "https://server8.mp3quran.net/afs/" },
        { name: "عبد الباسط عبد الصمد", url: "https://server7.mp3quran.net/basit/" },
        { name: "ماهر المعيقلي", url: "https://server12.mp3quran.net/maher/" },
        { name: "محمود خليل الحصري", url: "https://server13.mp3quran.net/husr/" },
        { name: "محمد صديق المنشاوي", url: "https://server10.mp3quran.net/minsh/" }
    ];

    const surahNames = [
        "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
        "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
        "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
        "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
        "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
        "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
        "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
        "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
        "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
        "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
        "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
        "المسد", "الإخلاص", "الفلق", "الناس"
    ];

    let currentSurahIndex = -1; // No default Surah
    let currentReciterIndex = 0; // Default: Yasser Al-Dosari
    let quranAudio = new Audio();
    let focusPlaying = false;

    function getSurahUrl(index) {
        const num = (index + 1).toString().padStart(3, '0');
        return `${reciters[currentReciterIndex].url}${num}.mp3`;
    }

    quranAudio.addEventListener('ended', () => {
        if (currentSurahIndex === -1) return;
        currentSurahIndex++;
        if (currentSurahIndex >= 114) currentSurahIndex = 0;
        quranAudio.src = getSurahUrl(currentSurahIndex);
        quranAudio.play().catch(e => console.error(e));
        document.getElementById('focus-audio-btn').innerHTML = `⏸️ ${surahNames[currentSurahIndex]}`;
    });

    function toggleFocusAudio() {
        if (currentSurahIndex === -1) {
            document.getElementById('quran-menu-btn')?.click();
            return;
        }

        if (focusPlaying) {
            quranAudio.pause();
            focusPlaying = false;
            document.getElementById('focus-audio-btn').innerHTML = `📻 ${surahNames[currentSurahIndex]}`;
            document.getElementById('focus-audio-btn').style.background = 'var(--glass-bg)';
        } else {
            quranAudio.play().catch(e => console.error("Audio play failed:", e));
            focusPlaying = true;
            document.getElementById('focus-audio-btn').innerHTML = `⏸️ ${surahNames[currentSurahIndex]}`;
            document.getElementById('focus-audio-btn').style.background = 'var(--accent-cyan)';
        }
    }

    document.getElementById('focus-audio-btn')?.addEventListener('click', toggleFocusAudio);

    window.changeReciter = function(idx) {
        currentReciterIndex = parseInt(idx);
        if (currentSurahIndex !== -1) {
            const wasPlaying = focusPlaying;
            const currentTime = quranAudio.currentTime; // optional: could try to keep time, but audio streams are different. Best to just restart surah.
            quranAudio.src = getSurahUrl(currentSurahIndex);
            if (wasPlaying) {
                quranAudio.play().catch(e => console.error(e));
            }
        }
    };

    window.selectSurah = function(index) {
        currentSurahIndex = index;
        quranAudio.src = getSurahUrl(currentSurahIndex);
        quranAudio.play().catch(e => console.error(e));
        focusPlaying = true;
        document.getElementById('focus-audio-btn').innerHTML = `⏸️ ${surahNames[currentSurahIndex]}`;
        document.getElementById('focus-audio-btn').style.background = 'var(--accent-cyan)';
        
        const closeBtn = document.querySelector('#sys-modal-btns button');
        if (closeBtn) {
            closeBtn.click();
        } else {
            document.getElementById('sys-modal').style.display = 'none';
        }
    };

    document.getElementById('quran-menu-btn')?.addEventListener('click', () => {
        audioEngine.playTick();
        let html = `
        <div style="margin-bottom: 15px; text-align: right; direction: rtl;">
            <label style="color: var(--text-secondary); margin-bottom: 5px; display: block; font-family: 'Cairo', sans-serif;">اختر القارئ:</label>
            <select onchange="changeReciter(this.value)" style="width: 100%; padding: 10px; border-radius: 8px; background: rgba(0,0,0,0.5); border: 1px solid var(--glass-border); color: var(--text-primary); font-family: 'Cairo', sans-serif; font-size: 1rem; outline: none; cursor: pointer;">`;
        
        reciters.forEach((r, idx) => {
            html += `<option value="${idx}" ${idx === currentReciterIndex ? 'selected' : ''} style="background: var(--card-bg); color: var(--text-primary);">${r.name}</option>`;
        });
        
        html += `</select></div>
        <div style="max-height: 50vh; overflow-y: auto; text-align: right; display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; padding: 10px; direction: rtl;">`;
        
        surahNames.forEach((name, i) => {
            const numStr = (i + 1).toString();
            const isActive = i === currentSurahIndex ? 'background: rgba(0, 255, 204, 0.2); border-color: var(--accent-cyan); color: #fff;' : 'background: rgba(255,255,255,0.05); border-color: var(--glass-border);';
            html += `<button onclick="selectSurah(${i})" style="padding: 10px; border: 1px solid; border-radius: 8px; cursor: pointer; text-align: center; font-family: 'Cairo', sans-serif; font-weight: 600; font-size: 1rem; color: var(--text-primary); transition: 0.2s; ${isActive}" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='${i === currentSurahIndex ? 'rgba(0, 255, 204, 0.2)' : 'rgba(255,255,255,0.05)'}'">${numStr}. ${name}</button>`;
        });
        html += '</div>';

        const modalContent = document.getElementById('sys-modal-content');
        const originalMaxWidth = modalContent.style.maxWidth;
        const originalWidth = modalContent.style.width;
        
        modalContent.style.maxWidth = '800px';
        modalContent.style.width = '90%';

        openSysModal('📖 القرآن الكريم', html, [{ text: 'إغلاق', value: true }]).then(() => {
            modalContent.style.maxWidth = originalMaxWidth;
            modalContent.style.width = originalWidth;
        });
    });

});
