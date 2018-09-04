export default function generateNavigation() {
  const fragment = document.createDocumentFragment();
  tabContent.map((item) => {
    const tab = document.createElement("a");
    tab.className = `tab ${item.name}`;
    tab.innerText = item.value;
    tab.href = `#${item.name}`;
    fragment.appendChild(tab);
  });
  document.querySelector('.navigation').appendChild(fragment);
}

const tabContent = [
  {name: 'recruitment-process', value: '校招流程'},
  {name: 'notification', value: '校招公告'},
  {name: 'internal-recommend', value: '内推通道'},
  {name: 'about-us', value: '关于ThoughtWorks'}
];