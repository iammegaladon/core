// Check if the current URL is '/index.html' and replace it with '/home'
if (window.location.pathname === '/index.html') {
  const newUrl = window.location.href.replace('/index.html', '/home');
  window.history.replaceState({}, document.title, newUrl);
}

// Add event listener for page reloads and navigating to '/Home'
window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('reload', true);
});

window.addEventListener('load', function () {
  const reloadFlag = sessionStorage.getItem('reload');
  if (reloadFlag) {
    sessionStorage.removeItem('reload');
    // Redirect to '/index.html' when the page reloads
    window.location.href = '/index.html';
  }
});

// Add event listener for navigating to '/Home'
document.addEventListener('DOMContentLoaded', function () {
  const homeLink = document.querySelector('a[href="/home"]');
  if (homeLink) {
    homeLink.addEventListener('click', function (event) {
      event.preventDefault();
      // Redirect to '/index.html' when user clicks on the link to '/Home'
      window.location.href = '/index.html';
    });
  }
});