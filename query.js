const y = document.querySelectorAll("ul li");
for(let x=0;x< y.length;++x){
    y[x].innerHTML="<b>Hello World</b>";
    y[x].style.color="blue";
    y[x].style.background_color="green";
}