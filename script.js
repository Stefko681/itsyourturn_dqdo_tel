const emails = [
    {
        id: 2, sender: 'Jenny Court',
        time: '3/20/25',
        subject: 'Walkthrough',
        preview: 'Hi Danny and Ashley, I\'ve just completed a walkthrough of 212 Opal and wanted to share...',
        body: '<p>Hi Danny and Ashley,</p><br><p>I\'ve just completed a walkthrough of 212 Opal and wanted to share my thoughts with you.</p><p>The property looks great and is in a prime location.</p>',
        avatar: 'https://picsum.photos/100?random=11'
    }
];

const contacts = [
    {
        id: 1, name: 'Trev Smith',
        phone: '555-0102', email: 'trev@example.com',
        addr: '123 Apple St, Cupertino',
        avatar: 'https://picsum.photos/100?random=20',
        preview: 'Gotcha covered!', time: 'Yesterday',
        chat: [{ type: 'received', text: 'Hey, you ready?' },
        { type: 'sent', text: 'Yeah, let me just finish this.' },
        { type: 'received', text: 'Gotcha covered!' }]
    },
];

const locations = [
    { id: 5, name: 'Русе', addr: 'Градът на свободния дух', lat: 43.8356, lng: 25.9657, icon: '🚢' },
    { id: 1, name: 'София', addr: 'Столица на България', lat: 42.6977, lng: 23.3219, icon: '🏙️' },
    { id: 2, name: 'Пловдив', addr: 'Вторият по големина град', lat: 42.1354, lng: 24.7453, icon: '🏛️' },
    { id: 3, name: 'Варна', addr: 'Морската столица', lat: 43.2141, lng: 27.9147, icon: '🌊' },
    { id: 4, name: 'Бургас', addr: 'Градът на птиците', lat: 42.5048, lng: 27.4626, icon: '⚓' }
];

