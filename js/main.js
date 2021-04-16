const search = document.querySelector('.search')
const input = document.querySelector('.search-input')
const btn = document.querySelector('.btn-search')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})


