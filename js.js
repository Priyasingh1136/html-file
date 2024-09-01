const button = document.getElementById('changeColorButton');
const headline = document.getElementById('headline');
const description = document.getElementById('description');

function changeTextColor() {
    const colors = ['#ff6347', '#4682b4', '#32cd32', '#ff69b4', '#ff4500'];
    const randomColor = colo#ff6347', '#4682b4', '#32cd32', '#ff69b4', '#ff4500rs[Math.floor(Math.random() * colors.length)];
    headline.style.color = randomColor;
    description.style.color = randomColor;
}

button.addEventListener('click', changeTextColor);