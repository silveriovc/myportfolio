document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
      });
  });
});
