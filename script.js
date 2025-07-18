const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hiddenDiv = document.querySelector('.hidden-div');

menuIcon.addEventListener('click', () => {
    hiddenDiv.style.right = '0';
});

closeIcon.addEventListener('click', () => {
    hiddenDiv.style.right = '-70%';
});