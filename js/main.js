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
    } else {
        // 배치 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        
    }
}, 300)); // 300 = 0.3초 / 1000밀리세컨드 = 1초 / 300밀리세컨드 = 0.3초

// _.throttle(함수, 시간(밀리세컨드 단위로))


const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});