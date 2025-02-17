// Smooth scrolling para enlaces internos
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href'); // Obtiene el ID del enlace
        const targetElement = document.querySelector(targetId); // Busca el elemento correspondiente

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Scroll suave
            });
        }
    });
});

// Mostrar/Ocultar menú de navegación según la posición del ratón
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero-section');

let isMouseInHero = false;

// Cuando el ratón entra en la sección "Inicio", el menú aparece
heroSection.addEventListener('mouseenter', () => {
    isMouseInHero = true;
    navbar.classList.remove('hidden-navbar');
});

// Cuando el ratón sale de la sección "Inicio", el menú desaparece después de 3 segundos
heroSection.addEventListener('mouseleave', () => {
    isMouseInHero = false;
    setTimeout(() => {
        if (!isMouseInHero) {
            navbar.classList.add('hidden-navbar');
        }
    }, 3000); // Retraso aumentado a 3 segundos
});

// Mostrar/Ocultar formulario de contacto
const contactTrigger = document.querySelector('.contact-trigger');
const contactForm = document.getElementById('contact-form');

let isMouseInTrigger = false;

// Cuando el ratón entra en el área de contacto, el formulario aparece
contactTrigger.addEventListener('mouseenter', () => {
    isMouseInTrigger = true;
    contactForm.classList.remove('hidden');
    setTimeout(() => {
        if (isMouseInTrigger) {
            contactForm.classList.add('active');
        }
    }, 10);
});

// Cuando el ratón sale del área de contacto, el formulario desaparece después de 5 segundos
contactTrigger.addEventListener('mouseleave', () => {
    isMouseInTrigger = false;
    setTimeout(() => {
        if (!isMouseInTrigger) {
            contactForm.classList.remove('active');
            contactForm.classList.add('hidden');
        }
    }, 5000); // Retraso aumentado a 5 segundos
});

// Validación del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim(); // Obtiene el valor del campo "Nombre"
    const email = document.getElementById('email').value.trim(); // Obtiene el valor del campo "Correo Electrónico"
    const message = document.getElementById('message').value.trim(); // Obtiene el valor del campo "Mensaje"

    // Verifica si algún campo está vacío
    if (!name || !email || !message) {
        e.preventDefault(); // Evita que el formulario se envíe
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Valida el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Simula el envío exitoso del formulario
    alert('Gracias por contactarnos. Pronto nos pondremos en contacto contigo.');
});
