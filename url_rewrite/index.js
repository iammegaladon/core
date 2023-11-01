// Check if the current URL is '/index.html' and replace it with '/home'
if (window.location.pathname === '/home.html') {
  const newUrl = window.location.href.replace('/home.html', '/Home');
  window.history.replaceState({}, document.title, newUrl);
}
