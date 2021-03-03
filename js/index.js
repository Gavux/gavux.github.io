(() => window.addEventListener('load', () => {
  document.querySelector('#age').textContent = new Date(Date.now() - new Date('2000/06/17')).getUTCFullYear() - 1970;

  document.querySelectorAll('.dark-mode-btn').forEach(elem => {
    elem.addEventListener('click', () => {
      if(elem.classList.contains('active')) {
        elem.classList.remove('active');
        document.body.classList.add('light');
      } else {
        elem.classList.add('active'),
        document.body.classList.remove('light');
      }
    });
  });
}))();