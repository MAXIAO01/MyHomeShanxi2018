var x,
	sc = $(window).width() / 640,
	isPlay = false,
	progress = 0,
	i = 0,
	max = 0,
	value = 0,
	$cover = $('.cover'),
	$playMusic = $('#play'),
	$scale = $('#scale'),
	$next = $('#next'),
	$before = $('#before'),
	$voice = $('voice'),
	$music=$('#music'),
	music = $music.get(0),
	//js操作获得的是audio对象，jquery选择器获得的是jquery对象，0对象的才是对应的节点对象。所以不能直接使用jquery对象去操作。
	musList = [{
		tit: "somebody that I used to know",
		cov: "cover4.jpeg",
		voi: "build/music/SomebodyThatIUsedToKnow.mp3"
	}, {
		tit: "can't it keep inside",
		cov: "cover7.jpeg",
		voi: "build/music/CantKeepItInside.mp3"
	}, {
		tit: "回旋企鹅罐",
		cov: "cover6.jpeg",
		voi: "build/music/destiny.mp3"
	}];

/*播放*/
$playMusic.on('click', function() {
	if (isPlay == false) {
		iplay();
	} else {
		nplay();
	}
});

/*切换歌曲*/
$next.on('click', function() {
	nxt();
});

$before.on('click', function() {
	//$cover.removeClass('cover-play');
	$cover.css('background-image', "url(build/img/" + musList[i - 1].cov + ")");
	$music.attr('src', musList[i - 1].voi);
	$('h3').html(musList[i - 1].tit);
	i--;
	clearInterval(x);
	$scale.val(0);
	if (isPlay == true) {
		music.onloadeddata = function() {
			iplay();
		}
	} else {
		nplay();
	}
});

function nxt() {
	$cover.removeClass('cover-play');
	$cover.css('background-image', "url(build/img/" + musList[i + 1].cov + ")");
	$music.attr('src', musList[i + 1].voi);
	$('h3').html(musList[i + 1].tit);
	$scale.val(0);
	i++;
	clearInterval(x);
	if (isPlay == true) {
		music.onloadeddata = function() {
			iplay();
		}
	} else {
		nplay();
	}
};

/*播放状态*/
function iplay() {
	$scale.attr('max', music.duration);
	max = Math.round(music.duration);
	$cover.addClass('cover-play');
	music.play();
	isPlay = true;
	x = setInterval(function() {
		progress = music.currentTime;
		$scale.val(progress);
		value = Math.round($scale.val());
		console.log("歌曲时长：" + max + "~~~~~~~现在的时间：" + value);
		/*判断歌曲是否播放结束*/
		if (value == max) {
			console.log("播放结束");
			nxt();
		}
	}, 500);
};

$scale.on('change', function() {
	progress = $scale.val();
	music.currentTime = progress;
});

/*暂停状态*/
function nplay() {
	$cover.removeClass('cover-play');
	music.pause();
	isPlay = false;
	clearInterval(x);
	console.log(123);
};