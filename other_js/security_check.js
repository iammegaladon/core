// Check if the user is using Chrome
if (navigator.userAgent.indexOf("Chrome") !== -1) {
    // Delay the redirection to home.html by 3 seconds
    setTimeout(function () {
        window.location.href = "home.html";
    }, 3000);
} else {
    // Redirect to security.html immediately
    window.location.href = "security.html";
}