var menuInit = [
    {
        id: 1,
        judul: "Bubur Susu Alpukat",
        path: "/images/menu/Picture1.jpg",
        highlight: "Alpukat merupakan sumber serat, vitamin C, vitamin A, dan vitamin E yang baik untuk meningkatkan sistem kekebalan tubuh. Dibandingkan dengan buah-buahan lain untuk MPASI, alpukat dianggap memiliki nilai gizi tertinggi. Alasannya, alpukat merupakan sumber terbaik untuk protein, niasin, tiamin, riboflavin, asam folat, dan seng yang baik untuk kesehatan tubuh.",
        bahan: [
            "Buah Alpukat",
            "Sendok takar susu formula bubuk"
        ],
        cara: [
            "Haluskan daging buah Alpukat dengan menggunakan food processor",
            "Tambahkan dua sendok takar susu formula bubuk, aduk hingga rata",
            "Sajikan"
        ]

    },
    {
        id: 2,
        judul: "Bubur Susu Kedelai",
        path: "/images/menu/Picture2.jpg",
        highlight: "Kedelai mengandung delapan asam amino essensial yang diperlukan bagi pertumbuhan dan meningkatkan kecerdasan anak.",
        bahan: [
            "100 gr Kedelai",
            "Sendok takar susu formula bubuk"
        ],
        cara: [
            "Haluskan daging buah Alpukat dengan menggunakan food processor",
            "Tambahkan dua sendok takar susu formula bubuk, aduk hingga rata",
            "Sajikan"
        ]

    },
    {
        id: 3,
        judul: "Bubur Susu Kacang Hijau",
        path: "/images/menu/Picture3.jpg",
        highlight: "Kacang kacangan, termasuk kacang hijau merupakan sumber protein yang sangat tinggi. Di dalam kacang hijau juga terkandung berbagai vitamin dan mineral, seperti zat besi dan magnesium.",
        bahan: [
            "Buah Alpukat",
            "Sendok takar susu formula bubuk"
        ],
        cara: [
            "Haluskan daging buah Alpukat dengan menggunakan food processor",
            "Tambahkan dua sendok takar susu formula bubuk, aduk hingga rata",
            "Sajikan"
        ]

    },
    {
        id: 4,
        judul: "Bubur Susu Kacang Merah",
        path: "/images/menu/Picture4.jpg",
        highlight: "Kacang merah sangat baik untuk buah hati karena mengandung mineral fosfor yang tinggi. Fosfor bermanfaat untuk menjaga Kesehatan tulang dan gigi.",
        bahan: [
            "Buah Alpukat",
            "Sendok takar susu formula bubuk"
        ],
        cara: [
            "Haluskan daging buah Alpukat dengan menggunakan food processor",
            "Tambahkan dua sendok takar susu formula bubuk, aduk hingga rata",
            "Sajikan"
        ]

    },
    {
        id: 5,
        judul: "Bubur Susu Alpukat",
        path: "/images/menu/Picture5.jpg",
        highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bahan: [
            "Buah Alpukat",
            "Sendok takar susu formula bubuk"
        ],
        cara: [
            "Haluskan daging buah Alpukat dengan menggunakan food processor",
            "Tambahkan dua sendok takar susu formula bubuk, aduk hingga rata",
            "Sajikan"
        ]

    },
    {
        id: 6,
        judul: "Tim Bubur Manado Daging dan Udang",
        path: "/images/menu/Picture6.jpg",
        highlight: "Jagung sangat baik untuk saluran cerna, menjaga Kesehatan tulang dan gigi serta membangun massa otot.Daging ayam juga memiliki kandungan zink yang tinggi dan diperlukan dalam berbagai metabolisme penting tubuh.",
        bahan: [
            "Buah Alpukat",
            "Sendok takar susu formula bubuk"
        ],
        cara: [
            "Haluskan daging buah Alpukat dengan menggunakan food processor",
            "Tambahkan dua sendok takar susu formula bubuk, aduk hingga rata",
            "Sajikan"
        ]

    },


]


var menus = menuInit
if (localStorage && localStorage.getItem('menus')) {
    menus = JSON.parse(localStorage.getItem('menus'));
} else {
    menus = menuInit;
    localStorage.setItem('menus', JSON.stringify(menuInit));
}