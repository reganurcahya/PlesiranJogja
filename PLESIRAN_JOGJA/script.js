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
// TANGGAL
function generateCalendar(month, year) {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const headers = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  headers.forEach((header) => {
    const div = document.createElement("div");
    div.className = "day header";
    div.textContent = header;
    calendar.appendChild(div);
  });

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.className = "day";
    calendar.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const div = document.createElement("div");
    div.className = "day";
    div.textContent = day;
    div.addEventListener("click", () => {
      document.querySelectorAll(".day").forEach((d) => d.classList.remove("selected"));
      div.classList.add("selected");
    });
    calendar.appendChild(div);
  }
}

const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

monthSelect.addEventListener("change", () => {
  generateCalendar(monthSelect.value, yearSelect.value);
});

yearSelect.addEventListener("change", () => {
  generateCalendar(monthSelect.value, yearSelect.value);
});

window.onload = () => {
  generateCalendar(new Date().getMonth(), new Date().getFullYear());
  monthSelect.value = new Date().getMonth();
  yearSelect.value = new Date().getFullYear();
};
