
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close-btn');


openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});


function closeModal() {
  const iframe = modal.querySelector('iframe');
  iframe.src = iframe.src;
  modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);
