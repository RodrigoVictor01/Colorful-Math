//Bloco de variáveis
var tela = 1
var xBtn = 400, yBtn = 290, largBtn = 200, altBtn = 50
var imgInicial, imgAlternativas, imgFase1
var xRect = 865, yRect = 635, largRect = 120, altRect = 50
var pontuacao = 0
var gameOver = "Mas não desanime! Você pode tentar outras vezes."

//Variaveis botao voltar
var xBack = 40, yBack = 660, largBack = 50

//Variaveis dos retangulos das alternativas
var xAlt = 90, yAlt = 119, largAlt = 390, altAlt = 182

var mouseClicado = false



function preload(){
  imgInicial = loadImage('IMAGENS/telaInicial.png')
  fase1 = loadImage('IMAGENS/Fase1.png')
  fase2 = loadImage('IMAGENS/Fase2.png')
  fase3 = loadImage('IMAGENS/Fase3.png')
  fase4 = loadImage('IMAGENS/Fase4.png')
  fase5 = loadImage('IMAGENS/Fase5.png')
  //IMAGENS DAS ALTERNATIVAS POSSIVEIS DA FASE 1
  altFase1 = loadImage('IMAGENS/altFase1.png')
  altFase12 = loadImage('IMAGENS/altFase12.png')
  altFase13 = loadImage('IMAGENS/altFase13.png')
  
   //IMAGENS DAS ALTERNATIVAS POSSIVEIS DA FASE 2
  altFase2 = loadImage('IMAGENS/altFase2.png')
  altFase22 = loadImage('IMAGENS/altFase22.png')
  altFase23 = loadImage('IMAGENS/altFase23.png')
  
  //IMAGENS DAS ALTERNATIVAS POSSIVEIS DA FASE 3
  altFase3 = loadImage('IMAGENS/altFase3.png')
  altFase32 = loadImage('IMAGENS/altFase32.png')
  altFase33 = loadImage('IMAGENS/altFase33.png')
  
  //IMAGENS DAS ALTERNATIVAS POSSIVEIS DA FASE 4
  altFase4 = loadImage('IMAGENS/altFase4.png')
  altFase42 = loadImage('IMAGENS/altFase42.png')
  altFase43 = loadImage('IMAGENS/altFase43.png')
  
  
  //IMAGENS DAS ALTERNATIVAS POSSIVEIS DA FASE 5
  altFase5 = loadImage('IMAGENS/altFase5.png')
  altFase52 = loadImage('IMAGENS/altFase52.png')
  altFase53 = loadImage('IMAGENS/altFase53.png')
  
 
  imgInstrucoes = loadImage('IMAGENS/telaDeInstrucoes.png')
  
  imgCreditos = loadImage('IMAGENS/telaDeCreditos1.png')
  
  telaGameOver = loadImage('IMAGENS/gameOver.png')
  
  //VARIÁVEIS DE SONS
  somRespostaErrada = loadSound('Sons/respostaErrada.wav')
  somRespostaCorreta = loadSound('Sons/respostaCorreta.mp3')
  somCliqueBotao = loadSound('Sons/cliqueBotao.mp3')
  vetorFase1 = [altFase1,altFase12,altFase13]
  vetorFase2 = [altFase2,altFase22,altFase23]
  vetorFase3 = [altFase3,altFase32,altFase33]
  vetorFase4 = [altFase4,altFase42,altFase43]
  vetorFase5 = [altFase5,altFase52,altFase53]
  indVetor = geraIndVetor()
}

function setup() {
  createCanvas(1000, 700);
  geraNumerosAleatorios()
}

