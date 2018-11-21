$('.imags>img:nth-child(1)').addClass('current')
$('.imags>img:nth-child(2)').addClass('enter')
$('.imags>img:nth-child(3)').addClass('enter')
let n =1;
setInterval(()=>{
    if(n>3){
        n=1
    }else{
        $(`.imags>img:nth-child(${n})`).addClass('leave').removeClass('current')
            .one('transitionend',(e)=>{
                $(e.currentTarget).addClass('enter').removeClass('leave')
            })
        if(n===3){
            $('.imags>img:nth-child(1)').addClass('current').removeClass('enter')
            n++
        }else{
            $(`.imags>img:nth-child(${n + 1})`).addClass('current').removeClass('enter')
            n++ 
        }      
        console.log(n)
    }  
},3000)




/*setTimeout(function(){
    $('.imags>img:nth-child(1)').css({
        transform:'translateX(-100%)'
    })
    $('.imags>img:nth-child(2)').css({
        transform: 'translateX(-100%)'
    })    
    //监听动画结束事件
    $('.imags>img:nth-child(1)').on('transitionend',function(e){
        console.log('22')
        $(e.currentTarget).addClass('right').css({transform:'none'})
    })
},3000)*/
