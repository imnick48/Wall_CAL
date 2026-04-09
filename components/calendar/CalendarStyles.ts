export const calendarStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .wc-root {
    position: relative;
    width: 100%;
    max-width: 1100px;
    min-height: 100vh;
    padding: 2rem 1rem;
  }

  .particles-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    animation: particleFloat linear infinite;
    will-change: transform;
    filter: blur(0.5px);
  }

  @keyframes particleFloat {
    0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
    10% { opacity: 1; }
    50% { transform: translateY(-40vh) translateX(20px) scale(1.5); }
    90% { opacity: 1; }
    100% { transform: translateY(-80vh) translateX(-10px) scale(0.5); opacity: 0; }
  }

  .wc-main-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1.25rem;
    align-items: start;
  }

  .wc-left-col {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .wc-right-col {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .wc-glass-panel {
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .wc-glass-panel:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  }

  .wc-hero-panel {
    border-radius: 20px;
  }

  .wc-hero-container {
    position: relative;
    height: 220px;
    overflow: hidden;
  }

  .wc-hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .wc-hero-panel:hover .wc-hero-img {
    transform: scale(1.05);
  }

  .wc-hero-gradient {
    position: absolute;
    inset: 0;
  }

  .wc-hero-month-badge {
    position: absolute;
    bottom: 16px;
    left: 16px;
    padding: 8px 16px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .wc-hero-year {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    font-weight: 300;
    color: rgba(255,255,255,0.8);
    letter-spacing: 0.15em;
  }

  .wc-hero-month {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    line-height: 1.1;
  }

  .wc-upload-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    border: 1px dashed;
    border-radius: 10px;
    padding: 6px 12px;
    font-size: 0.7rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
  }

  .wc-upload-btn:hover {
    background: rgba(0,0,0,0.7);
    transform: scale(1.05);
  }

  .wc-clock-panel {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .analog-clock {
    width: 110px;
    height: 110px;
  }

  .wc-clock-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .wc-events-panel {
    padding: 1.25rem;
  }

  .wc-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .wc-icon-btn {
    width: 26px;
    height: 26px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .wc-icon-btn:hover { transform: scale(1.1); }

  .wc-event-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    padding: 0.75rem;
    border: 1px solid;
    border-radius: 12px;
    background: rgba(255,255,255,0.03);
  }

  .wc-emoji-picker {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .wc-emoji-btn {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: none;
    background: rgba(255,255,255,0.05);
    cursor: pointer;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
  }

  .wc-emoji-btn:hover { transform: scale(1.15); }

  .wc-event-input {
    width: 100%;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid;
    background: rgba(255,255,255,0.05);
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    outline: none;
    transition: border-color 0.2s;
    color-scheme: dark;
  }

  .wc-event-input:focus {
    border-color: rgba(255,255,255,0.3);
  }

  .wc-add-event-btn {
    padding: 8px 0;
    border: none;
    border-radius: 8px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .wc-add-event-btn:hover { opacity: 0.9; transform: translateY(-1px); }

  .wc-event-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .wc-empty-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
    text-align: center;
    padding: 1rem 0;
    opacity: 0.6;
  }

  .wc-event-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.6rem;
    border: 1px solid;
    border-radius: 10px;
    background: rgba(255,255,255,0.03);
    transition: all 0.2s;
  }

  .wc-event-item:hover { background: rgba(255,255,255,0.06); }

  .wc-event-emoji { font-size: 1rem; }

  .wc-event-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
  }

  .wc-delete-event {
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
  }

  .wc-delete-event:hover { opacity: 1; }

  .wc-calendar-panel {
    padding: 1.5rem;
  }

  .wc-nav-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  .wc-nav-btn {
    width: 36px;
    height: 36px;
    border-radius: 12px;
    border: 1px solid;
    background: rgba(255,255,255,0.05);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .wc-nav-btn:hover {
    background: rgba(255,255,255,0.12);
    transform: scale(1.08);
  }

  .wc-nav-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    animation-duration: 0.4s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px) rotateY(-15deg); }
    to { opacity: 1; transform: translateX(0) rotateY(0); }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px) rotateY(15deg); }
    to { opacity: 1; transform: translateX(0) rotateY(0); }
  }

  .wc-day-headers {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 0.35rem;
  }

  .wc-day-header {
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    padding: 0.4rem 0;
  }

  .wc-days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px;
    animation-duration: 0.4s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .day-cell {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    border-radius: 12px;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-family: 'Inter', sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    user-select: none;
    overflow: hidden;
  }

  .day-cell:hover:not(.other-month) {
    background: rgba(255,255,255,0.08) !important;
    transform: scale(1.08);
  }

  .day-cell:active:not(.other-month) {
    transform: scale(0.95);
  }

  .day-cell .wc-ripple {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  .day-cell:hover .wc-ripple { opacity: 1; }

  .day-cell.other-month { cursor: default; }

  .wc-today-ring {
    position: absolute;
    inset: 2px;
    border: 2px solid;
    border-radius: 10px;
    pointer-events: none;
    animation: todayPulse 2s ease-in-out infinite;
  }

  @keyframes todayPulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.03); }
  }

  .day-cell.in-range { border-radius: 4px; }
  .day-cell.range-start { border-radius: 12px 4px 4px 12px; font-weight: 700; }
  .day-cell.range-end { border-radius: 4px 12px 12px 4px; font-weight: 700; }
  .day-cell.range-start.range-end { border-radius: 12px; }

  .wc-day-num {
    position: relative;
    z-index: 1;
  }

  .wc-holiday-dot {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    z-index: 1;
  }

  .wc-event-indicator {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    z-index: 1;
  }

  .wc-mood-badge {
    position: absolute;
    top: 2px;
    left: 2px;
    font-size: 0.55rem;
    z-index: 1;
    line-height: 1;
  }

  .wc-range-info {
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .wc-range-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .wc-range-dates {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .wc-range-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
  }

  .wc-clear-btn {
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    transition: opacity 0.2s;
  }

  .wc-clear-btn:hover { opacity: 0.7; }

  .wc-legend {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-size: 0.62rem;
  }

  .wc-legend-item {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .wc-legend-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    display: inline-block;
  }

  .wc-legend-ring {
    width: 7px;
    height: 7px;
    border-radius: 4px;
    border: 1.5px solid;
    display: inline-block;
  }

  .wc-theme-bar {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .wc-theme-pill {
    padding: 6px 14px;
    border-radius: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: none;
    letter-spacing: 0.03em;
  }

  .wc-theme-pill:hover {
    transform: translateY(-2px) scale(1.04);
  }

  .wc-theme-pill.active {
    transform: translateY(-1px);
  }

  .journal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    animation: fadeIn 0.2s ease;
  }

  .journal-modal {
    width: 320px;
    padding: 1.5rem;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    border: 1px solid;
    animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .journal-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .journal-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    margin-bottom: 1rem;
    opacity: 0.6;
  }

  .journal-mood-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .journal-mood-row {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .journal-mood-btn {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.05);
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .journal-mood-btn:hover { transform: scale(1.15); }
  .journal-mood-btn.active { border-width: 2px; transform: scale(1.1); }

  .journal-textarea {
    width: 100%;
    height: 80px;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid;
    background: rgba(255,255,255,0.05);
    color: inherit;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    resize: none;
    outline: none;
    margin-bottom: 1rem;
    transition: border-color 0.2s;
  }

  .journal-textarea:focus { border-color: rgba(255,255,255,0.3); }

  .journal-actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
  }

  .journal-cancel {
    padding: 8px 16px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.05);
    color: inherit;
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }

  .journal-cancel:hover { background: rgba(255,255,255,0.1); }

  .journal-save {
    padding: 8px 20px;
    border-radius: 10px;
    border: none;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .journal-save:hover { opacity: 0.9; transform: translateY(-1px); }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes modalPop {
    from { opacity: 0; transform: scale(0.85) translateY(20px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }

  @media (max-width: 768px) {
    .wc-main-grid {
      grid-template-columns: 1fr;
    }
    .wc-left-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
    }
    .wc-hero-panel {
      grid-column: 1 / -1;
    }
    .wc-hero-container { height: 180px; }
    .wc-nav-title { font-size: 1.1rem; }
    .day-cell { font-size: 0.75rem; border-radius: 8px; }
    .wc-today-ring { border-radius: 6px; }
  }

  @media (max-width: 480px) {
    .wc-root { padding: 1rem 0.5rem; }
    .wc-left-col { grid-template-columns: 1fr; }
    .wc-calendar-panel { padding: 1rem; }
    .wc-hero-container { height: 150px; }
    .wc-theme-pill { padding: 5px 10px; font-size: 0.62rem; }
  }
`;
