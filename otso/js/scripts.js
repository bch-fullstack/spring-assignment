jQuery(document).ready(function() {
  
    var btn = $('#topBtn');
  
    $(window).scroll(function () {
      let height = $(window).scrollTop();
      if (height > 150) {
        $("#topBtn").fadeIn();
      } else {
        $("#topBtn").fadeOut();
      }
    
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });

  var doc = new jsPDF();
  var specialElementHandlers = {
      '#toPdf': function (element, renderer) {
          return true;
      }
  };
  
  $('#pdfBtn').click(function () {
      doc.fromHTML($('#toPdf').html(), 15, 15, {
          'width': 170,
              'elementHandlers': specialElementHandlers
      });
      doc.save('Otso-Lappalainen-CV-2020.pdf');
  });