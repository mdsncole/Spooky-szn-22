const watched = document.querySelectorAll('li');

watched.forEach(li => {
  li.addEventListener('click', function(){
  li.style.color = 'black';
  });
});
