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

// Menu Management
function toggleMenu(menuId, event) {
    event.stopPropagation();
    const menu = document.getElementById(menuId);
    const trigger = event.currentTarget;
    
    // Close all other menus
    document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m.id !== menuId) m.classList.remove('active');
    });
    document.querySelectorAll('#menu-bar a').forEach(a => {
        if (a !== trigger) a.classList.remove('active-menu');
    });

    menu.classList.toggle('active');
    trigger.classList.toggle('active-menu');
}

window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('#menu-bar a').forEach(a => a.classList.remove('active-menu'));
});

// Window Management
const windowContainer = document.getElementById('window-container');
let zIndexCounter = 500;

function openApp(appName) {
    // Check if window already exists
    const existingWindow = document.querySelector(`.mac-window[data-app="${appName}"]`);
    if (existingWindow) {
        focusWindow(existingWindow);
        return;
    }

    // Update Dock Indicator
    updateDockIndicator(appName, true);

    let title = appName.charAt(0).toUpperCase() + appName.slice(1);
    let content = '';

    if (appName === 'finder') {
        content = `
            <div class="finder-main">
                <div class="finder-sidebar">
                    <div style="font-size: 11px; color: #8e8e93; font-weight: 700; margin-bottom: 8px;">Favorites</div>
                    <div style="font-size: 13px; color: #4a4a4a; margin-bottom: 6px; cursor: pointer;">🏠 AirDrop</div>
                    <div style="font-size: 13px; color: #4a4a4a; margin-bottom: 6px; cursor: pointer;">🕒 Recent</div>
                    <div style="font-size: 13px; color: #4a4a4a; margin-bottom: 6px; cursor: pointer; background: rgba(0,0,0,0.05); border-radius: 4px; padding-left: 4px;">📂 Applications</div>
                    <div style="font-size: 13px; color: #4a4a4a; margin-bottom: 6px; cursor: pointer;">📄 Documents</div>
                    <div style="font-size: 13px; color: #4a4a4a; margin-bottom: 6px; cursor: pointer;">📥 Downloads</div>
                </div>
                <div class="finder-content">
                    <div class="file-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Folder_Mac.svg/1024px-Folder_Mac.svg.png" class="file-icon">
                        <div class="file-name">Documents</div>
                    </div>
                    <div class="file-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Folder_Mac.svg/1024px-Folder_Mac.svg.png" class="file-icon">
                        <div class="file-name">Pictures</div>
                    </div>
                    <div class="file-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Folder_Mac.svg/1024px-Folder_Mac.svg.png" class="file-icon">
                        <div class="file-name">Movies</div>
                    </div>
                </div>
            </div>
        `;
    } else if (appName === 'safari') {
        content = `
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div style="height: 44px; border-bottom: 1px solid #dcdcdc; display: flex; align-items: center; padding: 0 16px; gap: 12px; background: #f6f6f6;">
                    <div style="display: flex; gap: 8px; color: #8e8e93;">
                        <span>◀</span> <span>▶</span>
                    </div>
                    <div style="flex-grow: 1; background: #e3e3e3; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #4a4a4a;">
                        🔍 Search or enter website name
                    </div>
                    <div style="color: #8e8e93;">⟳</div>
                </div>
                <div style="flex-grow: 1; padding: 40px; display: flex; flex-direction: column; align-items: center;">
                    <div style="font-size: 24px; font-weight: 700; margin-bottom: 30px;">Favorites</div>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer;">
                            <div style="width: 60px; height: 60px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); font-size: 30px;">G</div>
                            <div style="font-size: 12px;">Google</div>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer;">
                            <div style="width: 60px; height: 60px; background: #000; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); font-size: 30px;"></div>
                            <div style="font-size: 12px;">Apple</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (appName === 'messages') {
        content = `
            <div style="display: flex; height: 100%;">
                <div style="width: 260px; border-right: 1px solid #dcdcdc; background: rgba(246,246,246,0.8); backdrop-filter: blur(10px); display: flex; flex-direction: column;">
                    <div style="padding: 20px 16px; font-size: 20px; font-weight: 700;">Messages</div>
                    <div style="flex-grow: 1; overflow: auto;">
                        <div style="padding: 12px 16px; border-bottom: 1px solid #dcdcdc; background: #007aff; color: #fff;">
                            <div style="font-weight: 600;">Mom</div>
                            <div style="font-size: 12px; opacity: 0.8;">Call me when you're home.</div>
                        </div>
                    </div>
                </div>
                <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff;">
                    <div style="font-size: 14px; color: #8e8e93;">Select a message to start chatting</div>
                </div>
            </div>
        `;
    } else {
        content = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #8e8e93; font-size: 14px; flex-direction: column; gap: 10px;">
            <div style="font-size: 40px;">⚙️</div>
            <div>${title} is coming soon in the next update!</div>
        </div>`;
    }

    createWindow(appName, title, content);
}

function createWindow(appName, title, content) {
    const win = document.createElement('div');
    win.className = 'mac-window';
    win.dataset.app = appName;
    const offset = document.querySelectorAll('.mac-window').length * 30;
    win.style.top = (80 + offset) + 'px';
    win.style.left = (150 + offset) + 'px';
    win.style.zIndex = ++zIndexCounter;

    win.innerHTML = `
        <div class="window-title-bar">
            <div class="traffic-lights">
                <div class="light close" onclick="closeWindow(this)"></div>
                <div class="light minimize"></div>
                <div class="light maximize"></div>
            </div>
            <div class="window-title">${title}</div>
        </div>
        <div class="window-content">
            ${content}
        </div>
    `;

    win.addEventListener('mousedown', () => focusWindow(win));
    
    // Dragging logic
    const titleBar = win.querySelector('.window-title-bar');
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };

    titleBar.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('light')) return;
        isDragging = true;
        dragOffset.x = e.clientX - win.offsetLeft;
        dragOffset.y = e.clientY - win.offsetTop;
        focusWindow(win);
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        win.style.left = (e.clientX - dragOffset.x) + 'px';
        win.style.top = (e.clientY - dragOffset.y) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.getElementById('window-container').appendChild(win);
}

function focusWindow(win) {
    win.style.zIndex = ++zIndexCounter;
}

function closeWindow(btn) {
    const win = btn.closest('.mac-window');
    const appName = win.dataset.app;
    win.remove();
    updateDockIndicator(appName, false);
}

function updateDockIndicator(appName, isOpen) {
    const dockIcon = document.querySelector(`.dock-icon[onclick*="'${appName}'"]`);
    if (!dockIcon) return;
    
    let dot = dockIcon.querySelector('.dot');
    if (!dot) {
        dot = document.createElement('div');
        dot.className = 'dot';
        dockIcon.appendChild(dot);
    }
    
    if (isOpen) {
        dot.classList.add('active');
    } else {
        dot.classList.remove('active');
    }
}
