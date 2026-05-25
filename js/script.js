//data xe
const cars = [

    {
    id: 1,
    name: "KIA Carnival",
    price: "900.000đ/ngày",
    seats: "7 chỗ",
    gearbox: "Tự động",
    year: "2022",
    image: "../assets/image/carnival/1.jpg",
    folder: "carnival",
    desc: "Xe rộng rãi, option hiện đại..."
    },

    {
        id: 2,
        name: "Mazda 3 Sport Premium 2024",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/mazda3/1.jpg",
        folder: "mazda3",
        desc: "Thiết kế thể thao, nội thất cao cấp."
    },

    {
        id: 3,
        name: "Hyundai Accent 1.4T",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2023",
        image: "../assets/image/accent/1.jpg",
        folder: "accent",
        desc: "Sedan hiện đại, vận hành mạnh mẽ."
    },

      {
        id: 4,
        name: "Hyundai Custin 1.5T",
        price: "1.000.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/custin/1.jpg",
        folder: "custin",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

      {
        id: 5,
        name: "Vinfast MVP 7",
        price: "800.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2026",
        image: "../assets/image/mvp7/1.jpg",
        folder : "mvp7",
        desc: "Xe điện 7 chổ, tiết kiệm chi phí, vận hành êm ái."
    },

      {
        id: 6,
        name: "Toyota Innova Cross Hybrid 2024",
        price: "1.000.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/innova/1.jpg",
        folder: "innova",
        desc: "Xe sang, hiện đại, nội thất đẹp, khoang hành khách rộng rãi."
    },

       {
        id: 7,
        name: "KIA K3 2024",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/kiak3/1.jpg",
        folder: "kiak3",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

      {
        id: 8,
        name: "Mitsubishi XFORCE 2024",
        price: "900.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2025",
        image: "../assets/image/mitsu/1.jpg",
        folder: "mitsu",
        desc: "Vận hành mạnh mẽ, nội thất hiện đại."
    },

       {
        id: 9,
        name: "Hyundai Solati",
        price: "2.000.000đ/ngày",
        seats: "16 chỗ",
        gearbox: "Số sàn",
        year: "2024",
        image: "../assets/image/solati/1.jpg",
        folder: "solati",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

       {
        id: 10,
        name: "Vinfast Limogreen",
        price: "900.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/limogreen/1.jpg",
        folder: "limogreen",
        desc: "Xe hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

];

// =======================
// RENDER DANH SÁCH XE
// =======================

const carContainer = document.getElementById("car-container");

if(carContainer){

    renderCars(cars);

}

// =======================
// FUNCTION RENDER
// =======================

function renderCars(data){

    carContainer.innerHTML = "";

    data.forEach(car => {

        carContainer.innerHTML += `

            <div class="car-card">

                <div class="badge">HOT</div>

                <img src="${car.image}" alt="">

                <div class="car-info">

                    <h3>${car.name}</h3>

                    <p class="price">${car.price}</p>

                    <p>
                        ${car.seats} •
                        ${car.gearbox} •
                        ${car.year}
                    </p>

                    href="chi-tiet.html?id=${car.id}&from=sanpham"
                       class="detail-btn">

                        Xem chi tiết

                    </a>

                </div>

            </div>

        `;

    });

}

// =======================
// SEARCH XE
// =======================

const search = document.getElementById("search");

if(search){

    search.addEventListener("keyup", function(){

        const keyword = search.value.toLowerCase();

        const filteredCars = cars.filter(car => {

            return car.name
                .toLowerCase()
                .includes(keyword);

        });

        renderCars(filteredCars);

    });

}

// =======================
// CHI TIẾT XE
// =======================

const detail = document.getElementById("detail");

if(detail){

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    const car = cars.find(item => item.id == id);

    if(car){

        detail.innerHTML = `

        <section class="detail-page">

            <!-- LEFT -->

            <div class="detail-left">

                <!-- IMAGE -->

                <div class="main-image">

                    <img id="mainImg"
                    src="${car.image}"
                    alt="">

                </div>

                <!-- THUMB -->

                <div class="thumb-list">

                    ${[1,2,3,4,5,6].map(num => `
                    <img class="${num === 1 ? 'active-thumb' : ''}"src="../assets/image/${car.folder}/${num}.jpg"alt="">`).join('')}

                </div>

                <!-- SPEC -->

                <div class="spec-box">

                    <h2>Thông số kỹ thuật</h2>

                    <div class="spec-grid">

                        <div class="spec-item">
                            <span>Tên xe</span>
                            <strong>${car.name}</strong>
                        </div>

                        <div class="spec-item">
                            <span>Số chỗ</span>
                            <strong>${car.seats}</strong>
                        </div>

                        <div class="spec-item">
                            <span>Hộp số</span>
                            <strong>${car.gearbox}</strong>
                        </div>

                        <div class="spec-item">
                            <span>Năm sản xuất</span>
                            <strong>${car.year}</strong>
                        </div>

                    </div>

                </div>

                <!-- DESC -->

                <div class="desc-box">

                    <h2>Mô tả xe</h2>

                    <p>
                        ${car.desc}
                    </p>

                </div>

            </div>

            <!-- RIGHT -->

            <div class="detail-right">

                <div class="info-card">

                    <div class="top-badge">

                        <span>HOT</span>
                        <span>${car.year}</span>

                    </div>

                    <h1>${car.name}</h1>

                    <div class="price-box">

                        <div class="price">

                            ${car.price}

                        </div>

                        <p>
                            Giá thuê theo ngày
                        </p>

                    </div>

                    <!-- META -->

                    <div class="meta-list">

                        <div class="meta-item">

                            <i class="fa-solid fa-users"></i>

                            <div>
                                <p>Số chỗ</p>
                                <strong>${car.seats}</strong>
                            </div>

                        </div>

                        <div class="meta-item">

                            <i class="fa-solid fa-gear"></i>

                            <div>
                                <p>Hộp số</p>
                                <strong>${car.gearbox}</strong>
                            </div>

                        </div>

                        <div class="meta-item">

                            <i class="fa-solid fa-calendar"></i>

                            <div>
                                <p>Năm sản xuất</p>
                                <strong>${car.year}</strong>
                            </div>

                        </div>

                    </div>

                    <!-- BUTTON -->

                    <a href="tel:0369418837"
                       class="call-btn">

                        <i class="fa-solid fa-phone"></i>

                        Gọi ngay

                    </a>

                    <a href="https://zalo.me/0369418837"
                       target="_blank"
                       class="message-btn">

                        <i class="fa-regular fa-message"></i>

                        Nhắn tin Zalo

                    </a>

                </div>

            </div>

        </section>

        `;

        // =======================
        // ĐỔI ẢNH
        // =======================

        const mainImg =
        document.getElementById("mainImg");

        const thumbs =
        document.querySelectorAll(".thumb-list img");

        thumbs.forEach(img => {

            img.addEventListener("click", () => {

                mainImg.src = img.src;

                document
                .querySelector(".active-thumb")
                ?.classList.remove("active-thumb");

                img.classList.add("active-thumb");

            });

        });

    }

}


// Hover effect test
console.log("Website thuê xe hoạt động");

// Search demo
const searchInput = document.querySelector(".search-box input");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        console.log(searchInput.value);

    });

}

// =======================
// FUNCTION RENDER XE
// =======================

function renderCars(data){

    carContainer.innerHTML = "";

    data.forEach(car => {

        carContainer.innerHTML += `

            <div class="car-card">

                <div class="badge">HOT</div>

                <img src="${car.image}" alt="">

                <div class="car-info">

                    <h3>${car.name}</h3>

                    <p class="price">${car.price}</p>

                    <p>

                        ${car.seats} •
                        ${car.gearbox} •
                        ${car.year}

                    </p>

                    <a href="chi-tiet.html?id=${car.id}"
                       class="detail-btn">

                        Xem chi tiết

                    </a>

                </div>

            </div>

        `;

    });

}