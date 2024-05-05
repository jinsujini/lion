$(function(){
    //슬라이드
    var t =0;
    
    function slide(){
        if(t < 2){
            t++;
        }
        else t =0;
        
        $(".section1 ul").animate({top:t * 400 * (-1)}, 1000);
    }
    setInterval(slide, 2000);

    //메뉴
    $("nav .menu").mouseenter(function(){
        $(".sub-menu").stop().slideDown(400)
    })
    $("nav .menu").mouseleave(function(){
        $(".sub-menu").stop().slideUp(400)
    })

    //탭
    $(".hd div").click(function(){
        $(".hd div").removeClass('on');
        $(this).addClass('on');
        

        var i = $(this).index();
        console.log(i);
        
        $(".tab-cont").hide()
        $(".tab-cont").eq(i).show();
        return false;

    })
    //팝업
    //popup
    $(".pp-btn").click(function(){
        $(".popup").show();
    });
    $(".popup .button").click(function(){
        $(".popup").hide(); 
    })
})


