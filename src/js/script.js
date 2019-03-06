// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top - 100
//         }, 1000);
//         return false;
//       }
//     }
//   });


const navbar = document.querySelector('nav');
const navbarOffset = navbar.offsetTop;
document.addEventListener('scroll', () => {
  if (navbarOffset < document.querySelector('body').scrollTop + 50) {
    navbar.classList.add('navbar-fixed-top');
  } else {
    navbar.classList.remove('navbar-fixed-top');
  }
});

