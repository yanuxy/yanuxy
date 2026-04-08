document.addEventListener('DOMContentLoaded', () => {
    // Memuat data novel dari file JSON
    fetch('data/novel.json')
        .then(response => response.json())
        .then(data => {
            // Update informasi novel di halaman
            document.title = data.title;
            document.getElementById('novel-title').textContent = data.title;
            document.getElementById('novel-display-title').textContent = data.title;
            document.getElementById('novel-author').textContent = `Penulis: ${data.author}`;
            document.getElementById('novel-description').textContent = data.description;
            document.getElementById('novel-cover').src = data.cover;
            document.getElementById('chapter-count').textContent = `${data.chapters.length} Bab`;
            document.getElementById('novel-status').textContent = `Status: ${data.status}`;
            document.getElementById('footer-author').textContent = data.author;

            // Render daftar bab
            const chapterList = document.getElementById('chapter-list');
            chapterList.innerHTML = ''; // Bersihkan loading text

            data.chapters.forEach((chapter, index) => {
                const chapterLink = document.createElement('a');
                chapterLink.href = `read.html?id=${chapter.id}`;
                chapterLink.className = 'chapter-item';
                chapterLink.innerHTML = `<strong>Bab ${index + 1}</strong><br>${chapter.title}`;
                chapterList.appendChild(chapterLink);
            });
        })
        .catch(error => {
            console.error('Error loading novel data:', error);
            document.getElementById('chapter-list').innerHTML = '<p>Gagal memuat daftar bab. Pastikan file data/novel.json ada.</p>';
        });
});
