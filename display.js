let user_input=document.getElementById("userinput");
let u_list=document.getElementById("ulist");

function addList()
{
    let userip=user_input.value.trim();
    if(userip!="")
    {
        let li=document.createElement("li");
        li.innerHTML=userip;
        u_list.appendChild(li);
        let libyt=document.createElement("button");
        libyt.innerHTML="delete";
        li.appendChild(libyt);
    }
}
u_list.addEventListener("click",function(e)
{
    if(e.target.tagName=="BUTTON"){
        e.target.parentElement.remove();
    }
},false);