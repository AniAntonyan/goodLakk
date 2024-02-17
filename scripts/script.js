/**
=========================================
@SELECTORS 
=========================================
**/

const header = document.querySelector('header');
const menuBar = document.querySelector('.menu_bar');
const sidebar = document.querySelector('aside .sidebar');
const sideBg = document.querySelector('aside .dark_bg');
const closeAsideBar = document.querySelector('aside .fa-times');
const catalogProd = document.querySelector(".catalog_prod");
const arrowLeft = document.querySelector(".catalog_prod  span");
const link = document.querySelector(".catalog .catalog_link");
const items = document.querySelector(".sidebar_links .catalog_items");
const info = document.querySelector(".sidebar_links .info");
const imageList = document.querySelector(".slider-wrapper .image-list");
const closeSearchBar = document.querySelector('.close_search_bar');
const client = document.querySelector('.client');
const searchIcon = document.querySelector('.client .search');
const searchBar = document.querySelector('.search_bar');
const searchContainer = document.querySelector('.search_container');
const popularImages = document.querySelectorAll('.search_container .box_container .box img');
const slider = document.querySelector('.home .slider');
const btnPrevSlide = document.querySelector('.home .slider .slider_btns .btn_slide.prev')
const btnNextSlide = document.querySelector('.home .slider .slider_btns .btn_slide.next')
const footer = document.querySelector('footer .box_container');
const scrollTop = document.querySelector('footer .scroll_top');

/**
=========================================
@EVENT_LISTENERS
=========================================
**/

document.addEventListener('DOMContentLoaded', onLoadDom);
menuBar.addEventListener('click', openAsideModal);
catalogProd.addEventListener("click", catalogProdFunc);
arrowLeft.addEventListener("click", arrowLeftHandler);
closeAsideBar.addEventListener('click', closeAsideModal);
searchIcon.addEventListener('click', searchBarFunc);
searchBar.addEventListener('click', searchBarFunc);
closeSearchBar.addEventListener('click', closeSearchBarFunc);
btnPrevSlide.addEventListener('click', prevSlideFunc);
btnNextSlide.addEventListener('click', nextSlideFunc);
footer.addEventListener('click', onHandlerFooter);
scrollTop.addEventListener('click', scrollTopFunc);


/**
=========================================
@SLIDER
=========================================
**/

const sliderData = [
    {
        id: 1,
        title: 'Телеграм-канал <span style="color: #ffffff; background-color: #12329b;">@goodlakk_official</span> для тех, кто хочет знать о новинках первым',
        sub_title: 'Будь в курсе последних новостей ГУД ЛАКК',
        btn_text: 'Перейти в ТГ-канал',
        image_src: 'images/slider/slide1.png',
    },
    {
        id: 2,
        title: '<p>Подписывайся <br>на сообщество<br><span style="color: #ffffff; background-color: #12329b;">ВКонтакте</span></p>',
        sub_title: 'Будь в курсе последних новостей ГУД ЛАКК',
        btn_text: 'Подписаться в ВК',
        image_src: 'images/slider/slide2.png',
    },
    {
        id: 3,
        title: '<p>Зовите <span style="color: #ffffff; background-color: #12329b;">ИНГУ</span>,<br><span style="color: #ffffff; background-color: #12329b;">БИЛЛИ</span> нашёл<br>тут замену!</p>',
        sub_title: 'Знакомая мебель, которую легко купить и собрать',
        btn_text: 'Смотреть',
        image_src: 'images/slider/slide3.png',
    },
];

let currentSlide = 1;

// Set interval for auto-sliding
const interval = setInterval(() => {
    nextSlideFunc();
}, 7000);