function draw() {
  background('gray');
  
//Coordenadas do mouse
  coordMouse()
  
  
  
//MENU PRINCIPAL
  if(tela == 1){
    
     image(imgInicial,0,0)
botoes(xBtn,yBtn,largBtn,altBtn,'Jogar',funcBtnComecar)
botoes(xBtn,yBtn+60,largBtn,altBtn,'Instruções',funcBtnInstrucoes)
botoes(xBtn,yBtn+120,largBtn,altBtn,'Créditos',funcBtnCreditos)
    
  //Gerar numeros aleatorios a cada vez que a tela = 1 for inciada, fazendo com que os numeros não se repitam caso o jogador perca ou ganhe o jogo e tenha que iniciá-lo novamente.
    geraNumerosAleatorios()
}
  //Tela de instruções
  else if(tela == 2){
    image(imgInstrucoes,0,0)
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
    btnBack(xBack,yBack,largBack,'Menu',funcBtnVoltar)
    //coordMouse()
  }
  //Tela de créditos
  else if(tela == 3){
    image(imgCreditos,0,0)
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
    
    btnBack(xBack,yBack,largBack,'Menu',funcBtnVoltar)
    
    //coordMouse()
    
  }
  
  //Primeira fase (pergunta)
  else if(tela == 4){
    image(fase1,0,0) 
    
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
    desenhaPergunta(N1+' + '+N2) 
    
    
   
    btnMemorizei(xRect,yRect,largRect,altRect,'Memorizei',funcBtnMemorizei)
    
    desenhaPontuacao()
    

    
    //coordMouse()
    
  }
  
  //Primeira fase (alternativas)
  else if(tela == 5){
    image(vetorFase1[indVetor[0]],0,0)
    if(indVetor[0] == 0){
       desenhaAlternativas(N3,N4,N5,N1+N2) 
      desenhaRetangulosFase1()
    }
    
       else if(indVetor[0] == 1){
     desenhaAlternativas(N1+N2,N4,N5,N3)
    desenhaRetangulosFase12()
      
    }
    
    
    else if(indVetor[0] == 2){
    desenhaAlternativas(N1+N2,N4,N5,N3)
    desenhaRetangulosFase12()
    }
    
    
    desenhaPontuacao()
    
    //Se o botão que leva à fase 5 for clicado, o joga roda um som que imita o clique de um mouse.
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
  }
  
  //Segunda fase (pergunta)
  else if(tela == 6){
   image(fase2,0,0)
    
    if(respostaCorreta){
      somRespostaCorreta.play()
      respostaCorreta = false
    }
    
   desenhaPergunta(N6+ ' + ' +N7)
    
  btnMemorizei(xRect,yRect,largRect,altRect,'Memorizei',funcBtnMemorizei2)
    
  desenhaPontuacao()
     
  }
  
  
  //Segunda fase (alternativas)
  else if(tela == 7){
    image(vetorFase2[indVetor[0]],0,0)
    
    if(indVetor[0] == 0){
       desenhaAlternativas(N6+N7,N4,N5,N8) 
      desenhaRetangulosFase2()
    }
    
       else if(indVetor[0] == 1){
     desenhaAlternativas(N5,N4,N6+N7,N8)
    desenhaRetangulosFase22()
      
    }
    
    
    else if(indVetor[0] == 2){
    desenhaAlternativas(N3,N4,N5,N6+N7)
    desenhaRetangulosFase23()
    }
    
    
    desenhaPontuacao()
    
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
    
  }
  
  //Terceira fase (pergunta)
  else if(tela == 8){
    image(fase3,0,0)
    
    if(respostaCorreta){
      somRespostaCorreta.play()
      respostaCorreta = false
    }
    
    desenhaPergunta(N11+ ' + ' +N12)
    btnMemorizei(xRect,yRect,largRect,altRect,'Memorizei',funcBtnMemorizei3)
    desenhaPontuacao()
  }
  
  //Terceira fase (alternativas)
  else if(tela == 9){
     image(vetorFase3[indVetor[0]],0,0)
    
     if(indVetor[0] == 0){
       desenhaAlternativas(N11+N12,N13,N14,N15) 
      desenhaRetangulosFase3()
    }
    
       else if(indVetor[0] == 1){
     desenhaAlternativas(N13,N11+N12,N14,N15)
    desenhaRetangulosFase32()
      
    }
    
    
    else if(indVetor[0] == 2){
    desenhaAlternativas(N13,N15,N14,N11+N12)
    desenhaRetangulosFase33()
    }
    
    desenhaPontuacao()
    
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
    
  }
  //Quarta fase (pergunta)
  else if(tela == 10){
    image(fase4,0,0)
    
    if(respostaCorreta){
      somRespostaCorreta.play()
      respostaCorreta = false
    }
    
    desenhaPergunta(N16+ ' + ' +N17)
    btnMemorizei(xRect,yRect,largRect,altRect,'Memorizei',funcBtnMemorizei4)
    desenhaPontuacao()
  }
  
  //Quarta fase (alternativas)
  else if(tela == 11){
    image(vetorFase4[indVetor[0]],0,0)
   if(indVetor[0] == 0){
       desenhaAlternativas(N18,N19,N16+N17,N20) 
      desenhaRetangulosFase4()
    }
    
       else if(indVetor[0] == 1){
     desenhaAlternativas(N18,N16+N17,N20,N19)
    desenhaRetangulosFase42()
      
    }
    
    
    else if(indVetor[0] == 2){
    desenhaAlternativas(N18,N19,N20,N16+N17)
    desenhaRetangulosFase43()
    }
    desenhaPontuacao()
      
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
  }
  
  //Quinta fase (pergunta)
  else if(tela == 12){
    image(fase5,0,0)
    if(respostaCorreta){
      somRespostaCorreta.play()
      respostaCorreta = false
    }
    desenhaPergunta(N21+ ' + ' +N22)
    btnMemorizei(xRect,yRect,largRect,altRect,'Memorizei',funcBtnMemorizei5)
    desenhaPontuacao()  
  }
  
  //Quinta fase (alternativas)
  else if(tela == 13){
    image(vetorFase5[indVetor[0]],0,0)
    if(indVetor[0] == 0){
       desenhaAlternativas(N23,N24,N25,N21+N22) 
      desenhaRetangulosFase5()
    }
    
       else if(indVetor[0] == 1){
     desenhaAlternativas(N21+N22,N24,N25,N23)
    desenhaRetangulosFase52()
      
    }
    
    
    else if(indVetor[0] == 2){
    desenhaAlternativas(N23,N24,N21+N22,N25)
    desenhaRetangulosFase53()
    }
    
    
    
    
    
    
    
    
    
    desenhaPontuacao()
    
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
    
  }
  
  
  
  
  //Tela parabéns
  else if(tela == 19){
    image(telaGameOver,0,0)
    if(respostaCorreta){
      somRespostaCorreta.play()
      respostaCorreta = false
    }
    
    var parabens = 'Parabéns! Você conseguiu realizar todas as somas e lembrar de suas respectivas cores. Sua pontuação total foi de ' + pontuacao + ' pontos.'
    
  push()
    stroke('black')
    strokeWeight(2)
    textAlign(CENTER)
    textSize(50)
    textFont('Segoe Print')
    fill('#0072bb')
    textWrap(WORD)
    text(parabens,25,100,975)
  pop()
    
    botoes(xBtn,yBtn+100,largBtn,altBtn,'Menu',funcBtnVoltar)

  }
  
  //Tela de game over
  else if(tela == 20){
    image(telaGameOver,0,0)
    
    push()
    stroke('black')
    strokeWeight(2)
    textAlign(CENTER)
    textSize(64)
    textFont('Segoe Print')
    fill('#0072bb')
    text('Game Over',width/2,200)
    pop()
    
    push()
    stroke('black')
    strokeWeight(1)
    textAlign(CENTER)
    textSize(24)
    textFont('Segoe Print')
    fill('#0072bb')
    text(gameOver,width/2,250)
    pop()
    
    if(respostaErrada){
      somRespostaErrada.play()
      respostaErrada = false
    }
    
    botoes(xBtn,yBtn+60,largBtn+40,altBtn,'Tentar Novamente',funcBtnVoltar)
    
  }
  
  else if(tela == 21){
    image(imgInicial,0,0)
botoes(xBtn,yBtn,largBtn,altBtn,'Jogar',funcBtnComecar)
botoes(xBtn,yBtn+60,largBtn,altBtn,'Instruções',funcBtnInstrucoes)
botoes(xBtn,yBtn+120,largBtn,altBtn,'Créditos',funcBtnCreditos)
    

    geraNumerosAleatorios()
    
    if(cliqueBotao){
      somCliqueBotao.play()
      cliqueBotao = false
    }
  
    
    
  }
  
  mouseClicado = false
}

























