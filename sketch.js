var jhon,jhonCorrendo,jhonPulando,jhonParado,jhonParadoRS,JhonPulandoRS,JhonCorrendoRS;
var fundosp,fundo;
var chao;
var dAtivado = 0;
var direcao = 0;
var fundosp2;
var fundosp3;
var fundosp4;
var fundosp5;
var fundosp6;
var bandido,ladrao,bandidos;
var obstaculos,caixa,carroA,carroV,carroC;
var caixote;
var sCarroA;
var sCarroV;
var sCarroC;
var carros = 0;
var parede1;
var parede2;
var chefao,Henry,Henry_Parado,Henry_Atirando;
var faca,faquinha,faconas;
var premio,trofeu;


function preload(){
  
  jhonCorrendo = loadAnimation ("assets/Jhon correndo 1.png","assets/Jhon correndo 2.png","assets/Jhon correndo 3.png","assets/Jhon correndo 4.png","assets/Jhon correndo 5.png","assets/Jhon correndo 6.png");
  jhonPulando = loadAnimation ("assets/Jhon pulando 2.png","assets/Jhon pulando 3.png","assets/Jhon pulando 4.png","assets/Jhon pulando 5.png","assets/Jhon pulando 6.png");
  jhonParado = loadAnimation ("assets/Jhon parado 1.png","assets/Jhon parado 2.png","assets/Jhon parado 3.png","assets/Jhon parado 4.png","assets/Jhon parado 5.png");
  jhonPulando.frameDelay = 7
  
  jhonParadoRS = loadAnimation ("assets/Jhon parado 2 RS.png","assets/Jhon parado 4 RS.png","assets/Jhon parado 5 RS.png","assets/Jhon parado 6 RS.png");
  jhonCorrendoRS = loadAnimation ("assets/Jhon correndo RS 1.png","assets/Jhon correndo 3 RS.png","assets/Jhon correndo 4 RS.png","assets/Jhon correndo 5 RS.png");
  jhonPulandoRS = loadAnimation ("assets/Jhon pulando 2 RS.png","assets/Jhon pulando 3 RS.png","assets/Jhon pulando 4 RS.png","assets/Jhon pulando 5 RS.png","assets/Jhon pulando 6 RS.png");
  jhonPulandoRS.frameDelay = 7
  fundo = loadImage ("assets/Fundo.png");

  faca = loadAnimation ("assets/Faquinha1.png","assets/Faquinha2.png","assets/Faquinha3.png","assets/Faquinha4.png");
  chefao = loadAnimation ("assets/Henry 1.png","assets/Henry 2.png","assets/Henry 3.png","assets/Henry 3.png");
  chefao.frameDelay = 10
  Henry_Parado = loadAnimation ("assets/Henry 1.png");
  Henry_Atirando = loadAnimation ("assets/Henry 3.png");
  
  bandido = loadAnimation ("assets/Mini bandido 1.png","assets/Mini bandido 2.png");

  caixa = loadImage ("assets/Caixa_de_madeira-removebg-preview.png");
  carroA = loadImage ("assets/Carro azul.png");
  carroV = loadImage ("assets/Carro verde.png");
  carroC = loadImage ("assets/Carro cinza.png"); 


  trofeu = loadAnimation ("assets/Trofeu.png","assets/Trofeu 2.png","assets/Trofeu 5.png","assets/Trofeu 6.png","assets/Trofeu 3.png","assets/Trofeu 4.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  fundosp3 = createSprite (8300,450);
  fundosp3.addImage (fundo);
  fundosp3.scale = 2
 
  fundosp2 = createSprite (5080,450);
  fundosp2.addImage (fundo);
  fundosp2.scale = 2
  
  fundosp = createSprite (1700,450);
  fundosp.addImage (fundo);
  fundosp.scale = 2

  //adicionando a Animation de fundo
  jhon = createSprite (200,800)
  jhon.addAnimation ("jhonParadoRS",jhonParadoRS);
  jhon.scale = 2
  jhon.addAnimation ("jhonPulandoRS",jhonPulandoRS);
  jhon.addAnimation ("jhonCorrendoRS",jhonCorrendoRS);
  
  jhon.addAnimation ("jhonParado",jhonParado);
  jhon.addAnimation ("jhonPulando",jhonPulando);
  jhon.addAnimation ("jhonCorrendo",jhonCorrendo);
  chao = createSprite (4500,950,11000,80);
  chao.visible = false
  //criando o sprite do jogador

  Henry = createSprite (9500,810)
  Henry.addAnimation ("Henry_Parado",Henry_Parado);
  Henry.addAnimation ("chefao",chefao);
  Henry.addAnimation("Henry_Atirando",Henry_Atirando);
  
  Henry.scale = 1.1
  obstaculos = new Group ()
  
  criarObstaculos (obstaculos,10,caixa,0.3)
  criarObstaculos2 (obstaculos,7,1)

  bandidos = new Group ()

  faconas = new Group ()

  parede1 = createSprite (20,800,50,1000)
  parede1.visible = false
  
  parede2 = createSprite (9950,800,50,1000)
  parede2.visible = false


  premio = createSprite (jhon.x,-100) 
  premio.addAnimation ("trofeu",trofeu);
  premio.scale = 0.2
}


function draw() {
  background(GRAY); 

  bandit ()

  jhon.collide (obstaculos);

  if (jhon.isTouching (Henry)){
    jhon.destroy ()
    Perdeu();
  }
  
  
  if (faconas.isTouching (Henry)){
    Henry.destroy ()
    premio.velocityY = 5
    premio.x = jhon.x
   
  }

  if (bandidos){
    if (jhon.isTouching (bandidos)){
    jhon.destroy ()
    Perdeu ();
  }
  }
  
  jhon.velocityY += 1
  
  if (keyDown ("SPACE") && direcao == 0 && jhon.y >= 700){
    jhon.velocityY = -20
    jhon.changeAnimation ("jhonPulandoRS");
  }

  if (jhon.collide (chao)){
    if (dAtivado == 0 && direcao == 0){

   jhon.changeAnimation ("jhonParadoRS"); 
  }
  
  if (dAtivado == 0 && direcao == 1){
    jhon.changeAnimation ("jhonParado");
  }

  }

  if (keyDown ("D")){
    jhon.x += 10
    jhon.changeAnimation ("jhonCorrendoRS");
    dAtivado = 1
    direcao = 0
    
  } 
  else {
    dAtivado = 0 
  }
  
  if (keyDown ("A")){
    jhon.x -= 15
    jhon.changeAnimation ("jhonCorrendo");
    dAtivado = 1
    direcao = 1
  }
  
  else {
    dAtivado = 0 
  }
  
  if (keyDown ("SPACE") && direcao == 1 && jhon.y >= 700){
    jhon.velocityY = -20
    jhon.changeAnimation ("jhonPulando",jhonPulando)
  
  }
    
  if (jhon.x>=1000 && jhon.x<=9000){
    camera.position.x = jhon.x
  }
  
  jhon.collide (parede1)
  jhon.collide (parede2)
  
  if (jhon.x>=8500){
    Henry.changeAnimation ("chefao");
  }
  
  if (keyDown ("E") && direcao==0){
    if (frameCount%30==0){
    faquinha = createSprite (jhon.x,jhon.y);
    faquinha.addAnimation ("faquinha",faca);
    faquinha.velocityX = 30
    faquinha.scale = 0.2
    faquinha.lifetime = 30
    faconas.add (faquinha);
  }
  } 
  
  if (keyDown ("E") && direcao==1){
    if (frameCount%10==0){
    faquinha = createSprite (jhon.x,jhon.y);
    faquinha.addAnimation ("faquinha",faca);
    faquinha.velocityX = -30
    faquinha.scale = 0.2
    faquinha.lifetime = 500
    faconas.add (faquinha);
  }
} 
  
if (jhon.isTouching (premio)){
   Venceu ();
    premio.remove()
  }

  destruir ();

  drawSprites();
}

function bandit(){
  if (jhon.x>=500 && jhon.x<=7000){
     if (frameCount%80==0){ 
  ladrao = createSprite(8000,800,50,50);
  ladrao.addAnimation("bandido",bandido)
  ladrao.velocityX = -20 
  ladrao.depth = 20
  ladrao.lifetime = 5000
  bandidos.add (ladrao);
}
}
}
 
function destruir (){
  faconas.overlap (bandidos,function(collector,collected){
    collected.remove ();
  })
}


function criarObstaculos (grupo,numero,imagem,escala){
  for (var i=0;i<numero;i++) {
    var x = random (1000,3000);
    var y = 850
    var sprite = createSprite (x,y);
    sprite.addImage ("sprite",imagem);
    sprite.scale = escala
    grupo.add (sprite);
  }
}
function criarObstaculos2 (grupo,numero,escala){
  for (var i=0;i<numero;i++) {
    carros = Math.round (random(1,3))
    var x = random (3500,6000);
    var y = 850
    var sprite = createSprite (x,y);
    if (carros == 1){
       sprite.addImage ("sprite",carroA);
    }
    if (carros == 2){
      sprite.addImage ("sprite",carroV);
   }
   if (carros == 3){
    sprite.addImage ("sprite",carroC);
 }
   sprite.scale = escala
    grupo.add (sprite);
    }
}

function Venceu (){
  swal ({
    title:"VOCÊ GANHOU",
    text:"Estou orgulhoso ",
    imageUrl:"https://pa1.narvii.com/6447/85a2860f70e87b0f5ab2d528704b6cc48ec91bb1_hq.gif",
    imageSize:"200x200",
    confirmButton:"Vai embora"
  },function (isConfirm){
  if (isConfirm){
    location.reload ()
  }

})
}
function Perdeu (){
  swal ({
    title:"VOCÊ PERDEU",
    text:"Estou desapontado ",
    imageUrl:"https://i.gifer.com/H7VO.gif",
    imageSize:"200x200",
    confirmButton:"Vai embora"
  },function (isConfirm){
  if (isConfirm){
    location.reload ()
  }

})
}
