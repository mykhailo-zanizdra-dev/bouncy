if (isMobile.any()) {
 }

var act = "click";
if (isMobile.iOS()) {
  var act = "touchstart"; 
}

// menu BURGER
document.querySelector(".header__burger").addEventListener("click", (e) => {
  document.querySelector(".header__burger").classList.toggle("active")
  document.querySelector(".header__menu").classList.toggle("active")
      document.querySelector("body").classList.toggle("lock")
})

document.querySelectorAll(".header__menu li").forEach( ( li ) => {
  li.addEventListener("click", () => {
    if(screen.width < 768){
      document.querySelector(".header__burger").classList.toggle("active")  
        document.querySelector(".header__menu").classList.toggle("active")
          document.querySelector("body").classList.toggle("lock")
    }
  })
})
// END OF BURGER

// function resizeMenu() {
//   //console.log($("body").width());
//   $(".header__nav-body").width($(".container-big").width() - 250);
//   if(screen.width < 648) {
//     $(".header__nav-body").width($(".container-big").width());
//   //  window.removeEventListener("resize", resizeMenu);
//   }
// }

// if (isIE()) {
//   $(".header__nav").css({
//     'position':'absolute',
//     "left" : "0px",
//     "top" : "0px",
//     "left" : "0px"
//   });
//     resizeMenu();
//     window.addEventListener("resize", resizeMenu); 
//}

// TABS /////////////////////////////////////////////////////////////////////////

const createTabs = (tabItemsList, tabContentList) => {
  const tabs = document.querySelectorAll(tabItemsList);
  const content = document.querySelectorAll(tabContentList);
    tabs.forEach( (item, i) => {
          item.addEventListener("click", (e) => {
          e.preventDefault();
            for( let i = 0; i < tabs.length; i++ ){
              tabs[i].classList.remove("active");
              content[i].classList.remove("active");
            }
          tabs[i].classList.add("active");
          content[i].classList.add("active");
          });
        });
}
createTabs("li.details__tab-item", "div.details__content")
createTabs("li.servises__tab-item", "div.servises__content")
        
// END OF TABS  /////////////////////////////////////////////////////////////////////////

      // SCROLL

const setScrollTo = (attr) => {
  $(attr).click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
}
setScrollTo("a[href^='#about']")
setScrollTo("a[href^='#header']")

    $(window).scroll(function(){ // set visibility for scroll button, looks like circle
      if($(this).scrollTop() > 600){
        $(".scroll-up").css({
          "display" : "block"
        });
      } else {
          $(".scroll-up").fadeOut();
      }
  });
      // END OF SCROLL
// CIRCLE PROGRESSBAR //////////////

const setCircleProgress = (persent, ringId) => {
  const circle = document.querySelector(`${ringId} .progress-ring__circle`)
  const radius = circle.r.baseVal.value
  const circumference = 2 * Math.PI * radius

    circle.style.strokeDasharray = `${circumference} ${circumference}`
    circle.style.strokeDashoffset = (circumference - persent / 100 * circumference) * -1 
    document.querySelector(`${ringId} span.progress-ring__persent`).textContent = persent
}
setCircleProgress(80,'#servises-branding-progressbar')     
setCircleProgress(75,'#web-design-progressbar')     
setCircleProgress(60,'#ui-ux-progressbar')     
// END OF CIRCLE PROGRESSBAR //////////////

//// LINEAR PROGRESSBAR /////////////////////////

const setLinearProgress = (persent, progressbarId) => {
  const progress = document.querySelector(`${progressbarId} .progress-linear__percent`)
  const progressLine = document.querySelector(`${progressbarId} .progress-linear__overlay`)
    progressLine.style.width = `${persent}%`
    progress.textContent = `${persent} %`
}
setLinearProgress(80, '#progress-linear-branding-noman')
setLinearProgress(65, '#progress-linear-web-design-noman')
setLinearProgress(75, '#progress-linear-ui-noman')

setLinearProgress(60, '#progress-linear-branding-dryden')
setLinearProgress(95, '#progress-linear-web-design-dryden')
setLinearProgress(70, '#progress-linear-ui-dryden')

setLinearProgress(70, '#progress-linear-branding-kimberley')
setLinearProgress(63, '#progress-linear-web-design-kimberley')
setLinearProgress(85, '#progress-linear-ui-kimberley')

