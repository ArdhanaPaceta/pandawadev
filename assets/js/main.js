/**
 * PANDAWA DEV — Main JavaScript
 * Lightweight, Vanilla JS, Zero dependencies
 */

function initPandawaApp() {
  // 1. Smooth Side-Drawer Mobile Navigation
  const navToggle = document.getElementById('navbar-toggle');
  const navMobile = document.getElementById('navbar-mobile');
  const navMobileClose = document.getElementById('navbarMobileClose');

  if (navMobile) {
    // Backdrop overlay for mobile drawer
    let navBackdrop = document.getElementById('navbarMobileBackdrop');
    if (!navBackdrop) {
      navBackdrop = document.createElement('div');
      navBackdrop.className = 'navbar-mobile-backdrop';
      navBackdrop.id = 'navbarMobileBackdrop';
      navBackdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(navBackdrop);
    }

    const openMenu = () => {
      navMobile.classList.add('open');
      navMobile.setAttribute('aria-hidden', 'false');
      if (navBackdrop) navBackdrop.classList.add('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      navMobile.classList.remove('open');
      navMobile.setAttribute('aria-hidden', 'true');
      if (navBackdrop) navBackdrop.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    if (navToggle) {
      navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMobile.classList.contains('open')) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }

    if (navMobileClose) {
      navMobileClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
      });
    }

    if (navBackdrop) {
      navBackdrop.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
      });
    }

    // Close when clicking any menu link
    navMobile.querySelectorAll('.navbar-mobile-link, .navbar-mobile-sublink').forEach((link) => {
      link.addEventListener('click', (e) => {
        if (link.closest('.has-dropdown') && e.target.closest('.navbar-mobile-chevron')) {
          return;
        }
        closeMenu();
      });
    });

    // Submenu accordion toggle for items with dropdown
    navMobile.querySelectorAll('.has-dropdown').forEach((item) => {
      const chevron = item.querySelector('.navbar-mobile-chevron');
      if (chevron) {
        chevron.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          item.classList.toggle('submenu-open');
        });
      }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMobile.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // 2. Scrolled Navbar Border
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('revealed');
      } else {
        observer.observe(el);
      }
    });
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 4. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      if (!parent) return;

      const isOpen = parent.classList.contains('open');

      // Optional: close other accordions in the same list
      const list = parent.closest('.faq-list');
      if (list) {
        list.querySelectorAll('.faq-item.open').forEach(item => {
          if (item !== parent) {
            item.classList.remove('open');
            const q = item.querySelector('.faq-question');
            if (q) q.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (isOpen) {
        parent.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        parent.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 5. Portfolio & Gallery Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterableItems = document.querySelectorAll('[data-category]');

  if (filterButtons.length > 0 && filterableItems.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter') || 'all';

        filterableItems.forEach(item => {
          const itemCat = item.getAttribute('data-category') || '';
          if (filterValue === 'all' || itemCat.split(' ').includes(filterValue)) {
            item.style.display = '';
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.transition = 'opacity 300ms ease';
              item.style.opacity = '1';
            }, 30);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. Gallery Lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg && galleryItems.length > 0) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const titleEl = item.querySelector('.gallery-caption-title');
        const catEl = item.querySelector('.gallery-caption-category');

        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Galeri Proyek';
        }

        if (lightboxCaption) {
          const title = titleEl ? titleEl.textContent : '';
          const cat = catEl ? catEl.textContent : '';
          lightboxCaption.textContent = title + (cat ? ' — ' + cat : '');
        }

        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }

  // 7. Interactive Contact Form -> WhatsApp
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const buildContactMessage = () => {
      const name = document.getElementById('form-name')?.value?.trim() || '(Nama belum diisi)';
      const business = document.getElementById('form-business')?.value?.trim() || '(Instansi belum diisi)';
      const phone = document.getElementById('form-phone')?.value?.trim() || '(No belum diisi)';
      const service = document.getElementById('form-service')?.value || 'Website Company Profile';
      const budget = document.getElementById('form-budget')?.value || 'Belum Ditentukan / Konsultasi';
      const timeline = document.getElementById('form-timeline')?.value?.trim() || '-';
      const notes = document.getElementById('form-notes')?.value?.trim() || '-';

      return `Halo Pandawa Dev, saya ingin konsultasi rencana pembuatan website:\n\n` +
        `• Nama PIC: ${name}\n` +
        `• Instansi / Bisnis: ${business}\n` +
        `• Nomor WhatsApp: ${phone}\n` +
        `• Pilihan Layanan: ${service}\n` +
        `• Pilihan Paket: ${budget}\n` +
        `• Target Peluncuran: ${timeline}\n` +
        `• Kebutuhan / Catatan: ${notes}\n\n` +
        `Mohon informasi penawaran dan jadwal diskusinya. Terima kasih!`;
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value?.trim() || '';
      const phone = document.getElementById('form-phone')?.value?.trim() || '';

      if (!name || !phone) {
        alert('Mohon lengkapi Nama Lengkap dan Nomor WhatsApp Anda.');
        return;
      }

      const text = buildContactMessage();
      const encodedText = encodeURIComponent(text);
      const waUrl = `https://wa.me/6285748319655?text=${encodedText}`;

      window.open(waUrl, '_blank', 'noopener');
    });

    // Copy formatted message to clipboard
    const copyBtn = document.getElementById('btn-copy-format');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = buildContactMessage();
        navigator.clipboard.writeText(text).then(() => {
          const originalHTML = copyBtn.innerHTML;
          copyBtn.innerHTML = `
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Format Pesan Tersalin!</span>
          `;
          copyBtn.style.background = '#0e3834';
          copyBtn.style.color = '#ffffff';
          copyBtn.style.borderColor = '#0e3834';

          setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.background = '';
            copyBtn.style.color = '';
            copyBtn.style.borderColor = '';
          }, 2500);
        }).catch(() => {
          alert('Format pesan:\n\n' + text);
        });
      });
    }
  }

  // 8. Interactive WhatsApp Popup Widget
  const waWidget = document.getElementById('waWidget');
  const waFloatBtn = document.getElementById('waFloatBtn');
  const waPopup = document.getElementById('waPopup');
  const waPopupClose = document.getElementById('waPopupClose');

  if (waFloatBtn && waPopup) {
    const togglePopup = () => {
      const isOpen = waPopup.classList.contains('is-open');
      if (isOpen) {
        waPopup.classList.remove('is-open');
        waPopup.setAttribute('aria-hidden', 'true');
        waFloatBtn.setAttribute('aria-expanded', 'false');
      } else {
        waPopup.classList.add('is-open');
        waPopup.setAttribute('aria-hidden', 'false');
        waFloatBtn.setAttribute('aria-expanded', 'true');
      }
    };

    waFloatBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePopup();
    });

    if (waPopupClose) {
      waPopupClose.addEventListener('click', (e) => {
        e.stopPropagation();
        waPopup.classList.remove('is-open');
        waPopup.setAttribute('aria-hidden', 'true');
        waFloatBtn.setAttribute('aria-expanded', 'false');
      });
    }

    // Close when clicking outside widget
    document.addEventListener('click', (e) => {
      if (waPopup.classList.contains('is-open')) {
        if (!waPopup.contains(e.target) && !waFloatBtn.contains(e.target)) {
          waPopup.classList.remove('is-open');
          waPopup.setAttribute('aria-hidden', 'true');
          waFloatBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && waPopup.classList.contains('is-open')) {
        waPopup.classList.remove('is-open');
        waPopup.setAttribute('aria-hidden', 'true');
        waFloatBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 9. Smooth Scrolling for Internal Anchor Links (e.g. #paket, #layanan)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const hash = this.getAttribute('href');
      if (hash && hash.length > 1 && hash.startsWith('#')) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const nav = document.getElementById('navbar');
          const navOffset = (nav ? nav.offsetHeight : 70) + 15;
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navOffset;

          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth'
          });

          // Close mobile menu if open
          const navMobile = document.getElementById('navbar-mobile');
          const navToggle = document.getElementById('navbar-toggle');
          if (navMobile && navMobile.classList.contains('open')) {
            navMobile.classList.remove('open');
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
          }

          // Update hash in URL
          if (history.pushState) {
            history.pushState(null, '', hash);
          }
        }
      }
    });
  });

  // 10. Clean URL Handler: Strip /index.html from URL bar when served via HTTP/HTTPS
  if (window.location.protocol.startsWith('http')) {
    const pathname = window.location.pathname;
    if (pathname.endsWith('/index.html')) {
      const cleanPath = pathname.replace(/\/index\.html$/, '/') + window.location.search + window.location.hash;
      window.history.replaceState(null, '', cleanPath);
    } else if (pathname === '/index.html') {
      window.history.replaceState(null, '', '/' + window.location.search + window.location.hash);
    } else if (pathname.endsWith('.html')) {
      const cleanPath = pathname.replace(/\.html$/, '/') + window.location.search + window.location.hash;
      window.history.replaceState(null, '', cleanPath);
    }
  }

  // Local file:/// Compatibility Link Resolver
  if (window.location.protocol === 'file:') {
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const projectRootMatch = currentPath.match(/(.*\/pandawadev\/)/i);
    const projectRoot = projectRootMatch ? projectRootMatch[1] : '';

    if (projectRoot) {
      document.querySelectorAll('a[href]').forEach((a) => {
        const rawHref = a.getAttribute('href');
        if (!rawHref || rawHref.startsWith('http') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('#') || rawHref.startsWith('javascript:')) {
          return;
        }

        // If link starts with '/', resolve relative to project root
        if (rawHref.startsWith('/')) {
          let cleanPath = rawHref.replace(/^\/+/, '');
          let hashPart = '';
          if (cleanPath.includes('#')) {
            const splitHash = cleanPath.split('#');
            cleanPath = splitHash[0];
            hashPart = '#' + splitHash[1];
          }

          if (!cleanPath || cleanPath === '') {
            cleanPath = 'index.html';
          } else if (cleanPath.endsWith('/')) {
            cleanPath += 'index.html';
          } else if (!cleanPath.includes('.')) {
            cleanPath += '/index.html';
          }
          a.setAttribute('href', projectRoot + cleanPath + hashPart);
        }
      });
    }
  }

  // 11. Circular Scroll-to-Top Button with Dynamic Progress Indicator
  let scrollTopBtn = document.getElementById('scrollTopBtn');
  let scrollProgressBar = document.getElementById('scrollProgressBar');

  // Auto-inject if not already present in DOM
  if (!scrollTopBtn) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'scroll-top-btn';
    btn.id = 'scrollTopBtn';
    btn.setAttribute('aria-label', 'Kembali ke atas');
    btn.setAttribute('title', 'Kembali ke atas');
    btn.innerHTML = `
      <svg class="scroll-progress-svg" viewBox="0 0 48 48" width="48" height="48">
        <circle class="scroll-progress-bg" cx="24" cy="24" r="20" />
        <circle class="scroll-progress-bar" id="scrollProgressBar" cx="24" cy="24" r="20" />
      </svg>
      <span class="scroll-top-icon">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </span>
    `;
    const waWidgetEl = document.getElementById('waWidget');
    if (waWidgetEl) {
      document.body.insertBefore(btn, waWidgetEl);
    } else {
      document.body.appendChild(btn);
    }
    scrollTopBtn = btn;
    scrollProgressBar = document.getElementById('scrollProgressBar');
  }

  if (scrollTopBtn && scrollProgressBar) {
    const radius = 20;
    const circumference = 2 * Math.PI * radius; // ~125.66px
    scrollProgressBar.style.strokeDasharray = `${circumference}`;
    scrollProgressBar.style.strokeDashoffset = `${circumference}`;

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;

      if (scrollTop > 180) {
        scrollTopBtn.classList.add('is-visible');
      } else {
        scrollTopBtn.classList.remove('is-visible');
      }

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        const offset = circumference - (progress * circumference);
        scrollProgressBar.style.strokeDashoffset = offset;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    updateScrollProgress();

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 12. Interactive Testimonial Slider (Swipe, Drag, Buttons & Dots on Mobile)
  const testimonialTrack = document.getElementById('testimonialTrack');
  const testimonialViewport = document.getElementById('testimonialViewport');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  const dotsContainer = document.getElementById('testimonialDots');

  if (testimonialTrack && testimonialViewport) {
    const slides = testimonialTrack.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const isMobileMode = () => window.innerWidth <= 900;

    const updateSlider = (index) => {
      if (!isMobileMode()) {
        testimonialTrack.style.removeProperty('transform');
        return;
      }
      currentIndex = (index + totalSlides) % totalSlides;
      testimonialTrack.style.setProperty('transform', `translateX(-${currentIndex * 100}%)`, 'important');

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.testimonial-dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      }
    };

    const nextSlide = () => {
      if (isMobileMode()) updateSlider(currentIndex + 1);
    };
    const prevSlide = () => {
      if (isMobileMode()) updateSlider(currentIndex - 1);
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        prevSlide();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        nextSlide();
      });
    }

    if (dotsContainer) {
      dotsContainer.addEventListener('click', (e) => {
        if (!isMobileMode()) return;
        const dot = e.target.closest('.testimonial-dot');
        if (dot && dot.dataset.index !== undefined) {
          e.preventDefault();
          updateSlider(parseInt(dot.dataset.index, 10));
        }
      });
    }

    // Window Resize Handling
    window.addEventListener('resize', () => {
      if (!isMobileMode()) {
        testimonialTrack.style.transform = '';
      } else {
        updateSlider(currentIndex);
      }
    }, { passive: true });

    // Touch Swipe
    testimonialViewport.addEventListener('touchstart', (e) => {
      if (!isMobileMode()) return;
      startX = e.touches[0].clientX;
      currentX = startX;
      isDragging = true;
    }, { passive: true });

    testimonialViewport.addEventListener('touchmove', (e) => {
      if (!isDragging || !isMobileMode()) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    testimonialViewport.addEventListener('touchend', () => {
      if (!isDragging || !isMobileMode()) return;
      isDragging = false;
      const diffX = currentX - startX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    });

    // Mouse Drag (Mobile viewport emulation / small screens)
    let isMouseDown = false;
    testimonialViewport.addEventListener('mousedown', (e) => {
      if (!isMobileMode()) return;
      isMouseDown = true;
      startX = e.clientX;
      currentX = startX;
    });

    testimonialViewport.addEventListener('mousemove', (e) => {
      if (!isMouseDown || !isMobileMode()) return;
      currentX = e.clientX;
    });

    const handleMouseUp = () => {
      if (!isMouseDown || !isMobileMode()) return;
      isMouseDown = false;
      const diffX = currentX - startX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
  }
}

// Ensure execution whether DOM is already loaded (e.g. on cached reload / refresh) or still loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPandawaApp);
} else {
  initPandawaApp();
}

