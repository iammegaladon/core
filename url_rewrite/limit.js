// Check if the message was already shown today
var lastAccessDate = localStorage.getItem('lastAccessDate');

if (!lastAccessDate || isPastDay(lastAccessDate)) {
    setTimeout(function() {
        var iframe = document.getElementById('megai');
        iframe.style.display = 'none';
        alert('Sorry For Inconvenience. Your Daily Limit has been Reached 😔');

        // Save the current date to localStorage
        localStorage.setItem('lastAccessDate', getCurrentDate());
    }, 30000); // 30 seconds
}

function isPastDay(savedDate) {
    var savedDay = new Date(savedDate).getDate();
    var currentDay = new Date().getDate();
    return savedDay !== currentDay;
}

function getCurrentDate() {
    var now = new Date();
    return now.toISOString().split('T')[0]; // Get YYYY-MM-DD format
}