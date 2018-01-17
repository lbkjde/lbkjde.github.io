window.addEventListener( 'load', function() {
  if (window.$('.carousel-3')[0]) {
    new Flickity( '.carousel-3', {
      cellAlign: 'left',
      wrapAround: true
    });
  }
});
