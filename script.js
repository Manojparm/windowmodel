window.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModalButton');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeButton = document.getElementById('closeButton');
  
    openModalButton.addEventListener('click', () => {
      showModal();
    });
  
    closeButton.addEventListener('click', () => {
      closeModal();
    });
  
    modalOverlay.addEventListener('click', event => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
  
    function showModal() {
      modalOverlay.style.display = 'flex';
      document.body.classList.add('modal-open');
    }
  
    function closeModal() {
      modalOverlay.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
  