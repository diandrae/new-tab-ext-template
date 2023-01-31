window.onload = chooseContent;

var contents = new Array("assets/image2.png", "assets/image2.png","assets/image3.png","assets/image4.png");

function chooseContent() {
     var randomNum = Math.floor(Math.random() * contents.length);
     document.getElementById("content").src = contents[randomNum];
}
