let observer = new IntersectionObserver((e)=>{
    e.forEach((박스)=>{
        if(박스.isIntersecting){
        박스.target.style.opacity = 1;
        }
    })
})

let section = document.querySelectorAll('section')
observer.observe(section[0])
observer.observe(section[1])
observer.observe(section[2])
observer.observe(section[3])

const togglebtn = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');

togglebtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
});