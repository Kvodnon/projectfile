document.addEventListener("DOMContentLoaded", function () {
  // POPUP
  var overlayLogin = document.querySelector('.overlay-login');
  var closeLogin = document.querySelector('.close-login');
  var btnLogin = document.querySelector('.header-login');
  var undefinedSection = document.querySelector('.undefined');
  var popupLogin = document.querySelector('.popup-login');

  // VALIDATION
  var loginForm = document.querySelector('.login-form');
  var inputsLogin = document.querySelectorAll('.login-required');
  var loginSubmission = true;


  // POPUP
  function styleDisplay(property) {
    property.style.display = 'none';
  }

  function animationOn(property) {
    property.classList.remove('zoomOut');
    property.classList.add('zoomIn');
  }

  function animationOff(property) {
    property.classList.remove('zoomIn');
    property.classList.add('zoomOut');
  }

  btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    animationOn(popupLogin);
    overlayLogin.style.display = 'block';
    undefinedSection.classList.add('blur');
  });


  closeLogin.addEventListener('click', function () {
    animationOff(popupLogin);
    setTimeout(styleDisplay, 600, overlayLogin);
    undefinedSection.classList.remove('blur');
  });

  window.addEventListener("click", function (event) {
    if (event.target == overlayLogin) {
      animationOff(popupLogin);
      setTimeout(styleDisplay, 600, overlayLogin);
      undefinedSection.classList.remove('blur');
    }
  });

  // VALIDATION
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