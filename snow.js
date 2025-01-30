setInterval(() => {
    const snow = document.createElement('span');
    snow.classList.add('snow');

    snow.style.width = snow.style.height = Math.random() * 8 + 'px';
    snow.style.left = Math.random() * 100 + '%';

    document.querySelector('.snow-container').appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 10000 );
}, 100 );
