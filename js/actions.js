/////////////////////////////////////////////////////
////////// RODYTI IR PASLĖPTI MAŽĄJĮ MENIU //////////
/////////////////////////////////////////////////////

const menu = document.querySelector('.menu-long');
let url = window.location.href;

$(window).bind('hashchange', function(){
    if(window.location.hash == "#/meniu" ) {
        menu.style.display = "none";
    }
});

$(window).resize(function() {
  if ($(window).width() < 1000) {
        menu.style.display = "none";
  }
});

/////////////////////////////////////////////////////
////////////////// PARAŠYKIT MUMS ///////////////////
/////////////////////////////////////////////////////

$('.forma1').hide();
$('.patvirtinimas').hide();

$('.icon').click(function() {
    $('.forma1').slideToggle("fast");
});


$('#contact-us').submit(function(e) {
    e.preventDefault();
    var zinute = $("#zinute").val();
    var vardas = $('#vardas').val();
    var email = $('#email').val();
    
    console.log(zinute);
    $.ajax({
        url: "http://localhost/new_virtualistudija/contact-us.php", 
        method: "POST",
        data: {
            vardas: vardas,
            email: email,
            zinute: zinute
        },
        dataType: "json",
        success : function(response) {
            if(response.success) {
                $("#contact-us").hide();
                $(".patvirtinimas").show();
                setTimeout(function() {
                    $('.patvirtinimas').hide();
                    $("#contact-us").show();
                    $('.forma1').hide();
                }, 3000)
            }else { 
                $(".contact-us").html("Žinutė neišsiųsta.").show();
            };
        }
    });
});

/////////////////////////////////////////////////////
/////////////////////// TAGS ////////////////////////
/////////////////////////////////////////////////////


$(window).bind('hashchange', function(){
    var url;
    switch(window.location.hash) {
        case "#/svetainiu-kurimas":
            url = 'http://localhost/virtualistudija.admin/public/api/tag/1'
            break;
        case "#/marketingas":
            url = 'http://localhost/virtualistudija.admin/public/api/tag/2'
            break;
        case "#/dizaino-darbai":
            url = 'http://localhost/virtualistudija.admin/public/api/tag/3'
            break;
        case "#/kitos-paslaugos":
            url = 'http://localhost/virtualistudija.admin/public/api/tag/4'
            break;
    }

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {

            $('title').html(data.data.title);

            $('link[rel=canonical]').attr('href', data.data.canonical);

            $('meta[name=description]').attr('content', data.data.description);

            $('meta[name=keywords]').attr('content', data.data.keywords);

            $('meta[property="og:title"]').attr('content', data.data.og_title);

            $('meta[property="og:description"]').attr('content', data.data.og_description);

            $('meta[property="og:site_name"]').attr('content', data.data.og_site_name);

            $('meta[property="og:url"]').attr('content', data.data.og_url);

            $('meta[property="og:image"]').attr('content', data.data.og_img);
        }
    });
});

/////////////////////////////////////////////////////
/////////////////////// TOOLTIP /////////////////////
/////////////////////////////////////////////////////


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
