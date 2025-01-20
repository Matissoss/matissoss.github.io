// imports

import libstd from './std.js';

// Global Constants
export const ROOT    = $("ROOT");
export const CURRENT = $("CURRENT");
// Global mutables
export let is_input = false;
let users = new Map();
let current_user = "user";
let history = [];
let variables = new Map();
// functions
function $(html){
	return document.getElementById(html);
}

function main(){
	libstd.println("# # ### #   #   ###  #   # ### ### #   ##  #");
	libstd.println("# # #   #   #   # #  #   # # # # # #   # # #");
	libstd.println("### ### #   #   # #  # # # # # ##  #   # # #");
	libstd.println("# # #   #   #   # #  ## ## # # # # #   # #  ");
	libstd.println("# # ### ### ### ###  #   # ### # # ### ##  #");
	libstd.println("============================================")
	libstd.println("Welcome to mateus' shell, use 'commands' to ");
	libstd.println("get all possible commands");
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
			libstd.println(`${variables.get(variable_name)}`);
		}
		return;
	}

	switch (args[0]){
		case "get":
			if (args[1] != undefined){
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
			libstd.println("Commands:");
			libstd.println("aboutme        - gives you info about author of this 'website'");
			libstd.println("user           - user simulation in this website");
			libstd.println("clear          - explains itself");
			libstd.println("clear history  - explains itself");
			libstd.println("history        - explains itself");
			libstd.println("lv             - lists variables in this session");
			libstd.println("get $[var_name] - gets value of [var_name]");
			libstd.println("And there other easter egg commands, good luck finding them ;)")
			break;
		case "sudo":
			libstd.println("I'd just like to interject for a moment.");
			libstd.println("What you're referring to as Linux is in fact, GNU/Linux");
			libstd.println("or as I've recently taken to calling it, GNU + Linux");
			break;
		case "rickroll":
			window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D");
			libstd.println("Never gonna give you up,\nNever gonna let you down\n[...]");
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
				libstd.std_output("Credits\nThis website was made by mateusdev, using plain Javascript"
				);
			}
			else if (args[1] ==='--help' || args[1] === '-h'){
				libstd.println("aboutme");
				libstd.println(" SYNTAX");
				libstd.println("  aboutme [flag] [args]");
				libstd.println(" FLAGS");
				libstd.println("-h/--help     -> prints this message");
				libstd.println("--itch/-i     -> prints all my itch.io games along with link to them");
				libstd.println("--project/-p  -> prints all my FOSS/OSS projects along with link to them");
				libstd.println("--social/-s   -> prints all my social media accounts");
				libstd.println("--skills/-sk  -> prints all my skills");
			}
			else if (args[1] === '--itch' || args[1] === '-i'){
				libstd.println(
					"https://matissoss.itch.io\nList\nOverhytm 		[overhytm]\nCarmEco 		[carmeco]\nSwitcher 		[switcher-game]\nSkeleton Graveyar 	[skeleton-graveyard]\nSwitcher (PGJ 2024) 	[switcher]\nDeath Duo 		[death-duo]\nFish vs Crabs 		[fish-vs-crabs]\nFreezing Torch 		[freezing-torch]\nBehind the doors 	[behind-the-doors]\nSpace Flight 		[space-flight]"
				);
			}
			else if (args[1] === '--project' || args[1] === '-p'){
				libstd.println("Projects\nAll: https://github.com/Matissoss\nmkb - mateus' kanbban board [/mkb]\nmsat - mateus' school administration tool [/msat]")
			}
			else if (args[1] === '--social' || args[1] === '-s'){
				libstd.println(
					`Socials\nTwitter: [https://x.com/@MateusDevPL]\nYoutube: [https://youtube.com/@MatissossGameDev]`
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
				to_output += `${index}. ${el}\n`;
				index++;
			});
			libstd.println(`History\n\n${to_output}`);
			break;
		case "logo":
			libstd.println(
			"----------\n----------\n---&--&---\n----------\n--%%%%%%--\n----------\n----------");
			break;
		case "clear":
			if (args[1] != undefined && args[1] === 'history'){
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
				libstd.println(to_output);
			}
			else if (args[1] === '--login' || args[1] === '-lg'){
				if (args[2] !== undefined && args[3] !== undefined){
					if (users.get(args[2]) === args[3]){
						libstd.println(`Succesfully logged into user ${args[2]}`);
						current_user = args[2];
					}
					else{
						libstd.println(`Couldn't log into user ${args[2]}`);
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
			libstd.println("Good Morning");
			break;
		case "whats":
			if (args[1] === "up?" || args[1] === "up"){
				libstd.println("I'm fine :)");
			}
			break;
		case "↑↑↓↓←→←→BA":
			libstd.println("Isn't it konami code?");
			break;
		case "coffee":
			libstd.println("             ;,'");
			libstd.println("     _o_    ;:;'");
			libstd.println(" ,-.'---`.__ ;");
			libstd.println("((j`=====',-'");
			libstd.println(" `-\\     /");
			libstd.println("    `-=-'");
			libstd.println("418 I'm a teapot")
			break;
		case "portfolio":
			libstd.println("| portfolio");
			libstd.println("|==============");
			libstd.println(
			"| ----------\n| ----------\n| ---&--&---\n| ----------\n| --%%%%%%--\n| ----------\n| ----------");
			libstd.println("|==============");
			libstd.println("| name    : MateusDev");
			libstd.println("| country : Poland");
			libstd.println("| age     : I exist");
			libstd.println("| email   : matissossGameDev@proton.me");
			libstd.println("|==============");
			libstd.println("| skills");
			libstd.println("|==============");
			libstd.println("| - Linux");
			libstd.println("| - Rust");
			libstd.println("| - WebDev (HTML/CSS/JS)");
			libstd.println("| - C-like languages (mostly C++)");
			break;
		case "whoami":
			fetch ("https://api.ipify.org")
			.then(response => response.text())
			.then(ip => {
				fetch (`http://ip-api.com/json/${ip}?fields=524761`)
				.then(response => response.json())
				.then(data => {
					libstd.println(
					`You are ${ip}\nLan:${data.lat}\nLon:${data.lon}\nYou live in ${data.country}, ${data.regionName}, ${data.city}`);
					libstd.println("Don't thank me :)");
				})
			});

			break;
		case "uname":
			if (args[1] === '-a'){
				libstd.println("F You OS Version 69")
			}
			break;
		case "rm":
			if (args[1] === '-rf' && args[2] == '/'){
				libstd.println("This is not Linux");
			}
			break;
		case "chatgpt":
			libstd.println("i'm not artificial inteligence, i am stupid reality")
			break;
		case "life":
			libstd.println("life is beautiful, maybe not yours and not mine, but it is :)");
			break;
		case "fortune":
			libstd.println("you'll die tomorrow (if not, then it is joke)");
			break;
		case "selfdestruct":
			libstd.println("Proceeding with selfdestruction...");
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
			libstd.println(concat);
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
		CURRENT.innerHTML += key;
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
	ROOT.appendChild(node);
	if (is_input){
		handle_command(command);
		CURRENT.innerHTML = `[${current_user}]>`;
	}
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