//FUNÇÕES - ORGANIZAÇÃO
//
function coordMouse(){
    textSize(20)
  text(`(${mouseX},${mouseY})`,10,20)
  

}
//

//Funções
function colisaoBtn(mouseX,mouseY,xBtn,yBtn,largBtn,altBtn){
  
  colisao = xBtn <= mouseX &&
            xBtn+largBtn >= mouseX &&
            yBtn <= mouseY &&
            yBtn+altBtn >= mouseY
  
  return colisao
}

function colisaoBtnBack(mouseX,mouseY,xBack,yBack,largBack){
  xD = mouseX - xBack; yD = mouseY - yBack
  absD = Math.sqrt(xD*xD + yD*yD)
  
  colisao1 = absD <= largBack/2
  
  return colisao1
  
}

function colisaoBtnRect(mouseX,mouseY,xRect,yRect,largRect,altRect){
         
    colisao2 = xRect <= mouseX &&
               xRect+largRect >= mouseX &&
               yRect <= mouseY &&
               yRect+altRect >= mouseY
  
     return colisao2
}

function colisaoAlt(mouseX,mouseY,xAlt,yAlt,largAlt,altAlt){
  
    colisao3 = xAlt <= mouseX &&
               xAlt+largAlt >= mouseX &&
               yAlt <= mouseY &&
               yAlt+altAlt >= mouseY
                
  return colisao3
}

