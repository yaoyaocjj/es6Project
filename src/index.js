import message from './message';
import './styles/index.scss';

const paragraph = document.createElement('p');
paragraph.innerHTML = message;
document.body.appendChild(paragraph);