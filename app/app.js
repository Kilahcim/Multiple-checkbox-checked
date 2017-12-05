const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;
function handleCheck(e){
  let inBetween = false;
  if(e.shiftKey && this.checked) {

    checkboxes.forEach(function(checkbox){
      console.log(this);
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
       inBetween = !inBetween;

      }
     if (inBetween) {
       checkbox.checked = true;
     }
    })
  }

  lastChecked = this;
}





checkboxes.forEach(function(checkbox){
  checkbox.addEventListener('click', handleCheck )
});
