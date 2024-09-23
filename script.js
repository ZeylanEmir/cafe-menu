const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Показываем первое изображение
slides[currentIndex].classList.add('active');

// Кнопка "Назад"
document.getElementById('prev').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    slides[currentIndex].classList.add('active');
});

// Кнопка "Вперед"
document.getElementById('next').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    slides[currentIndex].classList.add('active');
});
