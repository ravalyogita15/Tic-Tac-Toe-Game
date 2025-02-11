let boxes = document.querySelectorAll("#box");
let reset = document.getElementById("reset");
let winnerSituation = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let winnerPlayer = document.getElementById("winnerPlayer");
let winnerPart = document.getElementById("winnerPart");
// For click button
let count = 0;
let trueX = "Xplayer";
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(trueX === "Xplayer"){
            trueX = "Oplayer";
            box.innerHTML = "X";
            box.style.color = "#F9E8C9"
        }
        else{
            trueX = "Xplayer";
            box.innerHTML = "O";
            box.style.color = "#543A14"
        }
        box.disabled = true;
        let isWinner = winner();
        if(count === 9 && !isWinner){
            setTimeout(() => {
                for(let box of boxes){
                    drawMatch.classList.remove("drawHide");
                    box.classList.add("hideButtons");
                }
            }, 500);
        }
    });
});
// For winner
const winner = () => {
    for(let situation of winnerSituation){
        let situation1 = boxes[situation[0]].innerHTML;
        let situation2 = boxes[situation[1]].innerHTML;
        let situation3 = boxes[situation[2]].innerHTML;

        if(situation1 !== "" && situation2 !== "" && situation3 !== ""){
            if(situation1 === situation2 && situation2 === situation3){
                boxes[situation[0]].style.backgroundColor = "#543A14F";
                boxes[situation[1]].style.backgroundColor = "#543A14";
                boxes[situation[2]].style.backgroundColor = "#543A14";
                setTimeout(() => {
                    winnerPart.classList.remove("hide");
                    winnerPlayer.innerHTML = situation1;
                    for(let box of boxes){
                        box.classList.add("hideButtons");
                    }
                }, 500);
                disableOtherButton();
                return true;
            }
       }
    }
}
// For disable Buttons
const disableOtherButton = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
// For Reset Buttons
const resetButton = () => {
    trueX = "Xplayer";
    count = 0;
    for(let box of boxes){
        box.innerHTML = "";
        box.disabled = false;
        box.classList.remove("hideButtons")
        winnerPart.classList.add("hide");
        drawMatch.classList.add("drawHide");
        box.style.backgroundColor = "#543A14";
    }
}
reset.addEventListener("click", resetButton);