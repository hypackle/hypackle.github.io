particlesJS('particles-js', {
    particles: {
        number: {
            value: 20, // Adjust as needed
            density: {
                enable: true,
                value_area: 800 // Adjust as needed
            }
        },
        color: {
            value: "#ffffff" // Color of the hexagons
        },
        shape: {
            type: "polygon", // Set shape as polygon
            polygon: {
                nb_sides: 6 // Hexagon has 6 sides
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
            value: 100, // Size of the hexagons
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
            speed: 1, // Adjust as needed
            direction: "none", // Movement direction (horizontal, vertical, or diagonal)
            random: true,
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
