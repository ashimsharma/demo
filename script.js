let leftButton = document.getElementById("btn1");
let rightButton = document.getElementById("btn2");
let topButton = document.getElementById("btn3");
let bottomButton = document.getElementById("btn4");
let a = document.getElementById('container');
let b = document.getElementById('container1');
let c = document.getElementById('ctrl');

leftButton.addEventListener('click',() => {
    if(a.style.justifyContent === "center" || a.style.justifyContent === "flex-start"){
        if(a.style.justifyContent === "flex-start"){
            alert("Can't Move More.It is already at dead end.👻🛑");
        }
        a.style.justifyContent = "flex-start";
    }
    else{
        a.style.justifyContent = "center";
    }
});

rightButton.addEventListener('click',() => {
    if(a.style.justifyContent === "center" || a.style.justifyContent === "flex-end"){
        if(a.style.justifyContent === "flex-end"){
            alert("Can't Move More.It is already at dead end.👻🛑");
        }
        a.style.justifyContent = "flex-end";
    }
    else{
        a.style.justifyContent = "center";
    }
});

topButton.addEventListener('click',() => {
    if(a.style.alignItems === "center" || a.style.alignItems === "flex-start"){
        if(a.style.alignItems === "flex-start"){
            alert("Can't Move More.It is already at dead end.👻🛑");
        }
        a.style.alignItems = "flex-start";
    }
    else{
        a.style.alignItems = "center";
    }
});

bottomButton.addEventListener('click',() => {
    if(a.style.alignItems === "center" || a.style.alignItems === "flex-end"){
        if(a.style.alignItems === "flex-end"){
            alert("Can't Move More.It is already at dead end.👻🛑");
        }
        a.style.alignItems = "flex-end";
    }
    else{
        a.style.alignItems = "center";
    }
});

// b.addEventListener('mouseover',() => c.hidden = false);
// b.addEventListener('mouseout',() => c.hidden = true);
