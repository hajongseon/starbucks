/* 
JS 작동이 안될 때 "
HTML에 JS를 넣는 "script"태그를 body의 가장 밑부분으로 내리는 방법이 있다. */

// -- 상단메뉴에 input창 + 돋보기 아이콘 자연스럽게 조정
const searchEl =  document.querySelector('.search'); // document =  doctype = html 
const searchInputEl = searchEl.querySelector('input'); // searchEl 안에서 input요소 찾기 


// js를 통해서 focus가 가능한 input 요소같은 부분에다 focus강제 적용 
searchEl.addEventListener('click', function () {
    searchInputEl.focus(); 
});


searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused'); // class 내용 추가 / focused = focus가 된 상태를 의미 
    searchInputEl.setAttribute('placeholder', '통합검색'); // htmml에 어떠한 속성 지정 
});

searchInputEl.addEventListener('blur', function() { // focus가 해제되면 
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// --일정 스크롤이 되면 badge사라지게 만들기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top'); 

// window 객체 : 출력되고 있는 화면 자체를 의미
window.addEventListener('scroll', _.throttle(function() { // scroll 이벤트를 추가해 scroll이 되면 익명의 함수 실행
    console.log(window.scrollY); // scroll 할때마다 몇px지점에 위치하는지 확인 수 있음
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, { // to 라는 메소드 사용
            opacity: 0,     //  css 값 입력 가능
            display: 'none' //  문자로 입력해야 하는 값은 '' 따옴표 처리!!
        });
        // 버튼 보이기!
        gsap.to(toTopEl, .2, { // 메소드를 굳이 안적고 적용시키고싶은 class나 id값을 넣어도 됨
            x: 0,
            transition: .5,
         });
    } else {
        // 배치 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
         // 버튼 숨기기!
         gsap.to(toTopEl, .2, {
            x: 100 // 100px지점으로 이동
         });
        
    }
}, 300)); // 300 = 0.3초 / 1000밀리세컨드 = 1초 / 300밀리세컨드 = 0.3초
// _.throttle(함수, 시간(밀리세컨드 단위로))

// 버튼 클릭시 홈페이지 최상단으로 올라가기
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0 // 화면의 위치를 0px로 0.7초동안 옮겨주겠다.
    });
});



const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function(fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});



// Swiper. js ---
// new = 생성자 클래스, 소가로안에다 넣는걸 인수라함, {} = 객체 데이터형태

// new Swiper(선택자,옵션 )
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 방향
    autoplay: true,
    loop: true //반복 재생 여부
}); 


// Swiper slide
new Swiper('.promotion .swiper-container', {
    // direction 기본값 (수평), 따로 명시할 필욘 없음 // 뒤에 slide(s) 주의해서 붙이기ㅠㅠ
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백 (10px씩)
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: { //autoplay 객체 데이터로 명시할 수 있음
        delay: 5000 // 5s ex) 300 = 0.3s
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부(눌러서 제어 가능한지)
    },
    navigation: {
        prevEl: '.promotion .swiper-prev', // 이전 슬라이드 보는 버튼
        nextEl: '.promotion .swiper-next' // 다음 슬라이드 보는 버튼
    }
});
// Swiper - AWARDS
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30, // spaceBetwwen = 사이사이여백 30 = 30px
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


// promotion 숨기기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion // ! = "느낌표가 붙어있는 값이 반대가 되게 만들어주세요" = true
    if(isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

// Youtube floating 애니메이션 적용
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 지속시간, {옵션});
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 시간 
        { // 옵션
            y: size,
            repeat: -1, // 무한반복 (몇번 반복할건지)
            yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생해서 위에서 밑으로 내려왔다가 다시 위로 올라가는 구조를 만들어줌
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15); // delay: 1(s), y: 15px
floatingObject('.floating2', .5, 15); // delay: 0.5(S), y: 15px
floatingObject('.floating3', 1.5, 20); // delay: 1.5(S), y: 20px



// Scroll Mascie 
// section부분에 scroll-spy라는 클래스들을 하나씩 붙여줌.
/* ** 설명 **
scroll-spy가 붙은 각각의 section들은 spayEls라는 변수에 모두 할당
forEach로 반복적으로 처리함/ 반복될때마다 spyEl라는 매개변수에 값이 들어있음 */
const spyEls = document.querySelectorAll('section.scroll-spy'); // section이라는 태그들이 있는데 만약에 scroll-spy클래스가 붙어있다면 그요소들을 다 찾겠다.
spyEls.forEach(function (spyEl) {
    // setClassToggle = html에 있는 class를 넣었다뺐다 지정
    // addTo = ScrollMagic이라는 js라이브러리가 필요한 컨트롤러라는 개념의 내용을 추가 하기 위해 사용
    new ScrollMagic // 이렇게 들여쓰기로 정리 = 체이닝형태
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시함 요소를 지정
            triggerHook: .8 // 화면상에서 상단 0 하단 1 에서 0.8위치부분에서 trigger함으로써 애니메이션 효과 작동
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller()); 
});



// 올해가 몇년도인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023
