enum Directions {
	TOP = "top",
	RIGHT = "right",
	BOTTOM = "bottom",
	LEFT = "left"
}

enum TimingFunctions {
	EASE = "ease",
	EASE_IN = "ease-in",
	// `${EASE}-in` – error, only numbers
	EASE_OUT = "ease-out",
	EASE_IN_OUT = "ease-in-out",
	LINEAR = "linear"
}

enum Durations {
	ONE = 1,
	TWO = 2,
	THREE = ONE + TWO
}

function frame(element: string, direction: Directions, timingFunction: TimingFunctions, duration: Durations): void {
	if (direction === Directions.RIGHT) {
		console.log(element, timingFunction, duration)
	}
}

frame("elementID", Directions.RIGHT, TimingFunctions.EASE, Durations.THREE)