//

//Funções dos botões
function botoes(xBtn,yBtn,largBtn,altBtn,texto,funcao){
  push()
    strokeWeight(0)
      if(colisaoBtn(mouseX,mouseY,xBtn,yBtn,largBtn,altBtn)){
      fill('#c9c908')
        
      if(mouseClicado == true){
        funcao()
        
      }
}
      else{
    fill('#0072bb')
}
  
    rect(xBtn,yBtn,largBtn,altBtn)
  pop()
  
  
  
  //Texto
 push()
   textSize(24)
   textAlign(CENTER)
   textFont('Segoe Print')
   fill('white')
   text(texto,xBtn+largBtn/2,yBtn+altBtn/2+5) 
 pop()
  
  
}

function btnBack(xBack,yBack,largBack,texto,funcao){
  //Botão voltar
  push()
   strokeWeight(0)
   if(colisaoBtnBack(mouseX,mouseY,xBack,yBack,largBack)){
      fill('#c9c908') 
    if(mouseClicado == true){
      funcao()
    }
  }
  
   else{
    fill('#0072bb')
   }
   ellipse(xBack,yBack,largBack)
  
  pop()
    //Texto
    push()
      fill('white')
      textFont('Segoe Print')
      textSize(14)
      textAlign(CENTER)
      text(texto,xBack,yBack+5) 
    pop()

}

function btnMemorizei(xRect,yRect,largRect,altRect,texto,funcao){
    push()
    if(colisaoBtnRect(mouseX,mouseY,xRect,yRect,largRect,altRect)){
      strokeWeight(0)
      fill('#c9c908')
      if(mouseClicado){
      funcao()
      }
  }
    else{
      strokeWeight(0)
      fill('#0072bb')
    }
      rect(xRect,yRect,largRect,altRect)
    pop()
  
    push()
      fill('white')
      textFont('Segoe Print')
      textSize(14)
      textAlign(CENTER)
      text(texto,xRect+largRect/2,yRect+altRect/2+5)
    
    pop()
    
  
   

  
}

function btnAlt(xAlt,yAlt,largAlt,altAlt,funcao){
  push()
  if(colisaoAlt(mouseX,mouseY,xAlt,yAlt,largAlt,altAlt)){
     stroke('#0000005f')
     strokeWeight(0)
     fill('#ffffff00')  
   if(mouseClicado){
     funcao()
   } 
     }
   else{
     strokeWeight(0)
     fill('#ffffff00')
   }
  
      rect(xAlt,yAlt,largAlt,altAlt)
    pop()
  
}

//
function funcBtnComecar(){tela = 4; cliqueBotao = true}
function funcBtnInstrucoes(){tela = 2; cliqueBotao = true}
function funcBtnCreditos(){tela = 3; cliqueBotao = true}
function funcBtnVoltar(){tela = 21; cliqueBotao = true; pontuacao = 0; indVetor = geraIndVetor()}
function funcBtnMemorizei(){tela = 5; cliqueBotao = true}
function funcBtnMemorizei2(){tela = 7; cliqueBotao = true}
function funcBtnMemorizei3(){tela = 9; cliqueBotao = true}
function funcBtnMemorizei4(){tela = 11; cliqueBotao = true}
function funcBtnMemorizei5(){tela = 13; cliqueBotao = true}


//INICIO DO BLOCO DE CÓDIGOS PARA A LÓGICA DA PRIMEIRA FASE
//Alternativas fase 1/3
function funcBtnAlt1(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4(){tela = 6; pontuacao += 10; respostaCorreta = true}

//Alternativas fase 2/3
function funcBtnAlt12(){tela = 6; pontuacao += 10; respostaCorreta = true}
function funcBtnAlt22(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt32(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt42(){tela = 20; pontuacao = 0; respostaErrada = true}

//Alternativas fase 3/3
function funcBtnAlt13(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt23(){tela = 6; pontuacao += 10; respostaCorreta = true}
function funcBtnAlt33(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt43(){tela = 20; pontuacao = 0; respostaErrada = true}

//Desenha retangulo fase 1
function desenhaRetangulosFase1(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4)
}

function desenhaRetangulosFase12(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt12)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt22)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt32)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt42)
}

