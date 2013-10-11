// MODEL CLASS for envi
// Point syntax is [x,y,z, char, color]

function Models () {
	this.box = [[0,0,0,'0'], [5,0,0,'0'], [5,5,0,'0'], [0,5,0,'0'],
		[0,0,5,'0'], [5,0,5,'0'], [5,5,5,'0'], [0,5,5,'0']];

	this.grid = [[0,0,100,'&'], [canvas.width,0,100,'&'], [0,canvas.height,100, '&'], 
		[canvas.width,canvas.height,100,'&'], [0,0,200,'&'], [canvas.width,0,200,'&'], 
		[0,canvas.height,200, '&'], [canvas.width,canvas.height,200,'&'], [0,0,300,'&'], 
		[canvas.width,0,300,'&'], [0,canvas.height,300, '&'], [canvas.width,canvas.height,300,'&'], 
		[0,0,400,'&'], [canvas.width,0,400,'&'], [0,canvas.height,400, '&'], 
		[canvas.width,canvas.height,400,'&'], [0,0,500,'&'], [canvas.width,0,500,'&'], 
		[0,canvas.height,500, '&'], [canvas.width,canvas.height,500,'&'], [0,0,600,'&'], 
		[canvas.width,0,600,'&'], [0,canvas.height,600, '&'], [canvas.width,canvas.height,600,'&'], 
		[0,0,700,'&'], [canvas.width,0,700,'&'], [0,canvas.height,700, '&'], 
		[canvas.width,canvas.height,700,'&'], [0,0,800,'&'], [canvas.width,0,800,'&'], 
		[0,canvas.height,800, '&'], [canvas.width,canvas.height,800,'&'], [0,0,900,'&'], 
		[canvas.width,0,900,'&'], [0,canvas.height,900, '&'], [canvas.width,canvas.height,900,'&']];


	// 10^3
	this.diamond = [ 
		[5,0,5, '#'], [0,5,5, '#'], [10,5,5, '#'], [5,10,5, '#'],  /* corners */
		[5,5,0, '#'], [5,5,10, '#'],
		[4,1,5, '.'], [3,2,5, '.'], [2,3,5, '.'], [1,4,5, '.'],    /* sides */
		[6,1,5, '.'], [7,2,5, '.'], [8,3,5, '.'], [9,4,5, '.'],
		[4,9,5, '.'], [3,8,5, '.'], [2,7,5, '.'], [1,6,5, '.'],
		[6,9,5, '.'], [7,8,5, '.'], [8,7,5, '.'], [9,6,5, '.'],
		[5,1,4, '.'], [5,2,3, '.'], [5,3,2, '.'], [5,4,1, '.'],
		[5,1,6, '.'], [5,2,7, '.'], [5,3,8, '.'], [5,4,9, '.'],
		[5,9,4, '.'], [5,8,3, '.'], [5,7,2, '.'], [5,6,1, '.'],
		[5,9,6, '.'], [5,8,7, '.'], [5,7,8, '.'], [5,6,9, '.'],
		[4,5,1, '.'], [3,5,2, '.'], [2,5,3, '.'], [1,5,4, '.'],
		[6,5,1, '.'], [7,5,2, '.'], [8,5,3, '.'], [9,5,4, '.'],
		[4,5,9, '.'], [3,5,8, '.'], [2,5,7, '.'], [1,5,6, '.'],
		[6,5,9, '.'], [7,5,8, '.'], [8,5,7, '.'], [9,5,6, '.']
		];

	// 10^3
	this.palmTree = [
		[5,10,5, 'i'], [5,9,5, 'i'], [5,8,5, 'i'], [5,7,5, 'i'], [5,6,5, 'i'], [5,6,5, 'i'],  /* stalk */
		[5,5,5, 'i'], [5,4,5, 'i'], [5,3,5, 'i'], [5,2,5, 'i'],
		[5,1,5, '*'],  	/* head */
/*		[4,1,5, '-*-'], [6,1,5, '-*-'], [5,1,6, '-*-'], [5,1,4, '-*-'],*/		
		[4,1,4, '*'], [3,1,3, '*'], [2,2,2, '*'], [1,3,1, '*'],   /* leaves */
		[6,1,4, '*'], [7,1,3, '*'], [8,2,2, '*'], [9,3,1, '*'],
		[6,1,6, '*'], [7,1,7, '*'], [8,2,8, '*'], [9,3,9, '*'],
		[4,1,6, '*'], [3,1,7, '*'], [2,2,8, '*'], [1,3,9, '*']

	];

	// 10^3
	this.grass = [
		[10,9,5, '. .  .    .', '#663300'],  /* rocks */
		[4,8,5, ')', '#003300'], [6,8,5, '(', '#003300'], /* blades */
		[5,8,4, ')', '#003300'], [5,8,6, '(', '#003300'] 

	];

	// 3^300
	this.fly = [
	[2,2,2, '.'], [1,2,2, '-'], [3,2,2, '-']
	];
}