// Function to create a slide
function createSlide(obj, index) {
    const slide = document.createElement('div');
    slide.className = currentSlide === (index + 1) ? 'slide active' : 'slide';

    const content = document.createElement('div');
    content.className = 'content';

    const title = document.createElement('h3');
    title.className = 'title';
    title.innerHTML = obj.title;
    content.appendChild(title);

    const sub_title = document.createElement('p');
    sub_title.className = 'sub_title';
    sub_title.innerText = obj.sub_title;
    content.appendChild(sub_title);

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = obj.btn_text;
    btn.innerHTML += '<i class="fa-solid fa-arrow-right"></i>';
    content.appendChild(btn);

    const image = document.createElement('div');
    image.className = 'image';

    const img = document.createElement('img');
    img.src = obj.image_src;
    image.appendChild(img);

    slide.appendChild(content);
    slide.appendChild(image);

    return slide;
};

// Function to update the slider
function updateSlider() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide, index) => {
        slide.className = currentSlide === (index + 1) ? 'slide active' : 'slide';
    });

    updateSliderControls(); // Call the function to update circles based on the current slide
};

// Function to show the next slide
function nextSlideFunc() {
    if (currentSlide !== sliderData.length) {
        currentSlide += 1;
    } else {
        currentSlide = 1;
    }

    updateSlider();
};

// Function to show the previous slide
function prevSlideFunc() {
    if (currentSlide !== 1) {
        currentSlide -= 1;
    } else {
        currentSlide = sliderData.length;
    }

    updateSlider();
};

// Function to update the circles
function updateSliderControls() {
    const sliderControls = document.querySelector('.slider_controls');
    sliderControls.innerHTML = ''; // Clear existing circles

    sliderData.forEach((obj, index) => {
        const control = document.createElement('div');
        control.className = currentSlide === (index + 1) ? 'control active' : 'control';
        control.addEventListener('click', () => moveCircle(index + 1));
        sliderControls.appendChild(control);
    });
}

function moveCircle(index) {
    currentSlide = index;
    updateSlider();
}


/**
=========================================
@CAROUSEL_SLIDER
=========================================
**/
const carousel_slider_data = [
    {
        id: 1,
        image: "images/carousel-slider/slider.png",
        hover_image: "images/carousel-slider/slider18.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    {
        id: 2,
        image: "images/carousel-slider/slider1.png",
        hover_image: "images/carousel-slider/slider14.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    {
        id: 3,
        image: "images/carousel-slider/slider2.png",
        hover_image: "images/carousel-slider/slider13.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    
    {
        id: 4,
        image: "images/carousel-slider/slider3.png",
        hover_image: "images/carousel-slider/slider14.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    {
        id: 5,
        image: "images/carousel-slider/slider4.png",
        hover_image: "images/carousel-slider/slider18.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    {
        id: 6,
        image: "images/carousel-slider/slider5.jpg",
        hover_image: "images/carousel-slider/slider14.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    {
        id: 7,
        image: "images/carousel-slider/slider6.png",
        hover_image: "images/carousel-slider/slider13.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    {
        id: 8,
        image: "images/carousel-slider/slider7.png",
        hover_image: "images/carousel-slider/slider14.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    {
        id: 9,
        image: "images/carousel-slider/slider8.png",
        hover_image: "images/carousel-slider/slider18.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    },
    {
        id: 10,
        image: "images/carousel-slider/slider9.png",
        hover_image: "images/carousel-slider/slider18.png",
        description: "Шкаф ПЕГАС трехдверный с рамочным фасадом"
    }

]


function renderCarouselSlider() {
    imageList.innerHTML = "";
    
    carousel_slider_data.forEach(item => {
        const sliderItem = document.createElement("div");
        const hoverImage = document.createElement("div");
        const descr = document.createElement("p"); 
        hoverImage.classList.add('hoverImage');
        sliderItem.classList.add("image_item");
        sliderItem.innerHTML = `<img src="${item.image}" alt="not img">`;
        hoverImage.innerHTML = `<img src="${item.hover_image}" alt="not img">`;
        descr.innerHTML = `${item.description}`;
        console.log(item.description); // Log description to console for debugging
        imageList.appendChild(sliderItem);
        sliderItem.appendChild(hoverImage);
        sliderItem.appendChild(descr); // Append description
    });
}

function carouselSliderFunc() {
    const initSlider = () => {

        if (!imageList) {
            console.error("Image list not found. Check your selector.");
            return;
        }
       
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
        const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
        const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        const imageWidth = 350;

        scrollbarThumb.addEventListener("mousedown", (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;


                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList.scrollLeft = scrollPosition;
            }

     
            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }


            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        });

        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });

        const handleSlideButtons = () => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
        }

        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }

     
        imageList.addEventListener("scroll", () => {
            updateScrollThumbPosition();
            handleSlideButtons();
        });
    }

    window.addEventListener("resize", initSlider);
    window.addEventListener("load", initSlider);

    initSlider();
}


