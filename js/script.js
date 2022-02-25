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
            }else {
                player2++
            }
        }
    })
}

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