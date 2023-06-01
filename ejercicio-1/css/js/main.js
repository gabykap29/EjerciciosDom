document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('lorem');
    const button = document.getElementById('colorButton');

    button.addEventListener('click', function() {
        if (paragraph.classList.contains('purple')) {
            paragraph.classList.remove('purple');
            paragraph.classList.add('orange');
        } else {
            paragraph.classList.remove('orange');
            paragraph.classList.add('purple');
        }
    });
});
