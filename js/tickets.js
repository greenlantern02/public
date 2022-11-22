

const callButton = document.querySelector('.popup-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.close-button');


popupToggle = () => {
    popup.classList.toggle('popup_opened');
}



callButton.addEventListener('click', popupToggle);

closeButton.addEventListener('click', popupToggle);



closeOnBlack = (event) => {
    if (event.target === event.currentTarget) popupToggle();
}
popup.addEventListener('click', closeOnBlack);



// if scroll, then close the popup



// when page is loaded, call the button to open the popup
window.addEventListener('load', popupToggle);



// for the firts 5 seconds when loaded, listen to the scroll
// setTimeout(() => {
//     window.addEventListener('load', popupToggle);
//     window.addEventListener('scroll', popupToggle);
// }
//     , 5000);