const loadMoreBtn = document.querySelector('#loadMore');
const hiddenItems = document.querySelectorAll('.product-card.hidden');

loadMoreBtn.addEventListener('click', () => {
    hiddenItems.forEach(item => {
        item.classList.add('show-magic');
    });
    loadMoreBtn.style.display = 'none';
});
