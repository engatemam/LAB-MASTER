document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Aggregation
    let rawQuestions = [];
    
    if (typeof lec01Data !== 'undefined') rawQuestions.push(...lec01Data);
    if (typeof lec02Data !== 'undefined') rawQuestions.push(...lec02Data);
    if (typeof lec03Data !== 'undefined') rawQuestions.push(...lec03Data);
    if (typeof lec04Data !== 'undefined') rawQuestions.push(...lec04Data);
    if (typeof lec05Data !== 'undefined') rawQuestions.push(...lec05Data);
    if (typeof lec06Data !== 'undefined') rawQuestions.push(...lec06Data);
    if (typeof pastExamsData !== 'undefined') rawQuestions.push(...pastExamsData);

    const globalStats = document.getElementById('global-stats');
    if (rawQuestions.length === 0) {
        globalStats.textContent = "Error: No data loaded. Check JS files.";
        return;
    }
    
    globalStats.textContent = `Total Questions Available: 320`;

    // 2. Extract Categories and Sort
    const categories = [...new Set(rawQuestions.map(q => q.category))];
    
    categories.sort((a, b) => {
        const aIsPast = a.toLowerCase().includes('past');
        const bIsPast = b.toLowerCase().includes('past');
        if (aIsPast && !bIsPast) return 1;
        if (!aIsPast && bIsPast) return -1;
        return a.localeCompare(b);
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
    function updateActiveQuestions() {
        const selectedCats = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        activeQuestions = rawQuestions.filter(q => selectedCats.includes(q.category));
        
        if (screens && screens.study && screens.study.classList.contains('active')) {
            studyCurrentPage = 1;
            renderStudyPage();
        } else if (screens && screens.flashcard && screens.flashcard.classList.contains('active')) {
            fcCurrentIndex = 0;
            renderFlashcard();
        }
    }

    checkboxes.forEach(cb => cb.addEventListener('change', () => {
        updateToggleState();
        updateActiveQuestions();
    }));

    selectAllBtn.addEventListener('click', () => {
        const isDeselect = selectAllBtn.textContent === 'Deselect All';
        checkboxes.forEach(cb => cb.checked = !isDeselect);
        updateToggleState();
        updateActiveQuestions();
    });

    // Initialize button state
    updateToggleState();

    // Handle Exam Settings Visibility & Auto-start Modes
    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
            if (!anyChecked) {
                e.preventDefault();
                alert('⚠️ Please select at least one Category from the list first to unlock the modes!');
            }
        });
    });

    const modeRadios = document.querySelectorAll('input[name="mode"]');
    
    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const mode = e.target.value;
            const selectedCats = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
            
            if (selectedCats.length === 0) {
                e.target.checked = false;
                return;
            }
            
            updateActiveQuestions();
            if (mode === 'study') {
                switchScreen('study');
                studyCurrentPage = 1;
                renderStudyPage();
            } else if (mode === 'flashcard') {
                switchScreen('flashcard');
                fcCurrentIndex = 0;
                renderFlashcard();
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
        flashcard: document.getElementById('flashcard-screen'),
        results: document.getElementById('results-screen'),
        notes: document.getElementById('notes-content-screen')
    };

    function switchScreen(screenName) {
        Object.values(screens).forEach(s => {
            if (s) s.classList.remove('active');
        });
        if (screens[screenName]) screens[screenName].classList.add('active');
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
        const selectedCats = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        if (selectedCats.length === 0) {
            alert('Please select at least one category to start the exam.');
            return;
        }

        activeQuestions = rawQuestions.filter(q => selectedCats.includes(q.category));

        if (activeQuestions.length === 0) {
            alert("No questions found for the selected categories.");
            return;
        }

        switchScreen('exam');
        initExamMode();
    });

    // Utilities
    document.querySelectorAll('.exit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if(timerInterval) clearInterval(timerInterval);
            switchScreen('welcome');
        });
    });

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // --- TEXT TO SPEECH (TTS) ---
    function speakText(text) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            // Remove HTML tags for clean reading
            const cleanText = text.replace(/<[^>]+>/g, '');
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }
    
    function stopSpeaking() {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }

    // --- STUDY MODE LOGIC ---
    let studyCurrentPage = 1;
    const studyItemsPerPage = 5;
    const studyGrid = document.getElementById('study-grid');
    const studyPageInfo = document.getElementById('study-page-info');

    function initStudyMode() {
        studyCurrentPage = 1;
        renderStudyPage();
    }

    function renderStudyPage() {
        studyGrid.innerHTML = '';
        const totalPages = Math.ceil(activeQuestions.length / studyItemsPerPage);
        studyPageInfo.textContent = `Page ${studyCurrentPage} of ${totalPages}`;

        const start = (studyCurrentPage - 1) * studyItemsPerPage;
        const end = start + studyItemsPerPage;
        const pageQuestions = activeQuestions.slice(start, end);

        pageQuestions.forEach(q => {
            const card = document.createElement('div');
            card.className = 'study-card';
            
            let optionsHtml = '';
            q.options.forEach(opt => {
                optionsHtml += `<div class="study-opt" data-opt="${opt.replace(/"/g, '&quot;')}">${opt}</div>`;
            });

            card.innerHTML = `
                <span class="category-badge">${q.category}</span>
                <div class="study-question">${q.question}</div>
                <div class="study-options">${optionsHtml}</div>
                <div class="study-explanation">
                    <strong>Correct Answer:</strong> ${q.answer}<br>
                    <strong>Explanation:</strong> ${q.explanation}<br><br>
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
                    } else {
                        optDiv.classList.add('incorrect');
                        // highlight correct one
                        opts.forEach(o => {
                            if(o.getAttribute('data-opt') === q.answer) o.classList.add('correct');
                        });
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

    // --- FLASHCARD MODE LOGIC ---
    let fcCurrentIndex = 0;
    
    function renderFlashcard() {
        if (activeQuestions.length === 0) return;
        
        const q = activeQuestions[fcCurrentIndex];
        document.getElementById('fc-current').textContent = fcCurrentIndex + 1;
        document.getElementById('fc-total').textContent = activeQuestions.length;
        
        const front = document.getElementById('fc-front');
        const back = document.getElementById('fc-back');
        const card = document.getElementById('flashcard');
        
        card.classList.remove('flipped');
        
        front.innerHTML = `<h3 style="font-size: 1.4rem; text-align: center; line-height: 1.5;">${q.question}</h3>
                           <p style="margin-top: 30px; color: var(--text-secondary);"><i class="fas fa-hand-pointer"></i> Click to flip</p>`;
                           
        back.innerHTML = `<h3>Correct Answer:</h3>
                          <p style="font-size: 1.1rem; margin-bottom: 20px; color: #fff;">${q.answer}</p>
                          <h4 style="color: var(--text-secondary); margin-bottom: 5px;">Explanation:</h4>
                          <p style="font-size: 0.95rem; line-height: 1.6;">${q.explanation}</p>
                          <button class="tts-btn btn-small" style="background: var(--accent-cyan); color: white; margin-top: 20px;">🔊 Read Aloud</button>`;
                          
        back.querySelector('.tts-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            speakText(q.explanation);
        });
    }
    
    document.getElementById('flashcard')?.addEventListener('click', () => {
        document.getElementById('flashcard').classList.toggle('flipped');
    });
    
    document.getElementById('fc-flip-btn')?.addEventListener('click', () => {
        document.getElementById('flashcard').classList.toggle('flipped');
    });
    
    document.getElementById('fc-next')?.addEventListener('click', () => {
        if (fcCurrentIndex < activeQuestions.length - 1) {
            stopSpeaking();
            fcCurrentIndex++;
            renderFlashcard();
        }
    });
    
    document.getElementById('fc-prev')?.addEventListener('click', () => {
        if (fcCurrentIndex > 0) {
            stopSpeaking();
            fcCurrentIndex--;
            renderFlashcard();
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
        selectedAnswer = null;
        examCurrentQEl.textContent = examCurrentIndex + 1;
        const q = examQuestions[examCurrentIndex];
        
        examCatBadge.textContent = q.category;
        examQText.textContent = q.question;
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
            alert('Please select an answer!');
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

    document.querySelector('.finish-early-btn').addEventListener('click', () => {
        if(confirm('Are you sure you want to finish early?')) {
            finishExam();
        }
    });

    function finishExam() {
        clearInterval(timerInterval);
        switchScreen('results');
        
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
                <h4>${item.q.question}</h4>
                <p>Your answer: <span style="text-decoration:line-through;">${item.selectedAnswer}</span></p>
                <p class="review-correct-ans">Correct answer: ${item.q.answer}</p>
                <p class="review-exp">${item.q.explanation}</p>
            `;
            reviewList.appendChild(div);
        });
    }

    // --- TOP NAVIGATION TABS LOGIC ---
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
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
            default: return null;
        }
    };

    lectureItems.forEach(item => {
        item.addEventListener('click', () => {
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
                
                let html = `<h3>${section.title}</h3>`;
                
                // 1. Concept Overview (Arabic/Bilingual)
                if (section.conceptOverview) {
                    html += `<div class="note-content arabic-text">${section.conceptOverview}</div>`;
                }

                // Fallback for old schema
                if (section.content && !section.conceptOverview) {
                    html += `<div class="note-content arabic-text">${section.content}</div>`;
                }

                // 2. Technical Deep Dive (English accordion)
                if (section.technicalDeepDive) {
                    html += `<details>
                                <summary>Technical Deep Dive</summary>
                                <div class="note-content" style="margin-top:10px;">${section.technicalDeepDive}</div>
                             </details>`;
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
        const flashcardScreen = document.getElementById('flashcard-screen'); // for future feature
        
        if (studyScreen.classList.contains('active')) {
            if (e.key === 'ArrowRight') { e.preventDefault(); document.getElementById('next-btn')?.click(); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); document.getElementById('prev-btn')?.click(); }
            
            const options = document.querySelectorAll('#study-options .study-opt');
            if ((e.key === '1' || e.key === 'a' || e.key === 'A') && options[0]) options[0].click();
            if ((e.key === '2' || e.key === 'b' || e.key === 'B') && options[1]) options[1].click();
            if ((e.key === '3' || e.key === 'c' || e.key === 'C') && options[2]) options[2].click();
            if ((e.key === '4' || e.key === 'd' || e.key === 'D') && options[3]) options[3].click();
        }
        
        if (examScreen && examScreen.classList.contains('active')) {
            if (e.key === 'ArrowRight') { e.preventDefault(); document.getElementById('exam-next-btn')?.click(); }
            
            const options = document.querySelectorAll('#exam-options .study-opt');
            if ((e.key === '1' || e.key === 'a' || e.key === 'A') && options[0]) options[0].click();
            if ((e.key === '2' || e.key === 'b' || e.key === 'B') && options[1]) options[1].click();
            if ((e.key === '3' || e.key === 'c' || e.key === 'C') && options[2]) options[2].click();
            if ((e.key === '4' || e.key === 'd' || e.key === 'D') && options[3]) options[3].click();
        }
        
        if (flashcardScreen && flashcardScreen.classList.contains('active')) {
            if (e.key === 'ArrowRight') { e.preventDefault(); document.getElementById('fc-next')?.click(); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); document.getElementById('fc-prev')?.click(); }
            if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); document.getElementById('fc-flip-btn')?.click(); }
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
                } else {
                    clearInterval(pomoInterval);
                    pomoRunning = false;
                    pomoStartBtn.textContent = 'Start';
                    speakText("Pomodoro session complete! Take a break."); // Voice alert!
                    alert("Pomodoro session complete! Take a break.");
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



});
