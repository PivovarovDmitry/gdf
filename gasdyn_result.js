$(document).ready(function(){
    $(".alert").hide();
	$("#air").click(function(){
		$("#adiab_koeff").val(1.4);
	});
	$("#metan").click(function(){
		$("#adiab_koeff").val(1.33);
	});
    $(document).keypress(function(e){
        if (e.which == 13){
            $("#calculate").click();
        }
    });
	$("#calculate").click(function(){
        
        $(".alert").show();

		// input
		k = parseFloat($("#adiab_koeff").val());
		variable = $("#variable").val();
		value = parseFloat($("#value").val());

        // check the input
        lambda_max = Math.sqrt((k+1)/(k-1));
        if(variable=="lambda" && (value<0 || value>=lambda_max)) {
           $(".alert").html("<h4>ОШИБКА:</h4><br>Значение параметра &lambda; должно принадлежать интервалу<br>[ 0 ; " + lambda_max + " )."); 
           $(".alert").removeClass("alert-success");
           $(".alert").addClass("alert-danger");
           return 0;
        }
        else if((variable=="epsilon" || variable=="pi" || variable=="tau") && (value<0 || value>1)) {
           $(".alert").html("<h4>ОШИБКА:</h4><br>Значение параметра &" + variable + "; должно принадлежать интервалу<br>[ 0 ; 1 ]."); 
           $(".alert").removeClass("alert-success");
           $(".alert").addClass("alert-danger");
           return 0;
        }
        else {
           $(".alert").removeClass("alert-danger");
           $(".alert").addClass("alert-success");
        }

		// calculation
		Mach = calcMach(k,variable,value);
		lambda = calcLambda(k,variable,value);
		pi = calcPi(k,variable,value);
		epsilon = calcEpsilon(k,variable,value);
		tau = calcTau(k,variable,value);

		// output
        str = "<h4>РЕЗУЛЬТАТЫ:</h4><br><p>";
        if(Mach === Infinity)
            str += "M = &infin;<br>";
        else
            str += "M = " + Mach + "<br>";
		str += "&lambda; = " + lambda + "<br>";
		str += "&pi; = " + pi + "<br>";
		str += "&tau; = " + tau + "<br>";
		str += "&epsilon; = " + epsilon + "</p>";
		$(".alert").html(str);

		// counter
		$.get("statistics.php", {variable: variable});
	});
});
