fetch('/components/header.html')
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
  });
