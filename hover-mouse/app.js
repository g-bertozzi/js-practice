const circle = document.querySelector('#circle')

// if it doesnt have hover-> add it
circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

// if it contains hover-> remove it
circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});
