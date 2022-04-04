// const katakana = '田$由&甲申甴电甶男甸%甹町ç画甼µ甽甾甿@畀畁~畂畃畄畅畆畇畈畉畊£畋界畍畎à畏畐ê畑アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
// const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const nums = '0123456789';

// const alphabet = katakana + latin + nums;

// const fontSize = 16;
// const colmns = canvas.width / fontSize;

// const rainDrops = [];

// for (let x = 0; x < colmns; x++) {
//   rainDrops[x] = 1;
// }

// const draw = () => {
//   context.fillStyle = 'rgba(0, 0, 0, 0.05)';
//   context.fillRect(0, 0, canvas.width, canvas.height);

//   context.fillStyle = '#0F0';
//   context.font = fontSize + 'px monospace';

//   for (let i = 0; i < rainDrops.length; i++) {
//     const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
//     context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

//     if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//       rainDrops[i] = 0;
//     }
//     rainDrops[i]++;
//   }
// };

// setInterval(draw, 30);





























var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "田$由&甲申甴电甶男甸%甹町ç画甼µ甽甾甿@畀畁~畂畃畄畅畆畇畈畉畊£畋界畍畎à畏畐ê畑";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);



