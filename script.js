function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  