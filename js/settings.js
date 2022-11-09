function createNavigationItemElement() {
    const navigationItemElement = document.createElement('li');
    navigationItemElement.classList.add('navigation__list__element');

    const navigationItemLink = document.createElement('a');
    navigationItemLink.classList.add('navigation__link');
    const isInSubpage = window.location.pathname.startsWith('/philosophers/');
    navigationItemLink.href = isInSubpage ? '../settings.html' : './settings.html';
    navigationItemLink.textContent = "Ustawienia strony";

    navigationItemElement.appendChild(navigationItemLink);

    return navigationItemElement;
}

export function addNavigationItem() {
    const navigationList = document.querySelector('.navigation__list');
    navigationList.lastChild.previousSibling.before(createNavigationItemElement());
}

function darkenColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return `#${RR}${GG}${BB}`;
}

function changeTheme(dark = false) {
    const colorPrimary = dark ? '#000000' : '#ffffff';
    const colorSecondary = dark ? '#ffffff' : '#8f4640';
    const colorTertiary = dark ? '#ffffff' : '#e3262a';
    const colorTertiaryDark = darkenColor(colorTertiary, -50);
    const fontColor = dark ? '#ffffff' : '#000000';


    const root = document.querySelector(':root');
    root.style.setProperty('--color-primary', colorPrimary);
    root.style.setProperty('--color-secondary', colorSecondary);
    root.style.setProperty('--color-tertiary', colorTertiary);
    root.style.setProperty('--color-tertiary-dark', colorTertiaryDark);
    root.style.setProperty('--font-color', fontColor);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

const settingsThemeSelect = document.querySelector('#theme');
const settingsInputs = document.querySelector('.content');
settingsInputs.style.display = 'block';

export function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        changeTheme(true);
    }

    if (settingsThemeSelect) {
        settingsThemeSelect.value = theme;
    }
}

if (settingsThemeSelect) {
    settingsThemeSelect.addEventListener('change', (event) => {
        changeTheme(event.target.value === 'dark');
    });
}
