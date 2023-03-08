let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/the_beachcomber.png') {
        myImage.setAttribute('src', 'images/the_door_in_the_eye.png');
    } else {
        myImage.setAttribute('src', 'images/the_beachcomber.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('报上你的名讳 :');//获取用户输入
    if (!myName) setUserName();
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + ', 欢迎来到我们的世界...';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', 欢迎来到我们的世界...';
}
myButton.onclick = function () {
    setUserName();
}
