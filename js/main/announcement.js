const storage = require('electron-localstorage');
storage.setStoragePath(path.join(__dirname, '../../../../RF-Monitor_config/config.json'));

server_url = storage.getItem("server_url");

document.addEventListener('DOMContentLoaded', function() {
    const announcements = [
        { type: '通知', title: '系統維護公告' },
        { type: '更新', title: '新功能發布' },
        { type: '活動', title: '年度慶典' }
    ];

    const listContainer = document.getElementById('announcement-list');

    announcements.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.classList.add('announcement-item');
        announcementItem.innerHTML = `
            <h2>${announcement.type}</h2>
            <p>${announcement.title}</p>
            <hr>
        `;
        listContainer.appendChild(announcementItem);
    });
});

function update(){
    XHR = createXHR()
    XHR.open("GET",server_url+":8787/getAnnouncement",true);
    XHR.send(null);
    XHR.on
}