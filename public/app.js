
//links

const links = document.querySelector('.link') ;

links.forEach(link => {
 link.addEventListener('click' , () => {
  links.forEach(ele => ele.classList.remove('active')) ;
  link.classList.add('active') ;
 })
})