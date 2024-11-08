const emojis = ['😄', '🚀', '🌟', '⚡', '🤖', '🎉', '✨', '🎨', '💻', '🧑‍💻', '📈', '🌐', '📊', '🛠️', '🔥'];

function generateEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    document.getElementById('emoji-container').textContent = emojis[randomIndex];
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
