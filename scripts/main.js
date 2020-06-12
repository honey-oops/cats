let myHeading = document.querySelector('h1');


// myHeading.textContent = localStorage.getItem('opinion') + " is what in your opinion a cat's faveorite food is! "





// document.querySelector('html').onclick = function(){
//     alert("don't  touch a stray cat! it hurts")
// };


let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute(' src');
    if(mySrc === 'images/download-5.jpg') {
        myImage.setAttribute('src', 'images/cutekitty.jpeg');
    } else {
        myImage.setAttribute('src', 'images/download-5.jpg');
    };

// };

// let myButton = document.querySelector("button");

// myHeading = document.querySelector("h1");


// function setUserName() {
//     let myName = prompt("please input your opinion of a cat's faveorite food");
//     if(myName!==null){
//         myHeading.textContent = myName + " is what in your opinion a cat's favorite food is!";
//         localStorage.setItem('opinion',myName)
//     } else {
//         myHeading.textContent = "do you know what is a cat's faveorite food?";
//     }
 
// }
// myButton.onclick = function() {
//     setUserName();
// }


