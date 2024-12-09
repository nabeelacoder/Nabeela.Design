     // Adding scroll functionality for navbar background change
     window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


// Generate floating shapes
const shapes = ['square', 'circle', 'triangle'];
const colors = ['#8A2BE2', '#39FF14', '#FDFD96'];
const container = document.querySelector('.floating-shapes');

for (let i = 0; i < 20; i++) {
  const shape = document.createElement('div');
  const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  shape.className = `shape ${shapeType}`;
  shape.style.left = `${Math.random() * 100}vw`;
  shape.style.top = `${Math.random() * 100}vh`;
  shape.style.width = `${Math.random() * 50 + 20}px`;
  shape.style.height = shape.style.width;
  shape.style.backgroundColor = color;
  shape.style.animationDelay = `${Math.random() * 20}s`;
  
  container.appendChild(shape);
}

// Preview Animation
const canvas = document.getElementById('preview-animation');
let html = '';
for (let i = 0; i < 5; i++) {
  html += `
    <div style="
      position: absolute;
      width: 100px;
      height: 100px;
      background: ${colors[i % colors.length]};
      border-radius: 10px;
      transform-origin: center;
      animation: rotate${i} 10s infinite linear;
      opacity: 0.5;
    "></div>
  `;
}
canvas.innerHTML = html;

// Add keyframes for each rotating element
const style = document.createElement('style');
style.textContent = Array.from({length: 5}, (_, i) => `
  @keyframes rotate${i} {
    from {
      transform: rotate(${i * 72}deg) translateX(100px) rotate(0deg);
    }
    to {
      transform: rotate(${i * 72}deg) translateX(100px) rotate(360deg);
    }
  }
`).join('\n');
document.head.appendChild(style);

    