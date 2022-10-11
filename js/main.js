const $share = document.getElementById('share');
const $boxShare = document.getElementById('boxShare');

window.addEventListener('click', (e) => {
  const clicked = e.target;
  if (!clicked.classList.contains('footer__icon-active')) {
    $share.classList.toggle('footer__icon-active');
    $boxShare.classList.toggle('footer__share-option-active');
  } else {
    $share.classList.remove('footer__icon-active');
    $boxShare.classList.remove('footer__share-option-active');
  }
});
