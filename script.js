// Adding a simple button click interaction with animation
document.addEventListener('DOMContentLoaded', function () {
    const myButton = document.getElementById('myButton');

    myButton.addEventListener('click', function () {
        const section = document.getElementById('contact');
        section.style.backgroundColor = '#ffcc00';
        setTimeout(() => {
            section.style.backgroundColor = '#fff';
        }, 1000);
    });
});

// Interactive background color change on section hover
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        section.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#ffcc00';
        });

        section.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '#fff';
        });
    });
});

// Add more interactive elements and JavaScript functionality as needed
