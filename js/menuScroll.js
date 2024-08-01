$(function() {

    $('nav.menu-desktop a, nav.menu-mobile a').click(function() {
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top; //Obtém a posição vertical do topo do elemento com ID 'servicos', é necessario obter a posição pois por exemplo, se o elemento #servicos estiver a 1000 pixels do topo da página, a função vai fazer com que a página role suavemente até esse ponto

        $('html, body').animate({'scrollTop':offSetTop}); //Rola suavemente até a posição obtida na variavel 'offSetTop'. 'scrollTop' controla até onde a página vai rolar verticalmente, e o valor 'offSetTop' é o valor em pixels que indica até onde a rolagem deve ir.

        return false;

    })

})