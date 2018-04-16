function calc() {
	
	let persons = document.getElementsByClassName('counter-block-input')[0],
					restDays = document.getElementsByClassName('counter-block-input')[1],
					place = document.getElementById('select'),
					totalValue = document.getElementById('total'),
					personsSum = 0,
					daysSum = 0,
					total = 0;

					totalValue.innerHTML = 0;

					persons.addEventListener('change', function() {
						personsSum = +this.value;								
						total = (daysSum + personsSum) * 4000;								
						if (this.value == '' || isNaN(parseInt(this.value)) == true || personsSum % 1 != 0 || daysSum % 1 != 0 || personsSum <= 0 || daysSum <= 0) {
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						};
					});

					restDays.addEventListener('change', function() {
						daysSum = +this.value;
						total = (daysSum + personsSum) * 4000;
						if (this.value == '' || isNaN(parseInt(this.value)) == true || personsSum % 1 != 0 || daysSum % 1 != 0 || personsSum <= 0 || daysSum <= 0) {
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						};
					});

					place.addEventListener('change', function() {
						if (restDays.value == '' || isNaN(parseInt(restDays.value)) == true || personsSum % 1 != 0 || persons.value == '' || isNaN(parseInt(restDays.value)) == true || daysSum % 1 != 0 || personsSum <= 0 || daysSum <= 0) {
							totalValue.innerHTML = 0;
						} else {
							let e = total;									
							totalValue.innerHTML = e * this.options[this.selectedIndex].value;
						};
			});
};

module.exports = calc;