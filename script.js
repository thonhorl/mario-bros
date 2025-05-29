const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close-btn');
const youtubeVideo = document.getElementById('youtubeVideo');

// Link do vídeo do YouTube (embed) com autoplay
const videoURL = "https://www.youtube.com/embed/TnGl01FkMMo?autoplay=1";

openModalBtn.addEventListener('click', () => {
  youtubeVideo.src = videoURL; // coloca o vídeo e inicia autoplay
  modal.style.display = 'flex';
});

function closeModal() {
  modal.style.display = 'none';
  youtubeVideo.src = ""; // remove o src para parar o vídeo
}

closeBtn.addEventListener('click', closeModal);

// Fechar clicando fora do modal-content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
