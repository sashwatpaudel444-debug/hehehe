// Your personalized letter - PERFECT VERSION
const loveLetter = `Hey my love ❤️,

Wow… can you believe it’s already been 9 months? Every moment with you feels special, and these months have been unforgettable because of your love, your smile, and the way you make my world brighter. I know we’ve been through a lot—fights, misunderstandings, ups and downs—and there were moments when things weren’t easy. But through everything, we chose each other. We chose to stay, to learn, and to grow together, and that choice means everything to me.

You’ve always been there for me—always checking on me, always caring, always doing the little things that make me feel happy, loved, and understood. You try every day to make me smile, to make me feel safe, and to remind me that I’m never alone. I honestly couldn’t ask for anything more. I don’t want anything else in this world—I just want you. I choose you, again and again, and I want only you for the rest of my life.

Thank you for being my happiness, my comfort, my best friend, and my love. These 9 months with you have been beautiful, and I’m so excited for everything that’s still ahead of us. One day, I don’t just want to celebrate months or years with you—I want to build a life with you. And one day, with all my heart, I want to make you my wife.

Happy 9 months, my love. Thank you for being you, for loving me, and for making every moment we share so special. I promise to keep choosing you, always.

With all my love, Your baby boy(hehe)`;

const reasonsILoveYou = [
    "I love how you always think before speaking because you care about my feelings and never want me to get hurt.",
    "I love how you always clear misunderstandings between us instead of letting small issues grow.",
    "I love how you update me whenever you're going out so I don't overthink or worry.",
    "I love your patience with me, even when things aren't easy or we're apart.",
    "I love that even after I've hurt you countless times, you still choose to love me.",
    "I love your forgiveness and the way you see the good in me, even when I struggle to see it myself.",
    "I love your honesty and the way you express your feelings openly.",
    "I love how you encourage me to grow while still accepting me as I am.",
    "I love your thoughtfulness—the little things you do that show how much you care.",
    "I love how you make distance feel smaller and our connection feel strong.",
    "I love how you make me feel safe, understood, and truly appreciated, even from miles away."
];

// DOM Elements
const letterTextElement = document.getElementById('letter-text');
const revealBtn = document.getElementById('revealBtn');
const reasonsContainer = document.querySelector('.reasons-container');
const moreReasonsBtn = document.getElementById('moreReasonsBtn');
const galleryItems = document.querySelectorAll('.gallery-item');
const memoryDisplay = document.getElementById('memoryDisplay');
const playBtn = document.getElementById('playSongBtn');
const confettiCanvas = document.getElementById('confettiCanvas');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const audioMessage = document.getElementById('audioMessage');

// Initialize
let reasonsShown = 0;
let letterRevealed = false;
let confettiActive = false;

// Calculate actual time together
function calculateTimeTogether() {
    // March 29, 2025 to December 29, 2025 = 274 days
    const startDate = new Date('2025-03-29');
    const now = new Date('2025-12-29');
    
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = diffDays * 24;
    const diffMinutes = diffHours * 60;
    
    daysElement.textContent = diffDays;
    hoursElement.textContent = diffHours.toLocaleString();
    minutesElement.textContent = diffMinutes.toLocaleString();
}

// Typewriter effect for love letter
function typeWriter(text, element, speed = 30) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add confetti when letter is fully revealed
            if (!confettiActive) {
                createConfetti();
                confettiActive = true;
            }
        }
    }
    
    type();
}

// Create initial reasons
function createInitialReasons() {
    for (let i = 0; i < 9; i++) {
        if (i < reasonsILoveYou.length) {
            createReasonCard(i, reasonsILoveYou[i]);
            reasonsShown++;
        }
    }
}

// Create a single reason card
function createReasonCard(index, reason) {
    const reasonCard = document.createElement('div');
    reasonCard.className = 'reason-card';
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-heart';
    
    const reasonText = document.createElement('p');
    reasonText.innerHTML = `<strong>Reason #${index + 1}:</strong> ${reason}`;
    
    reasonCard.appendChild(icon);
    reasonCard.appendChild(reasonText);
    reasonsContainer.appendChild(reasonCard);
    
    // Add animation
    reasonCard.style.opacity = '0';
    reasonCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        reasonCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        reasonCard.style.opacity = '1';
        reasonCard.style.transform = 'translateY(0)';
    }, 100 * index);
}

// Show more reasons
function showMoreReasons() {
    const remainingReasons = reasonsILoveYou.length - reasonsShown;
    const toShow = Math.min(3, remainingReasons);
    
    if (toShow > 0) {
        for (let i = 0; i < toShow; i++) {
            createReasonCard(reasonsShown, reasonsILoveYou[reasonsShown]);
            reasonsShown++;
        }
        
        if (reasonsShown >= reasonsILoveYou.length) {
            moreReasonsBtn.disabled = true;
            moreReasonsBtn.textContent = "All Reasons Shown!";
            moreReasonsBtn.style.opacity = "0.6";
        }
    }
}

