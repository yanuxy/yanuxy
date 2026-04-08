document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = urlParams.get('id');

    if (!chapterId) {
        window.location.href = 'index.html';
        return;
    }

    // Memuat data novel
    fetch('data/novel.json')
        .then(response => response.json())
        .then(data => {
            // Update informasi dasar
            document.getElementById('novel-title').textContent = data.title;
            document.getElementById('footer-author').textContent = data.author;

            // Cari bab yang sedang dibaca
            const chapterIndex = data.chapters.findIndex(c => c.id === chapterId);
            const chapter = data.chapters[chapterIndex];

            if (!chapter) {
                document.getElementById('chapter-text').innerHTML = '<p>Bab tidak ditemukan.</p>';
                return;
            }

            // Update judul halaman dan konten bab
            document.title = `${chapter.title} - ${data.title}`;
            document.getElementById('chapter-title').textContent = `Bab ${chapterIndex + 1}: ${chapter.title}`;
            
            // Render isi bab (mendukung format paragraf sederhana)
            const chapterTextDiv = document.getElementById('chapter-text');
            chapterTextDiv.innerHTML = chapter.content.split('\n\n').map(p => `<p>${p}</p>`).join('');

            // Setup navigasi bab
            const prevBtn = document.getElementById('prev-chapter');
            const nextBtn = document.getElementById('next-chapter');
            const prevBtnBottom = document.getElementById('prev-chapter-bottom');
            const nextBtnBottom = document.getElementById('next-chapter-bottom');
            const chapterSelect = document.getElementById('chapter-select');

            // Isi dropdown bab
            data.chapters.forEach((c, index) => {
                const option = document.createElement('option');
                option.value = c.id;
                option.textContent = `Bab ${index + 1}: ${c.title}`;
                if (c.id === chapterId) option.selected = true;
                chapterSelect.appendChild(option);
            });

            chapterSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    window.location.href = `read.html?id=${e.target.value}`;
                }
            });

            // Tombol sebelumnya
            if (chapterIndex > 0) {
                const prevId = data.chapters[chapterIndex - 1].id;
                const prevAction = () => window.location.href = `read.html?id=${prevId}`;
                prevBtn.onclick = prevAction;
                prevBtnBottom.onclick = prevAction;
            } else {
                prevBtn.disabled = true;
                prevBtnBottom.disabled = true;
            }

            // Tombol selanjutnya
            if (chapterIndex < data.chapters.length - 1) {
                const nextId = data.chapters[chapterIndex + 1].id;
                const nextAction = () => window.location.href = `read.html?id=${nextId}`;
                nextBtn.onclick = nextAction;
                nextBtnBottom.onclick = nextAction;
            } else {
                nextBtn.disabled = true;
                nextBtnBottom.disabled = true;
            }
        })
        .catch(error => {
            console.error('Error loading chapter data:', error);
            document.getElementById('chapter-text').innerHTML = '<p>Gagal memuat isi bab.</p>';
        });
});
