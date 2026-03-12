let txt = document.getElementById("txt");
let btn = document.getElementById("btn");
let text = document.getElementById("text");
let editor = document.getElementById("editor");
let card = document.getElementById("card");

btn.addEventListener("click", function() {
    let message = txt.value;

    if(message.trim() === ""){
        alert("Please write something!");
        return;
    }

    text.innerText = message;

    editor.style.display = "none";
    card.style.display = "block";
});

let dwn = document.getElementById("dwn");

dwn.addEventListener("click", function(){
    let element = document.querySelector(".card-container");
    dwn.style.display = "none";

    html2canvas(element).then(canvas => {
        let link = document.createElement("a");
        link.download = "my-card.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});