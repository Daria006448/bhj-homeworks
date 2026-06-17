const allTabNavigation = document.querySelectorAll('.tab__navigation');

allTabNavigation.forEach(tabNavigation => {

    const tabs = Array.from(tabNavigation.querySelectorAll('.tab'));

    const contents = Array.from(tabNavigation.parentElement.querySelectorAll('.tab__content'));

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabIndex = tabs.indexOf(tab);

            tabs.forEach(t => t.classList.remove('tad_active'));

            contents.forEach(c => c.classList.remove('tab__content_active'));

            tab.classList.add('tab_active');
            contents[tabIndex].classList.add('tab__content_active');
        });
    });
});