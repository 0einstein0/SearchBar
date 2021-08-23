function myFunction() {
    var x = document.getElementById("mySelect").value;

 
    if(x=='football'){
    document.getElementById("catIcon").innerHTML = '<i class="far fa-futbol"></i>';
  }
  else if(x=='basketball'){
    document.getElementById("catIcon").innerHTML = '<i class="fas fa-basketball-ball"></i>';
  }
  else if(x=='cricket'){
    document.getElementById("catIcon").innerHTML = '<i class="fas fa-baseball-ball"></i>';
  }
 

}