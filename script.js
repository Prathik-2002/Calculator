function findSolution(expression){
    let sol;
    for(let i=0;i<expression.length;i++){
        if(i!="+" ||i!="-" ||i!="*"||i!="/"){

        }
    }
}

function prec(oprt){
 if(oprt=="(")
 return 4;
else if(oprt=="^")
return 3
 else if(oprt=="*"||oprt=="/")
 return 2;
 if(oprt=="+"||oprt=="-")
 return 1;
 if(oprt==")")
 return 0;
}

