<?php
function calcEpsilon($k,$variable,$value) {
	switch($variable) {
		case 'Mach':
			$result = pow(1+0.5*($k-1)*$value*$value, -1/($k-1));
			break;
		case 'lambda':
			$result = pow(1-($k-1)/($k+1)*$value*$value, 1/($k-1));
			break;
		case 'pi':
			$result = pow($value,1/$k);
			break;
		case 'tau':
			$result = pow($value,1/($k-1));
			break;
		default:
			$result = $value;
			break;
	}
	return $result;
}

function calcPi($k,$variable,$value) {
	switch($variable) {
		case 'Mach':
			$result = pow(1+0.5*($k-1)*$value*$value, -$k/($k-1));
			break;
		case 'lambda':
			$result = pow(1-($k-1)/($k+1)*$value*$value, $k/($k-1));
			break;
		case 'epsilon':
			$result = pow($value,$k);
			break;
		case 'tau':
			$result = pow($value,$k/($k-1));
			break;
		default:
			$result = $value;
			break;
	}
	return $result;
}


function calcTau($k,$variable,$value) {
	switch($variable) {
		case 'Mach':
			$result = pow(1+0.5*($k-1)*$value*$value, -1);
			break;
		case 'lambda':
			$result = 1-($k-1)/($k+1)*$value*$value;
			break;
		case 'epsilon':
			$result = pow($value,$k-1);
			break;
		case 'pi':
			$result = pow($value,($k-1)/$k);
			break;
		default:
			$result = $value;
			break;
	}
	return $result;
}

function calcMach($k,$variable,$value) {
	switch($variable) {
		case 'lambda':
			$result = sqrt(2*$value*$value/($k+1-($k-1)*$value*$value));
			break;
		case 'epsilon':
			$result = sqrt((pow($value,(1-$k))-1)*2/($k-1));
			break;
		case 'pi':
			$result = sqrt((pow($value,(1-$k)/$k)-1)*2/($k-1));
			break;
		case 'tau':
			$result = sqrt((1/$value-1)*2/($k-1));
			break;
		default:
			$result = $value;
			break;
	}
	return $result;
}

function calcLambda($k,$variable,$value) {
	switch($variable) {
		case 'Mach':
			$result = sqrt(($k+1)*$value*$value/(2+($k-1)*$value*$value));
			break;
		case 'pi':
			$result = sqrt((1-pow($value,($k-1)/$k))*($k+1)/($k-1));
			break;
		case 'epsilon':
			$result = sqrt((1-pow($value,($k-1)))*($k+1)/($k-1));
			break;
		case 'tau':
			$result = sqrt((1-$value)*($k+1)/($k-1));
			break;
		default:
			$result = $value;
			break;
	}
	return $result;
}
?>
