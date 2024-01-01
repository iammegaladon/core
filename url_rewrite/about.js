if (window.location.pathname === '/about-us.html') {
  const newUrl = window.location.href.replace('/about-us.html', '/who-are-we?');
  window.history.replaceState({}, document.title, newUrl);
}