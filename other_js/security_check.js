// Check if the user is using a Chromium-based browser
const isChromium = window.chrome !== undefined;

if (isChromium) {
    // Redirect to home.html after 3 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
} else {
    // Redirect to security.html immediately
    window.location.href = "security.html";
}