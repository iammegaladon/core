// Check if the current URL is '/index.html' and replace it with '/home'
if (window.location.pathname === '/index.html') {
  const newUrl = window.location.href.replace('/index.html', '/security?checking');
  window.history.replaceState({}, document.title, newUrl);
}
