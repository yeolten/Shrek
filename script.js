document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.querySelector('#yesBtn');
  const noBtn = document.querySelector('#noBtn');

  yesBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1iCYUqGknA6ge5aVwGz6h7tF_nB0dF5zF/view?usp=drive_link'; // Reemplaza con la ruta y el nombre de tu archivo PDF
    link.download = 'boleto.pdf'; // Nombre del archivo que se descargará
    
    link.click();
  });

  noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
  });
});