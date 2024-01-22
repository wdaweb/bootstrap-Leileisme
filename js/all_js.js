   // 註冊 gsap plugin
   gsap.registerPlugin(ScrollTrigger);

   // gsap.from()
   // 4.banner/icon
   gsap.from('.banner_item', {
     scrollTrigger: {
     trigger: '.Carousel_box',
     start: 'center',
     end: 'top',
     invalidateOnRefresh:true,
     restart:true,
     // markers: true, // 打開標記(看不到的觸發線)
   },
   x: 1000,
   duration: 1.5,
   opacity:0
 })

 // 5.ourFarm
 gsap.from('.farm_text', {
     scrollTrigger: {
     trigger: '.banner_item',
     start: 'center',
     end: 'top',
     // markers: true, // 打開標記(看不到的觸發線)
   },
   x: -1000,
   duration: 1.5,
   opacity:0
 })

 gsap.from('.farm_img', {
     scrollTrigger: {
     trigger: '.banner_item',
     start: 'center',
     end: 'top',
     // markers: true, // 打開標記(看不到的觸發線)
   },
   x: 1000,
   duration: 1.5,
   opacity:0
 })

 // 7.ourTeam
 gsap.from('.ourTeam_card', {
 scrollTrigger: {
 trigger: '.Featured_Offers_box',
 start: 'center',
 end: 'top',
 // markers: true, // 打開標記(看不到的觸發線)
   },
   y: 1000,
   duration: 1.5,
   opacity:0
 })

 // 8.connected
 gsap.from('.connected_box', {
 scrollTrigger: {
 trigger: '.ourTeam_box',
 start: 'center ',
 end: 'center ',
 // markers: true, // 打開標記(看不到的觸發線)
   },
   x: -2000,
   duration: 1.2,
 })

 // 9.testimonial
 gsap.from('.carousel02_box', {
 scrollTrigger: {
 trigger: '.ourTeam_box',
 start: '70% top',
 end: 'center center',
//  markers: true, // 打開標記(看不到的觸發線)
   },
   x: 2000,
   duration: 1.2,
 })

 // 10.our blog
 gsap.from('.ourBlog_box_box', {
 scrollTrigger: {
 trigger: '.connected_box',
 start: 'top',
 end: 'top',
 // markers: true, // 打開標記(看不到的觸發線)
   },
   y: -1500,
   duration: 1.5,
   opacity:0
 })

 // 11.logos
 gsap.from('.logos_box', {
 scrollTrigger: {
 trigger: '.ourBlog_box_box',
 start: 'bottom',
 end: 'top',
//  markers: true, // 打開標記(看不到的觸發線)
   },
   x: 2000,
   duration: 2,
   delay: 1, 
 })

   // swiper 輪播圖
   var swiper = new Swiper('.mySwiperCarousel', {
     loop: true,
     effect: 'fade', // 使用淡入淡出效果
     autoplay: {
       delay: 5000, // 切換間隔時間 (毫秒)
       disableOnInteraction: false // 使用者互動後是否停止自動播放
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev'
     }
   })

   // 第五部分 導覽
   $('.nav-link').on('shown.bs.tab', function (e) {
     // 移除所有 nav-link 的文字顏色
     $('.nav-link').removeClass('farm_active_text')

     // 將點擊的 nav-link 添加文字綠色樣式
     $(this).addClass('farm_active_text')
   })

   // 第五部分 swiper  Thumbs gallery
   var swiperThumbs = new Swiper('.mySwiper', {
     loop: true,
     spaceBetween: 10,
     slidesPerView: 4,
     freeMode: true,
     watchSlidesProgress: true
   })

   var swiperGallery = new Swiper('.mySwiper2', {
     loop: true,
     spaceBetween: 10,
     thumbs: {
       swiper: swiperThumbs
     }
   })

   swiperThumbs.on('click', function () {
     var clickedIndex = swiperThumbs.clickedIndex
     swiperGallery.slideTo(clickedIndex, 300, false)
     updateThumbsBorder(clickedIndex)
   })

   function updateThumbsBorder(index) {
     var thumbs = document.querySelectorAll('.mySwiper .swiper-slide')
     // 移除所有綠色邊框
     thumbs.forEach(function (thumb) {
       thumb.classList.remove('green-border')
     })
     // 添加綠色邊框到點擊的小圖
     thumbs[index].classList.add('green-border')
   }

   // 初始化時設置第一個小圖有綠色邊框
   updateThumbsBorder(0)

   // 第9區
   var swiperCarousel2 = new Swiper('.mySwiperCarousel2', {
     loop: true
   })

   // 第10區
   var swiperCarousel2 = new Swiper('.mySwiper_ourBlog', {
     loop: true,
     breakpoints: {
   576: {
     slidesPerView: 2,
   },
   992: {
     slidesPerView: 3, 
   }
   }})