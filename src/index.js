import './styles/index.scss'
import generateNavigation from './components/navigation'

generateNavigation();

const addEvent = () => {
  document.addEventListener('scroll', onScroll);
}

const onScroll = () => {
  let header = document.querySelector("header");
  header.style.position = 'fixed';
  if(document.querySelector('body').clientTop === 0){
    header.style.position = '';
  }
}

addEvent();

