var input=document.getElementById("user_input");
var list_container=document.getElementById("list-container");
function additem()
{
    var listitem=document.createElement("li");
    listitem.innerHTML=input.value + "<button id='deletebutton' onclick='deleteitem(event)'>X</button>";
    list_container.append(listitem);
}
function deleteitem(event){
    event.target.parentElement.remove();
}