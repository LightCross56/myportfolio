'use strict';

{
  const menuItems = document.querySelectorAll('.main_menu li a');
  const contens = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      })
      clickedItem.classList.add('active');
      
      contens.forEach(content => {
        content.classList.remove('active');
      })
      document.getElementById(clickedItem.dataset.id).classList.add('active');
      
    });
  });

}

{
  const open_map = document.getElementById('open_map');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open_map.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  
  mask.addEventListener('click', () => {
    close.click();
  });

}