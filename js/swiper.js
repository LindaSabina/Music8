const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: "coverflow",
      grabCursor: false,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 700,
        modifier: 1,
        slideShadows: false,
      },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button',
    },
  
    
  });