class Tomagotchi { 
	constructor() {
		this.name = null;
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
		this.awake = true;
	}
	eat() {
		this.hunger = 0;
		$('#memo').text('nomnomnom... Thanks!');
	}
	play() {
		this.boredom = 0;
		$('#memo').text('That was fun!');
	}
	sleep() {
		this.sleepiness = 0;
		if (this.awake === false) {
			$('#memo').text('zzzzzzZZZZZZZZZzzzzzz');
		}
	}
}

const game = { 
	time: 0,
	feedToma() {
		if (pet.awake) {
			pet.eat();
		} else {
			if (pet.name) {
				$('#memo').text(`${pet.name} is sleeping right now....`);
			} else {
				$('#memo').text('Your pet is sleeping right now....');
			}
		}
	},
	playToma() {
		if (pet.awake) {
			pet.play();
		} else {
			if (pet.name) {
				$('#memo').text(`${pet.name} is sleeping right now....`);
			} else {
				$('#memo').text('Your pet is sleeping right now....');
			}
		}
	},
	toggleAwake() {
		if (pet.awake) {
			$('#sun').css('visibility', 'hidden');
			$('#moon').css('visibility', 'visible');
			$('main').css('backgroundColor', 'rgb(14, 29, 50)');
			pet.awake = false;
			pet.sleep();
		} else {
			$('#sun').css('visibility', 'visible');
			$('#moon').css('visibility', 'hidden');
			$('main').css('backgroundColor', 'rgb(174, 221, 218)');
			$('#memo').text('');
			pet.awake = true;
		}
	}, 
	addHunger() {
		pet.hunger++;
		$('#hungerSpan').text(pet.hunger);
		if (pet.hunger === 10) {
			this.killToma();
		}
	},
	addSleepiness() {
		pet.sleepiness++;
		$('#sleepSpan').text(pet.sleepiness);
		if (pet.sleepiness === 10) {
			this.killToma();
		}
	}, 
	addBoredom() {
		pet.boredom++;
		$('#boredSpan').text(pet.boredom);
		if (pet.doredom === 10) {
			this.killToma();
		}
	}, 
	addAge() {
		pet.age++;
		$('#ageSpan').text(pet.age);
		if (pet.age === 2 || pet.age === 4) {
			this.evolveToma();
		}
		if (pet.age === 10) {
			this.killToma();
		}
	},
	timeLapseToma() {
		let runHunger = setInterval(this.addHunger, 60000);
		let runSleepiness = setInterval(this.addSleepiness, 120000);
		let runBoredom = setInterval(this.addBoredom, 30000);
		let runAge = setInterval(this.addAge, 600000);
	},
	evolveToma() {
		
	},
	killToma() {

	},
	init() {
		//should be a button to run init somewhere
		//should set all counters to 0 initially


		//should call class to create TOMA.
		//should immediately start timeLapseToma()

	}



	//buttons and forms: form to name pet. button to assign name.
	// buttons to feed, turn off/on awake, play.



}

$('#UI').on('click', (event) => {
	if (event.target.innerText === 'Feed') {
		game.feedToma();
	} else if (event.target.innerText === 'Play') {
		game.playToma();
	} else if (event.target.innerText === 'Wake/Sleep') {
		game.toggleAwake();
	} else if (event.target.innerText === 'Set Name') {
		event.preventDefault();
		pet.name = $('#form')[0].children[0].value;
		if (pet.name) {
			$('#name').text(`My name is ${pet.name}.`);
		} else {
			return;
		}
	}
});

let pet = new Tomagotchi();






