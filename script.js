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