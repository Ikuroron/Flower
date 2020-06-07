$(function(){
    
    
    // 矢印がクリックされたら、スムーススクロール
    $('.arrow-up').click(() => {
        $('body, html').animate({ scrollTop: 0,}, 600);
        
    })
    
    // 画面がスクロールされたら
    $(window).scroll(function () {
        
        // 画面のスクロールされた量を取得
        let scrollTop = $(document).scrollTop();
        console.log(scrollTop);
        
        // スクロールの量が500以上なら表示、それ以外は非表示
        if (scrollTop >= 300) {
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
        }


        // 画面表示時アニメーション
        // let sectionTop = $('#birth-flower').offset().top;

        if (scrollTop >= scrollTop) {
            $('#birth-flower').animate({ left: 0}, 1000);
        }

        let asideTop = $('#flower-code').offset().top;

        if (scrollTop >= asideTop -500) {
            $('#flower-code').animate({ left: 0}, 1000);
        }

        let mainTop = $('#your-birth').offset().top;

        if (scrollTop >= mainTop -500) {
            $('#your-birth').animate({ left: 0}, 1000);
        }
        
    });
})