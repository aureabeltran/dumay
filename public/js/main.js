$(document).ready(function(){
    $('.carouselExampleIndicators').carousel({
        interval: 2000
      })
    $('.navbar-toggle').on('click', function(e){ 
        if($(this).hasClass('collapsed')){
            $('.first-section svg').css({"transform": "scale(15)", "z-index": "999", "webkit-transition": ".5s"}) 
        }
        else{
            $('.first-section svg').css({"transform": "scale(.7)", "z-index": "-1"})
        }
        
    });

    //Clone the hidden element and shows it
    $('.add-one-rrss').click(function(){
        $('.dynamic-element').first().clone().appendTo('.dynamic-stuff-rrss').show();
        attach_delete();
    });

    $('.add-one-video').click(function(){
        $('.dynamic-element').first().clone().appendTo('.dynamic-stuff-video').show();
        attach_delete();
    });

    //Attach functionality to delete buttons
    function attach_delete(){
        $('.delete').off();
        $('.delete').click(function(){
            console.log("click");
            $(this).closest('.form-group').remove();
        });
    }

    $(".nav.nav-tabs .btn.main-btn").on("click", function(){
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
    })


    $(".form-section").on("submit", function(e){
        e.preventDefault()
        let name = $(this).find("input[name*='name']").val();
        let last_name = $(this).find("input[name*='lastname']").val();
        let email = $(this).find("input[name*='email']").val();
        let telefono = $(this).find("input[name*='telefono']").val();
        let descripcion = $(this).find("input[name*='descripcion']").val();
        let valido = true;
        let error = '';
        if (name === '') {
            valido = false;
            error += "Ingrese su nombre. \n"
        }
        if (last_name === '') {
            valido = false;
            error += "Ingrese su apellido. \n"
        }
        if (email === "") {
            valido = false;
            error += "Ingrese correo electrónico. \n";
        } else {
            var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regExpEmail.test(email)) {
                valido = false;
                error += 'El correo electrónico debe contener el formato correcto.\n';
            }
        }
        if (telefono === '') {
            valido = false;
            error += "Ingrese su número de telefono. \n"
        }
        if (descripcion === '') {
            valido = false;
            error += "Ingrese su descripción. \n"
        }
        if (!valido) {

            alert(error)
            return;
        }
        else{
            var parametros = {
                "name" : name,
                "lastname" : lastname,
                "email" : email,
                "telefono" : telefono,
                "descripcion" : descripcion
            };
            $.ajax({
                url: "data",
                context: document.body,
                type: "post",
                data: parametros,
                success: function(data) {
                    //$("#myModalGreeting").modal();
                    console.log(data)
 
                },
                error:function(data) {
                    alert("Se ha producido un error")
                    console.log(data)
                }
 
            })
        }
    })
    $('.first-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        linked: ".second-one"
    })
    $('.second-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        linked: ".second-one"
    })

    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(".toggle-content .toggle-btn").on("click", function(){
        let parent = $(this).parent().parent();
        parent.siblings().removeClass("active")
        parent.toggleClass("active");
    })
});
