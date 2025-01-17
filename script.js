const bottomSection = document.querySelector('.bottom');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const { offsetWidth, offsetHeight } = bottomSection;

  const xPercent = 50 + (clientX / offsetWidth - 0.2) * 8;
  const yPercent = 50 + (clientY / offsetHeight - 0.2) * 8;

  bottomSection.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
});

// Inicializa EmailJS con tu user ID
(function () {
  emailjs.init('B0EFhz1YnNjaPaHSS');  // Reemplaza con tu ID de usuario de EmailJS
})();

// Evento para enviar el formulario al hacer clic en el botón
document.getElementById("button").addEventListener("click", function () {
  // Obtener los valores del formulario
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var language = document.getElementById("language").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var terms = document.getElementById("terms").checked ? "Agreed" : "Not Agreed";

  // Crear el objeto de parámetros para el email
  var templateParams = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    language: language,
    phone: phone,
    email: email,
    terms: terms
  };

  // Enviar el email usando EmailJS
  emailjs.send('service_kfk3agr', 'template_gtb3bhj', templateParams)
    .then(function(response) {
       alert('Message sent successfully!');
    }, function(error) {
       alert('Failed to send the message: ' + error.text);
    });
});

