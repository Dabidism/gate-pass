document.querySelectorAll('.traffic-btn').forEach((btn, idx, btns) => {
  btn.addEventListener('click', function() {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const slider = btn.parentElement.querySelector('.traffic-btn-slider');
    slider.style.width = btn.offsetWidth + 'px';
    slider.style.left = btn.offsetLeft + 'px';
  });
});

// On page load, set slider to active button
window.addEventListener('DOMContentLoaded', () => {
  const activeBtn = document.querySelector('.traffic-btn.active');
  if (activeBtn) {
    const slider = activeBtn.parentElement.querySelector('.traffic-btn-slider');
    slider.style.width = activeBtn.offsetWidth + 'px';
    slider.style.left = activeBtn.offsetLeft + 'px';
  }
});