// Menú móvil
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Cerrar el menú móvil al elegir un link
siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Formulario de admisión (demo sin backend: guarda localmente y muestra confirmación)
const form = document.getElementById('admisionForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();

  if (!form.checkValidity()) {
    status.textContent = 'Revisá que todos los campos estén completos.';
    return;
  }

  // Acá, en un sitio real, se enviarían los datos a un servidor o servicio de formularios.
  status.textContent = `¡Gracias, ${nombre}! Recibimos tu solicitud y te vamos a contactar a la brevedad.`;
  form.reset();
});
