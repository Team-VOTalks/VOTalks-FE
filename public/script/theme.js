(function () {
  const currentTheme = window.localStorage.getItem('theme') ?? 'system';
  if (currentTheme === 'light') {
    document.body.classList.add('lightTheme');
    return;
  }
  if (currentTheme === 'dark') {
    document.body.classList.add('darkTheme');
    return;
  }
  if (currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('darkTheme');
    return;
  }
})();
