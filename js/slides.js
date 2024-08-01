$(function() {

    //'slick()' é um método do Slick Carousel, que é um plugin jQuery popular para criar sliders/carousels em websites.
    
    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: false, // Desativa o modo centralizado
        slidesToShow: 6, // Mostra 6 slides por vez
        arrows: false, // Desativa as setas de navegação
        responsive:[ 

        {
            breakpoint: 768, // Ajustes para telas menores que 768px
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
        },

        {
            breakpoint: 580, // Ajustes para telas menores que 580px
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2
            }
        },

        {
            breakpoint: 380, // Ajustes para telas menores que 380px
            setting: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }

        ]

    });



    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false, 
        infinite: false, // Desativa a rotação infinita
        responsive: [
            
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true, // Adiciona pontos de navegação
                    infinite: false, 
                    centerMode: false,
                    slidesToShow: 2
                },
            },

            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }

        ] 
    });



    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false
    })

})