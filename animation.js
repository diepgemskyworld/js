$(document).ready(function() {
    var number1 = document.querySelector('#number1');
    anime({
        targets: number1,
        innerHTML: [0, 100],
        easing: 'linear',
        round: 1,
        endDelay: 3000,
        loop: true
    });
    var number2 = document.querySelector('#number2');
    anime({
        targets: number2,
        innerHTML: [0, 50.5],
        easing: 'linear',
        round: 10,
        endDelay: 3000,
        loop: true
    });
    var number3 = document.querySelector('#number3');
    anime({
        targets: number3,
        innerHTML: [0, 49.5],
        easing: 'linear',
        round: 10,
        endDelay: 3000,
        loop: true
    });
    var number4 = document.querySelector('#number4');
    anime({
        targets: number4,
        innerHTML: [0, 92.2],
        easing: 'linear',
        round: 10,
        endDelay: 3000,
        loop: true
    });
    var number5 = document.querySelector('#number5');
    anime({
        targets: number5,
        innerHTML: [0, 3],
        easing: 'linear',
        round: 1,
        endDelay: 3000,
        loop: true
    });
    var number6 = document.querySelector('#number6');
    anime({
        targets: number6,
        innerHTML: [0, 34],
        easing: 'linear',
        round: 1,
        endDelay: 3000,
        loop: true
    });
    var number7 = document.querySelector('#number7');
    anime({
        targets: number7,
        innerHTML: [0, 3600],
        easing: 'linear',
        round: 1,
        endDelay: 3000,
        loop: true
    });
    var number8 = document.querySelector('#number8');
    anime({
        targets: number8,
        innerHTML: [0, 16100],
        easing: 'linear',
        round: 1,
        endDelay: 3000,
        loop: true
    });
    var number9 = document.querySelector('#number9');
    anime({
        targets: number9,
        innerHTML: [0, 4026],
        easing: 'linear',
        round: 1,
        endDelay: 3000,
        loop: true
    });
    //Scroll Animation
    var left = {
        distance: '150%',
        origin: 'left',
        scale: 0.1 ,
        opacity: 0
    };
    var right = {
        distance: '250%',
        origin: 'top',
        scale: 0.5 ,
        opacity: 0
    };
    var bottom = {
        distance: '250%',
        origin: 'bottom',
        scale: 0.5 ,
        opacity: 0
    };
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('.card', right);
    //Close Collapse Menu
    $('.nav-link').click(function() {                    
        $('#collapse').collapse('hide');
    });      
});            