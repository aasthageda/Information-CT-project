document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Dark mode CSS toggling
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #000;
        color: #0f0;
    }
`;
document.head.appendChild(darkModeStyles);
