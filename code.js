let myItems = [
    {text: "test", done:false} 
];

render(myItems);

function render (myItems) {
    for(let i = 0; i < myItems.length; i++) {
        let itemHTML = `
  <li data-pos="${i}" class="${myItems[i].done ? 'done' : ''}">
    <span class="toggle">${myItems[i].text}</span>
    <button class="delete">X</button>
  </li>
`;
$("ul").append(itemHTML);
    }
}