let words=[
    {
        "inputs":4,
        "category": "I have teeth but can’t eat. What am I?",
        "word": "Comb"
    },
    {
        "inputs": 4,
        "category": "What kind of tree can you carry in your hand",
        "word": "Palm"
    },

    {
        "inputs": 4,
        "category": "What can one catch that is not thrown?",
        "word": "Cold"
    },
    
    {
        "inputs": 6,
        "category": "The first modern Olympic Games were held in which country?",
        "word": "Greece"
    },
    
    {
        "inputs": 8,
        "category": "What starts with “e” and ends with “e” but only has one letter in it?",
        "word": "Envelope"
    },

    {
        "inputs": 12,
        "category": "What can you hold without touching it at all?",
        "word": "Conversation"
    },

    {
        "inputs": 5,
        "category": "What is the name of the only country starting with the letter ‘Y’?",
        "word": "Yemen"
    },

    {
        "inputs": 6,
        "category": "What’s full of holes but can still hold liquid?",
        "word": "Sponge"
    },

    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France"
    },

    {
        "inputs": 11,
        "category": "What has four eyes but can’t see?",
        "word": "Mississippi"
    },

]


$(document).ready(function () {
    game()
})

function game() {

    const randomWord=words[Math.floor(Math.random()*words.length)]

    $("#blanks").empty()

    for(i=0;i<randomWord.inputs;i++){
        let input_html=`<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    $("#hint").html(randomWord.category)

    var gameOver = false;

    //fill the blanks only when the character is crct
    $(".clickable").click(function () {
        var correctGuess = false;

        //getting the id of the clicked button
        let id = $(this).attr("id")

        var life = parseInt($("#life").text())

        //looping through all the letters in the word
        for(var i=0;i<randomWord.word.length;i++){
            //check whether the character matches the id of button
            if(randomWord.word.charAt(i).toLowerCase()==id){
                //check life>0 & blank is empty/filled
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    //fill blanks
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("You Win!!")
                        correctGuess = true;
                        gameOver=true
                    }
                }
            }
        }

        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life===0) {
            $("#result").text("You Lost!!")
            $("#correctAns").text(`Correct Answer: ${randomWord.word}`)
        }
    

    })
}