//// END OF LINEAR PROGRESSBAR /////////////////

/////// ITEM_SELECTOR ////////////////////////
const menuItems = document.querySelectorAll('.portfolio__menu-item')
const blockItems = document.querySelectorAll('.portfolio__block-item')

  for (let menuItem of menuItems ) {
    menuItem.addEventListener('click', (event) => {
      for (let item of menuItems) {
        item.classList.remove('active')
      }
        event.target.classList.add('active')
          if ( event.target.classList.contains('all-works') ) {
            for (let item of blockItems) {
              item.classList.add('active')
            }
          } else {
            for (let item of blockItems) {
              if ( item.classList.contains( event.target.classList[1] ) ) { 
                item.classList.add('active')
              } else {
                item.classList.remove('active')
              }
            }
          }
    } )
  }
/////// END OF ITEM_SELECTOR /////////////////

/////// SWIPER ////////////
const swiperHorizontalSettings = {
  loop: true,
  slidesPerView: 1, 
  grabCursor: true,
  simulateTouch: true, 
  // slidesPerGroup: 3, 
  pagination: {
    el: '.swiper-green-dots',
    clickable: true,
    bulletClass: 'swiper-green-dots__dot',
    bulletActiveClass: 'active'
  } 
}
const swiperVerticalSettings = {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'vertical', 
  grabCursor: true,
  simulateTouch: true, 
  pagination: {
    el: '.swiper-gray-dots',
    clickable: true,
  } 
}
const swiperHorizontal = new Swiper('.swiper-container.horisontal', swiperHorizontalSettings)
let swiperVertical = new Swiper('.swiper-container.vertical', swiperVerticalSettings)

const setDefaultSliderSettings = () => {
    if ( fullTextElements && fullTextElements.length > 0 ) {
      fullTextElements.forEach((el) => {
        el.style.cssText = `
          transition: all 1s ease;
          opacity: 0;
          position: absolute;
          z-index: -1; `
        
      })
    }
    
    if ( shortTextElements && shortTextElements.length > 0 ) {
      shortTextElements.forEach((el) => {
        el.style.display = 'block'
        sliderContainer.style.height =  '540px'
      })
    }
    dropBtns.forEach( (el) => {
      el.style.marginTop = null
      el.textContent = '+ Read More'

    } )
    swiperVertical.update()
  }

// var run
// window.addEventListener('resize', () => {
//   if ( !run ) {
//     run = setTimeout(() => {  
//       // swiperVertical.init()
//       // swiperVertical.update()
//       run = null
//       console.log('resize') 
//     }, 500)
//   }
// })  

/////// END OF SWIPER ////////////

//////////////  DROP-DOWN TEXT-BLOCK  //////////////////    

const dropBtns = document.querySelectorAll('.latest__descr-btn')
const fullTextElements = document.querySelectorAll('.latest__descr-full-text')
const sliderWrapper = document.querySelector('.swiper-wrapper.vertical')
const sliderContainer = document.querySelector('.swiper-container.vertical')
const sliderWrapperHeight = parseInt(window.getComputedStyle(sliderWrapper, null)
                                           .getPropertyValue("height"))
const sliderContainerHeight =  parseInt(window.getComputedStyle(sliderContainer, null)
                                              .getPropertyValue("height"))

fullTextElements.forEach( (el) => {
    const shortTextElement = document.createElement('div')
    shortTextElement.classList.add('latest__descr-text')
      el.insertAdjacentElement('beforebegin', shortTextElement)
})

const shortTextElements = document.querySelectorAll('.latest__descr-text')

document.querySelectorAll('.swiper-pagination-bullet').forEach((el) => {
  el.addEventListener('click', setDefaultSliderSettings)
})

const truncText = (text, symbolsAmount) => {
  let i = symbolsAmount
    for (  ;i !== 0; i-- ) {
      if ( text[i] !== ' ') break
    }
  return text.slice(0, i + 1)
}

