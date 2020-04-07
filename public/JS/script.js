$(window).load(function(){ //WOW... zo is het laddprobleem van isotpe opgelost!!!
  let $grid = $('.grid').isotope({ //isotope toegepast op grid -> filterelementen zitten in grid
    itemSelector: '.gridel', //selector = filterelementen
    layoutMode: 'fitRows'
  });

  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() { //= groep buttons
    var filterValue = $( this ).attr('data-filter'); //filtert op data-filter van button
    $('.grid').isotope({ filter: filterValue }); //deze code NIET vergeten!!!!
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
})
