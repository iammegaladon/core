if (window.location.pathname === '/hamza.html') {
  const newUrl = window.location.href.replace('/hamza.html', '/Team');
  window.history.replaceState({}, document.title, newUrl);
}