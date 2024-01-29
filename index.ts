interface Square {
	side: number;
	area: number;
}

interface Rectangle {
	a: number;
	b: number;
	area: number;
}

function calcShapeArea(side: number): Square
function calcShapeArea(a: number, b: number): Rectangle
function calcShapeArea(a: number, b?: number): Square | Rectangle {
	if (b) {
		const rectangle: Rectangle = { 
			a, 
			b, 
			area: a* b 
		}

		return rectangle
	} else {
		const square: Square = { 
			side: a, 
			area: a * a 
		}
		
		return square
	}
}

calcShapeArea(1)
calcShapeArea(1, 2)