let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/the_beachcomber.png') {
        myImage.setAttribute('src', 'images/the_door_in_the_eye.png');
    } else {
        myImage.setAttribute('src', 'images/the_beachcomber.png');
    }
}
