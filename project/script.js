// Clase para manejar el carrusel de imágenes
class ImageCarousel {
    constructor() {
        // Datos de las slides del carrusel
        this.slides = [
            {
                id: 1,
                image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Construcción Residencial',
                description: 'Casas modernas con los mejores materiales'
            },
            {
                id: 2,
                image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Remodelación de Cocinas',
                description: 'Espacios funcionales y elegantes'
            },
            {
                id: 3,
                image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Diseño de Baños',
                description: 'Baños modernos y funcionales'
            },
            {
                id: 4,
                image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Construcción Comercial',
                description: 'Oficinas y espacios comerciales'
            },
            {
                id: 5,
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Jardines y Exteriores',
                description: 'Paisajismo y diseño de exteriores'
            },
            {
                id: 6,
                image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Interiorismo Completo',
                description: 'Diseño interior personalizado'
            }
        ];
        
        this.currentSlide = 0;
        this.isAutoPlaying = true;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000; // 4 segundos
        
        this.init();
    }
    
    // Inicializar el carrusel
    init() {
        this.renderSlides();
        this.renderIndicators();
        this.bindEvents();
        this.startAutoPlay();
    }
    
    // Renderizar las slides
    renderSlides() {
        const slidesContainer = document.getElementById('carouselSlides');
        if (!slidesContainer) return;
        
        slidesContainer.innerHTML = '';
        
        this.slides.forEach(slide => {
            const slideElement = document.createElement('div');
            slideElement.className = 'carousel-slide';
            slideElement.style.backgroundImage = `url(${slide.image})`;
            slideElement.innerHTML = `
                <div class="slide-content">
                    <h3>${slide.title}</h3>
                    <p>${slide.description}</p>
                </div>
            `;
            slidesContainer.appendChild(slideElement);
        });
    }
    
    // Renderizar los indicadores
    renderIndicators() {
        const indicatorsContainer = document.getElementById('indicators');
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        
        this.slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
    }
    
    // Vincular eventos
    bindEvents() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Pausar auto-play cuando el usuario interactúa
        if (carouselWrapper) {
            carouselWrapper.addEventListener('mouseenter', () => this.pauseAutoPlay());
            carouselWrapper.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Soporte para navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Pausar auto-play cuando la pestaña no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoPlay();
            } else {
                this.startAutoPlay();
            }
        });
    }
    
    // Ir a una slide específica
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }
    
    // Slide siguiente
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateCarousel();
    }
    
    // Slide anterior
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
    }
    
    // Actualizar la visualización del carrusel
    updateCarousel() {
        const slidesContainer = document.getElementById('carouselSlides');
        if (!slidesContainer) return;
        
        const translateX = -this.currentSlide * 100;
        slidesContainer.style.transform = `translateX(${translateX}%)`;
        
        // Actualizar indicadores
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    // Iniciar auto-play
    startAutoPlay() {
        if (this.isAutoPlaying && !this.autoPlayInterval) {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoPlayDelay);
        }
    }
    
    // Pausar auto-play
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    // Habilitar/deshabilitar auto-play
    toggleAutoPlay() {
        this.isAutoPlaying = !this.isAutoPlaying;
        if (this.isAutoPlaying) {
            this.startAutoPlay();
        } else {
            this.pauseAutoPlay();
        }
    }
    
    // Agregar nueva slide
    addSlide(slideData) {
        this.slides.push({
            id: Date.now(),
            ...slideData
        });
        this.renderSlides();
        this.renderIndicators();
    }
    
    // Eliminar slide
    removeSlide(slideId) {
        this.slides = this.slides.filter(slide => slide.id !== slideId);
        if (this.currentSlide >= this.slides.length) {
            this.currentSlide = 0;
        }
        this.renderSlides();
        this.renderIndicators();
        this.updateCarousel();
    }
    
    // Destruir el carrusel
    destroy() {
        this.pauseAutoPlay();
        // Remover event listeners si es necesario
    }
}

// Clase para manejar la navegación móvil
class MobileNavigation {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navbar = document.getElementById('navbar');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        if (this.menuToggle && this.navbar) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
            
            // Cerrar menú al hacer clic en un enlace
            const navLinks = this.navbar.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });
            
            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (!this.navbar.contains(e.target) && !this.menuToggle.contains(e.target)) {
                    this.closeMenu();
                }
            });
        }
    }
    
    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.navbar.classList.toggle('active', this.isOpen);
        
        // Cambiar icono del menú
        const icon = this.menuToggle.querySelector('i');
        if (icon) {
            icon.className = this.isOpen ? 'fas fa-times' : 'fas fa-bars';
        }
    }
    
    closeMenu() {
        this.isOpen = false;
        this.navbar.classList.remove('active');
        
        const icon = this.menuToggle.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
    }
}

// Clase para manejar el scroll suave
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Agregar scroll suave a todos los enlaces internos
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Clase para manejar efectos de scroll
class ScrollEffects {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            this.handleHeaderScroll();
        });
    }
    
    handleHeaderScroll() {
        if (this.header) {
            if (window.scrollY > 100) {
                this.header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                this.header.style.backdropFilter = 'blur(10px)';
            } else {
                this.header.style.backgroundColor = '#ffffff';
                this.header.style.backdropFilter = 'none';
            }
        }
    }
}

// Clase para manejar el formulario de contacto
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        
        
        // Simulación de envío exitoso
        this.showSuccessMessage();
        this.form.reset();
    }
    
    showSuccessMessage() {
        // Crear mensaje de éxito
        const message = document.createElement('div');
        message.className = 'success-message';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #10b981;
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        message.textContent = '¡Mensaje enviado exitosamente!';
        
        // Agregar animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(message);
        
        // Remover mensaje después de 3 segundos
        setTimeout(() => {
            message.remove();
            style.remove();
        }, 3000);
    }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las funcionalidades
    const carousel = new ImageCarousel();
    const mobileNav = new MobileNavigation();
    const smoothScroll = new SmoothScroll();
    const scrollEffects = new ScrollEffects();
    const contactForm = new ContactForm();
    
    // Hacer el carrusel accesible globalmente para debugging
    window.carousel = carousel;
    
    // Agregar indicador de carga
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    `;
    loader.innerHTML = '<div style="font-size: 1.5rem; color: #ef4444;">Cargando...</div>';
    
    document.body.appendChild(loader);
    
    // Remover loader cuando todo esté cargado
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 300);
    });
    
    console.log('🚀 MC Construcción - Sitio web cargado exitosamente');
});