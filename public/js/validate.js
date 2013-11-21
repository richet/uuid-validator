$(document).ready(function() {
	$("#validator").submit(function(e){

		var uuid = $("#uuid").val();
		var pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
		
		var status = pattern.test(uuid) ? "Valid" : "Not Valid";
		
	    pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
		if(pattern.test(uuid)) status+= " (Version 3)";
	
	    pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
		if(pattern.test(uuid)) status+= " (Version 4)";

	    pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
		if(pattern.test(uuid)) status+= " (Version 5)";
		
		$("#status").html(status);	
		
		e.preventDefault();
	});
});