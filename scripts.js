document.addEventListener("DOMContentLoaded", function() {
    // Loading animation
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 2000);

    // Scroll animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
            }
        });
    });

    document.querySelectorAll('.about-us, .gallery, .business-info, .request-service').forEach(section => {
        observer.observe(section);
    });

    // Gallery filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });

    // Business hours status
    const businessHours = {
        0: [13.5, 21],
        1: [7, 21],
        2: [7, 21],
        3: [7, 21],
        4: [7, 21],
        5: [7, 21],
        6: [7, 20]
    };

    function checkOpenStatus() {
        const now = new Date();
        const day = now.getDay();
        const hours = now.getHours() + now.getMinutes() / 60;
        const [open, close] = businessHours[day];
        const statusElement = document.getElementById('business-status');

        if (hours >= open && hours < close) {
            statusElement.textContent = "WE ARE CURRENTLY OPEN";
            statusElement.className = "open";
        } else {
            statusElement.textContent = "WE ARE CURRENTLY CLOSED";
            statusElement.className = "closed";
        }
    }

    checkOpenStatus();
});
