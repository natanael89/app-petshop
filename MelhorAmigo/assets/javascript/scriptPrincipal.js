document.addEventListener('DOMContentLoaded', function () {
    // Formulário
    const form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = event.target.email.value;

            fetch('/index', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert(data.message);
                })
                .catch((error) => {
                    alert('Erro ao cadastrar. Tente novamente.');
                });
        });
    }

    // AOS
    if ('AOS' in window) {
        AOS.init();
    }

    // Esconder botão WhatsApp inicialmente
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.style.visibility = 'hidden';
    }

    // Botão Flutuante - WhatsApp
    window.addEventListener('scroll', function () {
        const whatsappButton = document.querySelector('.whatsapp-button');
        if (!whatsappButton) return;

        const width = window.innerWidth;
        if (window.scrollY > 250) {
            whatsappButton.style.visibility = 'visible';
        } else {
            whatsappButton.style.visibility = 'hidden';
        }
    });
});
