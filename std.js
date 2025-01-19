export const ROOT = document.getElementById('ROOT');

export function std_output(output){
	let element = document.createElement('cmd');
	element.innerHTML = `${output}`;
	ROOT.appendChild(element);
}
export function std_error(output, error_code){
	let element = document.createElement('cmd');
	element.innerHTML = `ERROR ${error_code}: ${output}!`;
	ROOT.appendChild(element);
}

export default {
	std_output,
	std_error
}
