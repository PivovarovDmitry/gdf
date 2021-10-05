function calcEpsilon(k,variable,value) {
	switch(variable) {
		case 'Mach':
			result = Math.pow(1+0.5*(k-1)*value*value, -1/(k-1));
			break;
		case 'lambda':
			result = Math.pow(1-(k-1)/(k+1)*value*value, 1/(k-1));
			break;
		case 'pi':
			result = Math.pow(value,1/k);
			break;
		case 'tau':
			result = Math.pow(value,1/(k-1));
			break;
		default:
			result = value;
			break;
	}
	return result;
}

function calcPi(k,variable,value) {
	switch(variable) {
		case 'Mach':
			result = Math.pow(1+0.5*(k-1)*value*value, -k/(k-1));
			break;
		case 'lambda':
			result = Math.pow(1-(k-1)/(k+1)*value*value, k/(k-1));
			break;
		case 'epsilon':
			result = Math.pow(value,k);
			break;
		case 'tau':
			result = Math.pow(value,k/(k-1));
			break;
		default:
			result = value;
			break;
	}
	return result;
}


function calcTau(k,variable,value) {
	switch(variable) {
		case 'Mach':
			result = Math.pow(1+0.5*(k-1)*value*value, -1);
			break;
		case 'lambda':
			result = 1-(k-1)/(k+1)*value*value;
			break;
		case 'epsilon':
			result = Math.pow(value,k-1);
			break;
		case 'pi':
			result = Math.pow(value,(k-1)/k);
			break;
		default:
			result = value;
			break;
	}
	return result;
}

function calcMach(k,variable,value) {
	switch(variable) {
		case 'lambda':
			result = Math.sqrt(2*value*value/(k+1-(k-1)*value*value));
			break;
		case 'epsilon':
			result = Math.sqrt((Math.pow(value,(1-k))-1)*2/(k-1));
			break;
		case 'pi':
			result = Math.sqrt((Math.pow(value,(1-k)/k)-1)*2/(k-1));
			break;
		case 'tau':
			result = Math.sqrt((1/value-1)*2/(k-1));
			break;
		default:
			result = value;
			break;
	}
	return result;
}

function calcLambda(k,variable,value) {
	switch(variable) {
		case 'Mach':
			result = Math.sqrt((k+1)*value*value/(2+(k-1)*value*value));
			break;
		case 'pi':
			result = Math.sqrt((1-Math.pow(value,(k-1)/k))*(k+1)/(k-1));
			break;
		case 'epsilon':
			result = Math.sqrt((1-Math.pow(value,(k-1)))*(k+1)/(k-1));
			break;
		case 'tau':
			result = Math.sqrt((1-value)*(k+1)/(k-1));
			break;
		default:
			result = value;
			break;
	}
	return result;
}
