const mascotAssets = {
  thinking: "assets/mascots/doubt_boy.gif",
  happy: "assets/mascots/happy_boy.gif",
  encouraging: "assets/mascots/waiting_boy.gif",
};

function Mascot({ state, size = "small", label = "" }) {
  const src = mascotAssets[state];
  if (!src) return "";

  return `
    <img
      class="mascot mascot--${size}"
      src="${src}"
      alt="${label || `${state} Bloom mascot`}"
      loading="lazy"
    />
  `;
}

const slides = [
  {
    title: "Bloom",
    subtitle: "Building Better Habits, One Step at a Time",
    className: "cover",
    content: `
      <div class="cover-copy">
        <p class="team-pill">Team 7 Deadly Syntax</p>
        <p class="cover-note">A friendly habit tracker designed around consistency, encouragement, and one-tap check-ins.</p>
      </div>
      <div class="leaf leaf-a"></div>
      <div class="leaf leaf-b"></div>
      ${Mascot({ state: "happy", size: "large", label: "Happy Bloom mascot" })}
    `,
  },
  {
    title: "Presentation Outline",
    content: `
      <ol class="timeline">
        <li><span>1</span>Introduction</li>
        <li><span>2</span>Product Design & Technical Approach</li>
        <li><span>3</span>User Experience & Demo</li>
        <li><span>4</span>Future Development & Business Vision</li>
        <li><span>5</span>Team & Project Management</li>
        <li><span>6</span>Q&A</li>
      </ol>
    `,
  },
  {
    title: "The Problem",
    className: "with-mascot",
    content: `
      <div class="card-grid three">
        <article class="card"><span class="card-icon">01</span><h3>Consistency Is Hard</h3><p>People struggle to maintain habits beyond the first burst of energy.</p></article>
        <article class="card"><span class="card-icon">02</span><h3>Motivation Fades</h3><p>Initial excitement drops when progress feels slow or invisible.</p></article>
        <article class="card"><span class="card-icon">03</span><h3>Tracking Feels Flat</h3><p>Many habit tools become repetitive, transactional, and easy to ignore.</p></article>
      </div>
      ${Mascot({ state: "thinking" })}
    `,
  },
  {
    title: "Our Solution",
    className: "with-mascot",
    content: `
      <div class="mapping">
        <div class="map-card"><p>Lack of motivation</p><span></span><strong>Personalized Companion Mascot</strong></div>
        <div class="map-card"><p>Friction in daily check-ins</p><span></span><strong>NFC Quick Check-in</strong></div>
      </div>
      ${Mascot({ state: "happy" })}
    `,
  },
  {
    title: "Product Overview",
    className: "with-mascot",
    content: `
      <div class="two-column">
        <section class="feature-panel"><h3>Essential Habit Tracking Features</h3><ul><li>Habit Management</li><li>Goal Tracking</li><li>Daily Check-ins</li><li>Progress Dashboard</li><li>Streak & Statistics</li></ul></section>
        <section class="feature-panel accent"><h3>What Makes Bloom Different?</h3><ul><li>NFC Quick Check-in</li><li>Personalized Companion Mascot</li></ul></section>
      </div>
      <p class="formula">Core Features + Unique Features = Bloom</p>
      ${Mascot({ state: "happy" })}
    `,
  },
  {
    title: "System Architecture",
    content: `
    <div class="architecture">
      <div class="frontend-container">
        <div class="main-label">Frontend</div>
        <small>Mobile app experience</small>
        <div class="nfc-box">NFC Integration<br /><small>Fast physical check-ins</small></div>
      </div>
      <span></span>
      <div>Database / API<br /><small>Habit data and progress</small></div>
    </div>
    `,
  },
  {
    title: "Technology Stack",
    content: `
      <div class="card-grid four">
        <article class="card"><span class="card-icon">FE</span><h3>Frontend</h3><p>React Native / Expo</p></article>
        <article class="card"><span class="card-icon">DB</span><h3>Database</h3><p>Xano</p></article>
        <article class="card"><span class="card-icon">PM</span><h3>Collaboration</h3><p>GitHub, Linear, Notion</p></article>
                <article class="card"><span class="card-icon">UX</span><h3>Design</h3><p>Figma</p></article>


      </div>
    `,
  },
  {
    title: "Why These Technologies?",
    content: `
      <div class="checklist">
        <p><span></span>Cross-platform support for faster delivery</p>
        <p><span></span>Easy collaboration across design, product, and engineering</p>
        <p><span></span>Scalable architecture for future backend and device integrations</p>
      </div>
    `,
  },
  {
    title: "Trade-offs & Challenges",
    className: "with-mascot",
    content: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Decision</th><th>Option A</th><th>Option B</th><th>Our Choice</th></tr></thead>
          <tbody>
            <tr><td>Platform</td><td>Mobile Web</td><td>Native App</td><td>Cross-platform app with Expo</td></tr>
            <tr><td>Backend</td><td>Mock API</td><td>Full Backend</td><td>Start with Xano (low code)</td></tr>
            <tr><td>NFC</td><td>Broad support</td><td>Device limits</td><td>Design graceful fallbacks</td></tr>
          </tbody>
        </table>
      </div>
      ${Mascot({ state: "thinking" })}
    `,
  },
  {
    title: "User Journey & Check-in Experiences",
    className: "with-mascot",
    content: `
      <div class="combined-journey">
        <div class="journey-intro">
          <h3>The Journey is Intentionally Simple</h3>
          <div class="journey-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <p><strong>Create Habit</strong></p>
            </div>
            <div class="arrow">→</div>
            <div class="step-item">
              <div class="step-number">2</div>
              <p><strong>Set Goal</strong></p>
            </div>
            <div class="arrow">→</div>
            <div class="step-item">
              <div class="step-number">3</div>
              <p><strong>Check In</strong></p>
            </div>
            <div class="arrow">→</div>
            <div class="step-item">
              <div class="step-number">4</div>
              <p><strong>Build Streaks</strong></p>
            </div>
          </div>
        </div>

        <div class="check-in-comparison compact">
          <section class="check-in-option compact-option">
            <div class="option-header app-header">📱 In-App</div>
            <div class="option-content compact-content">
              <p class="flow-step">Open App</p>
              <p class="flow-step">Select Habit</p>
              <p class="flow-step">Record Progress</p>
            </div>
          </section>
          
          <section class="check-in-option compact-option nfc-option">
            <div class="option-header nfc-header">⚡ NFC Tap</div>
            <div class="option-content compact-content">
              <p class="flow-step"><strong>Instant Check-in</strong></p>
              <p class="flow-step">Auto-recorded</p>
              <p class="flow-step">Streak Updated</p>
            </div>
          </section>
        </div>

        <div class="journey-benefits">
          <p class="benefit-text">✓ Streaks & stats motivate consistency</p>
          <p class="benefit-text">✓ 80-100% completion unlocks rewards</p>
          <p class="benefit-text">✓ Less friction = More motivation</p>
        </div>
      </div>
      ${Mascot({ state: "encouraging" })}
    `,
  },
  {
    title: "Live Demo",
    className: "demo with-mascot",
    content: `
      <div class="phone">
        <div class="phone-top"></div>
        <h3>Morning Routine</h3>
        <div class="progress-ring">78%</div>
        <p>Tap your NFC tag or check in from the app.</p>
        <button type="button">Check In</button>
      </div>
      ${Mascot({ state: "happy" })}
    `,
  },
  {
    title: "Future Development & Business Vision",
    className: "with-mascot",
    content: `
      <div class="roadmap">
        <span>AI Recommendations</span><span>Smart Reminders</span><span>Community Challenges</span><span>Wearable Integration</span><span>Analytics & Insights</span>
      </div>
      <p class="vision">Transform Bloom from a habit tracker into a personal growth companion.</p>
      ${Mascot({ state: "encouraging" })}
    `,
  },
  {
    title: "Team & Project Management",
    className: "with-mascot",
    content: `
    <div class="three-column">
      <section>
        <h3>Team</h3>
        <p>Project Manager / Scrum Master<br /><span class="member-name">Như Quỳnh</span></p>
        <p>Frontend Developers<br /><span class="member-name">Tú An, Thuỷ Tiên, Hoài Nụ</span></p>
        <p>UI/UX Designer<br /><span class="member-name">Ngọc Ánh, Bích Quyên</span></p>
        <p>Product Owner / Quality Engineer<br /><span class="member-name">Thanh Trúc</span></p>
      </section>
      <section>
        <h3>Tools</h3>
        <p>Linear: Sprint planning</p>
        <p>GitHub: Source collaboration</p>
        <p>Notion: Notes and docs</p>
      </section>
      <section>
        <h3>Process</h3>
        <p>Sprint Planning</p>
        <p>Task Assignment</p>
        <p>Daily Stand-up</p>
        <p>Development & Testing</p>
        <p>Review & Demo</p>
      </section>
    </div>
    ${Mascot({ state: "encouraging" })}    `,
  },
  {
    title: "Thank You",
    subtitle: "Questions?",
    className: "thanks",
    content: `
      <blockquote>Every small habit helps us bloom.</blockquote>
      ${Mascot({ state: "happy", size: "large", label: "Happy Bloom mascot" })}
    `,
  },
];

function renderSlide(slide) {
  return `
    <section class="slide ${slide.className || ""}" aria-live="polite">
      <div class="slideFrame slide-inner">
        <div class="slideContent">
          <header>
            <h1>${slide.title}</h1>
            ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ""}
          </header>
          <div class="slide-content">${slide.content}</div>
        </div>
      </div>
    </section>
  `;
}

const deck = document.getElementById("deck");
let currentSlideIndex = 0;
const totalSlides = slides.length;

function formatSlideNumber(number) {
  return String(number).padStart(2, "0");
}

function getProgress() {
  return ((currentSlideIndex + 1) / totalSlides) * 100;
}

function renderPresentation() {
  deck.innerHTML = `
    <div class="presentation">
      <div class="slideViewport">
        ${renderSlide(slides[currentSlideIndex])}
      </div>
      <nav class="bottomNavigation" aria-label="Presentation navigation">
        <div class="progressTrack" aria-label="Slide progress">
          <div class="progressFill" style="width: ${getProgress()}%"></div>
        </div>
        <div class="slideCounter" aria-live="polite">
          ${formatSlideNumber(currentSlideIndex + 1)} / ${formatSlideNumber(totalSlides)}
        </div>
        <div class="navButtons">
          <button class="navButton" type="button" data-action="previous" aria-label="Previous slide" ${
            currentSlideIndex === 0 ? "disabled" : ""
          }>&lsaquo;</button>
          <button class="navButton" type="button" data-action="next" aria-label="Next slide" ${
            currentSlideIndex === totalSlides - 1 ? "disabled" : ""
          }>&rsaquo;</button>
        </div>
      </nav>
    </div>
  `;

  requestAnimationFrame(() => {
    deck.querySelector(".slide")?.classList.add("is-visible");
  });
}

function setCurrentSlideIndex(index) {
  currentSlideIndex = Math.max(0, Math.min(index, totalSlides - 1));
  renderPresentation();
}

function goToNextSlide() {
  setCurrentSlideIndex(currentSlideIndex + 1);
}

function goToPreviousSlide() {
  setCurrentSlideIndex(currentSlideIndex - 1);
}

deck.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.action === "next") goToNextSlide();
  if (button.dataset.action === "previous") goToPreviousSlide();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    goToNextSlide();
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToPreviousSlide();
  }
});

renderPresentation();
