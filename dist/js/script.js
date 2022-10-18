// Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBGT6lWEkbBrA3G4VBE9SfxMfY6BedE1yI',
  authDomain: 'contact-form-tailwind.firebaseapp.com',
  databaseURL: 'https://contact-form-tailwind-default-rtdb.firebaseio.com',
  projectId: 'contact-form-tailwind',
  storageBucket: 'contact-form-tailwind.appspot.com',
  messagingSenderId: '473027353383',
  appId: '1:473027353383:web:cdd74178e3ac14b64e2702',
};
// initialize firebase
firebase.initializeApp(firebaseConfig);
// reference database
var contactFormDB = firebase.database().ref('Tailwind-Portfolio');

document.querySelector('#contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var msgContent = document.querySelector('#msgContent').value;

  console.log(name, email, msgContent);

  saveMessages(name, email, msgContent); 
}

const saveMessages = (name, email, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name : name,
    email: email,
    message: msgContent,
  });
};

// Navabar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Heart
const heart1 = document.querySelectorAll('#heart');
heart1.forEach((val) => {
  val.addEventListener('click', function () {
    val.classList.toggle('text-danger');
    val.classList.toggle('text-secondary');
    val.classList.toggle('heart-animation');
  });
});

// Contact Send Button
const button = document.querySelector('#send-contact');
button.addEventListener('click', function () {
  button.classList.add('send-animation');
  setTimeout(() => {
    button.classList.remove('send-animation');
  }, 251);
});
