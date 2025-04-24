function checkPassphrase() {
  const input = document.getElementById('passphrase').value;
  if (input === 'Denglun') {
    window.location.href = 'https://bestloveayu.github.io/trip/';
  } else {
    alert('密語錯誤，請再試一次！');
  }
}