function desenhaRetangulosFase13(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt13)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt23)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt33)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt43)
}
//FIM DO BLOCO DE CÓDIGOS PARA A LÓGICA DA PRIMEIRA FASE




//INICIO DO BLOCO DE CÓDIGOS PARA A LÓGICA DA SEGUNDA FASE
//Alternativas fase 2 //(1/3)
function desenhaRetangulosFase2(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q2)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q2)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q2)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q2)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q2(){tela = 8; pontuacao += 15; respostaCorreta = true}
function funcBtnAlt2Q2(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q2(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q2(){tela = 20; pontuacao = 0; respostaErrada = true}

//Alternativas fase 2 //(2/3)
function desenhaRetangulosFase22(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q22)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q22)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q22)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q22)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q22(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q22(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q22(){tela = 8; pontuacao += 15; respostaCorreta = true}
function funcBtnAlt4Q22(){tela = 20; pontuacao = 0; respostaErrada = true}

//Alternativas fase 2 //(3/3)
function desenhaRetangulosFase23(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q23)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q23)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q23)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q23)
  
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q23(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q23(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q23(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q23(){tela = 8; pontuacao += 15; respostaCorreta = true}




//INICIO DO BLOCO DE CÓDIGOS PARA A LÓGICA DA TERCEIRA FASE
//Alternativas fase 2 //(1/3)

function desenhaRetangulosFase3(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q3)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q3)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q3)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q3)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q3(){tela = 10; pontuacao += 20; respostaCorreta = true}
function funcBtnAlt2Q3(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q3(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q3(){tela = 20; pontuacao = 0; respostaErrada = true}


//Alternativas fase 2 //(2/3)
function desenhaRetangulosFase32(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q32)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q32)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q32)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q32)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q32(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q32(){tela = 10; pontuacao += 20; respostaCorreta = true}
function funcBtnAlt3Q32(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q32(){tela = 20; pontuacao = 0; respostaErrada = true}


//Alternativas fase 2 //(3/3)
function desenhaRetangulosFase33(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q33)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q33)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q33)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q33)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q33(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q33(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q33(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q33(){tela = 10; pontuacao += 20; respostaCorreta = true}
//FIM DO BLOCO DE CÓDIGOS PARA A LÓGICA DA TERCEIRA FASE


//INICIO DO BLOCO DE CÓDIGOS PARA A LÓGICA DA QUARTA FASE
//Alternativas fase 4 //(1/3)
function desenhaRetangulosFase4(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q4)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q4)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q4)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q4)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q4(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q4(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q4(){tela = 12; pontuacao += 25; respostaCorreta = true}
function funcBtnAlt4Q4(){tela = 20; pontuacao = 0; respostaErrada = true}

//Alternativas fase 4 //(2/3)
function desenhaRetangulosFase42(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q42)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q42)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q42)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q42)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q42(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q42(){tela = 12; pontuacao += 25; respostaCorreta = true}
function funcBtnAlt3Q42(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q42(){tela = 20; pontuacao = 0; respostaErrada = true}


//Alternativas fase 4 //(3/3)
function desenhaRetangulosFase43(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q43)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q43)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q43)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q43)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q43(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q43(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q43(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q43(){tela = 12; pontuacao += 25; respostaCorreta = true}
//FIM DO BLOCO DE CÓDIGOS PARA A LÓGICA DA TERCEIRA FASE


//INICIO DO BLOCO DE CÓDIGOS PARA A LÓGICA DA QUINTA FASE
//Alternativas fase 5 //(1/3)
function desenhaRetangulosFase5(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q5)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q5)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q5)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q5)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q5(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q5(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q5(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q5(){tela = 19; pontuacao += 30; respostaCorreta = true}

//Alternativas fase 5 //(2/3)
function desenhaRetangulosFase52(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q52)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q52)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q52)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q52)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q52(){tela = 19; pontuacao += 30; respostaCorreta = true}
function funcBtnAlt2Q52(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q52(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt4Q52(){tela = 20; pontuacao = 0; respostaErrada = true}

//Alternativas fase 5 //(3/3)
function desenhaRetangulosFase53(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q53)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q53)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q53)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q53)
}

