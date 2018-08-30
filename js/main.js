// Canvas settings for first tab
var id;

function resizeCanvas(canvas) {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var ctx = canvas.getContext('2d');

    function stopLines() {
        if (count >= 95) {
            clearInterval(id);
        } else {
            setTimeout(stopLines, 100);
        }

    }

    id = setInterval(function() {
        drawRandomLine(ctx);
        count++;
    }, 1);

    var count = 0;
    setTimeout(id, 300);
    setTimeout(stopLines, 400);
}

function drawRandomLine(canvas) {

    var a = rangedRandom(1, window.innerWidth + 500);
    var b = rangedRandom(1, window.innerHeight);
    var c = rangedRandom(1, window.innerWidth);
    var d = rangedRandom(1, window.innerHeight);

    var colors = ['black', 'dimgray', 'slategray', 'darkgray', 'darkred'];
    var random = Math.floor(Math.random() * 5);

    canvas.beginPath();
    canvas.lineWidth = rangedRandom(1, 20);
    canvas.strokeStyle = colors[random];
    canvas.moveTo(a, b);
    canvas.lineTo(c, d);
    canvas.stroke();
}

function rangedRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// function for portfolio tab menu

function clear() {
    $('#clear').addClass('white');
    workslist = document.getElementById('pis').children;
    for (i = 1; i <= workslist.length; i++) {
        $(workslist[i]).removeClass('hidden');
    }
}

// functions for already loaded page

$(document).ready(function() {
// canvas start!
    var c = $('#background')[0];
    resizeCanvas(c);
//main navigation colors switching
    var classesNav = {
        edcA: '.navEducation a',
        portA: '.navPortfolio a',
        welA: '.navWelcome a',
        edc: '#education',
        portf: '#portfolio',
        wel: '#welcome'
    };

    function clearClasses() {
        for (var key in classesNav) {
            $(classesNav[key]).removeClass('active black');
        }
    }

    $(classesNav.edcA).click(function() {
        clearClasses();
        $(classesNav.edc).addClass('active');
        $(this).addClass('black');
    });

    $(classesNav.portA).click(function() {
        clearClasses();
        $(classesNav.portf).addClass('active');
        $(this).addClass('black');
        clear();
    });

    $(classesNav.welA).click(function() {
        clearClasses();
        $(classesNav.wel).addClass('active');
        $(this).addClass('black');
    });
//borders coloring
    var itemBorder = ['borderDarkgray', 'borderDarkgray', 'borderGray', 'borderDimgray', 'borderGray', 'borderWhitesmoke'];

    function borders(type, start){
        for (i = start; i <= type.length; i++) {
            var random = Math.floor(Math.random() * (itemBorder.length));
            $(type[i]).addClass(itemBorder[random]);
    }
    }

    borders(document.getElementById('pis').children, 1);
    borders(document.getElementById('edis').children, 0);
});
//canvas resizing
$(window).resize(function() {
    resizeCanvas(c);
});
//portfolio tab sorting by keywords
function filtering(type) {
    $('#backend').removeClass('black');
    $('#frontend').removeClass('black');
    $('#fullstack').removeClass('black');
    $('#' + type).addClass('black');
    $('#clear').removeClass('white');
    var workslist = document.getElementById('pis').children;
    for (i = 1; i <= workslist.length; i++) {
        if (workslist[i].classList.contains(type)) {
            $(workslist[i]).removeClass('hidden');
        } else {
            $(workslist[i]).addClass('hidden');
        }
    }
}

function frontend() {
    filtering('frontend');
}

function fullstack() {
    filtering('fullstack');
}

function backend() {
    filtering('backend');
}
//email me popup
function PopUpShow1() {
    $('#gmail_me').show();
}

function PopUpHide1() {
    $('#gmail_me').hide();
}
//portfolio tab popups
function PopUpShowAnime() {
    $('#popup1').show();
}

function PopUpHide() {
    for (i = 1; i <= 8; i++) {
        $('#popup' + i).hide();
    }
}

function PopUpShowDjangoBlog() {
    $('#popup2').show();
}

function PopUpShowWiki() {
    $('#popup3').show();
}

function PopUpShowCalculator() {
    $('#popup4').show();
}

function PopUpShowIphone() {
    $('#popup5').show();
}

function PopUpShowCodecombat() {
    $('#popup6').show();
}

function PopUpShowHats() {
    $('#popup7').show();
}
