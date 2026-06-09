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
        label.className = 'filter-label';
        label.innerHTML = `<input type="checkbox" value="${cat}" class="cat-checkbox" checked> ${cat}`;
        categoryFilters.appendChild(label);
    });

    const checkboxes = document.querySelectorAll('.cat-checkbox');
    const selectAllBtn = document.getElementById('select-all-btn');

    function updateToggleState() {
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        selectAllBtn.textContent = allChecked ? 'Deselect All' : 'Select All';
    }

    checkboxes.forEach(cb => cb.addEventListener('change', updateToggleState));

    selectAllBtn.addEventListener('click', () => {
        const isDeselect = selectAllBtn.textContent === 'Deselect All';
        checkboxes.forEach(cb => cb.checked = !isDeselect);
        updateToggleState();
    });

    // Initialize button state
    updateToggleState();

    // Handle Exam Settings Visibility
    const modeRadios = document.querySelectorAll('input[name="session-mode"]');
    const examConfig = document.getElementById('exam-config');
    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            examConfig.style.display = e.target.value === 'exam' ? 'block' : 'none';
        });
    });

    // 3. Screens & State
    const screens = {
        welcome: document.getElementById('welcome-screen'),
        study: document.getElementById('study-screen'),
        exam: document.getElementById('exam-screen'),
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
    document.getElementById('start-btn').addEventListener('click', () => {
        const selectedCats = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        if (selectedCats.length === 0) {
            alert('Please select at least one category.');
            return;
        }

        activeQuestions = rawQuestions.filter(q => selectedCats.includes(q.category));
        const mode = document.querySelector('input[name="session-mode"]:checked').value;

        if (mode === 'study') {
            initStudyMode();
            switchScreen('study');
        } else {
            initExamMode();
            switchScreen('exam');
        }
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
                    <strong>Explanation:</strong> ${q.explanation}
                </div>
            `;

            // Interaction
            const opts = card.querySelectorAll('.study-opt');
            const exp = card.querySelector('.study-explanation');
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
            studyCurrentPage--;
            renderStudyPage();
            window.scrollTo(0, 0);
        }
    });

    document.getElementById('study-next').addEventListener('click', () => {
        const totalPages = Math.ceil(activeQuestions.length / studyItemsPerPage);
        if (studyCurrentPage < totalPages) {
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
        
        const perc = Math.round((examScore / examQuestions.length) * 100);
        document.getElementById('final-score').textContent = `${perc}%`;
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
});
