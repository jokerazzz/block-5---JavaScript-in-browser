
document.addEventListener('DOMContentLoaded', function () {
    let btnShow = document.getElementById('btn-show');
    let brandItems= document.getElementById('brand-items');

    btnShow.addEventListener('click', function () {
        brandItems.classList.toggle('btn-active');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    let btnContent = document.getElementById('btn-show');
    let btnActive = btnContent.innerHTML;
  
    
    btnContent.addEventListener('click', function () {
      
      if (btnContent.innerHTML === btnActive) {
        
        btnContent.innerHTML = 'Скрыть';
      } else {
        
        btnContent.innerHTML = btnActive;
      }
    });
  });

 

 