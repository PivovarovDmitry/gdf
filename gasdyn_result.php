<?php
include("gasdyn_functions.php");

// input
$k = 1.4;
$variable = "lambda";
$value = "0.88";

// calculation
$Mach = calcMach($k,$variable,$value);
$lambda = calcLambda($k,$variable,$value);
$pi = calcPi($k,$variable,$value);
$epsilon = calcEpsilon($k,$variable,$value);
$tau = calcTau($k,$variable,$value);

// output
printf("M = %f\nlambda = %f\npi = %f\nepsilon = %f\ntau = %f\n",$Mach,$lambda,$pi,$epsilon,$tau);

?>
