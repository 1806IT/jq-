var allButtons=$('#button>span')
var n = 0;
var step = allButtons.length;
for (let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index=$(x.currentTarget).index()
        var px=index* -300
        console.log(n)
        $('.imags').css({
            transform:'translate('+px+'px)'
        })       
        n = index
        active(allButtons.eq(n))
    })
}

playSlide(n % step)


var tId = setTimer()
$('.window').on('mouseenter',function(){
    window.clearInterval(tId)
})

$('.window').on('mouseleave', function () {
    tId = setTimer()
})
//定闹钟
function setTimer(){
    return setInterval(() => {
        n++;
        playSlide(n % step)
    }, 1000)
}
function active($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}