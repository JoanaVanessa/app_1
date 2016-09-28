function calcular(){
	var form = document.calculoIMC;
	var altura = form.altura.value;
	var peso = Number(form.peso.value);

	if(altura.indexOf(',')>-1){

		altura=altura.replace(',','.');
		}

	altura=Number(altura);

	var IMC=peso/Math.pow(altura,2);
	var IMCNEW=IMC.toFixed(2);
	var resultado = 'O seu IMC é '+IMCNEW + '<br>';

	if(IMC<18.5){
		resultado+='Você encontra-se abaixo do peso recomendado, consulte o seu médico!';
		}
	else if (IMC<25) {
		resultado+='Você encontra-se no seu peso recomendado, continue assim!';
		}
	else if (IMC<30) {
		resultado+='Você encontra-se acima do peso recomendado, é melhor começar a fazer algum exercicio';
		}
	else if (IMC<35) {
		resultado+='Você encontra-se muito acima do seu peso recomendado, obesidade grau I!';
		}
	else if (IMC<40) {
		resultado+='Você encontra-se muito acima do seu peso recomendado, obesidade grau II!';
		}
	else {
		resultado+='Você encontra-se mesmo muito acima do seu peso recomendado, obesidade grau III!';
		}


	document.getElementById('resultado').innerHTML=resultado;








}