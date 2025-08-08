document.addEventListener('DOMContentLoaded', function () {
  const flkty = new Flickity('#carousel', {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    draggable: false,
    selectedAttraction: 0.01,
    friction: 0.25
  });

  setInterval(() => {
    flkty.next();
  }, 1200);
});
