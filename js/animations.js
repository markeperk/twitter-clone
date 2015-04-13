$(document).ready(function() {
//step 1
$('#tweet-controls').hide();



//step 2
$('.tweet-compose').on('click', function() {
	$(this).css('height', '5em');
	$('#tweet-controls').show();
});

//step 3 - charcter decrease
$('.tweet-compose').on('keyup', function() {
	var text = $('.tweet-compose').val();
	var charLeft = 140 - text.length;
	console.log(charLeft);
	$('#char-count').html(charLeft);
	if (charLeft <= 10) {
		$('#char-count').css('color', 'red');
	}
	if (charLeft > 10) {
		$('#char-count').css('color', '#999');
	}
	if (charLeft < 0) {
		$('#tweet-submit').prop('disabled', true);
	}
	if (charLeft >= 0) {
		$('#tweet-submit').prop('disabled', false);
	}
});

//step 5


	$('#tweet-submit').on('click', function() {
		var pic = $('#profile-summary .avatar').attr('src');
		var name = $('#profile-summary p').text() + ' ';
		var userName = $('#profile-summary p').text().replace(/\s+/g, '').toLowerCase();
		var tweet = $('.tweet-compose').val();
		var numRet = 0;
		var numFav = 0;
		// var usersInteract = $('#users-interact .avatar').attr('src');
		var time = "1:04 PM - 19 Sep 13";

		$('#stream').prepend(
			'<div class="tweet">' +
				'<div class="content">' +
					'<img class="avatar" src="' + pic + '" />' +
					'<strong class="fullname">' + name + '</strong>' +
					'<span class="username">' + '@' + userName + '</span>' +
					'<p class="tweet-text">' + tweet + '</p>' +
					'<div class="tweet-actions">' +
						'<ul>' +
							'<li><span class="icon action-reply"></span> Reply</li>' +
							'<li><span class="icon action-retweet"></span> Retweet</li>' +
							'<li><span class="icon action-favorite"></span> Favorite</li>' +
							'<li><span class="icon action-more"></span> More</li>' +
						'</ul>' +
					'</div>' +
					'<div class="stats">' +
						'<div class="retweets">' +
							'<p class="num-retweets">' + numRet + '</p>' +
							'<p>RETWEETS</p>' +
						'</div>' +
						'<div class="favorites">' +
							'<p class="num-favorites">' + numFav + '</p>' +
							'<p>FAVORITES</p>' +
						'</div>' +
						'<div class="users-interact">' +
							'<div>' +
							'</div>' +
						'</div>' +
						'<div class="time">' + time + '</div>' +
					'</div>' +
					'<div class="reply">' +
						'<img class="avatar" src="img/alagoon.jpg" />' +
						'<textarea class="tweet-compose" placeholder="Reply to ' + '@' + userName + '"/></textarea>' +
					'</div>' +
				'</div>' +
			'</div>'
		)
		$('.tweet-actions').hide();
		$('.stats').hide();
		$('.reply').hide();


		$('.tweet').on('mouseover', function() {
			$('.tweet-actions', this).show();
		});

		$('.tweet').on('mouseleave', function() {
			$('.tweet-actions', this).hide();
		});

		$('.tweet').click(function() {
			console.log("tweet click");
			$(this).find('.stats').toggle({duration: 500});
			$(this).find('.reply').toggle();
		});
	});

	// $('.tweet-actions').hide();
	// $('.stats').hide();
	// $('.reply').hide();


	// $('.tweet').on('mouseover', function() {
	// 	$('.tweet-actions', this).show();
	// });

	// $('.tweet').on('mouseleave', function() {
	// 	$('.tweet-actions', this).hide();
	// });

	// $('.tweet').on('click', function() {
	// 	$('.stats, .reply', this).toggle();
	// });
//step 7
$('.stats').hide();
$('.reply').hide();
$('.tweet-actions').hide();


$('.tweet').click(function() {
	console.log("tweet click");
	$(this).find('.stats').toggle({duration: 500});
	$(this).find('.reply').toggle();
});

$('.tweet').hover(function() {
	$(this).find('.tweet-actions').show();
}, function() {
	$(this).find('.tweet-actions').hide();
});

});



