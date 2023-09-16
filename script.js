function findSolution(){
    // Expression
}
var o = 0;

function init(){
    var o = 0;
    const keyboard = document.getElementById("keyboard");
    const keyboardValues = ['C','(',')','B','7','8','9','+','4','5','6','-','1','2','3','*','.','0','00','/','%','^','='];
    let keyboardDisplay = "";
    for (let i in keyboardValues){
        if(keyboardValues[i]=="=")
            keyboardDisplay = keyboardDisplay+'<div style="grid-column: span 2;" onclick="keyPress('+"'"+keyboardValues[i]+"'"+')"><span>'+keyboardValues[i]+'</span></div>';
        else
            keyboardDisplay = keyboardDisplay+'<div onclick="keyPress('+"'"+keyboardValues[i]+"'"+')"><span>'+keyboardValues[i]+'</span></div>';
    }
    keyboard.innerHTML=keyboardDisplay;

    

}
function keyPress(key){
    const display = document.getElementsByClassName("display")[0];
    if (key == "B")
        display.value = display.value.slice(0,display.value.length-1);
    else if(key == "C")
        display.value = ""
    else
        display.value += key;
    
}

function changeBackground(){
    const main1 = document.getElementsByClassName("main")[0];
    
    console.log(main1);
    if(o == 0){
        main1.style.background = "black";
        main1.style.color = "white";


        o=1;

    }
    else{
        main1.style.background = "white";
        main1.style.color = "black";

        o=0;

    }
}