document.addEventListener("DOMContentLoaded", function() {
  const lightbox = GLightbox({
    elements: [
      {
        href: 'videos/video-tour.mp4',
        type: 'video',
        source: 'local',
        autoplay: true,
      }
    ]
  });

  document.getElementById('open-video').addEventListener('click', () => {
    lightbox.open();
  });
});
