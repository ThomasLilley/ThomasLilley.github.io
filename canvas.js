var canvas = document.getElementById("canvas");
var my_context = canvas.getContext('2d');
var my_Array=[];
var coloursArray = ["#ffffff","#111111", "#333333","#999999"];

// Returns a random number between min (inclusive) and max (exclusive)
function randomRange(min, max) { 
	return  Math.random()*(max-min) + min; 
}

setInterval(draw,100);

  function draw(){
	  // create an array item, local variable (look at variable scope)
	  	var my_pixel={x:500,y:500,xSpeed:randomRange(-5,5),ySpeed:randomRange(-5,5),size:10};
		
		//add to array
  		my_Array.push(my_pixel);
		
		// clear the canvas or we will get a lovely start pattern
  		my_context.clearRect(0,0,1000,1000);
		
		// loop through all in the updated array and reposition and scale
		for(var i=0; i<my_Array.length;i++)
		{
			//console.log(coloursArray[1]);	
			my_pixel=my_Array[i];
			// colour
			// creates a random colour using (16777215 == ffffff in decimal)
			//var random_colour ='#'+Math.floor(Math.random()*16777215).toString(16);
			//my_context.fillStyle=random_colour;
			//my_context.fillStyle=coloursArray[randomRange(0, 3)];
			my_context.fillStyle='white';

			//position draw pixel on canvas square version
			my_context.fillRect(my_pixel.x,my_pixel.y,my_pixel.size,my_pixel.size);

			// circle version - arc and diameter
			//my_context.beginPath();
			//my_context.arc(my_pixel.x, my_pixel.y, my_pixel.size/2, 0, 2 * Math.PI, false);
			//my_context.fill();

			// update position x and y to offset
			my_pixel.x=my_pixel.x+ my_pixel.xSpeed;
			my_pixel.y=my_pixel.y+ my_pixel.ySpeed;

			// reduce the size of the pixel by
			my_pixel.size=my_pixel.size*0.96;
			my_pixel.opacity=my_pixel.size*0.50;
		}
  }
