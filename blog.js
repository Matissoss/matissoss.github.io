function $(html){
	return document.getElementById(html);
}


function main(){
	const BLOGS = $("BLOGS");
	for (let i = 0; i < BLOGS.childElementCount; i++){
		const ch = BLOGS.children[i];
		ch.setAttribute('href', `#${format_number(BLOGS.childElementCount-i)}`);
		ch.setAttribute('id', format_number(BLOGS.childElementCount-i));
		ch.innerHTML = `#${ch.getAttribute("id")} ${ch.getAttribute("title")}`;
		ch.onclick = () => {
			open_blog(ch.getAttribute("id"));
		}
	}
}

function open_blog(id){
	fetch(`blog/${id}.html`)
	.then(response => response.text())
	.then(result => {
		$("ROOT").innerHTML = result;
	})
	.catch(error => {
		alert(error);
	})
}

function format_number(numb){
	let numb_to_str = numb.toString();

	switch (numb_to_str.length){
		case 1:
			return `000${numb_to_str}`
		case 2:
			return `00${numb_to_str}`
		case 3:
			return `0${numb_to_str}`
		case 4:
			return `${numb_to_str}`
	}
}

main();
