const nav = document.querySelector('.artist-navbar')
fetch('./artist-navbar.html')
.then(res=>res.text())
.then(data=>{
  nav.innerHTML=data
})