const photosData = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', title: 'Mountain Landscape' },
    { id: 2, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80', title: 'Nature Valley' },
    { id: 3, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80', title: 'Forest Trail' },
    { id: 4, url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80', title: 'Waterfall' },
    { id: 5, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', title: 'Lakeside' },
    { id: 6, url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', title: 'House by the Lake' },
    { id: 7, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', title: 'Snowy Mountains' },
    { id: 8, url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80', title: 'Coastal Cliffs' }
];

const ftHistory = [
    { name: 'Trev Smith', time: '4:20 PM', avatar: 'https://picsum.photos/100?random=20' }
];

const calEvents = [
];

const remindersData = [
    {
        id: 1, title: 'Reminders', color: '#007aff', items: [
            { id: 101, text: 'Buy coffee beans', completed: false, date: 'Today' },
            { id: 102, text: 'Call the dentist', completed: true, date: 'Yesterday' },
            { id: 103, text: 'Submit quarterly report', completed: false, date: 'Tomorrow' }
        ]
    },
    {
        id: 2, title: 'Personal', color: '#ff9500', items: [
            { id: 201, text: 'Book flight to Sofia', completed: false, date: 'May 20' },
            { id: 202, text: 'Renew gym membership', completed: false, date: 'May 25' }
        ]
    },
    {
        id: 3, title: 'Work', color: '#34c759', items: [
            { id: 301, text: 'Prepare presentation', completed: false, date: 'Monday' },
            { id: 302, text: 'Reply to client emails', completed: false, date: 'Every day' }
        ]
    }
];

const notesData = [
    {
        id: 1,
        title: 'Project Ideas',
        time: '10:42 AM',
        preview: 'The new macOS simulator looks amazing. Need to add...',
        content: '<h3>Project Ideas</h3><p>The new macOS simulator looks amazing. Need to add more applications like Notes, Reminders, and maybe a small game.</p><p>Key focus areas:</p><ul><li>High-fidelity UI</li><li>Glassmorphism effects</li><li>Smooth window transitions</li></ul>',
        date: 'May 14, 2026 at 10:42 AM'
    },
];

const tvData = {
    featured: { title: 'Foundation', desc: 'The monumental journey of a band of exiles to save humanity and rebuild civilization amid the fall of the Galactic Empire.', badge: 'APPLE TV+ ORIGINAL', bg: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80' },
    rows: [
        {
            title: 'New Releases', items: [
                { id: 1, title: 'The Morning Show', img: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?auto=format&fit=crop&w=400&q=80' },
                { id: 2, title: 'Ted Lasso', img: 'https://static.wikia.nocookie.net/ted-lasso/images/6/65/Apple_TV_Ted_Lasso_Key_Art_S2.png/revision/latest?cb=20210726202629' }, { id: 3, title: 'Severance', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80' },
                { id: 4, title: 'Slow Horses', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80' },
                { id: 5, title: 'Black Bird', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=400&q=80' }
            ]
        },
        {
            title: 'Trending Now', items: [
                { id: 6, title: 'Dune', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=400&q=80' },
                { id: 7, title: 'The Batman', img: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=400&q=80' },
                { id: 8, title: 'Inception', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80' },
                { id: 9, title: 'Interstellar', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80' },
                { id: 10, title: 'The Dark Knight', img: 'https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?auto=format&fit=crop&w=400&q=80' }
            ]
        }
    ]
};

const musicData = [
    { id: 1, title: 'Midnights', artist: 'Taylor Swift', img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'After Hours', artist: 'The Weeknd', img: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Plastic Hearts', artist: 'Miley Cyrus', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: 'Harry\'s House', artist: 'Harry Styles', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwP4Y5Lv1DFDvoA6U_OG12kgveTQDZ7elsjrPrEhypl6XQg83KZMAxcsSALqIGhgnUGUV-9rwj2LgbN4qyYkdrZc-Ii7B_m_0xHpdoSg&s=10' },
    { id: 5, title: 'Future Nostalgia', artist: 'Dua Lipa', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80' },
    { id: 6, title: 'Sour', artist: 'Olivia Rodrigo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn0r8OBVJ17sYA_dF66YJLxa230W7YjRxIUfe03X0AJChhYUdzRgKuztOg9C7L-KYSvVfwYo_kGVSNfZdF3SePPcG1aOBR2pbLufjkgo&s=10' }
];

const podcastsData = [
    { id: 1, title: 'The Daily', author: 'The New York Times', img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Stuff You Should Know', author: 'iHeartPodcasts', img: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Ted Talks Daily', author: 'TED', img: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: 'The Joe Rogan Experience', author: 'Joe Rogan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuTxHKXF3RpfEvNGF42oigq2SdISH9CC3Qv9fWhEfpMz3XNYn9qoEfq8Q03QMqaO3WAfwoN6zrUKRk-TOweFD-QdURuv0npgew5aurw&s=10' },
    { id: 5, title: 'Lex Fridman Podcast', author: 'Lex Fridman', img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80' },
    { id: 6, title: 'Science Vs', author: 'Spotify Studios', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80' }
];

const appStoreData = {
    discover: [
        { id: 1, title: 'Xcode 15', cat: 'Developer Tools', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHp2ZT8jRBQnBpAxc78ILYKu8rr1ne8ghZA&s' },
        { id: 2, title: 'Final Cut Pro', cat: 'Video', icon: 'https://sm.pcmag.com/pcmag_au/review/a/apple-fina/apple-final-cut-pro_4bad.jpg' },
        { id: 3, title: 'Logic Pro', cat: 'Music', icon: 'https://sm.pcmag.com/pcmag_me/review/a/apple-logi/apple-logic-pro-for-ipad_7y2y.jpg' },
        { id: 4, title: 'Slack', cat: 'Business', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/3840px-Slack_icon_2019.svg.png' },
        { id: 5, title: 'Spotify', cat: 'Music', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1280px-Spotify_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
        { id: 6, title: 'Trello', cat: 'Productivity', icon: 'https://static.vecteezy.com/system/resources/thumbnails/067/565/483/small_2x/trello-rounded-logo-design-free-png.png' }
    ],
    featured: { badge: 'EDITOR\'S CHOICE', title: 'Bring your ideas to life with Xcode', desc: 'The best way to build apps for Apple platforms.', img: 'https://images.icon-icons.com/2699/PNG/512/apple_xcode_logo_icon_169562.png' }
};

const settingsCategories = [
    { id: 'wifi', title: 'Wi-Fi', icon: '📶', color: '#007aff' },
    { id: 'bluetooth', title: 'Bluetooth', icon: '🔹', color: '#007aff' },
    { id: 'appearance', title: 'Appearance', icon: '🌓', color: '#333' },
    { id: 'wallpaper', title: 'Wallpaper', icon: '🖼️', color: '#5ac8fa' }
];

const wallpapers = [
    { id: 1, url: 'wallpaper.png', title: 'Ventura Orange' },
    { id: 2, url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80', title: 'Aurora Blue' },
    { id: 3, url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', title: 'Abstract Purple' },
    { id: 4, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80', title: 'Glass Orb' }
];

const fileSystem = {
    'root': [
        { id: 'applications', name: 'Applications', type: 'folder', icon: 'https://upload.wikimedia.org/wikipedia/it/5/57/Icona_Launchpad.png'.replace(/ /g, '%20') },
        { id: 'documents', name: 'Documents', type: 'folder', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Files_App_icon_iOS.png'.replace(/ /g, '%20') },
        { id: 'pictures', name: 'Pictures', type: 'folder', icon: 'https://help.apple.com/assets/68CC87B9CAAD76736901E52B/68CC87BBC2E039F703036A8A/en_US/d1c53b6b8d4bae14b946fa9a54794550.png'.replace(/ /g, '%20') },
    ]

};

let trashData = [
    { id: 'old_doc', name: 'Old Report.docx', type: 'file', icon: 'https://raw.githubusercontent.com/Anish-Agnihotri/macos-icons/main/icons/textedit.png' },
    { id: 'trash_photo', name: 'Bad Photo.jpg', type: 'file', icon: 'https://picsum.photos/100?random=50' }
];

let downloadsData = [
    { id: 'vscode_dmg', name: 'VSCode.dmg', type: 'file', size: '94.2 MB', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png', isNew: true },
    { id: 'sofia_map', name: 'Sofia_City_Map.zip', type: 'file', size: '12.5 MB', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Zip_icon_with_zipper.svg/1200px-Zip_icon_with_zipper.svg.png', isNew: false },
    { id: 'mac_wallpaper', name: 'Sonoma_Light.jpg', type: 'file', size: '4.8 MB', icon: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=100&q=80', isNew: true },
    { id: 'invoice_pdf', name: 'Invoice_May_2026.pdf', type: 'file', size: '240 KB', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png', isNew: false }
];

const safariFavorites = [
    { name: 'Apple', url: 'https://www.apple.com', icon: '🍎' },
    { name: 'Google', url: 'https://www.google.com', icon: '🔍' },
    { name: 'YouTube', url: 'https://www.youtube.com', icon: '📺' },
    { name: 'Bulgaria', url: 'https://www.bulgaria.bg', icon: '🇧🇬' },
    { name: 'GitHub', url: 'https://www.github.com', icon: '🐙' },
    { name: 'Wikipedia', url: 'https://www.wikipedia.org', icon: '🌐' }
];

const launchpadApps = [
    { id: 'finder', name: 'Finder', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Finder_Icon_macOS_Big_Sur.png/250px-Finder_Icon_macOS_Big_Sur.png' },
    { id: 'safari', name: 'Safari', icon: 'https://upload.wikimedia.org/wikipedia/en/7/71/Safari_Liquid_Glass_icon.png' },
    { id: 'messages', name: 'Messages', icon: 'https://help.apple.com/assets/694059163A98DA7C77096BB3/6940591877CC4A95400B60E4/en_GB/aa2633c8fb2814decdff5ee6b4dde94e.png' },
    { id: 'mail', name: 'Mail', icon: 'https://help.apple.com/assets/6940590395B73B67500DF914/69405904627DAC39E4013406/en_US/610a7e660092193773855879a591dc48.png' },
    { id: 'maps', name: 'Maps', icon: 'https://help.apple.com/assets/6940590D627DAC39E4013417/6940590E0C0C2E9AA6030528/en_US/0cb1025a905b01f8e1e50e4288ff3e95.png' },
    { id: 'photos', name: 'Photos', icon: 'https://help.apple.com/assets/68CC87B9CAAD76736901E52B/68CC87BBC2E039F703036A8A/en_US/d1c53b6b8d4bae14b946fa9a54794550.png' },
    { id: 'facetime', name: 'FaceTime', icon: 'https://help.apple.com/assets/6940569A1F6143F21904FAD1/6940569BF6CF4E307E0EFE36/en_US/210ef7a0ac83cebeeb19dc7a9d1bb0e1.png' },
    { id: 'calendar', name: 'Calendar', icon: 'https://help.apple.com/assets/67DB4AD617009A1F970697F4/67DB4AD747D53316F70BB655/en_US/9c6fd1cb730164c989d1b3afab213fad.png' },
    { id: 'contacts', name: 'Contacts', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Contacts_%28iOS%29.png/250px-Contacts_%28iOS%29.png' },
    { id: 'reminders', name: 'Reminders', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Reminders_%28macOS%29.png/250px-Reminders_%28macOS%29.png' },
    { id: 'notes', name: 'Notes', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Apple_Notes_%28macOS_Big_Sur%29.png' },
    { id: 'tv', name: 'Apple TV', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/TV_%28macOS%29.png/250px-TV_%28macOS%29.png' },
    { id: 'music', name: 'Apple Music', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/AppleMusicIcon_macOS%402x.png' },
    { id: 'podcasts', name: 'Podcasts', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Podcasts_%28macOS%29.png' },
    { id: 'appstore', name: 'App Store', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Mac_App_Store_logo.png' },
    { id: 'settings', name: 'Settings', icon: 'https://upload.wikimedia.org/wikipedia/en/2/23/System_Preferences_icon.png' },
    { id: 'downloads', name: 'Downloads', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Files_App_icon_iOS.png' },
    { id: 'trash', name: 'Trash', icon: 'https://files.softicons.com/download/system-icons/mac-os-apps-icons-3-by-hamza-saleem/png/512x512/Trash.png' }
];

let currentWallpaperUrl = 'wallpaper.png';
let wifiEnabled = true;
let bluetoothEnabled = true;
let finderCurrentPath = ['root'];

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
    hours = hours % 12; hours = hours ? hours : 12;
    const timeString = dayOfWeek + ' ' + month + ' ' + date + ' ' + hours + ':' + minutes + ' ' + ampm;
    document.getElementById('clock').textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

function toggleMenu(menuId, event) {
    event.stopPropagation();
    const menu = document.getElementById(menuId);
    const trigger = event.currentTarget;
    document.querySelectorAll('.dropdown-menu').forEach(function (m) { if (m.id !== menuId) m.classList.remove('active'); });
    document.querySelectorAll('#menu-bar a').forEach(function (a) { if (a !== trigger) a.classList.remove('active-menu'); });
    if (menu) menu.classList.toggle('active');
    if (trigger) trigger.classList.toggle('active-menu');
}

window.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu').forEach(function (m) { m.classList.remove('active'); });
    document.querySelectorAll('#menu-bar a').forEach(function (a) { a.classList.remove('active-menu'); });
});

let zIndexCounter = 500;

function openApp(appName) {
    if (appName === 'launchpad') { toggleLaunchpad(); return; }
    const existingWindow = document.querySelector('.mac-window[data-app="' + appName + '"]');
    if (existingWindow) { focusWindow(existingWindow); return; }
    updateDockIndicator(appName, true);
    let title = appName.charAt(0).toUpperCase() + appName.slice(1);
    if (appName === 'settings') title = 'System Settings';
    if (appName === 'finder') title = 'Finder';
    if (appName === 'trash') title = 'Trash';
    if (appName === 'downloads') title = 'Downloads';
    if (appName === 'tv') title = 'Apple TV';
    if (appName === 'music') title = 'Apple Music';
    let content = '';

    if (appName === 'mail') content = renderMailApp(emails.length > 0 ? emails[0].id : null);
    else if (appName === 'messages') content = renderMessagesApp(contacts.length > 0 ? contacts[0].id : null);
    else if (appName === 'maps') content = renderMapsApp(locations[0].id);
    else if (appName === 'photos') content = renderPhotosApp();
    else if (appName === 'facetime') content = renderFaceTimeApp();
    else if (appName === 'calendar') content = renderCalendarApp();
    else if (appName === 'contacts') content = renderContactsApp(contacts[0].id);
    else if (appName === 'reminders') content = renderRemindersApp(remindersData[0].id);
    else if (appName === 'notes') content = renderNotesApp(notesData[0].id);
    else if (appName === 'tv') content = renderTVApp();
    else if (appName === 'music') content = renderMusicApp();
    else if (appName === 'podcasts') content = renderPodcastsApp();
    else if (appName === 'appstore') content = renderAppStore();
    else if (appName === 'settings') content = renderSettingsApp('wifi');
    else if (appName === 'finder') content = renderFinderApp();
    else if (appName === 'trash') content = renderTrashApp();
    else if (appName === 'downloads') content = renderDownloadsApp();
    else if (appName === 'safari') content = renderSafariApp();
    else {
        content = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #8e8e93; font-size: 14px; flex-direction: column; gap: 10px;"><div style="font-size: 40px;">⚙️</div><div>' + title + ' is ready!</div></div>';
    }
    createWindow(appName, title, content);
    if (appName === 'facetime') startCamera();
}

function renderMailApp(selectedId) {
    const selectedEmail = emails.find(function (e) { return e.id === selectedId; }) || emails[0];
    let itemsHtml = '';
    emails.forEach(function (email) {
        itemsHtml += '<div class="mail-item' + (email.id === selectedId ? ' active' : '') + '" onclick="selectEmail(' + email.id + ')"><div class="header"><span class="sender">' + email.sender + '</span><span class="time">' + email.time + '</span></div><div class="subject">' + email.subject + '</div><div class="preview">' + email.preview + '</div></div>';
    });
    return '<div class="mail-header"><div class="mail-header-sidebar"><div class="traffic-lights" style="margin-left: 10px; margin-right: 20px;"><div class="light close" onclick="closeWindow(this)"></div><div class="light minimize"></div><div class="light maximize"></div></div><span style="font-size: 18px; color: #555;">📑</span></div><div class="mail-header-list"><div style="display: flex; flex-direction: column;"><span style="font-size: 13px; font-weight: 700;">Inbox</span><span style="font-size: 10px; color: #8e8e93;">Primary · ' + emails.length + ' messages</span></div></div><div class="mail-header-view"><span style="font-size: 18px;">📝</span><div class="mail-header-btn-group"><span class="mail-header-btn">↩</span><span class="mail-header-btn">↪</span></div><div style="flex-grow: 1;"></div><span style="font-size: 18px;">🔍</span></div></div><div class="mail-app"><div class="mail-sidebar"><div><div class="mail-sidebar-section-title">Favorites</div><div class="mail-sidebar-item active"><span>📥</span> Inbox</div><div class="mail-sidebar-item"><span>🚀</span> Sent</div></div></div><div class="mail-list"><div class="mail-items-scroll">' + itemsHtml + '</div></div><div class="mail-view"><div class="mail-content"><div class="mail-view-header"><div class="mail-avatar"><img src="' + selectedEmail.avatar + '"></div><div class="mail-view-details"><h3>' + selectedEmail.sender + '</h3><p><b>' + selectedEmail.subject + '</b></p></div></div><div class="mail-body">' + selectedEmail.body + '</div></div></div></div>';
}

function selectEmail(id) {
    const mailWin = document.querySelector('.mac-window[data-app="mail"]');
    if (mailWin) mailWin.querySelector('.window-content').innerHTML = renderMailApp(id);
}

function renderMessagesApp(selectedId) {
    const selectedContact = contacts.find(function (c) { return c.id === selectedId; }) || contacts[0];
    let listHtml = '';
    contacts.forEach(function (contact) {
        listHtml += '<div class="msg-list-item' + (contact.id === selectedId ? ' active' : '') + '" onclick="selectContact(' + contact.id + ')"><div class="msg-avatar"><img src="' + contact.avatar + '"></div><div class="msg-info"><div class="msg-name-row"><span class="msg-name">' + contact.name + '</span><span class="msg-time">' + contact.time + '</span></div><div class="msg-preview">' + contact.preview + '</div></div></div>';
    });
    let chatHtml = '';
    selectedContact.chat.forEach(function (msg) {
        if (msg.type === 'image') chatHtml += '<img src="' + msg.url + '" class="msg-image">';
        else chatHtml += '<div class="msg-bubble ' + msg.type + '">' + msg.text + '</div>';
    });
    return '<div class="msg-app"><div class="msg-sidebar"><div class="msg-sidebar-header"><div class="msg-search">🔍 Search</div></div><div class="msg-list">' + listHtml + '</div></div><div class="msg-chat"><div class="msg-chat-header"><span style="font-size: 20px;">📝</span><div class="msg-chat-header-center"><div class="avatar"><img src="' + selectedContact.avatar + '"></div><div class="name">' + selectedContact.name + ' ❯</div></div><span style="font-size: 20px;">📹</span></div><div class="msg-chat-body">' + chatHtml + '<div class="msg-receipt">Read</div></div><div class="msg-input-area"><span>➕</span><input type="text" class="msg-input" placeholder="iMessage"><span>🎤</span><span>😊</span></div></div></div>';
}

function selectContact(id) {
    const msgWin = document.querySelector('.mac-window[data-app="messages"]');
    if (msgWin) msgWin.querySelector('.window-content').innerHTML = renderMessagesApp(id);
}

function renderMapsApp(selectedId) {
    const selectedLoc = locations.find(function (l) { return l.id === selectedId; }) || locations[0];
    let listHtml = '';
    locations.forEach(function (loc) {
        listHtml += '<div class="maps-list-item' + (loc.id === selectedId ? ' active' : '') + '" onclick="selectLocation(' + loc.id + ')"><div class="maps-item-icon">' + loc.icon + '</div><div class="maps-item-info"><div class="title">' + loc.name + '</div><div class="addr">' + loc.addr + '</div></div></div>';
    });
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2d' + selectedLoc.lng + '!3d' + selectedLoc.lat + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbg!2sbg!4v1700000000000!5m2!1sbg!2sbg';
    return '<div class="maps-app"><div class="maps-sidebar"><div class="maps-sidebar-header"><div class="maps-search-box">🔍 Search for a place in Bulgaria</div></div><div class="maps-list">' + listHtml + '</div></div><div class="maps-view"><iframe src="' + mapUrl + '" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe><div class="maps-toolbar"><div class="maps-tool-btn">🗺️</div><div class="maps-zoom-group"><div class="maps-zoom-btn">+</div><div class="maps-zoom-btn">−</div></div><div class="maps-tool-btn">📍</div></div></div></div>';
}

function selectLocation(id) {
    const mapsWin = document.querySelector('.mac-window[data-app="maps"]');
    if (mapsWin) mapsWin.querySelector('.window-content').innerHTML = renderMapsApp(id);
}

function renderPhotosApp() {
    let gridHtml = '';
    photosData.forEach(function (photo) {
        gridHtml += '<div class="photo-item" onclick="openPhoto(' + photo.id + ')"><img src="' + photo.url + '"></div>';
    });
    return '<div class="photos-app"><div class="photos-sidebar"><div><div class="photos-sidebar-section-title">Photos</div><div class="photos-sidebar-item active"><span>🖼️</span> Library</div><div class="photos-sidebar-item"><span>✨</span> Memories</div><div class="photos-sidebar-item"><span>👥</span> People</div><div class="photos-sidebar-item"><span>📍</span> Places</div><div class="photos-sidebar-item"><span>❤️</span> Favorites</div><div class="photos-sidebar-item"><span>🕒</span> Recents</div></div></div><div class="photos-content"><div class="photos-toolbar"><div style="font-size: 13px; font-weight: 600;">Library</div><div style="display: flex; gap: 15px;"><span style="font-size: 18px;">📤</span><span style="font-size: 18px;">➕</span><span style="font-size: 18px;">🔍</span></div></div><div class="photos-grid">' + gridHtml + '</div></div><div class="photo-detail-view" id="photo-detail-view"></div></div>';
}

function openPhoto(id) {
    const photo = photosData.find(function (p) { return p.id === id; });
    const detail = document.getElementById('photo-detail-view');
    detail.innerHTML = '<div class="photo-detail-header"><span style="font-size: 18px; cursor: pointer;" onclick="closePhoto()">◀</span><div style="flex-grow: 1; text-align: center; font-size: 13px; font-weight: 600;">' + photo.title + '</div><div style="display: flex; gap: 20px;"><span style="font-size: 18px;">❤️</span><span style="font-size: 18px;">🔃</span><span style="font-size: 18px;">ⓘ</span></div></div><div class="photo-detail-img-container"><img src="' + photo.url + '"></div>';
    detail.style.display = 'flex';
}

function closePhoto() { document.getElementById('photo-detail-view').style.display = 'none'; }

function renderFaceTimeApp() {
    let histHtml = '';
    ftHistory.forEach(function (item) {
        histHtml += '<div class="ft-history-item"><div class="ft-history-avatar"><img src="' + item.avatar + '"></div><div class="ft-history-info"><div class="ft-history-name">' + item.name + '</div><div class="ft-history-time">FaceTime Video · ' + item.time + '</div></div><span style="font-size: 18px; opacity: 0.5;">ⓘ</span></div>';
    });
    return '<div class="ft-app"><div class="ft-sidebar"><div class="ft-sidebar-header"><div class="ft-btn-group"><div class="ft-btn gray">Create Link</div><div class="ft-btn green">New FaceTime</div></div></div><div class="ft-history">' + histHtml + '</div></div><div class="ft-main" id="ft-main"><div class="ft-placeholder"><span>📷</span><div>Camera is off</div></div><div class="ft-controls"><div class="ft-control-btn">🔇</div><div class="ft-control-btn">📹</div><div class="ft-control-btn end">📞</div></div></div></div>';
}

function startCamera() {
    const main = document.getElementById('ft-main');
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        main.innerHTML = '<video id="ft-video" class="ft-camera-view" autoplay playsinline></video><div class="ft-controls"><div class="ft-control-btn">🔇</div><div class="ft-control-btn">📹</div><div class="ft-control-btn end" onclick="stopCamera()">📞</div></div>';
        document.getElementById('ft-video').srcObject = stream;
    }).catch(function (err) { console.log('Camera error:', err); });
}

function stopCamera() {
    const video = document.getElementById('ft-video');
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(function (track) { track.stop(); });
        video.remove();
        document.getElementById('ft-main').innerHTML = '<div class="ft-placeholder"><span>📷</span><div>Call Ended</div></div><div class="ft-controls"><div class="ft-control-btn">🔇</div><div class="ft-control-btn">📹</div><div class="ft-control-btn end">📞</div></div>';
    }
}

function renderCalendarApp() {
    const now = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    let gridHtml = '';
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdays.forEach(function (day) { gridHtml += '<div class="cal-weekday">' + day + '</div>'; });
    for (let i = 0; i < firstDay; i++) { gridHtml += '<div class="cal-day empty"></div>'; }
    for (let d = 1; d <= daysInMonth; d++) {
        const isToday = d === now.getDate();
        let eventsHtml = '';
        calEvents.forEach(function (ev) { if (ev.day === d) { eventsHtml += '<div class="cal-event" style="background:' + ev.color + '">' + ev.title + '</div>'; } });
        gridHtml += '<div class="cal-day' + (isToday ? ' today' : '') + '"><div class="cal-day-num">' + d + '</div>' + eventsHtml + '</div>';
    }
    return '<div class="cal-app"><div class="cal-sidebar"><div><div class="cal-sidebar-section-title">Calendars</div><div class="cal-sidebar-item active"><div class="cal-color-dot" style="background:#ff3b30"></div> Work</div><div class="cal-sidebar-item"><div class="cal-color-dot" style="background:#007aff"></div> Home</div><div class="cal-sidebar-item"><div class="cal-color-dot" style="background:#34c759"></div> Family</div></div></div><div class="cal-content"><div class="cal-toolbar"><div class="cal-view-tabs"><div class="cal-tab">Day</div><div class="cal-tab">Week</div><div class="cal-tab active">Month</div><div class="cal-tab">Year</div></div><div style="font-size: 18px; font-weight: 700;">' + monthNames[now.getMonth()] + ' ' + now.getFullYear() + '</div><div style="display: flex; gap: 15px;"><span style="font-size: 18px;">🔍</span><span style="font-size: 18px;">➕</span></div></div><div class="cal-grid">' + gridHtml + '</div></div></div>';
}

function renderContactsApp(selectedId) {
    const selectedContact = contacts.find(function (c) { return c.id === selectedId; }) || contacts[0];
    let listHtml = '';
    contacts.sort(function (a, b) { return a.name.localeCompare(b.name); }).forEach(function (contact) {
        listHtml += '<div class="contact-item' + (contact.id === selectedId ? ' active' : '') + '" onclick="selectContactInApp(' + contact.id + ')">' + contact.name + '</div>';
    });
    return '<div class="contacts-app"><div class="contacts-sidebar"><div><div class="mail-sidebar-section-title">Smart Groups</div><div class="mail-sidebar-item active"><span>👥</span> All Contacts</div><div class="mail-sidebar-item"><span>🏠</span> Home</div><div class="mail-sidebar-item"><span>💼</span> Work</div></div></div><div class="contacts-list"><div class="contacts-list-header"><div class="contacts-search">🔍 Search</div></div><div class="contacts-items-scroll">' + listHtml + '</div></div><div class="contact-details"><div class="contact-detail-avatar"><img src="' + selectedContact.avatar + '"></div><div class="contact-detail-name">' + selectedContact.name + '</div><div class="contact-info-grid"><div class="contact-info-row"><div class="contact-info-label">phone</div><div class="contact-info-value">' + selectedContact.phone + '</div></div><div class="contact-info-row"><div class="contact-info-label">email</div><div class="contact-info-value">' + selectedContact.email + '</div></div><div class="contact-info-row"><div class="contact-info-label">address</div><div class="contact-info-value" style="color:#333">' + selectedContact.addr + '</div></div></div></div></div>';
}

function selectContactInApp(id) {
    const contactsWin = document.querySelector('.mac-window[data-app="contacts"]');
    if (contactsWin) contactsWin.querySelector('.window-content').innerHTML = renderContactsApp(id);
}

function renderRemindersApp(selectedId) {
    const selectedList = remindersData.find(function (l) { return l.id === selectedId; }) || remindersData[0];
    let sidebarListsHtml = '';
    remindersData.forEach(function (list) {
        sidebarListsHtml += '<div class="rem-list-item' + (list.id === selectedId ? ' active' : '') + '" onclick="selectRemList(' + list.id + ')"><div class="rem-list-dot" style="background:' + list.color + '"></div>' + list.title + '</div>';
    });
    let itemsHtml = '';
    selectedList.items.forEach(function (item) {
        itemsHtml += '<div class="rem-item"><div class="rem-checkbox' + (item.completed ? ' checked' : '') + '" onclick="toggleReminder(' + selectedList.id + ',' + item.id + ')"></div><div class="rem-item-content"><div class="rem-item-text' + (item.completed ? ' checked' : '') + '">' + item.text + '</div><div class="rem-item-subtext">' + item.date + '</div></div></div>';
    });
    return '<div class="rem-app"><div class="rem-sidebar"><div class="rem-sidebar-grid"><div class="rem-card blue active"><div class="rem-card-header"><div class="rem-card-icon" style="background:#007aff">📅</div><div class="rem-card-count">3</div></div><div class="rem-card-label">Today</div></div><div class="rem-card orange"><div class="rem-card-header"><div class="rem-card-icon" style="background:#ff9500">🗓️</div><div class="rem-card-count">2</div></div><div class="rem-card-label">Scheduled</div></div><div class="rem-card gray"><div class="rem-card-header"><div class="rem-card-icon" style="background:#8e8e93">📥</div><div class="rem-card-count">7</div></div><div class="rem-card-label">All</div></div><div class="rem-card red"><div class="rem-card-header"><div class="rem-card-icon" style="background:#ff3b30">🚩</div><div class="rem-card-count">0</div></div><div class="rem-card-label">Flagged</div></div></div><div><div class="rem-sidebar-section-title">My Lists</div><div class="rem-lists">' + sidebarListsHtml + '</div></div></div><div class="rem-main"><div class="rem-list-title" style="color:' + selectedList.color + '">' + selectedList.title + '</div><div class="rem-items">' + itemsHtml + '</div></div></div>';
}

function selectRemList(id) {
    const remWin = document.querySelector('.mac-window[data-app="reminders"]');
    if (remWin) remWin.querySelector('.window-content').innerHTML = renderRemindersApp(id);
}

function toggleReminder(listId, itemId) {
    const list = remindersData.find(function (l) { return l.id === listId; });
    if (list) {
        const item = list.items.find(function (i) { return i.id === itemId; });
        if (item) { item.completed = !item.completed; selectRemList(listId); }
    }
}

function renderNotesApp(selectedId) {
    const selectedNote = notesData.find(function (n) { return n.id === selectedId; }) || notesData[0];
    let listHtml = '';
    notesData.forEach(function (note) {
        listHtml += '<div class="note-item' + (note.id === selectedId ? ' active' : '') + '" onclick="selectNote(' + note.id + ')"><div class="note-item-title">' + note.title + '</div><div class="note-item-meta"><span>' + note.time + '</span><span class="note-item-preview">' + note.preview + '</span></div></div>';
    });
    return '<div class="notes-app"><div class="notes-sidebar"><div><div class="notes-sidebar-section-title">iCloud</div><div class="notes-sidebar-item active"><span>📂</span> All iCloud</div><div class="notes-sidebar-item"><span>🗑️</span> Recently Deleted</div></div></div><div class="notes-list"><div class="notes-list-header"><span style="font-size: 18px; color: #8e8e93;">📋</span><span style="font-size: 18px; color: #007aff;">📝</span></div><div class="notes-items-scroll">' + listHtml + '</div></div><div class="note-view"><div class="note-toolbar"><span style="font-size: 18px; color: #555;">📤</span><span style="font-size: 18px; color: #555;">🗑️</span><span style="font-size: 18px; color: #555;">🔒</span><span style="font-size: 18px; color: #555;">🔍</span></div><div class="note-content"><div class="note-date-header">' + selectedNote.date + '</div><div class="note-body" contenteditable="true">' + selectedNote.content + '</div></div></div></div>';
}

function selectNote(id) {
    const notesWin = document.querySelector('.mac-window[data-app="notes"]');
    if (notesWin) notesWin.querySelector('.window-content').innerHTML = renderNotesApp(id);
}

function renderTVApp() {
    const f = tvData.featured;
    let sectionsHtml = '';
    tvData.rows.forEach(function (row) {
        let postersHtml = '';
        row.items.forEach(function (item) {
            postersHtml += '<div class="tv-poster"><img src="' + item.img + '" class="tv-poster-img"><div class="tv-poster-title">' + item.title + '</div></div>';
        });
        sectionsHtml += '<div class="tv-section"><div class="tv-section-title">' + row.title + '</div><div class="tv-row">' + postersHtml + '</div></div>';
    });
    return '<div class="tv-app"><div class="tv-sidebar"><div><div class="tv-sidebar-item active"><span>📺</span> Watch Now</div><div class="tv-sidebar-item"><span></span> TV+</div><div class="tv-sidebar-item"><span>🎬</span> Movies</div><div class="tv-sidebar-item"><span>📺</span> TV Shows</div><div class="tv-sidebar-item"><span>📚</span> Library</div></div></div><div class="tv-main"><div class="tv-hero"><img src="' + f.bg + '" class="tv-hero-bg"><div class="tv-hero-content"><div class="tv-hero-badge">' + f.badge + '</div><div class="tv-hero-title">' + f.title + '</div><div class="tv-hero-desc">' + f.desc + '</div><div class="tv-hero-btns"><div class="tv-btn white">Play</div><div class="tv-btn blur">More Info</div></div></div></div>' + sectionsHtml + '</div></div>';
}

function renderMusicApp() {
    let albumsHtml = '';
    musicData.forEach(function (album) {
        albumsHtml += '<div class="music-album-card" onclick="playSong(' + album.id + ')"><img src="' + album.img + '" class="music-album-img"><div class="music-album-title">' + album.title + '</div><div class="music-album-artist">' + album.artist + '</div></div>';
    });
    return '<div class="music-app"><div class="music-player-bar"><div class="music-controls"><span class="music-control-btn">⏮</span><span class="music-control-btn" style="font-size:30px;">▶</span><span class="music-control-btn">⏭</span></div><div class="music-now-playing" id="music-now-playing"><div class="music-track-info"><div class="music-track-title">' + musicData[0].title + '</div><div class="music-track-artist">' + musicData[0].artist + '</div></div><div class="music-progress-container"><div class="music-progress-bar"></div></div></div><div class="music-vol-airplay"><span style="font-size:18px;">🔊</span><span style="font-size:18px;"></span></div></div><div class="music-app-body"><div class="music-sidebar"><div><div class="mail-sidebar-section-title">Apple Music</div><div class="music-sidebar-item active" style="color:#fa233b;"><span>📻</span> Listen Now</div><div class="music-sidebar-item"><span>🔍</span> Browse</div><div class="music-sidebar-item"><span>🎙️</span> Radio</div></div><div><div class="mail-sidebar-section-title">Library</div><div class="music-sidebar-item"><span>🕒</span> Recently Added</div><div class="music-sidebar-item"><span>👤</span> Artists</div><div class="music-sidebar-item"><span>💿</span> Albums</div><div class="music-sidebar-item"><span>🎵</span> Songs</div></div></div><div class="music-main"><div class="music-section-title">Recently Added</div><div class="music-album-grid">' + albumsHtml + '</div></div></div></div>';
}

function playSong(id) {
    const album = musicData.find(function (a) { return a.id === id; });
    const player = document.getElementById('music-now-playing');
    if (player) {
        player.innerHTML = '<div class="music-track-info"><div class="music-track-title">' + album.title + '</div><div class="music-track-artist">' + album.artist + '</div></div><div class="music-progress-container"><div class="music-progress-bar" style="width:0; transition: width 10s linear;"></div></div>';
        setTimeout(function () { player.querySelector('.music-progress-bar').style.width = '100%'; }, 50);
    }
}

function renderPodcastsApp() {
    let gridsHtml = '';
    podcastsData.forEach(function (pod) {
        gridsHtml += '<div class="pod-card" onclick="playPod(' + pod.id + ')"><img src="' + pod.img + '" class="pod-card-img"><div class="pod-card-title">' + pod.title + '</div><div class="pod-card-author">' + pod.author + '</div></div>';
    });
    return '<div class="pod-app"><div class="pod-player-bar"><div class="pod-controls"><span class="pod-control-btn">↺</span><span class="pod-control-btn" style="font-size:24px;">▶</span><span class="pod-control-btn">↻</span></div><div class="pod-now-playing" id="pod-now-playing"><div class="pod-track-title">' + podcastsData[0].title + '</div><div class="pod-track-show">' + podcastsData[0].author + '</div><div class="pod-progress-container"><div class="pod-progress-bar"></div></div></div><div style="width:180px;"></div></div><div class="pod-app-body"><div class="pod-sidebar"><div><div class="mail-sidebar-section-title">Apple Podcasts</div><div class="pod-sidebar-item active"><span>📻</span> Listen Now</div><div class="pod-sidebar-item"><span>🔍</span> Browse</div><div class="pod-sidebar-item"><span>📈</span> Top Charts</div></div><div><div class="mail-sidebar-section-title">Library</div><div class="pod-sidebar-item"><span>🕒</span> Recently Updated</div><div class="pod-sidebar-item"><span>📺</span> Shows</div><div class="pod-sidebar-item"><span>📄</span> Episodes</div></div></div><div class="pod-main"><div class="music-section-title">Listen Now</div><div class="pod-grid">' + gridsHtml + '</div></div></div></div>';
}

function playPod(id) {
    const pod = podcastsData.find(function (p) { return p.id === id; });
    const player = document.getElementById('pod-now-playing');
    if (player) {
        player.innerHTML = '<div class="pod-track-title">' + pod.title + '</div><div class="pod-track-show">' + pod.author + '</div><div class="pod-progress-container"><div class="pod-progress-bar" style="width:0; transition: width 15s linear;"></div></div>';
        setTimeout(function () { player.querySelector('.pod-progress-bar').style.width = '100%'; }, 50);
    }
}

function renderAppStore() {
    const f = appStoreData.featured;
    let appsHtml = '';
    appStoreData.discover.forEach(function (app) {
        appsHtml += '<div class="store-app-item"><img src="' + app.icon + '" class="store-app-icon"><div class="store-app-info"><div class="store-app-name">' + app.title + '</div><div class="store-app-cat">' + app.cat + '</div></div><div class="store-get-btn">GET</div></div>';
    });
    return '<div class="store-app"><div class="store-sidebar"><div><div class="store-sidebar-item active"><span>✨</span> Discover</div><div class="store-sidebar-item"><span>🎨</span> Create</div><div class="store-sidebar-item"><span>💼</span> Work</div><div class="store-sidebar-item"><span>🎮</span> Play</div><div class="store-sidebar-item"><span>💻</span> Develop</div><div class="store-sidebar-item"><span>📁</span> Categories</div><div class="store-sidebar-item"><span>🔄</span> Updates</div></div></div><div class="store-main"><div class="store-header">Discover</div><div class="store-featured-card"><img src="' + f.img + '" class="store-featured-img"><div class="store-featured-content"><div class="store-featured-badge">' + f.badge + '</div><div class="store-featured-title">' + f.title + '</div><div style="font-size:14px; opacity:0.9;">' + f.desc + '</div></div></div><div class="store-section-title"><h2>Must-Have Apps</h2><a href="#">See All</a></div><div class="store-app-list">' + appsHtml + '</div></div></div>';
}

function renderSettingsApp(catId) {
    let sidebarHtml = '<div class="set-search">🔍 Search</div>';
    settingsCategories.forEach(function (cat) {
        sidebarHtml += '<div class="set-sidebar-item' + (cat.id === catId ? ' active' : '') + '" onclick="selectSettingsCat(\'' + cat.id + '\')"><div class="set-icon" style="background:' + cat.color + '">' + cat.icon + '</div>' + cat.title + '</div>';
    });
    let mainHtml = '<div class="set-header">' + settingsCategories.find(function (c) { return c.id === catId; }).title + '</div>';
    if (catId === 'wifi') {
        mainHtml += '<div class="set-group"><div class="set-row"><div class="set-row-label">Wi-Fi</div><div class="set-toggle' + (wifiEnabled ? ' on' : '') + '" onclick="toggleWifi()"> <div class="set-toggle-knob"></div> </div></div><div class="set-row"><div class="set-row-label">Network Name</div><div class="set-row-value">Stefko_Home_5G 🔒</div></div></div>';
    } else if (catId === 'bluetooth') {
        mainHtml += '<div class="set-group"><div class="set-row"><div class="set-row-label">Bluetooth</div><div class="set-toggle' + (bluetoothEnabled ? ' on' : '') + '" onclick="toggleBluetooth()"> <div class="set-toggle-knob"></div> </div></div><div class="set-row"><div class="set-row-label">My Devices</div><div class="set-row-value">AirPods Pro · Connected</div></div></div>';
    } else if (catId === 'wallpaper') {
        let wallHtml = '';
        wallpapers.forEach(function (w) {
            wallHtml += '<div class="set-wallpaper-item' + (w.url === currentWallpaperUrl ? ' active' : '') + '" onclick="setWallpaper(\'' + w.url + '\')"><img src="' + w.url + '"></div>';
        });
        mainHtml += '<div class="set-wallpaper-grid">' + wallHtml + '</div>';
    } else if (catId === 'appearance') {
        mainHtml += '<div class="set-group"><div class="set-row"><div class="set-row-label">Appearance</div><div class="set-row-value">Light | Dark | Auto</div></div><div class="set-row"><div class="set-row-label">Accent Color</div><div class="set-row-value"><div style="width:12px;height:12px;border-radius:50%;background:#007aff"></div> Blue</div></div></div>';
    } else {
        mainHtml += '<div style="color:#8e8e93; font-size:14px;">Settings for ' + catId + ' are coming soon!</div>';
    }
    return '<div class="set-app"><div class="set-sidebar">' + sidebarHtml + '</div><div class="set-main">' + mainHtml + '</div></div>';
}

function selectSettingsCat(id) {
    const win = document.querySelector('.mac-window[data-app="settings"]');
    if (win) win.querySelector('.window-content').innerHTML = renderSettingsApp(id);
}

function toggleWifi() { wifiEnabled = !wifiEnabled; selectSettingsCat('wifi'); }
function toggleBluetooth() { bluetoothEnabled = !bluetoothEnabled; selectSettingsCat('bluetooth'); }
function setWallpaper(url) {
    currentWallpaperUrl = url;
    document.getElementById('desktop').style.backgroundImage = 'url("' + url + '")';
    selectSettingsCat('wallpaper');
}

function renderFinderApp() {
    const currentFolderId = finderCurrentPath[finderCurrentPath.length - 1];
    const items = fileSystem[currentFolderId] || [];
    let itemsHtml = '';
    items.forEach(function (item) {
        itemsHtml += '<div class="finder-item" onclick="selectFinderItem(this)" ondblclick="openFinderItem(\'' + item.id + '\', \'' + item.type + '\')"><img src="' + item.icon + '" class="finder-item-icon"><div class="finder-item-name">' + item.name + '</div></div>';
    });
    const pathText = finderCurrentPath.join(' ❯ ').replace('root', 'Macintosh HD');
    return '<div class="finder-app"><div class="finder-toolbar"><div class="finder-nav-group"><div class="finder-nav-arrows"><span onclick="finderGoBack()" style="cursor:pointer">◀</span><span style="opacity:0.3">▶</span></div><div class="finder-path">' + pathText + '</div></div><div class="finder-tools"><span>📂</span><span>🏷️</span><span>🔍</span></div></div><div class="finder-body"><div class="finder-sidebar"><div class="finder-sidebar-section"><div class="finder-sidebar-item active"><span>🏠</span> AirDrop</div><div class="finder-sidebar-item"><span>🕒</span> Recents</div><div class="finder-sidebar-item" onclick="openFinderItem(\'applications\', \'folder\')"><span>📂</span> Applications</div><div class="finder-sidebar-item" onclick="openFinderItem(\'documents\', \'folder\')"><span>📄</span> Documents</div><div class="finder-sidebar-item" onclick="openFinderItem(\'downloads\', \'folder\')"><span>📥</span> Downloads</div></div></div><div class="finder-main-content">' + itemsHtml + '</div></div><div class="finder-footer">' + items.length + ' items, 42.5 GB available</div></div>';
}

function selectFinderItem(el) { document.querySelectorAll('.finder-item').forEach(function (i) { i.classList.remove('selected'); }); el.classList.add('selected'); }
function openFinderItem(id, type) {
    if (type === 'folder') { finderCurrentPath.push(id); updateFinder(); }
    else if (type === 'app') { openApp(id); }
    else { alert('Opening file: ' + id); }
}
function finderGoBack() { if (finderCurrentPath.length > 1) { finderCurrentPath.pop(); updateFinder(); } }
function updateFinder() {
    const win = document.querySelector('.mac-window[data-app="finder"]');
    if (win) win.querySelector('.window-content').innerHTML = renderFinderApp();
}

function renderTrashApp() {
    let itemsHtml = '';
    if (trashData.length === 0) {
        itemsHtml = '<div style="grid-column: 1/-1; height: 100%; display: flex; align-items: center; justify-content: center; color: #8e8e93; font-size: 14px;">Trash is empty</div>';
    } else {
        trashData.forEach(function (item) {
            itemsHtml += '<div class="trash-item" onclick="selectFinderItem(this)"><img src="' + item.icon + '" class="trash-item-icon"><div class="trash-item-name">' + item.name + '</div></div>';
        });
    }
    return '<div class="trash-app"><div class="trash-banner"><div class="trash-banner-text">Items in Trash will be deleted permanently after 30 days.</div><div class="trash-empty-btn" onclick="emptyTrash()">Empty</div></div><div class="trash-grid">' + itemsHtml + '</div></div>';
}

function emptyTrash() {
    if (confirm('Are you sure you want to permanently erase the items in the Trash?')) {
        trashData = [];
        const win = document.querySelector('.mac-window[data-app="trash"]');
        if (win) win.querySelector('.window-content').innerHTML = renderTrashApp();
        updateTrashDockIcon();
    }
}

function updateTrashDockIcon() {
    const trashIcon = document.querySelector('.dock-icon[onclick*="trash"] img');
    if (trashIcon) {
        if (trashData.length === 0) trashIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Trash_Can_Empty_Icon_macOS.png/250px-Trash_Can_Empty_Icon_macOS.png';
        else trashIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Trash_Can_Full_Icon_macOS.png/250px-Trash_Can_Full_Icon_macOS.png';
    }
}

function renderDownloadsApp() {
    let itemsHtml = '';
    downloadsData.forEach(function (item) {
        itemsHtml += '<div class="dl-item" onclick="selectFinderItem(this)" ondblclick="openDownload(\'' + item.id + '\')"><img src="' + item.icon + '" class="dl-item-icon"><div class="dl-item-name">' + item.name + '</div><div class="dl-item-size">' + item.size + '</div>' + (item.isNew ? '<div class="dl-status-dot"></div>' : '') + '</div>';
    });
    return '<div class="dl-app"><div class="dl-toolbar"><div class="dl-nav"><div class="dl-path"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Folder_Mac.svg/1024px-Folder_Mac.svg.png"> Downloads</div></div><div class="dl-tools"><span>📂</span><span>🏷️</span><span>🔍</span></div></div><div class="dl-body"><div class="dl-sidebar"><div class="finder-sidebar-section"><div class="finder-sidebar-item active"><span>📥</span> Downloads</div><div class="finder-sidebar-item"><span>🕒</span> Today</div><div class="finder-sidebar-item"><span>🕒</span> Yesterday</div><div class="finder-sidebar-item"><span>🕒</span> Last 30 Days</div></div></div><div class="dl-main"><div class="dl-header-row"><div class="dl-header-item">Name</div><div style="flex-grow:1"></div><div class="dl-header-item">Size</div></div><div class="dl-grid">' + itemsHtml + '</div></div></div></div>';
}

function openDownload(id) {
    const item = downloadsData.find(function (d) { return d.id === id; });
    if (item) {
        item.isNew = false;
        const win = document.querySelector('.mac-window[data-app="downloads"]');
        if (win) win.querySelector('.window-content').innerHTML = renderDownloadsApp();
        alert('Opening ' + item.name + '...');
    }
}

function renderSafariApp(url) {
    if (!url) {
        let favsHtml = '';
        safariFavorites.forEach(function (fav) {
            favsHtml += '<div class="safari-fav-item" onclick="navigateSafari(\'' + fav.url + '\')"><div class="safari-fav-icon">' + (fav.icon.startsWith('http') ? '<img src="' + fav.icon + '">' : '<span style="font-size:32px">' + fav.icon + '</span>') + '</div><div class="safari-fav-name">' + fav.name + '</div></div>';
        });
        return '<div class="safari-app"><div class="safari-toolbar"><div class="safari-nav-btns"><div class="safari-nav-btn disabled">◀</div><div class="safari-nav-btn disabled">▶</div></div><div class="safari-address-bar"><span class="safari-url-lock">🔒</span><input type="text" class="safari-address-input" value="Favorites" onfocus="this.value=\'\'" onblur="if(this.value==\'\')this.value=\'Favorites\'" onkeydown="if(event.key===\'Enter\')navigateSafari(this.value)"></div><div class="safari-tools"><div class="safari-tool-btn">📤</div><div class="safari-tool-btn">➕</div><div class="safari-tool-btn">📑</div></div></div><div class="safari-view"><div class="safari-start-page"><div class="safari-section"><div class="safari-section-title">Favorites <a href="#">Show All</a></div><div class="safari-favorites-grid">' + favsHtml + '</div></div><div class="safari-section"><div class="safari-section-title">Frequently Visited</div><div style="color:#8e8e93; font-size:13px;">Sites you visit often will appear here.</div></div></div></div></div>';
    }
    const safeUrl = url.startsWith('http') ? url : 'https://' + url;
    return '<div class="safari-app"><div class="safari-toolbar"><div class="safari-nav-btns"><div class="safari-nav-btn" onclick="navigateSafari(\'\')">◀</div><div class="safari-nav-btn disabled">▶</div></div><div class="safari-address-bar"><span class="safari-url-lock">🔒</span><input type="text" class="safari-address-input" value="' + safeUrl + '" onkeydown="if(event.key===\'Enter\')navigateSafari(this.value)"></div><div class="safari-tools"><div class="safari-tool-btn">📤</div><div class="safari-tool-btn">➕</div><div class="safari-tool-btn">📑</div></div></div><div class="safari-view"><iframe src="' + safeUrl + '" class="safari-iframe"></iframe></div></div>';
}

function navigateSafari(url) {
    const win = document.querySelector('.mac-window[data-app="safari"]');
    if (win) win.querySelector('.window-content').innerHTML = renderSafariApp(url);
}

function toggleLaunchpad() {
    let lp = document.getElementById('launchpad-overlay');
    if (!lp) {
        lp = document.createElement('div');
        lp.id = 'launchpad-overlay';
        document.body.appendChild(lp);
        renderLaunchpad('');
    }
    lp.classList.toggle('active');
    if (lp.classList.contains('active')) {
        lp.style.display = 'flex';
        setTimeout(() => { lp.style.opacity = '1'; }, 10);
        const searchInput = lp.querySelector('.lp-search-input');
        if (searchInput) searchInput.focus();
    } else {
        lp.style.opacity = '0';
        setTimeout(() => { lp.style.display = 'none'; }, 300);
    }
}

function renderLaunchpad(query) {
    const lp = document.getElementById('launchpad-overlay');
    const filteredApps = launchpadApps.filter(app => app.name.toLowerCase().includes(query.toLowerCase()));

    let appsHtml = '';
    filteredApps.forEach(app => {
        appsHtml += `<div class="lp-app" onclick="openAppFromLP('${app.id}')">
            <img src="${app.icon}" alt="${app.name}">
            <div class="lp-app-name">${app.name}</div>
        </div>`;
    });

    lp.innerHTML = `
        <div class="lp-search-container">
            <span class="lp-search-icon">🔍</span>
            <input type="text" class="lp-search-input" placeholder="Search" value="${query}" oninput="renderLaunchpad(this.value)">
        </div>
        <div class="lp-grid">
            ${appsHtml}
        </div>
        <div class="lp-dots">
            <div class="lp-dot active"></div>
            <div class="lp-dot"></div>
        </div>
    `;

    const searchInput = lp.querySelector('.lp-search-input');
    if (searchInput) {
        searchInput.focus();
        searchInput.setSelectionRange(query.length, query.length);
    }
}

function openAppFromLP(appName) {
    toggleLaunchpad();
    openApp(appName);
}

function createWindow(appName, title, content) {
    const win = document.createElement('div');
    win.className = 'mac-window'; win.dataset.app = appName;
    const offset = document.querySelectorAll('.mac-window').length * 30;
    win.style.top = (80 + offset) + 'px'; win.style.left = (150 + offset) + 'px';
    if (appName === 'mail' || appName === 'messages' || appName === 'maps' || appName === 'photos' || appName === 'facetime' || appName === 'calendar' || appName === 'contacts' || appName === 'reminders' || appName === 'notes' || appName === 'tv' || appName === 'music' || appName === 'podcasts' || appName === 'appstore' || appName === 'settings' || appName === 'finder' || appName === 'trash' || appName === 'downloads' || appName === 'safari') { win.style.width = '1000px'; win.style.height = '700px'; }
    win.style.zIndex = ++zIndexCounter;
    win.innerHTML = '<div class="window-title-bar"><div class="traffic-lights"><div class="light close" onclick="closeWindow(this)"></div><div class="light minimize"></div><div class="light maximize"></div></div><div class="window-title">' + title + '</div></div><div class="window-content">' + content + '</div><div class="resize-handle"></div>';
    win.addEventListener('mousedown', function () { focusWindow(win); });
    const titleBar = win.querySelector('.window-title-bar');
    const mailHeader = win.querySelector('.mail-header');
    const dragSource = (appName === 'mail' && mailHeader) ? mailHeader : titleBar;
    let isDragging = false; let dragOffset = { x: 0, y: 0 };
    dragSource.addEventListener('mousedown', function (e) { if (e.target.classList.contains('light')) return; isDragging = true; dragOffset.x = e.clientX - win.offsetLeft; dragOffset.y = e.clientY - win.offsetTop; focusWindow(win); });
    const resizeHandle = win.querySelector('.resize-handle');
    let isResizing = false; let startWidth, startHeight, startX, startY;
    resizeHandle.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); isResizing = true; startX = e.clientX; startY = e.clientY; startWidth = parseInt(document.defaultView.getComputedStyle(win).width, 10); startWidth = isNaN(startWidth) ? 1000 : startWidth; startHeight = parseInt(document.defaultView.getComputedStyle(win).height, 10); startHeight = isNaN(startHeight) ? 700 : startHeight; focusWindow(win); });
    document.addEventListener('mousemove', function (e) { if (isDragging) { win.style.left = (e.clientX - dragOffset.x) + 'px'; win.style.top = (e.clientY - dragOffset.y) + 'px'; } else if (isResizing) { const newWidth = startWidth + (e.clientX - startX); const newHeight = startHeight + (e.clientY - startY); if (newWidth > 300) win.style.width = newWidth + 'px'; if (newHeight > 200) win.style.height = newHeight + 'px'; } });
    document.addEventListener('mouseup', function () { isDragging = false; isResizing = false; });
    document.getElementById('window-container').appendChild(win);
}

function focusWindow(win) { win.style.zIndex = ++zIndexCounter; }
function closeWindow(btn) { const win = btn.closest('.mac-window'); const appName = win.dataset.app; if (appName === 'facetime') stopCamera(); win.remove(); updateDockIndicator(appName, false); }
function updateDockIndicator(appName, isOpen) {
    const dockIcon = document.querySelector('.dock-icon[onclick*="' + appName + '"]');
    if (!dockIcon) return;
    let dot = dockIcon.querySelector('.dot');
    if (!dot) { dot = document.createElement('div'); dot.className = 'dot'; dockIcon.appendChild(dot); }
    if (isOpen) dot.classList.add('active'); else dot.classList.remove('active');
}
