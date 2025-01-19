// imports

import libstd from './std.js';

// Global Constants
const ROOT    = $("ROOT");
const CURRENT = $("CURRENT");
// Global mutables
let users = new Map();
let current_user = "user";
let history = [];
let variables = new Map();
// functions
function $(html){
	return document.getElementById(html);
}

function main(){
	libstd.std_output(
		"Welcome to mateus' shell<br>Use 'commands' command to get all commands"
	);
	cursor();
}

function handle_command(cmd){
	if (cmd.length == 0){
		return;
	}
	let args = split_by_whitespace(cmd);

	if (args[0].startsWith("$") && args[1] != undefined){
		let variable_name = slice_string(args[0], 0, args[0].length+1);
		variables.set(variable_name, args[1]);
		return;
	}
	else if (args[0].startsWith("$")){
		let variable_name = slice_string(args[0], 0, args[0].length+1);
		if (variables.get(variable_name) != undefined){
			libstd.std_output(`${variables.get(variable_name)}`);
		}
		return;
	}

	switch (args[0]){
		case "get":
			if (args[1] !== undefined){
				let variable_name = "";
				if (args[1].startsWith("$")){
					variable_name = slice_string(args[1], 0, args[1].length+1);
				}
				else{
					variable_name = args[1];
				}
				if (variables.has(variable_name)){
					libstd.std_output(
						`${variables.get(variable_name)}`
					);
				}
				else{
					libstd.std_output("undefined");
				}
			}
			break;
		case "commands":
			libstd.std_output(
				`
				Commands:<br>
				aboutme   - gives you info about me<br>
				user      - allows to login into users<br>
				clear     - clear<br>
				portfolio - shows portfolio<br>
				clear history - clear history<br>
				history   - show last commands<br>
				lv        - list variables<br>
				get [var] - get variable [var]<br>
				$[var_name] [var_value] - declare variable [var_name] with value [var_value]<br>
				And there are other easter egg commands ;)
				`
			);
			break;
		case "sudo":
			libstd.std_output(
				`I'd just like to interject for a moment. 
				What you’re referring to as Linux, is in fact, GNU/Linux, 
				or as I’ve recently taken to calling it, GNU + Linux.`
			);
			break;
		case "rickroll":
			window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D");
			libstd.std_output(
				`Never gonna give you up,<br>Never gonna let you down<br>[...]`
			);
			break;
		case "lv":
			let index_1 = 1;
			let to_output_1 = "";
			variables.forEach((key, value) => {
				to_output_1 += `${index_1}. ${key} = ${value} <br>`;
				index_1++;
			});
			libstd.std_output(to_output_1);
			break;
		case "aboutme":
			if (args[1] === undefined){
				libstd.std_output(
					`
					___aboutme<br>
					This website was made by mateusdev<br>
					using plain Javascript
					`
				);
			}
			else if (args[1] === '--help' || args[1] === '-h'){
				libstd.std_output(
					`___aboutme<br>
					_SYNTAX<br>
					aboutme [flags] [args]<br><br>
					_FLAGS<br>
					-h/--help = prints this message<br>
					--itch/-i = prints all my itch.io games along with link to them<br>
					--project/-p = prints all my github projects<br>
					--social/-s = prints all my social profiles<br>
					--skills/-sk = prints my skills :)<br>
					`
				);
			}
			else if (args[1] === '--itch' || args[1] === '-i'){
				libstd.std_output(
					`
					___aboutme<br>
					_Link<br>
					https://matissoss.itch.io<br>
					_Form_URL<br>
					https://matissoss.itch.io/$GAME_NAME<br>
					_List<br>
					Overhytm 		[overhytm]<br> 
					CarmEco 		[carmeco]<br>
					Switcher 		[switcher-game]<br>
					Skeleton Graveyar 	[skeleton-graveyard]<br>
					Switcher (PGJ 2024) 	[switcher]<br> 
					Death Duo 		[death-duo]<br>
					Fish vs Crabs 		[fish-vs-crabs]<br>
					Freezing Torch 		[freezing-torch]<br>
					Behind the doors 	[behind-the-doors]<br>
					Space Flight 		[space-flight]<br>
					`
				);
			}
			else if (args[1] === '--project' || args[1] === '-p'){
				libstd.std_output(
					`
					___aboutme<br>
					_Link<br> 
					https://github.com/Matissoss<br>
					_Projects<br>
					mkb  - mateus' kanban board [/mkb]<br>
					msat - mateus' school administration tool [/msat]<br>
					[...]
					`
				);
			}
			else if (args[1] === '--social' || args[1] === '-s'){
				libstd.std_output(
					`
					___aboutme<br>
					_Socials<br>
					Twitter (X): [https://x.com/@MateusDevPL]<br>
					Youtube: [https://youtube.com/@MatissossGameDev]<br>
					`
				);
			}
			else if (args[1] === '--skills' || args[1] === '-sk'){
				libstd.std_output(
					`
					___aboutme<br>
					_Skills<br>
					- Rust<br>
					- HTML/CSS/JS<br>
					- C#<br>
					[...]<br>
					` 
				);
			}
			break;
		case "history":
			let to_output = "";
			let index = 1;
			history.forEach((el) => {
				to_output += `${index}. ${el}<br>`;
				index++;
			});
			libstd.std_output(
				`_History<br>
				${to_output}`
			);
			break;
		case "logo":
			libstd.std_output(
				`
				--------------<br>
				--------------<br>
				-----&--&-----<br>
				--------------<br>
				----%%%%%%----<br>
				--------------<br>
				--------------<br>
				--------------
				`
			);
			break;
		case "clear":
			if (args[1] !== undefined && args[1] === 'history'){
				history = [];
				break;
			}
			ROOT.innerHTML = "";
			break;
		case "user":
			if (args[1] === '--help' || args[1] === '-h'){
				libstd.std_output(`__user__<br>
					_SYNTAX<br><br>
					user [flag] [args]<br><br>
					_FLAGS<br><br>
					--list/-l 			   = lists all users in this shell<br>
					--add/-a [user_name] [password]    = adds user [user_name] with<br>
									     password [password]<br>
					--login/-lg [user_name] [password] = log into user [user_name]<br>
					-h/--help                          = prints this message<br>
					--list                             = lists all availiable users`);
			}
			else if (args[1] === '--add' || args[1] === '-a'){
				if (args[2] !== undefined && args[3] !== undefined){
					if (users.has(args[2]) === true){
						libstd.std_error("User with this username exists", -1);
					}
					else{
						users.set(args[2], args[3]);
					}
				}
			}
			else if (args[1] === '--list' || args[1] === '-l'){
				let to_output = "User List<br>";
				users.forEach((_, user) => {
					to_output += `${user}<br>`
				});
				libstd.std_output(to_output);
			}
			else if (args[1] === '--login' || args[1] === '-lg'){
				if (args[2] !== undefined && args[3] !== undefined){
					if (users.get(args[2]) === args[3]){
						libstd.std_output(`Succesfully logged into user ${args[2]}`);
						current_user = args[2];
					}
					else{
						libstd.std_output(`Couldn't log into user ${args[2]}`);
					}
				}
				else{
					libstd.std_error("Missing args", -2);
				}
			}
			else{
				libstd.std_error("Missing args, use --help flag.", -1);
			}
			break;
		case "hello":
			libstd.std_output("Good Morning");
			break;
		case "whats":
			if (args[1] === "up?" || args[1] === "up"){
				libstd.std_output("I'm fine :)");
			}
			break;
		case "↑↑↓↓←→←→BA":
			libstd.std_output("Isn't it konami code?");
			break;
		case "coffee":
			libstd.std_output(
			`I'm teapot (tea is better, btw.)`);
			break;
		case "tea":
			libstd.std_output(`I'm coffee brewer (coffee is better btw)`);
			break;
		case "portfolio":
			libstd.std_output(
				`
				| portfolio<br>
				|================<br>
				| --------------<br>
				| --------------<br>
				| -----&--&-----<br>
				| --------------<br>
				| ----%%%%%%----<br>
				| --------------<br>
				| --------------<br>
				| --------------<br>
				|===============<br>
				| name: MateusDev<br>
				| country: Poland :pl:<br>
				| age: I exist<br>
				| email: matissossGameDev@proton.me<br>
				|===============<br>
				| skills<br>
				|===============<br>
				| Using Linux<br>
				| Rust Programming Language<br>
				| HTML/CSS/JS<br>
				| C-like languages<br>
				`
			);
			break;
		case "whoami":
			fetch ("https://api.ipify.org")
			.then(response => response.text())
			.then(ip => {
				fetch (`http://ip-api.com/json/${ip}?fields=524761`)
				.then(response => response.json())
				.then(data => {
					libstd.std_output(`
					You are ${ip}<br>Lan:${data.lat}<br>Lon:${data.lon}<br>
					You live in ${data.country}, ${data.regionName}, ${data.city}<br>
					Don't thank me :)
					});
				`)})});

			break;
		case "uname":
			if (args[1] === '-a'){
				libstd.std_output("F You OS Version 69")
			}
			break;
		case "rm":
			if (args[1] === '-rf' && args[2] == '/'){
				libstd.std_output("This is not Linux");
			}
			break;
		case "chatgpt":
			libstd.std_output("i'm not artificial inteligence, i am stupid reality")
			break;
		case "life":
			libstd.std_output("life is beautiful, maybe not yours and not mine, but it is :)");
			break;
		case "fortune":
			libstd.std_output("you'll die tomorrow (if not, then it is joke)");
			break;
		case "selfdestruct":
			libstd.std_output("Proceeding with selfdestruction...");
			handle_command("rickroll");
			break;
		case "echo":
			let sliced_array = [];
			for (let i = 1; i < args.length; i++){
				if (args[i].startsWith("$")){
					if (variables.get(slice_string(args[i], 0, args[i].length+1)) != undefined){
						sliced_array.push(variables.get(slice_string(args[i], 0, args[i].length+1)));
						continue;
					}
				}
				sliced_array.push(args[i]);
			}
			let concat = concat_array(sliced_array);
			libstd.std_output(concat);
			break;
		default:
			libstd.std_error(`Unknown Command ${args[0]}, use 'commands' command`, -1);
			break;
	}
	history.push(args[0]);
}

