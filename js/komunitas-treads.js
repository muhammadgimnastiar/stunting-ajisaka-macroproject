var diskusiInit = [
    {
        id: 1,
        judul: "Anak saya susah banget makan sayur bun, kira kira ada solusi ga ya biar anak saya mau makan",
        author: "Rosmawati",

        date: Date.now,
        respons: [{
            author: "Rosmawati",
            date: Date.now(),
            content: "Kira - kira bunda - bunda sekalian punya trik ga ya biar anak saya mau makan sayur, dia sayur cuman suka kentang, mungkin ada trik biar anak saya mau makan sayuran hijau"
        },
        {
            author: "Maesaroh",
            date: Date.now(),
            content: "Mungkin bisa dicoba kaya saya bun, jadi sayurnya di campur ke cemilan yang dia suka, atau coba resep resep masakan yang bisa membuat rasa sayurnya menjadi berkurang bun"
        },
        {
            author: "Cecep",
            date: Date.now(),
            content: "Langsung jejelin aja bun, atau ga ancem biar kapok"
        }

        ]
    },
    {
        id: 2,
        judul: "Anak saya sudah berumur 1 tahun lebih tapi belum bisa berjalan,  kira kira bagaimana untuk melatihnya ya",
        author: "Sukma",

        respons: [{
            author: "Rosmawati",
            date: Date.now(),
            content: "Kira - kira bunda - bunda sekalian punya trik ga ya biar anak saya mau makan sayur, dia sayur cuman suka kentang, mungkin ada trik biar anak saya mau makan sayuran hijau"
        },
        {
            author: "Maesaroh",
            date: Date.now(),
            content: "Mungkin bisa dicoba kaya saya bun, jadi sayurnya di campur ke cemilan yang dia suka, atau coba resep resep masakan yang bisa membuat rasa sayurnya menjadi berkurang bun"
        },
        {
            author: "Cecep",
            date: Date.now(),
            content: "Langsung jejelin aja bun, atau ga ancem biar kapok"
        }

        ]
    },
    {
        id: 3,
        judul: "Anak saya sudah berumur 5 tahun  belum bisa membaca, apakah anak saya terkena stunting ?",
        author: "Salsabila",
        respons: [{
            author: "Rosmawati",
            date: Date.now(),
            content: "Kira - kira bunda - bunda sekalian punya trik ga ya biar anak saya mau makan sayur, dia sayur cuman suka kentang, mungkin ada trik biar anak saya mau makan sayuran hijau"
        },
        {
            author: "Maesaroh",
            date: Date.now(),
            content: "Mungkin bisa dicoba kaya saya bun, jadi sayurnya di campur ke cemilan yang dia suka, atau coba resep resep masakan yang bisa membuat rasa sayurnya menjadi berkurang bun"
        },
        {
            author: "Cecep",
            date: Date.now(),
            content: "Langsung jejelin aja bun, atau ga ancem biar kapok"
        }

        ]
    },
]


var diskusi = diskusiInit
if (localStorage && localStorage.getItem('diskusi')) {
    diskusi = JSON.parse(localStorage.getItem('diskusi'));
} else {
    threads = diskusiInit;
    localStorage.setItem('diskusi', JSON.stringify(diskusiInit));
}