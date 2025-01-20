export const ROOT = document.getElementById('ROOT');

export function std_error(output, error_code){
	let element = document.createElement('cmd');
	element.innerHTML = `ERROR ${error_code}: ${output}!`;
	ROOT.appendChild(element);
}

export function println(msg){
	let element = document.createElement('p');
	element.innerHTML = `${msg}`;
	ROOT.appendChild(element);
}

export default {
	std_error,
	println,
}
