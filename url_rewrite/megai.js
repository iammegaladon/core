// Check if the current URL is '/index.html' and replace it with '/home'
if (window.location.pathname === '/portfolio.html') {
  const newUrl = window.location.href.replace('/portfolio.html', '/MegAI');
  window.history.replaceState({}, document.title, newUrl);
}