//Verifica se o retangulo selecionado corresponde à resposta correta
function funcBtnAlt1Q53(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt2Q53(){tela = 20; pontuacao = 0; respostaErrada = true}
function funcBtnAlt3Q53(){tela = 19; pontuacao += 30; respostaCorreta = true}
function funcBtnAlt4Q53(){tela = 20; pontuacao = 0; respostaErrada = true}
//FIM DO BLOCO DE CÓDIGOS PARA A LÓGICA DA QUINTA FASE








function desenhaPergunta(texto){ 
  push()
     textAlign(CENTER)
     textFont('Segoe Print')
     textSize(60)
     fill('white')
     strokeWeight(2)
     stroke('black')
     text(texto, width/2, height/2)
    pop()
  
}

function desenhaAlternativas(texto1,texto2,texto3,texto4){
  
  push()
    textAlign(CENTER)
    textFont('Segoe Print')
    textSize(60)
    fill('white')
    strokeWeight(2)
    stroke('black')
    text(texto1,xAlt+largAlt/2, yAlt+altAlt/2)
    pop()
    
    push()
    textAlign(CENTER)
    textFont('Segoe Print')
    textSize(60)
    fill('white')
    strokeWeight(2)
    stroke('black')
    text(texto2,xAlt+430+largAlt/2, yAlt+altAlt/2)
    pop()
    
    push()
    textAlign(CENTER)
    textFont('Segoe Print')
    textSize(60)
    fill('white')
    strokeWeight(2)
    stroke('black')
    text(texto3,xAlt+largAlt/2, yAlt+280+altAlt/2)
    pop()
    
        push()
    textAlign(CENTER)
    textFont('Segoe Print')
    textSize(60)
    fill('white')
    strokeWeight(2)
    stroke('black')
    text(texto4,xAlt+430+largAlt/2, yAlt+280+altAlt/2)
    pop()
}









/*function desenhaRetangulosFase5(){
btnAlt(xAlt,yAlt,largAlt,altAlt,funcBtnAlt1Q5)
    btnAlt(xAlt+430,yAlt,largAlt,altAlt,funcBtnAlt2Q5)
    btnAlt(xAlt,yAlt+280,largAlt,altAlt,funcBtnAlt3Q5)
    btnAlt(xAlt+430,yAlt+280,largAlt,altAlt,funcBtnAlt4Q5)
}*/

function desenhaPontuacao(){
  push()
     textFont('Segoe Print')
     textSize(30)
     fill('#0072bb')
     strokeWeight(1)
     stroke('black')
  text('Pontuação: ' + pontuacao,10,35)
  
  pop()
}

function mouseReleased(){
 mouseClicado = true
  
  
  
  
}



function geraIndVetor(){
  
  indVetor = [];
  
  for(i=0;i<3;i++){
   
    
    do
    { 
      var alt = parseInt(random(3))
      var existe = false
      for(j=0;j<indVetor.length;j++){
        if(indVetor[j]==alt){existe = true}
      }
      
      if(existe==false){
        indVetor.push(alt)
      }
    } while(existe == true)
  }
  return indVetor
}

  
  function geraNumerosAleatorios(){
    
    //Primeira fase  
  N1 = parseInt(random(1,10))
  N2 = parseInt(random(1,10))
  N3 = parseInt(random(1,25))
  N4 = parseInt(random(1,20))
  N5 = parseInt(random(1,25))
  //Segunda fase
  N6 = parseInt(random(1,10))
  N7 = parseInt(random(1,10))
  N8 = parseInt(random(1,20))
  N9 = parseInt(random(1,25))
  N10 = parseInt(random(1,20))
  //Terceira fase
  N11 = parseInt(random(1,10))
  N12 = parseInt(random(1,10))
  N13 = parseInt(random(1,20))
  N14 = parseInt(random(1,25))
  N15 = parseInt(random(1,20))
  //Quarta fase
  N16 = parseInt(random(1,10))
  N17 = parseInt(random(1,10))
  N18 = parseInt(random(1,20))
  N19 = parseInt(random(1,20))
  N20 = parseInt(random(1,25))
  //Quinta fase
  N21 = parseInt(random(1,10))
  N22 = parseInt(random(1,10))
  N23 = parseInt(random(1,25))
  N24 = parseInt(random(1,20))
  N25 = parseInt(random(1,20))
    
  }




