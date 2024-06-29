document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('uniqueFeedbackForm');
    const heartContainer = document.getElementById('uniqueHeartContainer');
    const successMessage = document.getElementById('uniqueSuccessMessage');

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        
        heartContainer.innerHTML = '';

       
        heartContainer.style.display = 'block';

     
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            const x = `${Math.random() * 200 - 100}px`;
            const y = `${Math.random() * 200 - 100}px`;
            heart.style.setProperty('--x', x);
            heart.style.setProperty('--y', y);
            heartContainer.appendChild(heart);
        }

      
        setTimeout(() => {
            heartContainer.style.display = 'none';
            successMessage.style.display = 'block';
        }, 2000);
    });
});
