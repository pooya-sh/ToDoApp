let myItems = [
    {text: "test", done:false} 
];

$("form").submit(function(e){
    // code to add element in here
    e.preventDefault();
    let fieldValue = $("#field").val();
    myItems.push({text:fieldValue, done:false});
    render(myItems);
    
  });


render(myItems);

$('#list').on('click', '.delete', function(){
    let pos = $(this).closest('li').attr('data-pos'); 
    myItems.splice(pos,1);
    render(myItems);


});


function render (myItems) {
    $("ul").empty();
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