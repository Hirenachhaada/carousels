

let menu1=document.getElementById("menu1");
let ull=document.getElementById("ull");
let menu=document.getElementById("menu");
function check(){
    if(menu.checked==true)
    {
        menu.checked=false
    }
    if(menu.checked==false)
    {
        menu.checked=true;
    }
}

function mm(){
if(menu.checked==true)
{
    console.log("clicked");
    ull.style.display="flex";
}
else{
    ull.style.display="none";
}}


