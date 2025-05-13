document.addEventListener('DOMContentLoaded', function() {
    // ===== EVENT HANDLING =====
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
    
    const hoverText = document.getElementById('hoverText');
    hoverText.addEventListener('mouseover', function() {
        this.style.color = 'red';
        this.style.fontWeight = 'bold';
        this.style.backgroundColor = '#ffff99';
    });
    
    hoverText.addEventListener('mouseout', function() {
        this.style.color = 'black';
        this.style.fontWeight = 'normal';
        this.style.backgroundColor = 'transparent';
    });
    
    // ===== INTERACTIVE ELEMENTS =====
    const toggleButton = document.getElementById('toggleButton');
    const toggleText = document.getElementById('toggleText');
    
    toggleButton.addEventListener('click', function() {
        if (toggleText.style.display === 'none') {
            toggleText.style.display = 'block';
            toggleButton.textContent = 'Hide Text';
        } else {
            toggleText.style.display = 'none';
            toggleButton.textContent = 'Show Text';
        }
    });
    
    const fontSlider = document.getElementById('fontSlider');
    const sliderText = document.getElementById('sliderText');
    
    fontSlider.addEventListener('input', function() {
        sliderText.style.fontSize = this.value + 'px';
    });
    
    const openModal = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    
    openModal.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // ===== FORM VALIDATION =====
    
    const myForm = document.getElementById('myForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    
    usernameInput.addEventListener('input', function() {
        if (this.value.length < 5) {
            usernameError.textContent = 'Username must be at least 5 characters.';
            this.setCustomValidity('Username must be at least 5 characters.');
        } else {
            usernameError.textContent = '';
            this.setCustomValidity('');
        }
    });

    myForm.addEventListener('submit', function(e) {
        let isValid = true;

        if (!emailInput.value) {
            emailError.textContent = 'Email is required!';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (usernameInput.value.length < 5) {
            usernameError.textContent = 'Username must be at least 5 characters.';
            isValid = false;
        } else {
            usernameError.textContent = '';
        }
        
        if (!isValid) {
            e.preventDefault();
        } else {
            e.preventDefault(); 
            alert('Form submitted successfully!');
        }
    });
});