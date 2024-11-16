// LIST DESTINATION
var TrandingSlider = new Swiper(".tranding-slider", {
  centeredSlides: true,
  spaceBetween: 50,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// LOGIN
function handleSubmit(event) {
  event.preventDefault();
  window.location.href = "1homepage.html";
}
//REGISTER
function handleSubmitRegist(event) {
  event.preventDefault();
  window.location.href = "0login.html";
}
// LOGIN GOOGLE AND FACEBOOK
function loginWithGoogle() {
  google.accounts.id.initialize({
    client_id: "YOUR_GOOGLE_CLIENT_ID",
    callback: handleGoogleCallback,
  });
  google.accounts.id.prompt(); // Menampilkan popup Google login
}

function handleGoogleCallback(response) {
  console.log(response.credential); // Token Google yang dapat dikirim ke server untuk autentikasi
}
window.fbAsyncInit = function () {
  FB.init({
    appId: "YOUR_FACEBOOK_APP_ID",
    cookie: true,
    xfbml: true,
    version: "v16.0",
  });
};

function loginWithFacebook() {
  FB.login(function (response) {
    if (response.authResponse) {
      console.log(response.authResponse.accessToken); // Token Facebook yang dapat dikirim ke server
    } else {
      console.log("User cancelled login or did not fully authorize.");
    }
  });
}
