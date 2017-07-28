if (window.$('.carousel')) {
  document.addEventListener( 'load', function() {
    new Flickity( '.carousel', {
      cellAlign: 'left',
      wrapAround: true
    });
  });
}
if (window.$('.carousel-2')) {
  document.addEventListener( 'load', function() {
    new Flickity( '.carousel-2', {
      cellAlign: 'left',
      wrapAround: true
    });
  });
}
