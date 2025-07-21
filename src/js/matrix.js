export function initializeMatrix() {
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@)(*&^%$!?><:"{}|';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = [];

  // Initialize drops
  for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * -100;
  }

  function draw() {
    // Semi-transparent black background for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Matrix text
    ctx.fillStyle = 'rgba(0, 255, 65, 0.8)';
    ctx.font = fontSize + 'px "JetBrains Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      
      ctx.fillText(text, x, y);

      // Reset drop when it reaches bottom
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  // Start animation
  setInterval(draw, 35);
}