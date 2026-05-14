function updateClock() {
    const now = new Date();
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayOfWeek = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const timeString = `${dayOfWeek} ${month} ${date} ${hours}:${minutes} ${ampm}`;
    
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
