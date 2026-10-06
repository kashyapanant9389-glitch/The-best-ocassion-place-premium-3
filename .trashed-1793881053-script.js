const menuBtn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function submitBooking(e){
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const date=document.getElementById('date').value;
 const occasion=document.getElementById('occasion').value;
 const msg=document.getElementById('message').value.trim();
 const text=`Hi The Best Occasion Place, I want to plan an occasion.%0A%0AName: ${encodeURIComponent(name)}%0ADate: ${encodeURIComponent(date)}%0AOccasion: ${encodeURIComponent(occasion)}%0ADetails: ${encodeURIComponent(msg)}`;
 window.open(`https://wa.me/919012367747?text=${text}`,'_blank');
 document.getElementById('formNote').textContent='Opening WhatsApp to send your enquiry…';
 return false;
}
