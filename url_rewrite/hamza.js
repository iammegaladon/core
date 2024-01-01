if (window.location.pathname === '/hamza.html') {
  const newUrl = window.location.href.replace('/hamza.html', '/founder/hamza');
  window.history.replaceState({}, document.title, newUrl);
}