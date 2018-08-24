let total = 0;
let maxTotal = 100;
let minTotal = 0;
let exceedMaxTotal = 0;
let exceedNormal = 0;
let color = ['lightblue', 'lightgreen', 'tomato', 'white'];
[colorLess, colorEqual, colorMore, colorBackgroud] = color;
let canvasVALUE = [0, 0, 50, 100];
[canvasX, canvasY, canvasWIDTH, canvasHEIGHT] = canvasVALUE;

let canvas = document.querySelector('.canvas');
let textPlus = document.querySelector('.text-plus');
let textMinus = document.querySelector('.text-minus');
let buttonPlus = document.querySelector('.button-plus');
let buttonMinus = document.querySelector('.button-minus');
let msg = document.querySelector('.message');

let ctxIncrease = canvas.getContext('2d');
let ctxDecrease = canvas.getContext('2d');

buttonPlus.addEventListener('click', function() {

		if (total < maxTotal) {
			total += parseInt(textPlus.value) ? parseInt(textPlus.value) : 0;
			ctxIncrease.fillStyle = colorLess;
			ctxIncrease.fillRect(canvasX,maxTotal - total,canvasWIDTH,canvasHEIGHT);
			exceedMaxTotal = exceedNormal;
		}

		if (total == maxTotal) {
			ctxIncrease.fillStyle = colorEqual;
			ctxIncrease.fillRect(canvasX,canvasY,canvasWIDTH,canvasHEIGHT);
		}

		if (total > maxTotal) {
			ctxIncrease.fillStyle = colorMore;
			ctxIncrease.fillRect(canvasX,canvasY,canvasWIDTH,canvasHEIGHT);
			exceedMaxTotal = total - maxTotal;
		}

		msg.innerHTML = `<p>total: ${total}, <span class='exceed'>exceed:${exceedMaxTotal}</span></p>`;	
		textPlus.value = ``;	
});

buttonMinus.addEventListener('click', function() {
	if (total > minTotal) {
			total -= parseInt(textMinus.value) ? parseInt(textMinus.value) : 0;
			ctxDecrease.fillStyle = colorBackgroud;
			ctxDecrease.fillRect(canvasX,canvasY,canvasWIDTH,maxTotal - total);		
			ctxIncrease.fillStyle = colorLess;
			ctxIncrease.fillRect(canvasX,maxTotal - total,canvasWIDTH,canvasHEIGHT);	
			exceedMaxTotal = exceedNormal;

		if (total > maxTotal) {
			ctxIncrease.fillStyle = colorMore;
			ctxIncrease.fillRect(canvasX,canvasY,canvasWIDTH,canvasHEIGHT);
			exceedMaxTotal = total - maxTotal;		
		} 
	}

	if (total == maxTotal) {
		ctxIncrease.fillStyle = colorEqual;
		ctxIncrease.fillRect(canvasX,canvasY,canvasWIDTH,canvasHEIGHT);
		exceedMaxTotal = total - maxTotal;
	}

		msg.innerHTML = `<p>total: ${total}, <span class='exceed'>exceed:${exceedMaxTotal}</span></p>`;	
		textMinus.value = ``;	
});













