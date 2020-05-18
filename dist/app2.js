// ここから日付が順番に表示されるアニメーション
$(function(){
  $(window).load(function(){
      $('.january li').each(function(i){
          $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
      });
  });

  $(window).load(function(){
    $('.february li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.march li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.april li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.may li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.june li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.july li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.august li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.september li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.october li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.november li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });

  $(window).load(function(){
    $('.december li').each(function(i){
        $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},300);
    });
  });
});
// ここまで日付が順番に表示されるアニメーション



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


})