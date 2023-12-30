//Criar uma referência para tela

//Dê altura e largura específicas para a imagem do carro

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.

function add() {
	//carregar carro e imagens de fundo na tela.
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’

}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
}

function down()
{
	//Definir função para mover o carro para baixo
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	//Definir função para mover o lado direito do carro
}
