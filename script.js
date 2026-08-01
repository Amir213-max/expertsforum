/* ==========================================================================
   Experts Forum Co. Ltd. (شركة ملتقى الخبراء المحدودة)
   Interactive Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Smooth Scroll for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Tab Switchers (Services / Sectors / Products / Research)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(tabTarget);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });

  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });

  // Mobile Dropdown Accordion Toggle
  const navItemsWithDropdown = document.querySelectorAll('.nav-item');
  
  navItemsWithDropdown.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');
    const caret = item.querySelector('.dropdown-caret');
    
    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1200) {
          // If the dropdown isn't open yet, prevent redirection and show it
          if (dropdown.style.display !== 'block') {
            e.preventDefault();
            
            // Close other dropdowns first
            document.querySelectorAll('.dropdown-menu').forEach(d => {
              if (d !== dropdown) d.style.display = 'none';
            });
            document.querySelectorAll('.dropdown-caret').forEach(c => {
              if (c !== caret) c.style.transform = 'none';
            });
            
            dropdown.style.display = 'block';
            if (caret) caret.style.transform = 'rotate(180deg)';
          } else {
            // If already open, let the click proceed to the parent page (index.html)
            dropdown.style.display = 'none';
            if (caret) caret.style.transform = 'none';
          }
        }
      });
    }
  });

  // Contact Form Handling (Demo Simulation)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('شكراً لتواصلكم مع شركة ملتقى الخبراء المحدودة. تم استلام رسالتكم بنجاح وسيقوم فريقنا بالتواصل معكم في أقرب وقت.');
      contactForm.reset();
    });
  }

  // Strategic Video Modal Handling
  const openVideoBtn = document.getElementById('openVideoModal');
  const closeVideoBtn = document.getElementById('closeVideoModal');
  const videoModal = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoIframe');

  if (openVideoBtn && videoModal) {
    openVideoBtn.addEventListener('click', () => {
      videoModal.classList.add('active');
      if (videoIframe) {
        // Video duration is 30s; end=25 cuts off the last 5 seconds
        videoIframe.src = "https://www.youtube-nocookie.com/embed/Ug8_PrKr5Vs?autoplay=1&end=25&rel=0";
      }
    });
  }

  if (closeVideoBtn && videoModal) {
    closeVideoBtn.addEventListener('click', () => {
      videoModal.classList.remove('active');
      if (videoIframe) {
        videoIframe.src = "";
      }
    });
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        if (videoIframe) {
          videoIframe.src = "";
        }
      }
    });
  }
});
