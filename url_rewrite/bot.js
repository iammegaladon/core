// Check if the current URL is '/index.html' and replace it with '/home'
if (window.location.pathname === '/megai-bot.html') {
  const newUrl = window.location.href.replace('/megai-bot.html', '/megai/chat');
  window.history.replaceState({}, document.title, newUrl);
}
