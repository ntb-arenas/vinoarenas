const btn = document
    .querySelector('.read-more-btn');

const text = document
    .querySelector('.content-wrapper');

const contentWrapper = document
    .querySelector('.content-wrapper');

contentWrapper
    .addEventListener('click', e => {
        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.desc__read-more');

        currentText.classList.toggle('desc__read-more--open');

        current.textContent = current.textContent.includes('Ler mais') ? 'Ler menos' : 'Ler mais';
    });

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
