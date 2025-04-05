// document.querySelector('.header__button').addEventListener('click', function() {
//   document.querySelector('.dropdown__menu').style.display = 'block';
// });

// document.addEventListener('click', function(event) {
//   if (!event.target.closest('.header__button')) {
//       document.querySelector('.dropdown__menu').style.display = 'none';
//   }
// });
const headerButton = document.querySelector('.header__button');
const headerMenu = document.querySelector('.dropdown__menu');

headerButton.addEventListener('click', function(e){
  headerMenu.classList.toggle('active')
} )