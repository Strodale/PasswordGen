// DOM Elements
const passwordLength = document.getElementById("passwordLength");
const lengthValue = document.getElementById("lengthValue");
const generatedPassword = document.getElementById("generatedPassword");
const copyBtn = document.getElementById("copyBtn");
const refreshBtn = document.getElementById("refreshBtn");
const typeButtons = document.querySelectorAll(".tab-btn");

let currentType = "Random";

// Update Slider Display
passwordLength.addEventListener("input", () => {
    lengthValue.textContent = passwordLength.value;
});

// Handle Type Selection
typeButtons.forEach(button => {
    button.addEventListener("click", () => {
        typeButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        currentType = button.textContent;
    });
});

// Generate Password
function generatePassword() {
    const length = parseInt(passwordLength.value);
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    if (currentType === "PIN") {
        return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
    }

    if (currentType === "Memorable") {
        const words = ["tree", "house", "sun", "blue", "happy"];
        return `${words[Math.floor(Math.random() * words.length)]}-${Math.floor(Math.random() * 1000)}`;
    }

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let charSet = chars;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    return Array.from({ length }, () => charSet[Math.floor(Math.random() * charSet.length)]).join("");
}

// Refresh Password
refreshBtn.addEventListener("click", () => {
    generatedPassword.textContent = generatePassword();
});

// Copy to Clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(generatedPassword.textContent);
    alert("Password copied to clipboard!");
});
