class options {
			constructor(height, width, bg, fontSize, textAlign) {
				this.height = '480px';
				this.width = '960px';
				this.bg = 'green';
				this.fontSize = '20px';
				this.textAlign = 'center';
			}

			makeDiv() {
				let div = document.createElement('div');

				div.innerHTML = 'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.';

				div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign};`;

				document.body.appendChild(div);
			}
			
		}

		let element = new options;

		element.makeDiv();