// Gallery click handlers
function setupGallery() {
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const memory = this.getAttribute('data-memory');
            memoryDisplay.innerHTML = `<i class="fas fa-calendar-day"></i> "${memory}"`;
            memoryDisplay.style.color = '#5a3d5c';
            memoryDisplay.style.fontStyle = 'normal';
            memoryDisplay.style.fontWeight = '500';
            
            memoryDisplay.style.animation = 'none';
            setTimeout(() => {
                memoryDisplay.style.animation = 'pulse 0.5s';
            }, 10);
        });
    });
}

// Music Player with Heartbeat Effect
function setupMusicPlayer() {
    const playBtn = document.getElementById('playSongBtn');
    const message = document.getElementById('audioMessage');
    const musicSection = document.querySelector('.music-player');
    const heartBeat = document.querySelector('.heart-beat');
    
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            musicSection.classList.add('playing');
            
            if (heartBeat) {
                heartBeat.style.opacity = '1';
            }
            
            message.innerHTML = `
                <i class="fas fa-heartbeat"></i>
                Opening our song... Get ready to feel my presence ❤️
            `;
            message.style.color = '#ff758c';
            message.style.fontWeight = '600';
            
            createFloatingHearts();
            
            this.innerHTML = `
                <span class="btn-icon">
                    <i class="fas fa-heart-circle-check"></i>
                </span>
                <span class="btn-text">Our Song Is Playing</span>
            `;
            this.style.background = 'linear-gradient(45deg, #7b4b96, #9b5de5)';
            
            setTimeout(() => {
                window.open('https://www.youtube.com/watch?v=2Vv-BfVoq4g&autoplay=1', '_blank');
            }, 800);
            
            createConfetti();
            
            setTimeout(() => {
                this.innerHTML = `
                    <span class="btn-icon">
                        <i class="fas fa-redo"></i>
                    </span>
                    <span class="btn-text">Play Again</span>
                `;
                this.style.background = 'linear-gradient(45deg, #ff758c, #ff7eb3)';
            }, 5000);
        });
    }
    
    function createFloatingHearts() {
        const container = document.querySelector('.music-player');
        const heartColors = ['#ff758c', '#ff7eb3', '#ff9eaa', '#c44569'];
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'absolute';
                heart.style.fontSize = `${20 + Math.random() * 15}px`;
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.top = `${80 + Math.random() * 10}%`;
                heart.style.opacity = '0';
                heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
                heart.style.zIndex = '999';
                heart.style.pointerEvents = 'none';
                heart.style.userSelect = 'none';
                heart.style.animation = `floatHeart ${2 + Math.random() * 3}s ease-out forwards`;
                
                container.appendChild(heart);
                
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.remove();
                    }
                }, 3000);
            }, i * 100);
        }
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                musicSection.style.animation = 'pulseGlow 3s ease-in-out';
            }
        });
    }, { threshold: 0.3 });
    
    if (musicSection) {
        observer.observe(musicSection);
    }
}

// Confetti effect
function createConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#ff758c', '#ff7eb3', '#ffccd5', '#ff9eaa', '#c44569'];
    
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            r: Math.random() * 10 + 5,
            d: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncrement: Math.random() * 0.05 + 0.05,
            tiltAngle: 0
        });
    }
    
    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        confettiPieces.forEach(p => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
            ctx.stroke();
        });
    }
    
    function updateConfetti() {
        confettiPieces.forEach(p => {
            p.y += p.d;
            p.tiltAngle += p.tiltAngleIncrement;
            p.tilt = Math.sin(p.tiltAngle) * 15;
            
            if (p.y > confettiCanvas.height) {
                p.y = -20;
                p.x = Math.random() * confettiCanvas.width;
            }
        });
        
        drawConfetti();
        requestAnimationFrame(updateConfetti);
    }
    
    updateConfetti();
}

// Event Listeners
revealBtn.addEventListener('click', function() {
    if (!letterRevealed) {
        typeWriter(loveLetter, letterTextElement);
        letterRevealed = true;
        revealBtn.textContent = "My Heart to Yours ❤️";
        revealBtn.style.background = "linear-gradient(45deg, #7b4b96, #9b5de5)";
    }
});

moreReasonsBtn.addEventListener('click', showMoreReasons);

// Initialize everything when page loads
window.addEventListener('DOMContentLoaded', function() {
    calculateTimeTogether();
    createInitialReasons();
    setupGallery();
    setupMusicPlayer();
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        if (!letterRevealed) {
            revealBtn.click();
        }
    }, 3000);
});

// Handle window resize
window.addEventListener('resize', function() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});