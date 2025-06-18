const theme = document.querySelector('.theme');
const btnTheme = document.querySelector('#themeToggle'); 
    
const changeTheme = () => {
    const tempTheme = theme.href;
    if (tempTheme.includes('style-dark.css')) {
            theme.href = 'css/style.css'; 
    } else {
            theme.href = 'css/style-dark.css'; 
    }
        
    localStorage.setItem('theme', theme.href);
    };

btnTheme.addEventListener('click', changeTheme);
const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        theme.href = savedTheme;
    } 
