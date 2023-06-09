document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navbar')

     function addBackground() {
      if (window.scrollY >= 100) {
        nav.classList.add('nav-background');
      } else {
        nav.classList.remove('nav-background');
      }
    }
    
    window.addEventListener('scroll',addBackground)
  })