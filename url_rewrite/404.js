if (window.location.pathname === '/404.html') {
  const newUrl = window.location.href.replace('/404.html', '/404/Denied');
  window.history.replaceState({}, document.title, newUrl);
}