/**
=========================================
@FOOTER
=========================================
**/
const footerData = [
    {
        id: 1,
        title: 'Каталог товаров',
        items: [
            'Комоды',
            'Тумбы',
            'Кровати, прикроватные тумбы',
            'Шкафы',
            'Стеллажи',
            'Столы и стулья',
            'Мягкая мебель',
            'Зеркала, вешалки и полки',
        ]
    },
    {
        id: 2,
        title: 'Покупателям',
        items: [
            'Доставка и оплата',
            'Розыгрыш призов',
            'Вопросы и ответы',
            'Контакты',
            'О компании',
            'Мероприятия'
        ]
    },
    {
        id: 3,
        title: 'Дилерам',
        items: [
            'Стать дилером'
        ]
    }
];

function createFooter() {
    footerData.forEach(function (data) {
        const box = document.createElement('div');
        box.className = 'box';

        const title = document.createElement('h3');
        title.className = 'title';
        title.textContent = data.title;
        title.innerHTML += '<i class="fa-solid fa-chevron-down"></i>';

        const subBox = document.createElement('div');
        subBox.className = 'sub_box';

        if (data.items) {
            data.items.forEach(function (itemText) {
                const item = document.createElement('div');
                item.className = 'item';

                const link = document.createElement('a');
                link.href = '#';
                link.textContent = itemText;
                item.appendChild(link);
                subBox.appendChild(item);
            });
        }

        box.appendChild(title);
        box.appendChild(subBox);
        footer.appendChild(box);
    });
}


/**
=========================================
@FUNCTIONS
=========================================
**/

function onLoadDom() {
    // Add slider data to DOM
    sliderData.forEach((obj, index) => {
        const slide = createSlide(obj, index);
        slider.appendChild(slide);
    });

    updateSliderControls();
    carouselSliderFunc();
    renderCarouselSlider();
    createFooter();
}

function searchBarFunc() {
    header.classList.add('active');
    searchBar.classList.add('active');
    searchContainer.classList.add('active');
    closeSearchBar.classList.add('show');
    menuBar.classList.add('hidden');
    client.classList.add('hidden');
}

function closeSearchBarFunc() {
    header.classList.remove('active');
    searchBar.classList.remove('active');
    searchContainer.classList.remove('active');
    closeSearchBar.classList.remove('show');
    menuBar.classList.remove('hidden');
    client.classList.remove('hidden');
}

function onHandlerFooter(e) {
    const event = e.target;

    if (event.classList[1] === 'fa-chevron-down' || event.classList[1] === 'fa-chevron-up') {
        const subBox = event.parentElement.parentElement.children[1];
        subBox.classList.toggle('active');

        if (event.classList.contains('fa-chevron-down')) {
            event.classList.remove('fa-chevron-down');
            event.classList.add('fa-chevron-up');
        } else {
            event.classList.remove('fa-chevron-up');
            event.classList.add('fa-chevron-down');
        }
    }
}

function scrollTopFunc() {
    window.scrollTo(0, 0);
}

/**
=========================================
@SIDEBAR 
=========================================
**/


function openAsideModal(){
    sidebar.classList.add('active');
    sideBg.classList.add('active');
}

function closeAsideModal(){
    sidebar.classList.remove('active');
    sideBg.classList.remove('active');
}

