document.addEventListener('DOMContentLoaded', function() {

  /* ! slider open menu */

  let menuSlide = () => {
    var burger = document.querySelector('.burger__menu');
    var menu = document.querySelector('.header__menu');
    var navLinks = document.querySelectorAll('.header__menu li');

    burger.addEventListener('click', () => {
      menu.classList.toggle('open-menu');

      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = ''
        }else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10}s`;
        }
      });
       burger.classList.toggle("toggle");
    });
  }

  menuSlide();

  /* ! scroll marker menu active */

  const a = document.querySelectorAll(".link");
  const section = document.querySelectorAll("section");

  function activeMenu(){
    let leng = section.length;
      while (--leng && window.scrollY + 174 < section[leng].offsetTop){}
        a.forEach(ltx => ltx.classList.remove("active"));
        a[leng].classList.add("active");
  }

  activeMenu();
  window.addEventListener("scroll", activeMenu);

  /* ! top scroll page */

  var upper = document.querySelector('.up');

  upper.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior:'smooth'});
  });

  /* ! scroll up elements if you observe */

  var elements_to_watch = document.querySelectorAll('.watch');

  var callback = function(items){
    items.forEach((item) => {
      if(item.isIntersecting){
        item.target.classList.add('in-page');
      }
    });
  }

  var observer = new IntersectionObserver(callback, { threshold: 0.4 } );

  elements_to_watch.forEach((element) => {
    observer.observe(element);
  });

  /* ! footer year date */

  let date = new Date().getFullYear();
  document.getElementById("footer__date").innerHTML = date;

  // /* ! swiper */ //

  var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3300,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});
