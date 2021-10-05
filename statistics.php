<?php
$variable = $_GET["variable"];
$string = date("d.m.Y\tH:i:s") . "\t" . $variable . "\n";
file_put_contents("statistics.txt", $string, FILE_APPEND);
?>
