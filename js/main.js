

function getZoom(value){
    var height,width,left,top;
    var inh=$("img").height();
    var inw=$("img").width();
    var markerCss=$(".marker").css("position");
    if(markerCss=='absolute'){
        left=parseInt($(".marker").css("left"));
        top=parseInt($(".marker").css("top"));
    }
    if(value=='plus'){
        height=$("img").height() + 20;
        width=$("img").width() + 20;
        left=(width*left)/inw;
        top=(height*top)/inh;
    }else{
        height=$("img").height() - 20;
        width=$("img").width() - 20;
        left=(width*left)/inw;
        top=(height*top)/inh;
    }
    console.log(left,top)
    $("img").css({"height":height,"width":width})
    if(markerCss=="absolute")
        $(".marker").css({"top":top,"left":left})
}


$(document).ready(function(){
    $("img").click(function(e){
        $('.marker').show();
        $(".box").append(            
            $('.marker').css({
              position: 'absolute',
              left: e.pageX - $(e.target).offset().left + 'px',
              top: e.pageY - $(e.target).offset().top + 'px',
              background: '#ddd',
              width:'10px',
              height:'10px',
              'border-radius': '8px'
            })              
          );
    });
});