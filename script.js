document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.email-form');
    const emailInput = form.querySelector('input[type="email"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateEmail(emailInput.value)) {
            alert('Thank you! We will get in touch with you soon.');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
