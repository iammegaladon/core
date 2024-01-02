const isChromium = window.chrome !== undefined;

if (isChromium) {
    // Check if not already redirected
    if (!window.location.href.includes("index.html")) {
        // Redirect to index.html after 3 seconds
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    }
} else {
    // Check if not already redirected
    if (!window.location.href.includes("security.html")) {
        // Redirect to security.html immediately
        window.location.href = "security.html";
    }
}