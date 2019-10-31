const relaxApp = () => {
	const song = document.querySelector('.app .app__player audio')
	const play = document.querySelector('.app .play');
	const outline = document.querySelector('.app .track-outline circle');
	const video = document.querySelector('.video video');

	//Sounds
	const sounds = document.querySelectorAll('.app .app__sound .btn');

	//Countdown
	const timeCountdown = document.querySelector('.app .app__countdown');

	//Get the length of the outline
	const outlineLength = outline.getTotalLength();

	//Times
	const timeSelect = document.querySelectorAll('.app .app__time .btn');

	//Duration
	let duration = 120;

	//Set outline to 0
	outline.style.strokeDasharray = outlineLength;
	outline.style.strokeDashoffset = outlineLength;

	//Pick different sounds
	sounds.forEach(sound => {
		sound.addEventListener('click', function() {
			song.src = this.getAttribute('data-sound');
			video.src = this.getAttribute('data-video');
			checkPlaying(song);
		});
	});

	//Play Sound
	play.addEventListener('click', () => {
		checkPlaying(song);
	});

	//Select Sound
	timeSelect.forEach(option => {
		option.addEventListener('click', function() {
			const minutes = Math.floor(duration / 60);
			const seconds = duration % 60;

			song.pause();
			video.pause();
			song.play();
			video.play();

			duration = this.getAttribute('data-time');
			timeCountdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
		});
	});

	//Play and pause the sounds
	const checkPlaying = song => {
		if (song.paused) {
			song.play();
			video.play();
			play.src = './assets/images/pause.svg';
		} else {
			song.pause();
			video.pause();
			play.src = './assets/images/play.svg';
		}
	}

	//Timer and outline
	song.ontimeupdate = () => {
		let currentTime = song.currentTime;
		let elapsedTime = duration - currentTime;
		let seconds = Math.floor(elapsedTime % 60);
		let minutes = Math.floor(elapsedTime / 60);

		//Animate the outline circle
		let progress = outlineLength - (currentTime / duration) * outlineLength;
		outline.style.strokeDashoffset = progress;

		//Animate Timer
		timeCountdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

		if (currentTime >= duration) {
			song.pause();
			video.pause();
			song.currentTime = 0;
			play.src = './assets/images/play.svg';
		}
	};
}

relaxApp();
