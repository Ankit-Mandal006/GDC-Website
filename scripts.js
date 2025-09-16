// Animate Neon BG to cursor
document.addEventListener('mousemove', e => {
  const bodyStyle = document.body.style;
  bodyStyle.setProperty('--mouse-x', `${e.clientX}px`);
  bodyStyle.setProperty('--mouse-y', `${e.clientY}px`);
});

// Nav section highlight on scroll
window.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const activateLink = id => {
    navLinks.forEach(link => {
      if(link.getAttribute('href')===`#${id}`) link.classList.add('active');
      else link.classList.remove('active');
    });
  };
  let obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ activateLink(entry.target.id);}
    });
  }, { threshold:0.36 });
  sections.forEach(section=>obs.observe(section));
  navLinks.forEach(link=>
    link.addEventListener('click',function(){
      navLinks.forEach(l=>l.classList.remove('active'));
      this.classList.add('active');
    })
  );
});
