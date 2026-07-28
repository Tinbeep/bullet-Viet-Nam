// Lấy khu vực hiển thị nội dung
const pageContent = document.getElementById("page-content");

// Lấy các nút
const aboutBtn = document.querySelector(".about-btn");
const tournamentBtn = document.querySelector(".tournament-btn");
const rulesBtn = document.querySelector(".rules-btn");
const rankingBtn = document.querySelector(".ranking-btn");

// Trang About
aboutBtn.addEventListener("click", function () {
    pageContent.innerHTML = `
        <h3>📘 About Bullet Viet Nam</h3>

        <p>Bullet Viet Nam is a friendly chess club for Bullet players.</p>

        <p>We organize weekly arenas, community events and exciting tournaments.</p>

        <p>Everyone is welcome, from beginners to masters.</p>
    `;
});
const pageContent = document.getElementById("page-content");

const aboutBtn = document.querySelector(".about-btn");

aboutBtn.addEventListener("click", function () {

pageContent.innerHTML = `
<h3>📘 About Bullet Viet Nam</h3>

<p>Welcome to Bullet Viet Nam.</p>

<p>We organize Bullet tournaments every Tuesday, Thursday, Saturday and Sunday.</p>

<p>Everyone is welcome to join and improve together!</p>

`;

});
