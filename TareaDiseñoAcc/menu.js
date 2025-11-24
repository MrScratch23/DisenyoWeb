// Menu Hamburguesa - TuttifruttiReviews (esperemos que funcione)
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-hamburguesa');
    const mainNav = document.getElementById('main-nav');
    
    // Función para alternar el menú
    function toggleMenu() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        
        // Alternar clases
        menuButton.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Actualizar atributos ARIA
        menuButton.setAttribute('aria-expanded', !isExpanded);
        mainNav.setAttribute('aria-hidden', isExpanded);
        
        // Cambiar el texto del label para accesibilidad
        const newLabel = isExpanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación';
        menuButton.setAttribute('aria-label', newLabel);
    }
    
    // Función para cerrar el menú
    function closeMenu() {
        menuButton.classList.remove('active');
        mainNav.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
        mainNav.setAttribute('aria-hidden', 'true');
        menuButton.setAttribute('aria-label', 'Abrir menú de navegación');
    }
    
    // Event listeners
    menuButton.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer clic en un enlace
    mainNav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });
    
    // Cerrar menú al presionar Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            closeMenu();
            menuButton.focus();
        }
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (mainNav.classList.contains('active') && 
            !mainNav.contains(e.target) && 
            !menuButton.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Manejar navegación por teclado dentro del menú
    mainNav.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && mainNav.classList.contains('active')) {
            const focusableElements = mainNav.querySelectorAll('a');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            // Trap focus dentro del menú
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
    
    // Inicializar atributos ARIA
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'main-nav');
    menuButton.setAttribute('aria-label', 'Abrir menú de navegación');
    mainNav.setAttribute('aria-hidden', 'true');
});