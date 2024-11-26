document.getElementById('show-more-btn').addEventListener('click', function() {
    var extraInfo = document.getElementById('extra-info');
    
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
      extraInfo.style.display = 'block';
    } else {
      extraInfo.style.display = 'none';
    }
  });
  