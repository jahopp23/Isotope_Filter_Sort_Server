
// external js: isotope.pkgd.js
// init Isotope
$(document).ready(function (){
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    state: '[data-state]',
    texas: function( itemElem ) {
      var texas = $( itemElem ).find('.texas').text();
      return;
    },
    oklahoma: function( itemElem ){
      var oklahoma = $( itemElem ).find('.oklahoma').text();
      return;
    },
    arkansas: function( itemElem ){
      var arkansas = $( itemElem ).find('arkansas').text();
      return;
    },
    category: '[data-category]',
    wireCable: function( itemElem ) {
      var wireCable = $( itemElem ).find('.wire-and-cable').text();
      return;
    },
    wireCableAccessories: function( itemElem ) {
      var wireCableAccessories = $( itemElem ).find('.wire-and-cable-accessories').text();
      return;
    },
    conduitFittings: function( itemElem ) {
      var conduitFittings = $( itemElem ).find('.conduit-and-fittings').text();
      return;
    },
    wiringDevices: function( itemElem ){
      var wireDevices = $( itemElem ).find('.wiring-devices').text();
      return;
    },
    enclosuresWireways: function( itemElem ){
      var enclosuresWireways = $( itemElem ).find('.enclosures-and-wireways').text();
      return;
    },
    lighting: function( itemElem ){
      var lighting = $( itemElem ).find('lighting').text();
      return;
    },
    fuses: function( itemElem ){
      var fuses = $( itemElem ).find('.fuses').text();
      return;
    },
    toolsFasteners: function( itemElem ){
      var toolsFasteners = $( itemElem ).find('.tools-and-fasteners').text();
      return;
    },
    motorControl: function( itemElem ){
      var motorControl = $( itemElem ).find('motor-control').text();
      return;
    },
    specialty: function( itemElem ){
      var specialty = $( itemElem ).find('specialty').text();
      return;
    },

    texas: function( itemElem ) {
      var texas = $( itemElem ).find('.texas').text();
      return;
    },
    oklahoma: function(  itemElem ) {
      var oklahoma = $( itemElem ).find('.oklahoma').text();
      return;
    },
    arkansas: function( itemElem ) {
      var arkansas = $( itemElem ).find('.arkansas').text();
      return;
    }
  }

});
console.log("Isotope Function Intialized...");



// filter functions critical
var filterFns = {
  // show if number is greater than 50
  texas: function( itemElem ) {
    var texas = $( itemElem ).find('.texas').text();
    return;
  },
  arkansas: function( itemElem ) {
    var arkansas = $( itemElem ).find('.arkansas').text();
    return;
  },
  oklahoma: function( itemElem ) {
    var oklahoma = $( itemElem ).find('.oklahoma').text();
    return;
  },
   wireCable: function( itemElem ) {
    var wireCable = $( itemElem ).find('.wire-and-cable').text();
    return;
  },
  wireCableAccessories: function( itemElem ) {
    var wireCableAccessories = $( itemElem ).find('.wire-and-cable-accessories').text();
    return;
  },
  conduitFittings: function( itemElem ) {
    var conduitFittings = $( itemElem ).find('.conduit-and-fittings').text();
    return;
  },
   wiringDevices: function( itemElem ){
    var wireDevices = $( itemElem ).find('.wiring-devices').text();
    return;
  },

  enclosuresWireways: function( itemElem ){
    var enclosuresWireways = $( itemElem ).find('.enclosures-and-wireways').text();
    return;
  },

    lighting: function( itemElem ){
    var lighting = $( itemElem ).find('lighting').text();
    return;
    },

    fuses: function( itemElem ){
      var fuses = $( itemElem ).find('.fuses').text();
      return;
    },

    toolsFasteners: function( itemElem ){
      var toolsFasteners = $( itemElem ).find('.tools-and-fasteners').text();
      return;
    },

    motorControl: function( itemElem ){
      var motorControl = $( itemElem ).find('motor-control').text();
      return;
    },

    specialty: function( itemElem ){
      var specialty = $( itemElem ).find('specialty').text();
      return;
    }
  // show if name ends with -ium
  // ium: function() {
  //   var name = $(this).find('.name').text();
  //   return name.match( /ium$/ );
  // }
};

console.log("Filters Enabled.");




// binding filter button on click
$('#filters').on( 'click', 'button', function() {
  console.log("Filter category action.");
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  
});

$('#filters-states').on( 'click', 'button', function() {
  console.log("Filter state action.");
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  
});


// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  console.log("Sorting Intialized.");
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });

});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

});

    