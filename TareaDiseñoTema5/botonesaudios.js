const audio = document.getElementById('miAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const volumenSlider = document.getElementById('volumenSlider');

playBtn.addEventListener('click', () => audio.play());
pauseBtn.addEventListener('click', () => audio.pause());
volumenSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});