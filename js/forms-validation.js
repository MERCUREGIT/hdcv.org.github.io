// JavaScript Document


	function removeChecks(){
	
	var app_fname = document.getElementById("app_fname");
	var app_lname = document.getElementById("app_lname");

	var app_email_address = document.getElementById("app_email_address");
	var datepicker = document.getElementById("datepicker");
	

	if(app_fname.value != ""){
	app_fname.style.borderColor = "#C9C9C9";
	
	}
	if(app_lname.value != ""){
	app_lname.style.borderColor = "#C9C9C9";
	
	}

	if(app_email_address.value != ""){
	app_email_address.style.borderColor = "#C9C9C9";
	}
	if(checkcontact(app_email_address.value) == true){
	app_email_address.style.borderColor = "#C9C9C9";
	}
    if(datepicker.value != ""){
	datepicker.style.borderColor = "#C9C9C9";
	}
	
	
	
	
	}


	
	function checkcontact(input)
	{
		var pattern1=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
		if(pattern1.test(input))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
					
					
	function validateAppoint(){
		
		var app_fname = document.getElementById("app_fname");
		var app_lname = document.getElementById("app_lname");
		var app_email_address = document.getElementById("app_email_address");
		var app_date = document.getElementById("datepicker");
	
		var flag = 0;
		
		if(app_fname.value == "" )
		{
			app_fname.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(app_lname.value == "" )
		{
			app_lname.style.borderColor = "#FE847B";
			flag = 1;
		}
	
	
		else if(app_email_address.value=="")
		{
			app_email_address.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(checkcontact(app_email_address.value)==false)
		{
			app_email_address.style.borderColor = "#FE847B";
			flag = 1;
		}	
		else if(app_date.value == "" )
		{
			app_date.style.borderColor = "#FE847B";
			flag = 1;
		}
	
		if(flag == 0)
		{	
			const target_element = event.target;
			target_element.value = "en cours...";
			$.ajax({
							type: "POST",
							url: "./submit.php",
							data: $("#appoint_form").serialize(),
							success: function(msg)
							{
								$('#message-app').fadeIn(2000);
								$("#appoint_form").trigger("reset");
								target_element.value = "Envoyer";
								document.getElementById("message-app").innerHTML = "Merci de nous avoir contacté.";
								$('#message-app').fadeOut(1000);
								
								return true;
								
							},
							error: function () {
							
								target_element.value = "Envoyer";
							}
						});
		}
	}
	
	function conatctHdcv(){
		let fname = document.getElementById("fname");
		let email_address = document.getElementById("email_address");
		let msg = document.getElementById("msg");
		
		var flag = 0;
		
		if(fname.value == "" )
		{
			fname.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(email_address.value == "" )
		{
			email_address.style.borderColor = "#FE847B";
			flag = 1;
		}
	
		else if(msg.value=="")
		{
			msg.style.borderColor = "#FE847B";
			flag = 1;
		}
		
		if(flag == 0)
		{	
			const target_element = event.target;
			target_element.value = "en cours...";
			$.ajax({
							type: "POST",
							url: "./contact.php",
							data: $("#contact_form").serialize(),
							success: function(send)
							{	console.log("send message", send)
								$('#message-app').fadeIn(2000);
								$("#contact_form").trigger("reset");
								target_element.value = "Envoyer";
								document.getElementById("message-app").innerHTML = "Merci de nous avoir contacté.";
								$('#message-app').fadeOut(1000);
								
								return true;
								
							},
							error: function () {
							
								target_element.value = "Envoyer";
							}
						});
		}
	}
	




	///////////////////////////////////////// Contact us form //////////////////////////////////////////


	function checkcontact(input)
	{
		var pattern1=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
		if(pattern1.test(input))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
		
		function removeChecks(){
		
		var fname = document.getElementById("app_fname");
		var email_address = document.getElementById("app_email_address");
		
		if(fname.value != ""){
		fname.style.borderColor = "#C9C9C9";
		
		}
	
	
		if(email_address.value != ""){
		email_address.style.borderColor = "#C9C9C9";
		}
		if(checkcontact(email_address.value) == true){
		email_address.style.borderColor = "#C9C9C9";
		}
	
		
		
		
		}			
					
	function validateContact(){
		var fname = document.getElementById("fname");
		var email_address = document.getElementById("email_address");
	
		var flag = 0;
		
		if(fname.value == "" )
		{
			fname.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(email_address.value=="")
		{
			email_address.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(checkcontact(email_address.value)==false)
		{
			email_address.style.borderColor = "#FE847B";
			flag = 1;
		}	
		
		if(flag == 0)
		
		{
			$.ajax({
							type: "POST",
							url: "submit.php",
							data: $("#contact_form").serialize(),
							success: function(msg)
							{
								//alert(msg);
								if(msg == 'success'){
								
								$('#message-contact').fadeIn(2000);
								document.getElementById("message-contact").innerHTML = "Thank You! We'll contact you shortly";
								return true;
								}else{
								
								$('#message-contact').fadeIn(2000);
								document.getElementById("message-contact").innerHTML = "Thank You! We'll contact you shortly";
								return true;
								}
							}
						});
	
		}
	}
	
	
	
	
		