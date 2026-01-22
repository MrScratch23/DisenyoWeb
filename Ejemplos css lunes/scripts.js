// Controladores para audio personalizado
const audio = document.getElementById('audioPersonalizado');

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function cambiarVolumen() {
    const volumen = document.getElementById('volumen').value;
    audio.volume = volumen;
}

// Controladores para video personalizado
const video = document.getElementById('videoPersonalizado');
const tiempoVideo = document.getElementById('tiempoVideo');
const progresoVideo = document.getElementById('progresoVideo');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function toggleMute() {
    video.muted = !video.muted;
}

function cambiarProgreso() {
    const porcentaje = progresoVideo.value;
    video.currentTime = (porcentaje / 100) * video.duration;
}

// Actualizar tiempo del video
video.addEventListener('timeupdate', function() {
    const minutosActual = Math.floor(video.currentTime / 60);
    const segundosActual = Math.floor(video.currentTime % 60);
    const minutosTotal = Math.floor(video.duration / 60);
    const segundosTotal = Math.floor(video.duration % 60);
    
    tiempoVideo.textContent = 
        `${minutosActual.toString().padStart(2, '0')}:${segundosActual.toString().padStart(2, '0')} / 
         ${minutosTotal.toString().padStart(2, '0')}:${segundosTotal.toString().padStart(2, '0')}`;
    
    const porcentaje = (video.currentTime / video.duration) * 100;
    progresoVideo.value = porcentaje;
});

// Actualizar duración cuando el video esté cargado
video.addEventListener('loadedmetadata', function() {
    progresoVideo.max = 100;
});