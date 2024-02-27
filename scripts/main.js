const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images_pc.jpg") {
    myImage.setAttribute("src", "images/benkyou_gazou.jpg");
  } else {
    myImage.setAttribute("src", "images/images_pc.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}

myButton.onclick = function() {
  setUserName();
};
