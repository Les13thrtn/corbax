document.addEventListener('DOMContentLoaded', function () {
  const teamSwiper = new Swiper('.team__swiper', {
    slidesPerView: 'auto',
    pagination: {
      el: '.team__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.team__navigation__btn-next',
      prevEl: '.team__navigation__btn-prev',
    },
    speed: 400,
    on: {
      slideChange: function (swiper) {
        let swiperCount = document.querySelector(
          '.team__pagination__counter span'
        )
        swiperCount.innerHTML = `${swiper.activeIndex + 1}`
      },
    },
  })

  const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 'auto',
    effect: 'fade',
    speed: 500,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.hero__navigation__btn-next',
      prevEl: '.hero__navigation__btn-prev',
    },
    on: {
      slideChange: function (swiper) {
        let swiperCount = document.querySelector(
          '.hero__pagination__counter span'
        )
        swiperCount.innerHTML = `${swiper.activeIndex + 1}`
      },
    },
  })

  const reviewSwiper = new Swiper('.review__swiper', {
    slidesPerView: 'auto',
    pagination: {
      el: '.review__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.review__navigation__btn-next',
      prevEl: '.review__navigation__btn-prev',
    },
    speed: 400,
    on: {
      slideChange: function (swiper) {
        let swiperCount = document.querySelector(
          '.review__pagination__counter span'
        )
        swiperCount.innerHTML = `${swiper.activeIndex + 1}`
      },
    },
  })

  const clientsSwiper = new Swiper('.clients__line', {
    slidesPerView: 'auto',
    speed: 8000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
    },
  })

  const experienceSwiper = new Swiper('.experience__content', {
    slidesPerView: 'auto',
    speed: 500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.experience__pagination',
      type: 'bullets',
      clickable: false,
    },
    navigation: {
      nextEl: '.experience__navigation__btn-next',
      prevEl: '.experience__navigation__btn-prev',
    },
    on: {
      slideChange: function (swiper) {
        let swiperCount = document.querySelector(
          '.experience__pagination__counter span'
        )
        swiperCount.innerHTML = `${swiper.activeIndex + 1}`
      },
    },
  })

  const supportLineSwiper = new Swiper('.support-line', {
    slidesPerView: 'auto',
    speed: 8000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
    },
  })

  const contributingSwiper = new Swiper('.contributing__content', {
    slidesPerView: 'auto',
    effect: 'coverflow',
    loop: true,
    speed: 500,
    loopedSlides: 0,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
    pagination: {
      el: '.contributing__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.contributing__navigation__btn-next',
      prevEl: '.contributing__navigation__btn-prev',
    },
    on: {
      slideChange: function (swiper) {
        let swiperCount = document.querySelector(
          '.contributing__pagination__counter span'
        )
        swiperCount.innerHTML = `${swiper.activeIndex + 1}`
      },
    },
  })

  if (innerWidth < 768) {
    const supportContent = new Swiper('.support__content', {
      slidesPerView: 'auto',
      loop: true,
      effect: 'coverflow',
      speed: 500,
      loopedSlides: 0,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 30,
        scale: 0.8,
        // depth: 50,
        modifier: 1,
      },
      navigation: {
        nextEl: '.support__navigation__btn-next',
        prevEl: '.support__navigation__btn-prev',
      },
    })
  }
  // --------------------------------------------

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    let scrollLevel = pageYOffset
    if (scrollLevel > 0) {
      header.classList.add('with-back')
    }

    if (scrollLevel === 0) {
      header.classList.remove('with-back')
    }
  })

  // --------------------------------------------

  function langSelect() {
    const langSelectCurent = document.querySelector(
      '.header__lang-select_current'
    )
    const langSelectCurentBody = document.querySelector(
      '.header__lang-select_body'
    )

    langSelectCurent.addEventListener('click', function () {
      langSelectCurentBody.classList.toggle('_active')
    })

    const langSelectChoice = document.querySelectorAll(
      '.header__lang-select_item'
    )

    langSelectChoice.forEach((item) => {
      const langSelectCurentValue = document.querySelector(
        '.header__lang-select_current_value'
      )

      item.addEventListener('click', function () {
        const langSelectCurentValueText = langSelectCurentValue.innerText

        langSelectCurentValue.innerHTML = this.innerText

        this.innerHTML = langSelectCurentValueText

        langSelectCurentBody.classList.remove('_active')
      })
    })
  }
  langSelect()

  // --------------------------------------------
  if ($('.scroll_item')) {
    $('.scroll_item').click(() => {
      const scrollPoint = $('.scroll-section').offset().top - 150
      $('html, body').animate(
        {
          scrollTop: scrollPoint,
        },
        600
      )
    })
  }

  // --------------------------------------------

  if (innerWidth > 768) {
    const observer = new IntersectionObserver((entries) => {
      // перебор записей
      entries.forEach((entry) => {
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('animation-on')
        }
      })
    })
    const observeObjuct = document.querySelectorAll('.animation')
    observeObjuct.forEach((item) => {
      observer.observe(item)
    })
  }

  // --------------------------------------------

  const menuBurger = document.querySelector('.header__burger')
  const navItem = document.querySelectorAll('.nav__link')
  const menuBody = document.querySelector('.header__nav')

  if (menuBurger) {
    menuBurger.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      menuBurger.classList.toggle('_active')
      menuBody.classList.toggle('header__nav_active')
    })

    if (navItem) {
      navItem.forEach((element) => {
        element.addEventListener('click', function () {
          document.body.classList.remove('_lock')
          menuBurger.classList.remove('_active')
          menuBody.classList.remove('header__nav_active')
        })
      })
    }
  }

  // --------------------------------------------

  if (innerWidth < 768) {
    function generateNumber() {
      const navItems = document.querySelectorAll('.header__nav .nav__item')

      let counter = 1

      navItems.forEach((item) => {
        const num = document.createElement('div')
        num.classList.add('nav__item_counter')
        item.appendChild(num)
        num.innerHTML = `0${counter}`
        counter += 1
      })
    }
    generateNumber()
  }

  // ----------------------------------------------------

  const popupLinks = document.querySelectorAll('.popup-link')
  const body = document.querySelector('body')
  const lockPadding = document.querySelectorAll('.lock-padding')

  let unlock = true

  const timeout = 800

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index]
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '')
        const curentPopup = document.getElementById(popupName)
        popupOpen(curentPopup)
        e.preventDefault()
      })
    }
  }

  const popupCloseIcon = document.querySelectorAll('.popup__close')
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index]
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'))
        e.preventDefault()
      })
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup._open')
      if (popupActive) {
        popupClose(popupActive, false)
      } else {
        bodyLock()
      }
      curentPopup.classList.add('_open')
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'))
        }
      })
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('_open')
      if (doUnlock) {
        bodyUnlock()
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.querySelector('.lock-padding').offsetWidth +
      'px'

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index]
        el.style.paddingRight = lockPaddingValue
      }
    }
    body.style.paddingRight = lockPaddingValue
    body.classList.add('_lock')

    unlock = false
    setTimeout(function () {
      unlock = true
    }, timeout)
  }

  function bodyUnlock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index]
          el.style.paddingRight = '0px'
        }
      }
      body.style.paddingRight = '0px'
      body.classList.remove('_lock')
    }, timeout)

    unlock = false
    setTimeout(function () {
      unlock = true
    }, timeout)
  }

  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open')
      popupClose(popupActive)
    }
  })

  // --------------------------------------------

  const video = document.querySelector('.video__player')
  if (video) {
    $('.play-btn').on('click', function () {
      $('.video').addClass('clicked')
      $('.play-btn').fadeOut()
      $('.video-cover').fadeOut()
      $('.video__player')[0].src += '&autoplay=1'
    })

    const videoLink = $('.video__player')[0].src

    $('.video-close').on('click', function () {
      $('.video').removeClass('clicked')
      $('.play-btn').show()
      $('.video-cover').show()
      $('.video__player')[0].src = videoLink
    })
  }

  // ---------------------------------------------------------
})
