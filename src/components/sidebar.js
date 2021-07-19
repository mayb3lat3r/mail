const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const searchButton = document.querySelector('.s-icon');

burger.onclick = () => {
    sidebar.classList.toggle('active');
}

searchButton.onclick = () => {
    sidebar.classList.toggle('active');
}