function catalogProdFunc(){
    link.classList.remove("active");
    link.classList.toggle("hide");
    arrowLeft.classList.toggle("hide");
    info.classList.toggle("hide");
}

function arrowLeftHandler(){
    link.classList.toggle("active");
}

const comod_product = [
    { id: "1", title: "Комоды" },
    { id: "2", item: "МАЛЬТА" },
    { id: "3", item: "КАНТРИ" },
    { id: "4", item: "ВАРМА" },
    { id: "5", item: "ВЕСТВИК" },
    { id: "6", item: "СИРИУС" },
  ];
  
  const catalog_cabinets = [
    { id: "10", title: "Тумбы" },
    { id: "1", item: "Тумбы с ящиками" },
    { id: "2", item: "Тумбы комбинированные" },
    { id: "3", item: "Тумбы ТВ" },
    { id: "4", item: "Тумбы-витрины" },
    { id: "5", item: "Тумбы для обуви" },
  ];
  
  const catalog_BedsBedsideTables = [
    { id: "10", title: "Кровати, прикроватные тумбы" },
    { id: "1", item: " Кровати двойные" },
    { id: "2", item: "Кровати одинарные" },
    { id: "3", item: "Кровати раздвижные" },
    { id: "4", item: "Тумбы прикроватные" },
    { id: "5", item: "Ящики выкатные" },
  ];
  
  const catalog_closet = [
    { id: "10", title: "Шкафы" },
    { id: "1", item: "Шкафы комбинированные" },
    { id: "2", item: "Шкафы двухстворчатые" },
    { id: "3", item: "Шкафы трехстворчатые" },
    { id: "4", item: "Шкафы четырехстворчатые" },
    { id: "5", item: "Шкафы одностворчатые" },
    { id: "6", item: "Полки для шкафов" },
    { id: "7", item: "Ящики выдвижные" },
  ];
  
  const catalog_shelving = [
    { id: "10", title: "Стеллажи" },
    { id: "1", item: "Стеллажи" },
    { id: "2", item: "Стеллажи открытые" },
    { id: "3", item: "Стеллажная система 'ФОРА'" },
    { id: "4", item: "Стеллажи с ящиками" },
  ];
  
  const ctatalogTableAndChairs = [
    { id: "10", title: "Столы и стулья" },
    { id: "1", item: "Обеденные группы" },
    { id: "2", item: "Столы журнальные" },
    { id: "3", item: "Столы обеденные" },
    { id: "4", item: "Столы письменные" },
    { id: "5", item: "Столы туалетные" },
    { id: "6", item: "Полки для шкафов" },
    { id: "7", item: "Стулья" },
  ];
  
  const catalog_cushionedFurniture = [
    { id: "10", title: "Мягкая мебель" },
    { id: "2", item: "Диван-кровати" },
    { id: "3", item: "Кресла" },
    { id: "4", item: "Мягкие стулья" },
  ];
  
  const catalog_mirrorsHangersAndShelves = [
    { id: "10", title: "Зеркала, вешалки и полки" },
    { id: "1", item: "Вешалки" },
    { id: "2", item: "Зеркала" },
    { id: "3", item: "Полки" },
  ];
  
  function handleleft() {
    items.innerHTML = "";
    link.classList.remove("hide");
    catalogProd.classList.add("catalog_prod");
  }
  
  const renderCatalogTab = (data) => {
    link.classList.toggle("hide");
    catalogProd.classList.remove("catalog_prod");
    catalogProd.classList.add("hide");
    // catalog_prod.classList.toggle("hide");
    items.innerHTML = "";
    const heading = document.createElement("h2");
    heading.innerHTML = `<i class="fa-solid fa-arrow-left-long" onclick={handleleft()}></i>${
      data[0].title || data[0].item
    }`;
    heading.classList.add("catalog_prod");
    items.appendChild(heading);
  
    items.innerHTML += data
      .slice(1)
      .map((item) => `<a href="#${item.id}">${item.item}</a>`)
      .join("");
  };
  
  