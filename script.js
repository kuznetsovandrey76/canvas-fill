let height = 0;
let excess = 0;

let canvas = document.querySelector('.canvas');
let textPlus = document.querySelector('.text-plus');
let textMinus = document.querySelector('.text-minus');
let buttonPlus = document.querySelector('.button-plus');
let buttonMinus = document.querySelector('.button-minus');
let msg = document.querySelector('.message');

let ctx1 = canvas.getContext('2d');
let ctx2 = canvas.getContext('2d');

buttonPlus.addEventListener('click', function() {

		if (height < 100) {
			height += parseInt(textPlus.value) ? parseInt(textPlus.value) : 0;
			ctx1.fillStyle = 'lightblue';
			ctx1.fillRect(0,100 - height,50,100);
			excess = 0;
		}

		if (height == 100) {
			ctx1.fillStyle = "lightgreen";
			ctx1.fillRect(0,0,50,100);
		}

		if (height > 100) {
			ctx1.fillStyle = "tomato";
			excess = height - 100;
			ctx1.fillStyle = "tomato";
			ctx1.fillRect(0,0,50,100);
		}

		msg.innerText = `height: ${height}, excess:${excess}`;	
		textPlus.value = ``;	
});

buttonMinus.addEventListener('click', function() {
	if (height > 0) {
			height -= parseInt(textMinus.value) ? parseInt(textMinus.value) : 0;
			excess = 0;
			ctx2.fillStyle = 'white';
			ctx2.fillRect(0,0,50,100 - height);		
			ctx1.fillStyle = 'lightblue';
			ctx1.fillRect(0,100 - height,50,100);	

		if (height > 100) {
			excess = height - 100;		
			ctx1.fillStyle = "tomato";
			ctx1.fillRect(0,0,50,100);
		} 
	}

	if (height == 100) {
		ctx1.fillStyle = "lightgreen";
		ctx1.fillRect(0,0,50,100);
		excess = height - 100;
	}

		msg.innerHTML = `<p>height: ${height}, <span class='excess'>excess:${excess}</span></p>`;	
		textMinus.value = ``;	
});













