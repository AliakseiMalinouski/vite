import blueScreen from './assets/blue_screen.jpg';
import './styles/index.css';
import './styles/pre-index.scss';

const buttonForm = document.getElementById('button_redirect_form');

document.addEventListener('DOMContentLoaded', () => {
    const img = document.createElement('img')

    img.src = blueScreen;

    img.width = '240';
    img.height = '240';

    document.getElementById('app').appendChild(img);
})

buttonForm.addEventListener('click', () => {
    window.location.assign('pages/form.html');
});
