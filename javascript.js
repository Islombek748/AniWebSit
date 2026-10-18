const modal = document.getElementById('videoModal');
const container = document.getElementById('videoContainer');

// Barcha "ochish" tugmalariga hodisa biriktirish
document.querySelectorAll('.ochish').forEach(button => {
  button.addEventListener('click', () => {
    const videoId = button.getAttribute('data-video-id');
    
    // modal ichiga iframe joylash
    container.innerHTML = `
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
      </iframe>
    `;
    
    modal.showModal();
  });
});

// Modalni yopish funksiyasi
function closeModal() {
  container.innerHTML = ''; // Videoni to'xtatish
  modal.close();
}