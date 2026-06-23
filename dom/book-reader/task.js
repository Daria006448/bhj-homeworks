const book = document.getElementById('book');

const fontSizeLinks = document.querySelectorAll('.book__control_font-size .font-size');

fontSizeLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        fontSizeLinks.forEach((item) => item.classList.remove('font-size_active'));
        link.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        if (link.dataset.size === 'small') {
            book.classList.add('book_fs-small')
        } else if (link.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});


const textColorLinks = document.querySelectorAll('.book__control_color .color');
textColorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        textColorLinks.forEach((item) => item.classList.remove('color_active'));
        link.classList.add('color_active');

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        book.classList.add(`book_color-${link.dataset.textColor}`);
    });
});

const bgColorLinks = document.querySelectorAll('.book__control_background .color');
bgColorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        bgColorLinks.forEach((item) => item.classList.remove('color_active'));
        link.classList.add('color_active');

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${link.dataset.bgColor}`);
    });
});