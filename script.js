document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded!');
  
  // Add animation to header
  const header = document.querySelector('header');
  header.classList.add('animate');
  
  // Add event listeners to navigation
  const navItems = document.querySelectorAll('nav a');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`You clicked on ${item.textContent}`);
    });
  });
});