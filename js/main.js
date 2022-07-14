let currentTab = 0;
let tab = document.getElementsByClassName("tabs");
let prevBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let step = document.getElementById("step_number");
let step_header = document.getElementById("step_header");
let step_info = document.getElementById("step_info");
let i, x = document.getElementsByClassName("step");

showTab(currentTab);


function showTab(n){
   
    tab[n].style.display = "block";

    if(n == 0){
        prevBtn.style.display="none"  
    }
    else{
        prevBtn.style.display="inline"
    }

    // if (n == (tab.length - 1)) {
    //     nextBtn.innerHTML = "Submit";
    //   } else {
    //    nextBtn.innerHTML = "Next";
    //   }

  
      fixStepIndicator(n)

}



function nextPrev(n) {
        
    // Exit the function if any field in the current tab is invalid:
    // if (n == 1 ) {
    //     return false
    // };
    // Hide the current tab:
    tab[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= tab.length) {
      //...the form gets submitted:
    //   document.getElementById("").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }
  
  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
  
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");

    }
      
    //... and adds the "active" class to the current step:
    x[n].className += " active";
         
   stepNumber = x[n].innerHTML; 
  

   switch (n) {
    case n:
        console.log(n);
        
        break;
   
    default:
        break;
   }

    // append to step
    step.innerHTML = stepNumber;
  
 
  }

 