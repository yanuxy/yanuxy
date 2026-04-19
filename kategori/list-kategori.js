const allCategories = [
    {
        nama: "Novel",
        img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: i === 0 ? "Sistem Kekayaan Rahasia" : `Judul Novel ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Novel+${i+1}`,
            file: `novel-${i+1}.js`
        }))
    },
    {
        nama: "Programming",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: `Buku Programming ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Prog+${i+1}`,
            file: `prog-${i+1}.js`
        }))
    },
    {
        nama: "Finansial",
        img: "https://images.unsplash.com/photo-1579621970795-87faff3f900a",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: `Buku Finansial ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Fin+${i+1}`,
            file: `fin-${i+1}.js`
        }))
    },
    {
        nama: "Pertanian",
        img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: `Buku Pertanian ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Tani+${i+1}`,
            file: `tani-${i+1}.js`
        }))
    },
    {
        nama: "Peternakan",
        img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: `Buku Peternakan ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Ternak+${i+1}`,
            file: `ternak-${i+1}.js`
        }))
    },
    {
        nama: "Perkebunan",
        img: "https://images.unsplash.com/photo-1592419044706-39796d40f98c",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: `Buku Perkebunan ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Kebun+${i+1}`,
            file: `kebun-${i+1}.js`
        }))
    },
    {
        nama: "Parfum",
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: `Buku Parfum ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Parfum+${i+1}`,
            file: `parfum-${i+1}.js`
        }))
    },
    {
        nama: "Wirausaha",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: `Buku Wirausaha ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Bisnis+${i+1}`,
            file: `bisnis-${i+1}.js`
        }))
    },
    {
        nama: "Ideologi",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2923216",
        books: Array.from({ length: 30 }, (_, i) => ({
            judul: `Buku Ideologi ${i+1}`,
            sampul: `https://via.placeholder.com/300x400/111/fff?text=Ideologi+${i+1}`,
            file: `ide-${i+1}.js`
        }))
    }
];
