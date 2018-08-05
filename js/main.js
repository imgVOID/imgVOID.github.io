var id;

function resizeCanvas(canvas) {
    canvas.height = window.innerHeight;
    canvas.width  = window.innerWidth;

    var ctx = canvas.getContext("2d");

    function stopLines() {
        if (count>=60){
            clearInterval(id);
        } else {
            setTimeout(stopLines, 100);
        }

    }
    
    id = setInterval(function(){
        drawRandomLine(ctx);
        count++;
    }, 1);
    
    var count = 0;
    //setTimeout(id, 1000);
    //setTimeout(stopLines, 1100);
    setTimeout(id, 300);
    setTimeout(stopLines, 400);
}

function drawRandomLine(canvas) {

    var a = rangedRandom(1, window.innerWidth+500);
    var b = rangedRandom(1, window.innerHeight);
    var c = rangedRandom(1, window.innerWidth);
    var d = rangedRandom(1, window.innerHeight);

    var colors = ["black","dimgray","slategray","darkgray","darkred"];
    var random = Math.floor(Math.random()*5);

    canvas.beginPath();
    canvas.lineWidth = rangedRandom(1, 20);
    canvas.strokeStyle = colors[random];
    canvas.moveTo(a, b);
    canvas.lineTo(c, d);
    canvas.stroke();
}

function rangedRandom(min, max) {
    return Math.floor(Math.random() * (max - min)+min);
}

$(document).ready(function(){
    var c = $("#background")[0];
    document.head.append('<link rel="stylesheet" href="css/normalize.css"><link rel="stylesheet" href="css/bootstrap.min.css"><link rel="stylesheet" href="css/main.css">');
    resizeCanvas(c);
    
    
    const classesNav = {
    edcA : "#navEducation a",
    portA : "#navPortfolio a",
    welA : '#navWelcome a',
    edc : "#education",
    portf : "#portfolio",
    wel : "#welcome"
};

function clearClasses(){
    for(var key in classesNav){
        $(classesNav[key]).removeClass('active black');
    }
}

$(classesNav.edcA).click(function () {
    clearClasses();
    $(classesNav.edc).addClass('active');
    $(this).addClass('black')
});

$(classesNav.portA).click(function () {
    clearClasses();
    $(classesNav.portf).addClass('active');
    $(this).addClass('black')
});

$(classesNav.welA).click(function () {
    clearClasses();
    $(classesNav.wel).addClass('active');
    $(this).addClass('black')
});

var itemBorder = ["borderDarkgray","borderDarkgray","borderGray","borderDimgray","borderGray","borderWhitesmoke"];

for (i = 0; i <=itemBorder.length; i++){
    var random = Math.floor(Math.random()*(itemBorder.length));
    $('.pi'+(i+1)).addClass(itemBorder[random]);
}
    
    
    

    
    
    
    
function PopUpShow1(){
  $("#gmail_me").show();
}
function PopUpHide1(){
  $("#gmail_me").hide();
}

function PopUpShowAnime(){
  $("#popup1").show();
}

function PopUpHide(){
  for (i=1; i<=8; i++){
    $("#popup"+i).hide();
  }
}

function PopUpShowDjangoBlog(){
  $("#popup2").show();
}

function PopUpShowWiki(){
  $("#popup3").show();
}

function PopUpShowCalculator(){
  $("#popup4").show();
}

function PopUpShowIphone(){
  $("#popup5").show();
}

function PopUpShowCodecombat(){
  $("#popup6").show();
}

document.getElementById('img_block').appendChild(document.getElementById('img_add'));

    
    
    
    
    
    
});

$(window).resize(function(){
    resizeCanvas(c);
});

//[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  //img.setAttribute('src', img.getAttribute('data-src'));
  //img.onload = function() {
    //img.removeAttribute('data-src');
  //};
//});
