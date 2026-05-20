//data xe
const cars = [

    {
        id: 1,
        name: "KIA Carnival",
        price: "900.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2022",
        image: "../assets/image/anh1.jpg",
        desc: "Xe rộng rãi, option hiện đại, cửa lùa,..."
    },

    {
        id: 2,
        name: "Mazda 3 Sport Premium 2024",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh2.jpg",
        desc: "Thiết kế thể thao, nội thất cao cấp."
    },

    {
        id: 3,
        name: "Mazda 3 Sport Premium 2023",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2023",
        image: "../assets/image/anh3.jpg",
        desc: "Sedan hiện đại, vận hành mạnh mẽ."
    },

      {
        id: 4,
        name: "Hyundai Accent",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh5.jpg",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

      {
        id: 5,
        name: "Vinfast MVP 7",
        price: "800.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2026",
        image: "../assets/image/anh4.jpg",
        desc: "Xe điện 7 chổ, tiết kiệm chi phí, vận hành êm ái."
    },

      {
        id: 6,
        name: "Hyundai Custin 1.5T",
        price: "1.000.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh18.jpg",
        desc: "Xe sang cửa lùa hiện đại, nội thất đẹp, khoang hành khách rộng rãi."
    },

       {
        id: 7,
        name: "Hyundai Accent",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh7.jpg",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

      {
        id: 8,
        name: "Toyota Inova Cross",
        price: "900.000đ/ngày",
        seats: "8 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh6.jpg",
        desc: "Vận hành mạnh mẽ, tiết kiệm nhiên liệu."
    },

       {
        id: 9,
        name: "Hyundai Accent",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh9.jpg",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

       {
        id: 10,
        name: "Hyundai Accent",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh10.jpg",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

       {
        id: 11,
        name: "Hyundai Accent",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh11.jpg",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

      {
        id: 12,
        name: "Huyndai Solati",
        price: "2.000.000đ/ngày",
        seats: "16 chỗ",
        gearbox: "Tự sàn",
        year: "2024",
        image: "../assets/image/anh8.jpg",
        desc: "Nội thất sang trong, ghế bọc da nappa cao cấp, có hệ thống karaoke âm thanh chất lượng."
    },

       {
        id: 13,
        name: "Hyundai Accent",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh14.jpg",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
    },

      {
        id: 14,
        name: "Vinfast Limogreen",
        price: "900.000đ/ngày",
        seats: "7 chỗ",
        gearbox: "Tự động",
        year: "2025",
        image: "../assets/image/anh12.jpg",
        desc: "Xe điện 7 chổ, tiết kiệm chi phí, vận hành êm ái."
    },

      {
        id: 15,
        name: "Hyundai Accent",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh14.jpg",
        desc: "Sedan hiện đại, nội thất cao cấp, form dáng trẻ trung."
      },

      {
        id: 16,
        name: "Mazda 3",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh13.jpg",
        desc: "Sedan form trẻ trung hiện đại, vận hành mạnh mẽ."
    },

      {
        id: 17,
        name: "KIA K3",
        price: "600.000đ/ngày",
        seats: "4 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh16.jpg",
        desc: "Form xe thể thao, vận hành mạnh mẽ."
    },

      {
        id: 18,
        name: "Mitsubishi XFORCE Premium",
        price: "1.200.000đ/ngày",
        seats: "5 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh15.jpg",
        desc: "SUV hiện đại, vận hành mạnh mẽ."
    },

      {
        id: 19,
        name: "KIA Sportage",
        price: "1.200.000đ/ngày",
        seats: "5 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh8.jpg",
        desc: "SUV hiện đại, vận hành mạnh mẽ."
    },

      {
        id: 20,
        name: "KIA Sportage",
        price: "1.200.000đ/ngày",
        seats: "5 chỗ",
        gearbox: "Tự động",
        year: "2024",
        image: "../assets/image/anh8.jpg",
        desc: "SUV hiện đại, vận hành mạnh mẽ."
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

                    <a href="chi-tiet.html?id=${car.id}"
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

    // Lấy id trên URL
    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    // Tìm xe theo id
    const car = cars.find(item => item.id == id);

    // Render dữ liệu
    if(car){

        detail.innerHTML = `

            <div class="detail-image">
                <img src="${car.image}">
            </div>

            <div class="detail-info">

                <h1>${car.name}</h1>

                <p class="price">${car.price}</p>

                <p>${car.desc}</p>

                <ul>
                    <li>${car.seats}</li>
                    <li>${car.gearbox}</li>
                    <li>${car.year}</li>
                </ul>

                <button>Đặt xe ngay</button>

            </div>

        `;
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