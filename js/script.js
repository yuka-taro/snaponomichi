jQuery("#js-drawer-icon").on("click",function (e){
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery('.drawer-content__link').on('click',function() {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery('#js-drawer-content').removeClass('is-checked');
} );

jQuery('.drawer__button').on('click',function() {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery('#js-drawer-content').removeClass('is-checked');
} );

$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 7,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 4,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 4,//スライドを画面に1.5枚見せる
    }
  }
]
});

jQuery(".js-modal-open").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal")[0].showModal();
});

jQuery(".js-modal-close").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal")[0].close();
});

jQuery(".js-modal-open2").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal2")[0].showModal();
});

jQuery(".js-modal-close2").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal2")[0].close();
});

jQuery(".js-modal-open3").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal3")[0].showModal();
});

jQuery(".js-modal-close3").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal3")[0].close();
});

jQuery(".js-modal-open4").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal4")[0].showModal();
});

jQuery(".js-modal-close4").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal4")[0].close();
});

jQuery(".js-modal-open5").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal5")[0].showModal();
});

jQuery(".js-modal-close5").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-prizes-modal5")[0].close();
});

const swiper = new Swiper('#js-spots-swiper', {
  // spaceBetween: 70,
  // Optional parameters
  loop: true,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-spots-next',
    prevEl: '#js-spots-prev',
  },
});

jQuery(".js-accordion").on("click", function(e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  }else{
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});


$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.fade-in-up');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});