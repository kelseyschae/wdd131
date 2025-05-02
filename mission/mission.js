const themeSelector = document.querySelector('#theme-selector');
const logo = document.querySelector('.logo');

function changeTheme() {
  const current = themeSelector.value;

  if (current === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'byui-logo_white.png';
  } else {
    document.body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp';
  }
}

themeSelector.addEventListener('change', changeTheme);
