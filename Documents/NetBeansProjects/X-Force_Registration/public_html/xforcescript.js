/* 
 * This is the JavaScript for the registration form. This will
 * validate input from the user. If all of the input is valid,
 * the registration form will be submitted and the user will
 * be directed to the confirmation page.
 */
function showDate(){
        var today = new Date();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var year = today.getFullYear();
	var dateText = ((month < 10) ? "0" + month : month) + "/";
	dateText += ((day < 10) ? "0" + day: day) + "/";
	dateText += year;
		
	$("#current_date").val(dateText);
}
    
$(document).ready(function(){
    showDate();
    
   $("#registration_form").submit(function(e){
       var isValid = true;
       
       var name = $("#name").val();
       var email = $("#email").val();
       var phone = $("#phone").val();
       var type = $("#phone_type option:selected").val();
       var date = $("#event_date").val();
       
       var password = $("#password").val();
       var confirm = $("#confirm").val();
       var question = $("#question option:selected").val();
       var answer = $("#answer").val();
       
       var options = $("input:radio[name='options']:checked").val();
       var offers = $("input:checkbox[name='offers']:checked").val();
       
       if(name === ""){
           $("#name").next().text("Must enter a name");
           isValid = false;
       }
       else{
           $("#name").next().text("");
       }
       
       if(email === ""){
           $("#email").next().text("Must enter an email address");
           isValid = false;
       }
       else{
           $("#email").next().text("");
       }
       
       if(phone === ""){
           $("#phone").next().text("Must enter a phone number");
           isValid = false;
       }
       else{
           $("#phone").next().text("");
       }
       
       if(type === "select"){
           $("#phone_type").next().text("Must select a phone type");
           isValid = false;
       }
       else{
           $("#phone_type").next().text("");
       }
       
       if(date === ""){
           $("#event_date").next().text("Must enter an event date");
           isValid = false;
       }
       else{
           $("#event_date").next().text("");
       }
       
       if(password === ""){
           $("#password").next().text("Must enter a password");
           isValid = false;
       }
       else{
           $("#password").next().text("");
       }
      
       if(confirm === ""){
           $("#confirm").next().text("Must confirm your password");
           isValid = false;
       }
       else if(confirm !== password){
           $("#confirm").next().text("Both passwords must match");
           isValid = false;
       }
       else{
           $("#confirm").next().text("");
       }
       
       if(question === "choose"){
           $("#question").next().text("Must choose a security question");
           isValid = false;
       }
       else{
           $("#question").next().text("");
       }
       
       if(answer === ""){
           $("#answer").next().text("Must provide an answer");
           isValid = false;
       }
       else{
           $("#answer").next().text("");
       }
       
       
       if(isValid === false){
           e.preventDefault();
       }
       
       if(isValid){
           var submitForm = window.confirm("Are you sure you want to submit the form?");
           
           if(submitForm !== true){
               isValid = false;
           }
       }
       return isValid;
       
   });
   
   $("#reset").click(function(){
       confirmReset();
       
       function confirmReset(){
           var resetForm = window.confirm("Are you sure you want to re-set the form?");
       
           if(resetForm === true){
                var elementType = null;

                for(var i = 0; i < $("#registration_form").length; i++){
                    for(var j = 0; j < document.forms[0].elements.length; j++){

                        elementType = document.forms[0].elements[j].type;

                        switch(elementType){
                            case 'text':
                                $("#name").val("");
                                $("#email").val("");
                                $("#phone").val("");
                                $("#event_date").val("");
                                $("#answer").val("");
                                $("#name").next().text("*");
                                $("#email").next().text("*");
                                $("#phone").next().text("*");
                                $("#event_date").next().text("*");
                                $("#answer").next().text("*");
                            case 'password':
                                $("#password").val("");
                                $("#confirm").val("");
                                $("#password").next().text("*");
                                $("#confirm").next().text("*");
                                break;
                            case 'radio':
                                $("#options").val("yes");
                            case 'checkbox':
                                document.forms[0].elements[j].checked = '';
                                break;
                            case 'select-one':
                                $("#phone_type").val("select");
                                $("#offers").val("choose");
                                $("#phone_type").next().text("*");
                                $("#offers").next().text("*");
                                break;
                        }
                    }
                }
                $("#current_date").onfocus = showDate();
           
                return true;
            }
            return false;
        }
        
    });
    
   $("#current_date").focus();
   
});