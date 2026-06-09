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
    
    globalStats.textContent = `Total Questions Available: ${rawQuestions.length}`;

    // 2. Extract Categories
    const categories = [...new Set(rawQuestions.map(q => q.category))];
    const categoryFilters = document.getElementById('category-filters');
    
    categories.forEach(cat => {
        const label = document.createElement('label');
        label.className = 'filter-label';
        label.innerHTML = `<input type="checkbox" value="${cat}" class="cat-checkbox" checked> ${cat}`;
        categoryFilters.appendChild(label);
    });

    const checkboxes = document.querySelectorAll('.cat-checkbox');
    document.getElementById('select-all-btn').addEventListener('click', () => {
        checkboxes.forEach(cb => cb.checked = true);
    });

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
        dashboard: document.getElementById('dashboard-screen'),
        study: document.getElementById('study-screen'),
        exam: document.getElementById('exam-screen'),
        results: document.getElementById('results-screen')
    };

    function switchScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');
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
            switchScreen('dashboard');
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
});
