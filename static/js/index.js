$(document).ready(function () {
    // 首页轮播图，使用swiper插件
    var swiper = new Swiper('.swiper-container',{
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        speed: 2500,
        allowTouchMove: true,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 3
        },
        centeredSlides: true,
        spaceBetween : 50,
        slidesOffsetBefore: 40,
        loop: true,
        slidesPerView : 'auto',
        on: {
            slideChangeTransitionEnd: function(){
                this.slides.transition(this.params.autoplay.delay+this.params.speed).transform('translate3d(-60px, 0, 0)');
                },
            slideChangeTransitionStart: function(){
                this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
            }
            },
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span></span><i></i></div>';
            }
        }
    });
    
    // 导航栏，鼠标移入移出事件
    $('.navbar-nav li a').hover(function () {
        //移入事件
        oldpath=$(this).children("span").children(".img-box").attr('src');
        if(oldpath!=undefined){
            newpath=oldpath.replace(/-off/ig,'-on');
            $(this).children("span").children(".img-box").attr('src',newpath);
        }
    },function(){
        //移出事件
        $(this).children("span").children(".img-box").attr('src',oldpath)
    });
    
    // 中间区域的切换
    $("a").click(function () {
        var showid=$(this).attr('name');
        $(showid).removeClass("hidden").addClass("shower").siblings().addClass("hidden");
    });

    //点击切换颜色对应的图片
    $(".btn").click(function () {
        var imgsrc=$(this).attr('value');
        $(".jpg-box").children("a").children("img").attr('src',"../images/"+imgsrc+".jpg");
    });

    $(".sm-box img").click(function () {
        var showsrc=$(this).attr('src');
        var bigsrc=showsrc.replace(/-sm/ig,'');
        $('#big-box img').attr("src",bigsrc);
    });


    // 图片切换
    $(".hover-img1 .col-md-2 img").mouseenter(function () {
        var src1=$(this).attr('src');
        $('.show-bigimg1 img').attr("src",src1);
    });
    $(".hover-img2 .col-md-2 img").mouseenter(function () {
        var src1=$(this).attr('src');
        $('.show-bigimg2 img').attr("src",src1);
    })


    $('.list-group-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $("#BO").click(function () {
        var showclass='.'+$(this).attr("id");
        $(showclass).removeClass("hidden").siblings().addClass("hidden");
    });
    $("#OS").click(function () {
        var showclass='.'+$(this).attr("id");
        $(showclass).removeClass("hidden").siblings().addClass("hidden");
    })
});