let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons_container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secondPlayer

// Contador de jogadas
let player1 = 0
let player2 = 0

// Adicionando o evento de click nos boxes do game
for(let box of boxes){

    // Quando alguém clicar na caixa
    box.addEventListener("click", () => {
        
        let turn = checkTurn(player1, player2)

        // Caso o elemento já possua um filho ele não entrará
        if(box.childNodes.length == 0){
            let cloneTurn = turn.cloneNode(true)

            box.appendChild(cloneTurn)

            // Computar a jogada
            if(player1 == player2){
                player1++
                if(secondPlayer == "ai_player"){
                    computerPlay()

                    // O player1 sempre jogar quando tiver contra a IA
                    player2++
                }
            }else {
                player2++
            }

            // Checa quem venceu
            checkWinCondition()

        }
    })
}

// Evento para saber se é 2 players ou IA
for(let btn of buttons){

    btn.addEventListener("click", function(){
        secondPlayer = this.getAttribute("id")

        for(let btn of buttons){
            btn.style.display = "none"
        }

        setTimeout(function(){
            let container = document.querySelector("#container")
            container.classList.remove("hide")
        }, 500)
    })

}

// Vê quem vai jogar
function checkTurn(player1, player2){
    if(player1 == player2){
        // x
        turn = x
    }else {
        // o
        turn = o
    }

    return turn
}

// Vê quem venceu
function checkWinCondition(){
    let b1 = document.getElementById('block_1')
    let b2 = document.getElementById('block_2')
    let b3 = document.getElementById('block_3')
    let b4 = document.getElementById('block_4')
    let b5 = document.getElementById('block_5')
    let b6 = document.getElementById('block_6')
    let b7 = document.getElementById('block_7')
    let b8 = document.getElementById('block_8')
    let b9 = document.getElementById('block_9')

    // Horizontal 1ª Linha
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if(b1Child == 'x' && b2Child == 'x'  && b3Child == 'x'){
            // x
            declareWinner('x')
        } else if(b1Child == 'o' && b2Child == 'o'  && b3Child == 'o'){
            // o
            declareWinner('o')
        }

    }

    // Horizontal 2ª Linha
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if(b4Child == 'x' && b5Child == 'x'  && b6Child == 'x'){
            // x
            declareWinner('x')
        } else if(b4Child == 'o' && b5Child == 'o'  && b6Child == 'o'){
            // o
            declareWinner('o')
        }
    }

    // Horizontal 3ª Linha
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b7Child == 'x' && b8Child == 'x'  && b9Child == 'x'){
            // x
            declareWinner('x')
        } else if(b7Child == 'o' && b8Child == 'o'  && b9Child == 'o'){
            // o
            declareWinner('o')
        }
    }

    // Vertical 1ª Coluna
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b1Child == 'x' && b4Child == 'x'  && b7Child == 'x'){
            // x
            declareWinner('x')
        } else if(b1Child == 'o' && b4Child == 'o'  && b7Child == 'o'){
            // o
            declareWinner('o')
        }
    }

    // Vertical 2ª Coluna
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if(b2Child == 'x' && b5Child == 'x'  && b8Child == 'x'){
            // x
            declareWinner('x')
        } else if(b2Child == 'o' && b5Child == 'o'  && b8Child == 'o'){
            // o
            declareWinner('o')
        }
    }

    // Vertical 3ª Coluna
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b3Child == 'x' && b6Child == 'x'  && b9Child == 'x'){
            // x
            declareWinner('x')
        } else if(b3Child == 'o' && b6Child == 'o'  && b9Child == 'o'){
            // o
            declareWinner('o')
        }
    }

    // Diagonal 1ª Diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b1Child == 'x' && b5Child == 'x'  && b9Child == 'x'){
            // x
            declareWinner('x')
        } else if(b1Child == 'o' && b5Child == 'o'  && b9Child == 'o'){
            // o
            declareWinner('o')
        }
    }

    // Diagonal 2ª Diagonal
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b3Child == 'x' && b5Child == 'x'  && b7Child == 'x'){
            // x
            declareWinner('x')
        } else if(b3Child == 'o' && b5Child == 'o'  && b7Child == 'o'){
            // o
            declareWinner('o')
        }
    }

    // Deu velha
    let counter = 0
    for(let box of boxes){
        if(box.childNodes[0] != undefined){
            counter++
        }
    }

    if(counter == 9){
        declareWinner("Deu velha!")
    }
}

// Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){

    let scoreBoardX = document.querySelector("#scoreboard_1")
    let scoreBoardO = document.querySelector("#scoreboard_2")
    let msg = ''

    if(winner == 'x'){
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        msg = "O jogador 1 venceu!"
    }else if(winner == 'o'){
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1
        msg = "O jogador 2 venceu!"
    }else {
        msg = "Deu velha"
    }

    // Exibe mensagem
    messageText.innerHTML = msg
    messageContainer.classList.remove("hide")

    // Esconde mensagem
    setTimeout(function() {
        messageContainer.classList.add("hide")
    }, 3000)

    // Zerar as jogadas
    player1 = 0
    player2 = 0

    // Limpar tabuleiro
    let boxesToRemove = document.querySelectorAll(".box div")
    for(let box of boxesToRemove){
        box.parentNode.removeChild(box)
    }

}

// Jogada da IA
function computerPlay(){
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0

    for(let box of boxes){
        let randomNumber = Math.floor(Math.random() * 5)

        // Só preencher se tiver vazio o filho
        if(box.childNodes[0] == undefined){
            if(randomNumber <= 1){
                box.appendChild(cloneO)
                counter++
                break
            }
        // Checagem de quantas estão preenchidas
        }else {
            filled++
        }
    
    }

    if(counter == 0 && filled < 9){
        computerPlay()
    }

}