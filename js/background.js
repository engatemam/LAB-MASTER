document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('tech-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    
    // EXTREME INTERACTIVITY CONFIG
    const PARTICLE_COUNT = 180; // Doubled density
    const MAX_DISTANCE = 130;
    const MOUSE_DISTANCE = 250; // Increased mouse reach
    
    // Colors matching the luxury theme
    const COLOR_GOLD = { r: 205, g: 164, b: 94 }; // #cda45e
    const COLOR_SLATE = { r: 90, g: 123, b: 156 }; // #5a7b9c
    
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    
    window.addEventListener('resize', resize);
    resize();
    
    let mouse = { x: -1000, y: -1000 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });
    window.addEventListener('touchmove', (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            // Faster base movement for vitality
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.radius = Math.random() * 2.5 + 0.8;
            this.isGold = Math.random() > 0.35; // More gold
        }
        
        update() {
            // MAGNETIC REPULSION PHYSICS
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            // If near mouse, repel violently to create a "force field"
            const forceFieldRadius = 150;
            if (distance < forceFieldRadius) {
                let force = (forceFieldRadius - distance) / forceFieldRadius;
                let directionX = (dx / distance) * force * 6;
                let directionY = (dy / distance) * force * 6;
                
                this.x -= directionX;
                this.y -= directionY;
            } else {
                // Normal movement
                this.x += this.vx;
                this.y += this.vy;
            }
            
            // Bounce off edges smoothly
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.isGold ? `rgba(${COLOR_GOLD.r}, ${COLOR_GOLD.g}, ${COLOR_GOLD.b}, 0.9)` : `rgba(${COLOR_SLATE.r}, ${COLOR_SLATE.g}, ${COLOR_SLATE.b}, 0.9)`;
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Connect particles to each other (The PCB Traces)
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < MAX_DISTANCE) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    
                    const opacity = 1 - (dist / MAX_DISTANCE);
                    ctx.strokeStyle = `rgba(${COLOR_GOLD.r}, ${COLOR_GOLD.g}, ${COLOR_GOLD.b}, ${opacity * 0.4})`;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }
            
            // Connect particle to mouse (The Laser Lasos)
            const mdx = particles[i].x - mouse.x;
            const mdy = particles[i].y - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            
            if (mdist < MOUSE_DISTANCE) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                
                const opacity = 1 - (mdist / MOUSE_DISTANCE);
                ctx.strokeStyle = `rgba(${COLOR_SLATE.r}, ${COLOR_SLATE.g}, ${COLOR_SLATE.b}, ${opacity * 0.7})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
});
