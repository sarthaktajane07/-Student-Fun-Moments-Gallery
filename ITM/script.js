document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
      modal.style.display = 'flex';
      modal.style.alignItems = 'center';
      modal.style.justifyContent = 'center';
      modal.style.zIndex = 1000;
  
      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.style.maxWidth = '90%';
      fullImg.style.maxHeight = '90%';
      fullImg.style.border = '4px solid white';
      fullImg.style.borderRadius = '10px';
  
      modal.appendChild(fullImg);
      document.body.appendChild(modal);
  
      modal.addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });
  });