particlesJS('particles-js', {
    particles: {
        number: {
            value: 50, // Adjust as needed
            density: {
                enable: true,
                value_area: 800 // Adjust as needed
            }
        },
        color: {
            value: "#ffffff" // Color of the squares
        },
        shape: {
            type: "polygon", // Set shape as polygon
            polygon: {
                nb_sides: 4 // Square has 4 sides
            }
        },
        opacity: {
            value: 0.5, // Adjust as needed
            random: true,
            anim: {
                enable: false
            }
        },
        size: {
            value: 20, // Size of the squares
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 2, // Adjust as needed
            direction: "top", // Set direction as top for rising up
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
});
