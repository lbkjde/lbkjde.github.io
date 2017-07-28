if (window.$('.carousel')) {
  window.addEventListener( 'load', function() {
    new Flickity( '.carousel', {
      cellAlign: 'left',
      wrapAround: true
    });
  });
}
if (window.$('.carousel-2')) {
  window.addEventListener( 'load', function() {
    new Flickity( '.carousel-2', {
      cellAlign: 'left',
      wrapAround: true
    });
  });
}
