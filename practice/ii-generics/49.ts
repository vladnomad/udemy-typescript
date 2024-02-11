//@ts-nocheck

// Task 1

interface IPlayerData<PlayerHours extends HoursData | number | string> {
	game: string | number;
	hours: PlayerHours;
	server: string;
}

interface HoursData {
    total: number;
    inMenu: number;
}

const player1: IPlayerData<number> = {
	game: "Anno 1404",
	hours: 300,
	server: "basic"
}

const player2: IPlayerData<string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade"
}

const player3: IPlayerData<HoursData> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess"
}


// Task 2

interface ITotalShapes {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

function calculateTotalShapes<T extends IShape<IShapeData>>(shapes: T[]): ITotalShapes {
	let result: ITotalShapes = {
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0
	}

	shapes.forEach(shape => {
		switch (shape.name) {
			case ShapeName.RECT: 
				if (shape.data?.a === shape.data?.b) ++result.squares
				break
			case ShapeName.TRIANGLE:
				++result.triangles
				break
			case ShapeName.CIRCLE: 
				++result.circles
				break
			default: ++result.others
		}
	})

	return result
}

enum ShapeName {
	RECT = "rect",
	TRIANGLE = "triangle",
	CIRCLE = "circle"
}

interface IShapeData {
	a?: number;
	b?: number;
	c?: number;
	r?: number;
	l?: number;
}

interface IShape<Data> {
	name: ShapeName | string;
	data?: Data;
}

const shapes: IShape<IShapeData>[] = [
	{
		name: "rect",
		data: { a: 5, b: 10 }
	},
	{
		name: "rect",
		data: { a: 6, b: 11 }
	},
	{
		name: "triangle",
		data: { a: 5, b: 10, c: 14 }
	},
	{
		name: "line",
		data: { l: 15 }
	},
	{
		name: "circle",
		data: { r: 10 }
	},
	{
		name: "circle",
		data: { r: 5 }
	},
	{
		name: "rect",
		data: { a: 15, b: 7 }
	},
	{
		name: "triangle"
	}
]

console.log(calculateTotalShapes(shapes))