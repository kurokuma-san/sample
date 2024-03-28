$(function () {
	$(".slick").slick({
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrow:false,
	});
	$(".toggle-btn").click(function () {
		$('header').toggleClass('open');
	});

	function FixedAnime() {
		var headerH = $('header').outerHeight(true);
		var scroll = $(window).scrollTop();
		if (scroll >= headerH) {//headerの高さ以上になったら
			$('.global-nav').addClass('fixed');//fixedというクラス名を付与
		} else {//それ以外は
			$('.global-nav').removeClass('fixed');//fixedというクラス名を除去
		}
	}
	$(window).scroll(function () {
		FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
	});

	// ページが読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function () {
		FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
	});
});