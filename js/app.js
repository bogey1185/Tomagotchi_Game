class Tomagotchi { 
	constructor() {
		this.name = null;
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
		//name should be visibility: hidden when null. If named, visible at top.
	}

}

const game = { 
	awake: true,
	feedToma() {
		if (this.awake) {
			//feed language displayed in DOM?
			pet.hunger = 0;
		} else {
			if (pet.Name) {
				//display in DOM. '{name} is sleeping rn. feed when he /she is awake!'
			} else {
				//display in dom 'your pet is sleeping rn. feed when awake.'
			}
		}
	},
	playToma() {
		if (this.awake) {
			//play language displayed in DOM?
			pet.boredom = 0;
		} else {
			if (pet.Name) {
				//display in DOM. '{name} is sleeping rn. play when he /she is awake!'
			} else {
				//display in dom 'your pet is sleeping rn. play when awake.'
			}
		}
	},
	toggleAwake() {
		this.awake ? this.awake = false : this.awake = true;
		if (this.awake === false) {
			//set wait interval.
			pet.sleepiness = 0;
		}	
	}, 
	timeLapseToma() {
		//should increment hunger by 1 every 1 min, and kill at 10.
		//should increment sleepiness by 1 every 2 min, and kill at 10
		//should increment boredom by 1 every .5 min, and kill at 10
		// increment age by 1 every 10 mins
			//evolve at 1 (10 mins old), and 3 (30 mins old); kill at 10 years old.
	},
	init() {
		//should call class to create TOMA.
		//should immediately start timeLapseToma()

	}



	//buttons and forms: form to name pet. button to assign name.
	// buttons to feed, turn off/on awake, play.



}

let pet = new Tomagotchi();