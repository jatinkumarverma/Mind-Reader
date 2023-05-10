document.getElementById('numberForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      var number = document.getElementById('numberInput').value;

     
      document.getElementById('processing').style.display = 'block';

     
      setTimeout(function() {
        
        document.getElementById('result').innerText = 'You are thinking of the number ' + number;
        document.getElementById('result').style.display = 'block';

        
        document.getElementById('processing').style.display = 'none';
      }, 3000);
    });
