window.addEventListener( 'load', function() {
  if (window.$('.carousel')[0]) {
    new Flickity( '.carousel', {
      cellAlign: 'left',
      wrapAround: true
    });
  }
  if (window.$('.carousel-2')[0]) {
    new Flickity( '.carousel-2', {
      cellAlign: 'left',
      wrapAround: true
    });
  }
});
