// HEADER

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



// FOOTER 
// 올해가 몇년도인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023
