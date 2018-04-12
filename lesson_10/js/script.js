class options {
			constructor(height, width, bg, fontSize, textAlign) {
				this.height = document.getElementsByName('height')[0].value + 'px';
				this.width = document.getElementsByName('width')[0].value + 'px';
				this.bg = document.getElementsByName('bgcolor')[0].value;
				this.fontSize = document.getElementsByName('fontsize')[0].value + 'px';
				this.textAlign = document.getElementsByName('textalign')[0].value;
			}

			makeDiv() {
				let div = document.createElement('div');
				div.innerHTML = document.getElementsByName('div-text')[0].value;
				div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign};`;
				document.body.appendChild(div);
			}
			
		}

		let element = new options;

element.makeDiv();

let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', () => {
					let a = document.body.children[2];
					a.remove();
					let b = new options;
					b.makeDiv();					
});