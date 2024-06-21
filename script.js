document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer 초기화
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 요소가 뷰포트의 50% 이상 보일 때 콜백 호출
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // 요소가 화면에 진입하면 visible 클래스 추가
            }
        });
    }, options);

    // 감시할 대상 요소 설정
    const h1 = document.querySelector('h1');
    const imageContainers = document.querySelectorAll('.image-container');
    const video = document.querySelector('video');

    // Intersection Observer에 감시할 요소 등록
    observer.observe(h1);

    imageContainers.forEach(container => {
        observer.observe(container);
    });

    observer.observe(video);
});
