const $share = document.getElementById('share');
const $boxShare = document.getElementById('boxShare');
const $body = document.querySelector('body');

$share.addEventListener('click', (e) => {
  $share.classList.toggle('footer__icon-active');
  $boxShare.classList.toggle('footer__share-option-active');
});
