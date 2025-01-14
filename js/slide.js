const slides = document.querySelector('.slides');
        const slideImages = document.querySelectorAll('.slides img');
        const indicators = document.getElementById('indicators');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        let currentIndex = 0;
        const totalSlides = slideImages.length;

        // Initialize indicators
        for (let i = 0; i < totalSlides; i++) {
            const span = document.createElement('span');
            span.dataset.index = i;
            if (i === 0) span.classList.add('active');
            indicators.appendChild(span);
        }

        const updateIndicators = () => {
            document.querySelectorAll('.indicators span').forEach((span, index) => {
                span.classList.toggle('active', index === currentIndex);
            });
        };

        const showSlide = (index) => {
            currentIndex = (index + totalSlides) % totalSlides; // Wrap around
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateIndicators();
        };

        // Event listeners for controls
        prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
        nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

        // Event listeners for indicators
        indicators.addEventListener('click', (e) => {
            if (e.target.tagName === 'SPAN') {
                showSlide(Number(e.target.dataset.index));
            }
        });

        // Auto-slide every 3 seconds
        setInterval(() => showSlide(currentIndex + 1), 3000);