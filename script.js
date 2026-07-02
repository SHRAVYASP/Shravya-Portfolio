window.onload = function () {

    const texts = [
        "Python Full Stack Developer",
        "AI Enthusiast",
        "CSE Graduate"
    ];

    let textIndex = 0;
    let charIndex = 0;

    function type() {

        const typing = document.getElementById("typing");

        if (!typing) return;

        typing.innerHTML =
            texts[textIndex].substring(0, charIndex);

        charIndex++;

        if (charIndex > texts[textIndex].length) {

            charIndex = 0;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }

            setTimeout(type, 1200);

        } else {

            setTimeout(type, 100);
        }
    }

    type();
};
ScrollReveal().reveal('.hero', {
    distance: '80px',
    duration: 2000,
    origin: 'left'
});

ScrollReveal().reveal('.stats', {
    distance: '50px',
    duration: 1500,
    origin: 'bottom'
});

ScrollReveal().reveal('.about', {
    distance: '80px',
    duration: 2000,
    origin: 'bottom'
});

ScrollReveal().reveal('.skill-card', {
    distance: '80px',
    duration: 1500,
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.projects', {
    distance: '80px',
    duration: 2000,
    origin: 'left'
});

ScrollReveal().reveal('.education, .internship, .certifications, .contact', {
    distance: '80px',
    duration: 2000,
    origin: 'bottom'
});
ScrollReveal().reveal('.work-card', {
    distance: '80px',
    duration: 1500,
    origin: 'bottom',
    interval: 200
});

    