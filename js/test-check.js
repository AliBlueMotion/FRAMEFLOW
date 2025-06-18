 const questions = [
            {
                question: "1. Что такое 'Keyframe' (Ключевой кадр)?",
                variants: [
                    "a) Кадр, где задается начальное, конечное или промежуточное значение свойства слоя",
                    "b) Кадр с самым важным визуальным элементом",
                    "c) Специальный формат видеофайла",

                ],
                correct: "a",

            },
            {
                question: "2. Что делает функция 'Pre-compose'?",
                variants: [
                    "a) Удаляет выбранные слои из проекта",
                    "b) Группирует выбранные слои в новую, вложенную композицию для удобства работы",
                    "c) Применяет предустановленные эффекты к слоям",

                ],
                correct: "b",

            },
            {
                question: "3. Что такое 'Easing'?",
                variants: [
                    "a) Эффект размытия движения в кадре",
                    "b) Плавное ускорение или замедление анимации между ключевыми кадрами, делающее движение естественным",
                    "c) Инструмент для сглаживания краев маски",

                ],
                correct: "b",

            },
            {
                question: "4. Что такое 'Null Object'?",
                variants: [
                    "a) Слой с ошибкой, который нельзя анимировать",
                    "b) Невидимый вспомогательный слой, используемый для управления другими слоями через 'родительские связи' (Parenting)",
                    "c) Эффект, обнуляющий значения свойств слоя",

                ],
                correct: "b",

            },
            {
                question: "5. Что такое 'Shape Layer'?",
                variants: [
                    "a) Векторный слой, создаваемый инструментами AE (прямоугольник, эллипс, перо) для анимации без импорта файлов",
                    "b) Слой, содержащий только растровые изображения",
                    "c) Слой, определяющий форму композиции",

                ],
                correct: "a",

            },
            {
                question: "6. Для чего используется эффект 'Track Matte'?",
                variants: [
                    "a) Для автоматического трекинга движения объекта в кадре",
                    "b) Чтобы использовать прозрачность или яркость одного слоя (маска) для управления видимостью другого слоя",
                    "c) Для коррекции трекинга камеры",

                ],
                correct: "b",

            },
            {
                question: "7. Для чего в первую очередь используется инструмент 'Pen Tool'?",
                variants: [
                    "a) Для рисования грубых набросков",
                    "b) Для создания и редактирования масок и векторных фигур (Shape Layers)",
                    "c) Для коррекции цвета слоя",

                ],
                correct: "b",

            },
            {
                question: "8. Что такое 'Composition' (Композиция) в After Effects?",
                variants: [
                    "a) Музыкальное сопровождение ролика",
                    "b) Настройки цветокоррекции проекта",
                    "c) Основной рабочий контейнер, где создается анимация и размещаются слои",

                ],
                correct: "c",

            },
            {
                question: "9. Что означает аббревиатура 'FPS'?",
                variants: [
                    "a) Final Project Settings (Настройки финального проекта)",
                    "b) Filter and Preset Selection (Выбор фильтров и пресетов)",
                    "c) Frames Per Second (Количество кадров в секунду)",

                ],
                correct: "c",

            },
            {
                question: "10. Какой формат чаще всего используется для финального рендера видео в интернет?",
                variants: [
                    "a) .AEP",
                    "b) .PSD",
                    "c) .MP4",

                ],
                correct: "c",

            }
        ];

function createQuiz() {
    const quizContainer = document.querySelector('#quiz');
    
    questions.forEach((q, i) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        qDiv.innerHTML = `<p>${q.question}</p>` + 
            q.variants.map((option, i) => `
                <label>
                    <input type="radio" name="q${i}" value="${option.charAt(0)}">
                    ${option}
                </label>
            `).join('');
        quizContainer.appendChild(qDiv);

    });

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.className = 'btn_res';
    submitButton.textContent = 'Получить результат';
    submitButton.addEventListener('click', getResult);
    quizContainer.appendChild(submitButton);
}

function getResult() {
    let count = 0;
    let resultsHTML = "<h2>Результаты теста:</h2><ol>";

    questions.forEach((q, i) => {
        const chosen = document.querySelector(`input[name="q${i}"]:checked`);
        const isCorrect = chosen && chosen.value === q.correct;
        if (isCorrect) count++;
        resultsHTML += `<li class="${isCorrect ? 'correct' : 'incorrect'}"> ${isCorrect ? 'Верно' : 'Неверно'}</li>`;
    });

    localStorage.setItem('quizResults', JSON.stringify({ count, total: questions.length }));
    resultsHTML += `<h4>Вы набрали: ${count} из ${questions.length}</h4>`;

    const resultContainer = document.querySelector('#result');
    resultContainer.innerHTML = resultsHTML;
    resultContainer.style.display = 'block';
}

createQuiz();