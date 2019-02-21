		TweenMax.fromTo(".heart", 99999, {rotation:"225"}, {rotation:"225"})
		TweenMax.to(".heart", 5 , {strokeDashoffset:"0"} );
		TweenMax.to(".heart", 1 , {fill:"#cc0000", delay:3.5} );
		TweenMax.fromTo(".heart", 1, {scale:"1"}, {scale:"1.5", ease:Linear.easeNone, repeat:-1, yoyo:true, delay:3.5})