let scrollPosition = 0;


document.getElementById('lightgallery').addEventListener('lgAfterOpen', function () {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.body.classList.add('body-lock');
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
});


document.getElementById('lightgallery').addEventListener('lgAfterClose', function () {
  document.body.classList.remove('body-lock');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition); 
});
