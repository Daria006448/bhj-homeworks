const allDropdowns = document.querySelectorAll('.dropdown');

allDropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');

    const dropdownItems = Array.from(dropdown.querySelectorAll('.dropdown__item'));

    dropdownValue.addEventListener('click', function() {
        dropdownList.classList.toggle('dropdown__list_active');
    });

    dropdown.addEventListener('click', function(event) {
        const item = event.target.closest('.dropdown__item');

        if (item && dropdownList.classList.contains('dropdown__list_active')) {
            const link = item.querySelector('.dropdown__link');

            event.preventDefault();

            dropdownList.classList.remove('dropdown__list_active');

            const newText = link.textContent.trim();
            dropdownValue.textContent = newText;
        }
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});