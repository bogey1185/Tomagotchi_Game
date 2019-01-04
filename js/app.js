class Tomagotchi { 
	constructor() {
		this.name = null;
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
		this.awake = true;
		this.image = 'images/squirtle-day.jpeg';
		this.dead = true;
	}
	eat() {
		this.hunger = 0;
		$('#hungerSpan').text(pet.hunger);
		$('#memo').text('nomnomnom... Thanks!');
	}
	play() {
		this.boredom = 0;
		$('#boredSpan').text(pet.boredom);
		$('#memo').text('That was fun!');
	}
	sleep() {
		this.sleepiness = 0;
		$('#sleepSpan').text(pet.sleepiness);
		if (this.awake === false) {
			$('#memo').text('zzzzzzZZZZZZZZZzzzzzz');
		}
	}
}

const game = { 
	time: 0,
	timeLapse: null,
	feedToma() {
		if (pet.dead === false) {
			if (pet.awake) {
				pet.eat();
			} else {
				if (pet.name) {
					$('#memo').text(`${pet.name} is sleeping right now....`);
				} else {
					$('#memo').text('Your pet is sleeping right now....');
				}
			}
		}
	},
	playToma() {
		if (pet.dead === false) {
			if (pet.awake) {
				pet.play();
			} else {
				if (pet.name) {
					$('#memo').text(`${pet.name} is sleeping right now....`);
				} else {
					$('#memo').text('Your pet is sleeping right now....');
				}
			}
		}
	},
	toggleAwake() {
		if (pet.dead === false) {
			if (pet.awake) {
				$('#sun').css('visibility', 'hidden');
				$('#moon').css('visibility', 'visible');
				$('main').css('backgroundColor', 'rgb(14, 29, 50)');
				if (pet.age < 2) {
					$('#tomaImg').attr('src', 'images/squirtle-night.jpeg');
				} else if (pet.age >= 2 && pet.age < 4) {
					$('#tomaImg').attr('src', 'images/wartortle-night.jpeg');
				} else {
					$('#tomaImg').attr('src', 'images/blastoise-night.jpeg');
				}
				pet.awake = false;
				pet.sleep();
			} else {
				$('#sun').css('visibility', 'visible');
				$('#moon').css('visibility', 'hidden');
				$('main').css('backgroundColor', 'rgb(174, 221, 218)');
				if (pet.age < 2) {
					$('#tomaImg').attr('src', 'images/squirtle-day.jpeg');
				} else if (pet.age >= 2 && pet.age < 4) {
					$('#tomaImg').attr('src', 'images/wartortle-day.jpeg');
				} else {
					$('#tomaImg').attr('src', 'images/blastoise-day.jpeg');
				}
				$('#memo').text('');
				pet.awake = true;
			}
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
		if (pet.boredom === 10) {
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
	runTime() {
		this.time++;
		if (this.time % 1 === 0) {
			this.addBoredom();
		}
		if (this.time % 2 === 0) {
			this.addHunger();
		}
		if (this.time % 3 === 0) {
			this.addSleepiness();
		}
		if (this.time % 10 === 0) {
			this.addAge();
			$('#tomaImg').velocity('transition.slideLeftOut', 3000)
			$('#tomaImg').velocity('transition.bounceLeftIn', 3000);
		}
		if (this.time % 15 === 0) {
			$('#tomaImg').velocity('transition.slideRightOut', 2000)
			$('#tomaImg').velocity('transition.bounceRightIn', 2000);
		}
	},
	timeLapseToma() {
		this.timeLapse = setInterval(() => {
			this.runTime()
		}, 1000);
	},
	evolveToma() {
		if (pet.age >= 2 && pet.age < 4){
			if (pet.awake) {
				$('#tomaImg').attr('src', 'images/wartortle-day.jpeg');
			} else {
				$('#tomaImg').attr('src', 'images/wartortle-night.jpeg');
			}
		}
		if (pet.age >= 4){
			if (pet.awake) {
				$('#tomaImg').attr('src', 'images/blastoise-day.jpeg');
			} else {
				$('#tomaImg').attr('src', 'images/blastoise-night.jpeg');
			}
		}
	},
	killToma() {
		clearInterval(this.timeLapse);
		pet.dead = true;
		pet.awake ? $('#tomaImg').attr('src', 'images/rip-day.png') : $('#tomaImg').attr('src', 'images/rip-night.png');
		if (pet.name) {
				$('#memo').text(`${pet.name} died!`);
			} else {
				$('#memo').text('Your pet died!');
			}
	},
	init() {
		if (pet.dead === true) {
			pet.name = null;
			pet.hunger = 0;
			pet.sleepiness = 0;
			pet.boredom = 0;
			pet.age = 0;
			pet.dead = false;
			$('#ageSpan').text(pet.age);
			$('#boredSpan').text(pet.boredom);
			$('#sleepSpan').text(pet.sleepiness);
			$('#hungerSpan').text(pet.hunger);
			$('#sun').css('visibility', 'visible');
			$('#moon').css('visibility', 'hidden');
			$('main').css('backgroundColor', 'rgb(174, 221, 218)');
			$('#name').text('Hello!');
			$('#memo').text('Have fun!')
			pet.awake = true;
			this.time = 0;
			this.timeLapse = null;
			$('#tomaImg').attr('src', 'images/squirtle-day.jpeg');
			$('#tomaImg').css('visibility', 'visible');
			$('#tomaImg').velocity('transition.expandIn', {duration: 1000});
			this.timeLapseToma();	
		} else {
			return;
		}	
	}
}

$('#UI').on('click', (event) => {
	if (event.target.innerText === 'Feed') {
		game.feedToma();
	} else if (event.target.innerText === 'Play') {
		game.playToma();
	} else if (event.target.innerText === 'Wake/Sleep') {
		game.toggleAwake();
	} else if (event.target.innerText === 'Start') {
		game.init();
	} else if (event.target.innerText === 'Set Name') {
		event.preventDefault();
		if (pet.dead === false) {
			pet.name = $('#form')[0].children[0].value;
			if (pet.name) {
				$('#name').text(`My name is ${pet.name}.`);
			} else {
				return;
			}
		}
	}
});

let pet = new Tomagotchi();
$('body').velocity('transition.fadeIn', 5000);