fullTextElements.forEach( (el,i) => {
  if ( el.textContent.length <= 460 ) {
    shortTextElements[i].textContent = fullTextElements[i].textContent
  } else {
    shortTextElements[i].textContent = truncText(
        fullTextElements[i].textContent, 460
      ) + '...'
  }
})
swiperVertical.update()

  dropBtns.forEach((btn) => {  
    btn.addEventListener('click', (e) => {
      e.preventDefault() 
      const shortText = e.target.parentNode.querySelector('.latest__descr-text')
      const fullText = e.target.parentNode.querySelector('.latest__descr-full-text')
      const shortTextHeight = parseInt(window.getComputedStyle(shortText, null).getPropertyValue("height"))
      const fullTextHeight = fullText 
                           && parseInt(
                              window.getComputedStyle(fullText, null).getPropertyValue("height")
                           )

        if ( window.getComputedStyle(shortText, null).getPropertyValue("display") === 'block') {
          if ( fullText ) {
              shortText.style.display = 'none'
              fullText.style.opacity = '1'
              fullText.style.position = 'relative'
              fullText.style.zIndex = '1'
              sliderContainer.style.height = fullTextHeight + sliderContainerHeight - shortTextHeight + 'px'
              sliderWrapper.style.height = '100%'
              e.target.textContent = '- Read Less'
              swiperVertical.update()
              swiperVertical.on('sliderMove', setDefaultSliderSettings)
          }

        } else {
          swiperVertical.off('sliderMove')
            shortText.style.display = 'block'
            fullText.style.opacity = '0'
            fullText.style.position = 'absolute'
            fullText.style.zIndex = '-1'
            sliderContainer.style.height =  '540px'
            e.target.textContent = '+ Read More'
              if ( fullTextElements && fullTextElements.length > 0 ) {
                fullTextElements.forEach((el) => {
                  el.style.opacity = '0'
                  el.style.position = 'absolute'
                  el.style.zIndex = '-1'
        
                })
              }
                   swiperVertical.update()
          }
    })
  })
//////////////  END OF DROP-DOWN TEXT-BLOCK  //////////////////

//////////////// MAP BUTTON //////////////////////////

document.querySelector('.map__btn').addEventListener('click', () => {
  document.querySelector('.map__title-body').classList.add('off')
  document.querySelector('.map__overlay').classList.add('off')
})

//////////////// END OF MAP BUTTON //////////////////////////

      // MODAL WINDOWS/////////////////////////////////////////////////////////////////////////
    /*  document.querySelectorAll("[data-modal=some-value]").forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelector(".modal#some-id").classList.toggle("show");
          document.querySelector(".overlay").classList.toggle("show");
          document.querySelector("body").classList.toggle("lock");
        });
      });
      document.querySelectorAll(".modal__close").forEach((item) => {
        item.addEventListener("click", () => {
          item.closest(".modal").classList.remove("show");
          document.querySelector(".overlay").classList.remove("show");
          document.querySelector("body").classList.remove("lock");
        });
      });*/
            // END OF MODAL WINDOWS

      // document.querySelectorAll(".some-button").forEach((item, i) => {
      //   item.addEventListener("click", () => {
      //   //  document.querySelector(".modal#some-id .some__class").textContent = document.querySelectorAll(".some__class")[i].textContent;
      //     document.querySelector(".modal#bye").classList.toggle("show");
      //     document.querySelector(".overlay").classList.toggle("show");
      //     document.querySelector("body").classList.toggle("lock");
      //   });
      // });

// FORM VALIDATION/////////////////////////////////////////////////////////////////////////
/*function validateForm(form) {
    $(form).validate({
      errorClass: "form-error",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },  
      },
      messages: {
        name: {
          required: "Ваше имя...",
          minlength: jQuery.validator.format("Минимум {0} символа!"),
        },
        phone: "Ваш телефон...",
        email: {
          required: "Пожалуйста введите свою почту.",
          email: "Формат почты: name@domain.com",
        },
      },
    });
  }
      validateForm(".feed-form"); */
// END OF FORM VALIDATION

// FORM SUBMIT
/*$("form").submit(function (e) {
  e.preventDefault();
  if (!$(this).valid()) return false;
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $(".modal#consult, .modal#bye").removeClass("show");
    $(".modal#info").addClass("show");
    $(".overlay").addClass("show");
    $("body").addClass("lock");
    $("form").trigger("reset");
  });
  return false;
});*/
// END OF FORM SUBMIT