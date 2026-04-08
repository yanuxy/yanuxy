document.addEventListener('DOMContentLoaded', () => {
    fetch('data/list.json')
        .then(response => response.json())
        .then(data => {
            const novelList = document.getElementById('novel-list');
            novelList.innerHTML = '';

            if (data.length === 0) {
                novelList.innerHTML = '<p>Belum ada novel. Silakan tambahkan di data/list.json</p>';
                return;
            }

            data.forEach(novel => {
                const card = document.createElement('a');
                card.href = `detail.html?novel=${novel.id}`;
                card.className = 'novel-card';
                card.innerHTML = `
                    <img src="${novel.cover}" alt="${novel.title}">
                    <div class="novel-card-content">
                        <h3>${novel.title}</h3>
                        <p>Oleh: ${novel.author}</p>
                        <p class="status">${novel.status}</p>
                        <p>${novel.description.substring(0, 100)}...</p>
                    </div>
                `;
                novelList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading catalog:', error);
            document.getElementById('novel-list').innerHTML = '<p>Gagal memuat katalog novel. Pastikan file data/list.json sudah benar.</p>';
        });
});
