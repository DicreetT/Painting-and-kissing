function openEnvelope() {
  document.querySelector('.envelope').classList.add('hidden');
  document.querySelector('.invitation').classList.remove('hidden');
}

function playKiss() {
  document.getElementById('kiss-sound').play();
}