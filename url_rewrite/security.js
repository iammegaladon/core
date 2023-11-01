// Check if the current URL is '/index.html' and replace it with '/home'
if (window.location.pathname === '/security.html') {
  const newUrl = window.location.href.replace('/security.html', '/security=unsafe?access!denied');
  window.history.replaceState({}, document.title, newUrl);
}
