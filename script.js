document.addEventListener('DOMContentLoaded', function () {
    const myButton = document.getElementById('myButton');

    myButton.addEventListener('click', function () {
        const contactSection = document.getElementById('contact');
        contactSection.style.backgroundColor = '#ffcc00';
        setTimeout(() => {
            contactSection.style.backgroundColor = '#fff';
        }, 1000);
    });
});
