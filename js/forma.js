  // Маска для телефона
  document.getElementById('phone').addEventListener('input', function(e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+7' + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
  });
  
  // Обработка отправки формы
  document.getElementById('fan-sport-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь код для отправки данных (AJAX или другая логика)
    alert('Спасибо! Мы скоро вам перезвоним.');
    this.reset();
  });