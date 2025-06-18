const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle('menu--active');
})

const greetingBtn = document.querySelector('#greetingBtn');
const modal1 = document.querySelector('#modal_1');
const modal2 = document.querySelector('#modal_2');
const saveNameBtn = modal1.querySelector('[data-action="save"]');
const userNameInput = modal1.querySelector('input[type="text"]');
const closeModalBtns = document.querySelectorAll('[data-modal-close]');
    
    // Проверяем сохраненное имя пользователя
    const userName = localStorage.getItem('userName');
    
    function openModal(modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    // обработчик для  приветствия
   if (greetingBtn) {
        greetingBtn.addEventListener('click', function() {
    if (userName) {
        openModal(modal2);
        updateResultsModal(); 
    }
});
    }
    
    // сохран имя
    saveNameBtn.addEventListener('click', function() {
        const name = userNameInput.value.trim();
        if (name) {
            localStorage.setItem('userName', name);
            if (greetingBtn) greetingBtn.textContent = name;
            closeModal(modal1);
            updateResultsModal();
        }
    });

    
    // закратие модалок
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('[data-modal]');
            closeModal(modal);
        });
    });
    
    // закрытие по клику вне модального окна
    [modal1, modal2].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });
    
    // инициализация имени пользователя при загрузке
    if (userName && greetingBtn) {
        greetingBtn.textContent = userName;
    }
    
    // открываем окно приветствия
   setTimeout(() => {
    if (!userName && modal1) {
        openModal(modal1); 
    }
    }, 300);
    
    // функция для обновления модального окна с результатами
function updateResultsModal() {
    if (!modal2) return;

    const storedResults = localStorage.getItem('quizResults');
    let results = {};
    if (storedResults) {
        results = JSON.parse(storedResults);
    }

    const userName = localStorage.getItem('userName') || 'друг';
    const resultText = modal2.querySelector('.yourresult');
    
    if (!resultText) return;
    if (results.count !== undefined) { 
        resultText.innerHTML = `Привет, ${userName}!<br>Твой результат: ${results.count}/${results.total}`;
    } else {
        resultText.innerHTML = `Привет, ${userName}!<br>Ты еще не проходил тест`;
    }
}
