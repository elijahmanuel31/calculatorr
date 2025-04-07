$(document).ready(function () {
    const display = $('#display');
  
    // Handle button clicks
    $('.key').on('click', function () {
      const value = $(this).data('value');  // Get the value from data-value attribute
  
      console.log('Button pressed: ', value); // Debugging line
  
      if (value === 'C') {
        display.val('');  // Clear display when "C" is clicked
      } else if (value === 'DEL') {
        display.val(display.val().slice(0, -1));  // Delete last character
      } else if (value === '=') {
        try {
          display.val(eval(display.val()));  // Evaluate the expression
        } catch {
          display.val('Error');  // Handle invalid expressions
        }
      } else {
        display.val(display.val() + value);  // Append clicked value to display
      }
    });
  });
  