let can_press = true;
let keypressed = false;
document.addEventListener('keydown', (ev) => {
	let key = ev.key;
	keypressed = true;
	if (key.length == 1){
		CURRENT.innerHTML += key.toLowerCase();
	}
	else if (key == "Backspace"){
		delete_char();
	}
	else if (can_press){
		if (key == "Enter"){
			enter(CURRENT.innerHTML);
		}
		can_press = false;
	}
});
document.addEventListener('keyup', () => {
	keypressed = false;
	can_press = true;
});

function cursor(){
	if (keypressed){
		$("CURSOR").innerHTML = " ";
	}
	else{
		if ($("CURSOR").innerHTML == "_"){
			$("CURSOR").innerHTML = " ";
		}
		else{
			$("CURSOR").innerHTML = "_";
		}
	}
	setTimeout(cursor, 500);
}


function enter(cmd){
	let node = document.createElement('cmd');
	let _debug_user = `[${current_user}]>`
	let command = slice_string(cmd, _debug_user.length+2, cmd.length+1);
	node.innerHTML = `[${current_user}]>${command}`;
	ROOT.appendChild(node)
	handle_command(command);
	CURRENT.innerHTML = `[${current_user}]>`;
}

function slice_string(string, start, end){
	let to_return = "";
	for (let i = 0; i < string.length; i++){
		if (i > start && i < end){
			to_return += string[i];
		}
	}
	return to_return;
}

