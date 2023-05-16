const lol = document.querySelector('.lol')
const cs = document.querySelector('.cs')
lol.addEventListener('click', function() {
  lol.style.width = '95vw'
  cs.style.width = '5vw'
  lol.style.zIndex  = '2'
  cs.style.zIndex = '1'
})
cs.addEventListener('click', function() {
  lol.style.width = '5vw'
  cs.style.width = '95vw'
  lol.style.zIndex  = '1'
  cs.style.zIndex = '2'
})