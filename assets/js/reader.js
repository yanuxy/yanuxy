document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const novelId = urlParams.get('novel');
    const chapterId = urlParams.get('id');

    if (!novelId || !chapterId) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('back-to-detail').href = `detail.html?novel=${novelId}`;

    fetch(`data/novels/${novelId}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('novel-title').textContent = data.title;
            document.getElementById('footer-author').textContent = data.author;

            const chapterIndex = data.chapters.findIndex(c => c.id === chapterId);
            const chapter = data.chapters[chapterIndex];

            if (!chapter) {
                document.getElementById('chapter-text').innerHTML = '<p>Bab tidak ditemukan.</p>';
                return;
            }

            document.title = `${chapter.title} - ${data.title}`;
            document.getElementById('chapter-title').textContent = `Bab ${chapterIndex + 1}: ${chapter.title}`;
            
            const chapterTextDiv = document.getElementById('chapter-text');
            // Mendukung paragraf dengan pemisah baris baru
            chapterTextDiv.innerHTML = chapter.content.split('\n\n').map(p => `<p>${p}</p>`).join('');

            const prevBtn = document.getElementById('prev-chapter');
            const nextBtn = document.getElementById('next-chapter');
            const prevBtnBottom = document.getElementById('prev-chapter-bottom');
            const nextBtnBottom = document.getElementById('next-chapter-bottom');
            const chapterSelect = document.getElementById('chapter-select');

            data.chapters.forEach((c, index) => {
                const option = document.createElement('option');
                option.value = c.id;
                option.textContent = `Bab ${index + 1}: ${c.title}`;
                if (c.id === chapterId) option.selected = true;
                chapterSelect.appendChild(option);
            });

            chapterSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    window.location.href = `read.html?novel=${novelId}&id=${e.target.value}`;
                }
            });

            if (chapterIndex > 0) {
                const prevId = data.chapters[chapterIndex - 1].id;
                const prevAction = () => window.location.href = `read.html?novel=${novelId}&id=${prevId}`;
                prevBtn.onclick = prevAction;
                prevBtnBottom.onclick = prevAction;
            } else {
                prevBtn.disabled = true;
                prevBtnBottom.disabled = true;
            }

            if (chapterIndex < data.chapters.length - 1) {
                const nextId = data.chapters[chapterIndex + 1].id;
                const nextAction = () => window.location.href = `read.html?novel=${novelId}&id=${nextId}`;
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
