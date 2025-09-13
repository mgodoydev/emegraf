document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const data = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(function(response) {
        if (response.ok) {
          status.textContent = "¡Mensaje enviado correctamente!";
          status.style.color = "green";
          form.reset();
        } else {
          status.textContent = "Hubo un error, intenta nuevamente.";
          status.style.color = "red";
        }
      })
      .catch(function(error) {
        status.textContent = "Hubo un error, intenta nuevamente.";
        status.style.color = "red";
      });
    });
  }
});

