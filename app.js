$(document).ready(function() {
	createPortfolio();
});

function createPortfolio() {

	portfolio = [

		["Prospect VX",
			"https://s19.postimg.org/ezctimzc3/pvx.jpg",
			"A tool to calculate Prospect Volumetrics",
			"https://www.faultseal.com/index.php/solutions/prospectvx"],
		["FaultRisk",
			"https://s19.postimg.org/9le1b39lv/faultrisk.jpg",
			"A tool to calculate distributions of trapped hydrocarbons",
			"https://www.faultseal.com"],
		["Simon in Space",
			"https://s19.postimg.org/lsd6ewq5f/simon.jpg",
			"FreeCodeCamp challenge to create a Simon game",
			"http://www.tosp.net.au/fcc/simon-game"],
		["Tic-tac-toe",
			"https://s19.postimg.org/tmds0axyb/tictactoe.jpg",
			"FreeCodeCamp challenge to create a tic-tac-toe game",
			"http://www.tosp.net.au/fcc/tic-tac-toe"],
		["Calculator",
			"https://s19.postimg.org/xnq9s80v7/calc.jpg",
			"FreeCodeCamp challenge to create a calculator",
			"http://www.tosp.net.au/fcc/calculator"],
		["Pomodoro Clock",
			"https://s19.postimg.org/b1pjt8cir/pomodoro.jpg",
			"FreeCodeCamp challenge to create a pomodoro clock",
			"http://www.tosp.net.au/fcc/pomodoro-clock"],
		["Twitch TV",
			"https://s19.postimg.org/e3gc36pnn/twitch.jpg",
			"FreeCodeCamp challenge to create a Twitch TV selector",
			"http://www.tosp.net.au/fcc/twitch-tv-viewer"],
		["Local Weather",
			"https://s19.postimg.org/o21apnz37/weather.jpg",
			"FreeCodeCamp challenge to create a local weather station",
			"http://www.tosp.net.au/fcc/weather"],
		["Random Quote",
			"https://s19.postimg.org/voe9ejvxf/quote.jpg",
			"FreeCodeCamp challenge to create a random quote generator",
			"http://www.tosp.net.au/fcc/random-quote"],
		["Robert Frost",
			"https://s19.postimg.org/93ivv8k0z/tribute.jpg",
			"FreeCodeCamp challenge to create a tribute page",
			"http://www.tosp.net.au/fcc/tribute"]
	]

	portfolio.forEach(function(job) {
		var html = '<li class="code"><img src="';
		html += job[1] + '"/><div class="text-desc"><a href="';
		html += job[3] + '" target="_blank"><h4>';
		html += job[0] + '</h4></a><p>';
		html += job[2] + '</p></div></li>';
		$("#portfolio").append(html);
	}); 
}	