function split_by_whitespace(string){
	let to_return = [];
	let temp_buf = [];
	let inside_spec = false;
	for (let i = 0; i < string.length; i++){
		if (string[i] == ' ' && !inside_spec){
			to_return.push(string_from_chararray(temp_buf));
			temp_buf = [];
		}
		else{
			if (string[i] === '\'' || string[i] === '\"'){
				if (inside_spec){
					to_return.push(string_from_chararray(temp_buf));
					temp_buf = [];
					continue;
				}
				else{
					inside_spec = true;
					continue;
				}
			}
			temp_buf.push(string[i]);
		}
	}
	if (temp_buf != []){
		to_return.push(string_from_chararray(temp_buf));
	}
	return to_return;
}

function string_from_chararray(char_array){
	let to_return = "";
	for (let i = 0; i < char_array.length; i++){
		to_return += char_array[i];
	}
	return to_return;
}

function delete_char(){
	let innerh = CURRENT.innerHTML;
	let len = innerh.length-2;
	let replace = "";
	for (let i = 0; i <= len; i++){
		replace += innerh[i];
	}

	CURRENT.innerHTML = replace;
}

function concat_array(array){
	let to_return = "";
	for (let i = 0; i < array.length; i++){
		to_return += array[i] + ' ';
	}
	return to_return;
}

main();
