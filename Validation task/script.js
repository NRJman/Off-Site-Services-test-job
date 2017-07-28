function myForm(form){
   var firstName = form.elements.firstName.value;
   var lastName = form.elements.lastName.value;
   var email = form.elements.email.value;

   if (firstName.length === 0){
   	document.getElementById('firstNameErr').innerHTML='*this field is required';
      return false;
   } else if (lastName.length === 0){
      document.getElementById('lastNameErr').innerHTML='*this field is required';
      return false;
   } else if (email.length === 0){
   	document.getElementById('emailErr').innerHTML='*this field is required'; 
      return false;	
   } else if (email.length !== 0) {
	  	var reg = /^\w+@\w+\.\w{2,4}$/i;
	   if (!reg.test(email)){
         document.getElementById('emailErr').innerHTML='*the email is incorrect';  
         return false;	
      } else {
         alert("The form is valid!");
      }
   } 
}