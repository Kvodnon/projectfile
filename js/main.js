$(document).ready(function () {
  $(".link").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1600);
    e.preventDefault();
    return false;
  });
});

new WOW().init();

document.addEventListener("DOMContentLoaded", function () {
  //MENU
  var burger = document.querySelector('.header-burger');
  var menu = document.querySelector('.header-menu');
  var item = menu.querySelectorAll('.header-menu a');
  var burgerHidden = document.querySelector('.header-burger_hidden');

  // POPUP
  var overlayRegistry = document.querySelector('.overlay-registry');
  var overlayLogin = document.querySelector('.overlay-login');
  var overlayThanks = document.querySelector('.overlay-thanks');
  var popupRegistry = overlayRegistry.querySelector('.popup-registry');
  var popupLogin = overlayLogin.querySelector('.popup-login');
  var overlayWrap = document.querySelector('.overlay-wrap');
  var btnRegistery = document.querySelectorAll('.btn-registry');
  var main = document.querySelector('main');
  var html = document.querySelector('html');
  var closeRegistry = document.querySelector('.close-registry');
  var closeLogin = document.querySelector('.close-login');
  var closeThanks = document.querySelector('.close-thanks');
  var btnLogin = document.querySelector('.header-login');
  var btnLoginMini = document.querySelector('.btn-login_mini');
  var btnRegistryMini = document.querySelector('.btn-registry_mini');

  // VALIDATION
  var registryForm = document.querySelector('.registry-form');
  var loginForm = document.querySelector('.login-form');
  var password = document.querySelector('.input-password');
  var repassword = document.querySelector('.input-repassword');
  var invalidPasswords = document.querySelector('.invalid-text_password');
  var inputsRegistry = document.querySelectorAll('.registry-required');
  var inputsLogin = document.querySelectorAll('.login-required');
  var registrySubmission = true;
  var loginSubmission = true;

  // MENU
  function removeMenu() {
    burger.classList.remove('header-burger_active');
    menu.classList.remove('header-menu_active');
  }

  burger.addEventListener('click', function (e) {
    event.preventDefault();
    burger.classList.toggle('header-burger_active');
    menu.classList.toggle('header-menu_active');
    var check = burger.classList.contains('header-burger_active');


    if (window.matchMedia('(min-width: 576px)').matches) {
      if (check) {
        burgerHidden.style.display = 'block';
      } else {
        burgerHidden.style.display = 'none';
      }
    }
  });

  item.forEach(element => {
    element.addEventListener('click', function () {
      removeMenu();
    });
  });

  main.addEventListener('click', function (e) {
    removeMenu();
  });
  overlayWrap.addEventListener('click', function (e) {
    removeMenu();
  });


  // POPUP


  function styleDisplay(property) {
    property.style.display = 'none';
  }

  function removeBlur() {
    main.classList.remove('blur');
    html.classList.remove('overflow');
  }

  function animationOn(property) {
    property.classList.remove('zoomOut');
    property.classList.add('zoomIn');
  }

  function animationOff(property) {
    property.classList.remove('zoomIn');
    property.classList.add('zoomOut');
  }

  function popupOn(overlay) {
    overlay.style.display = 'block';
    main.classList.add('blur');
    html.classList.add('overflow');
    removeMenu();
  }

  function displayTimer(overlay) {
    setTimeout(styleDisplay, 500, overlay);
  }

  btnRegistery.forEach(element => {
    element.addEventListener('click', function () {
      animationOn(popupRegistry);
      popupOn(overlayRegistry);
    });
  });
  
  btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    animationOn(popupLogin);
    popupOn(overlayLogin);
    styleDisplay(overlayRegistry);
  });

  btnLoginMini.addEventListener('click', function (e) {
    e.preventDefault();
    animationOn(popupLogin);
    overlayLogin.style.display = 'block';
    styleDisplay(overlayRegistry);
    removeMenu();
  });

  btnRegistryMini.addEventListener('click', function (e) {
    e.preventDefault();
    animationOn(popupRegistry);
    overlayRegistry.style.display = 'block';
    styleDisplay(overlayLogin);
    removeMenu();
  });

  closeRegistry.addEventListener('click', function () {
    animationOff(popupRegistry);
    displayTimer(overlayRegistry);
    removeBlur();
  });
  
  closeLogin.addEventListener('click', function () {
    animationOff(popupLogin);
    displayTimer(overlayLogin);
    removeBlur();
  });
  closeThanks.addEventListener('click', function () {
    styleDisplay(overlayThanks);
    removeBlur();
  });


  window.addEventListener("click", function (event) {
    if (event.target == overlayRegistry || event.target == overlayLogin || event.target == overlayThanks) {
      animationOff(popupLogin);
      displayTimer(overlayLogin);

      animationOff(popupRegistry);
      displayTimer(overlayRegistry);

      styleDisplay(overlayThanks);
      removeBlur();
    }
  });

  // VALIDATION
  registryForm.addEventListener('submit', function (e) {
    e.preventDefault();

    inputsRegistry.forEach(element => {
      if (element.value == '') {
        element.classList.add('invalid');
        registrySubmission = false;
      }
    });

    if (password.value !== repassword.value) {
      registrySubmission = false;
      invalidPasswords.style.display = 'block';
    }

    inputsRegistry.forEach(element => {
      element.addEventListener('input', function () {
        if (password.value == repassword.value && password.value !== '' && repassword.value !== '') {
          registrySubmission = true;
          invalidPasswords.style.display = 'none';
        }
      });
    });

    if (registrySubmission == true) {
      registryForm.submit();
    }

  });
  inputsRegistry.forEach(element => {

    element.addEventListener('input', function () {
      element.classList.remove('invalid');
      if (element.value == '') {
        element.classList.add('invalid');
      }
    });
  });


  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    inputsLogin.forEach(element => {
      if (element.value == '') {
        element.classList.add('invalid');
        loginSubmission = false;
      }

      element.addEventListener('input', function () {
        if (element.value !== '') {
          loginSubmission = true;
        }
      });


    });


    if (loginSubmission == true) {
      loginForm.submit();
    }

  });

  inputsLogin.forEach(element => {

    element.addEventListener('input', function () {
      element.classList.remove('invalid');
      if (element.value == '') {
        element.classList.add('invalid');
      }
    });
  });

});


$('.feedback-slider').slick({
  slidesToShow: 3,
  adaptiveHeight: true,
  dots: true,
  prevArrow: '<div class="arrow arrow_left"></div>',
  nextArrow: '<div class="arrow arrow_right"></div>',
  responsive: [{
      breakpoint: 1215,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        infinite: true,
      }
    }
  ]
});