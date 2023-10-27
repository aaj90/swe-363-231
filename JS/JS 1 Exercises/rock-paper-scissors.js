
document.getElementById("rock").addEventListener("click", function(){play(1);});
document.getElementById("paper").addEventListener("click", function(){play(2);});
document.getElementById("scissors").addEventListener("click", function(){play(3);});


function addImg(c,player){
    
    if(player == "p1"){
        if(c==1){
            let code = "<img id=\"p1\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/rock.png?raw=true\" alt=\"rock\">";
            console.log(code);
            document.getElementById("Hands").insertAdjacentHTML("afterbegin",code);
            }else if(c == 2){
                let code = "<img id=\"p1\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/paper.png?raw=true\" alt=\"paper\">";
                console.log(code);
                document.getElementById("Hands").insertAdjacentHTML("afterbegin",code);
            }else{
                let code = "<img id=\"p1\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/scissors.png?raw=true\" alt=\"scissors\">";
                console.log(code);
                document.getElementById("Hands").insertAdjacentHTML("afterbegin",code);
            }
    }

    if(player == "p2"){
        if(c==1){
            let code = "<img id=\"p2\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/rock.png?raw=true\" alt=\"rock\">";
            console.log(code);
            document.getElementById("Hands").insertAdjacentHTML("afterbegin",code);
            }else if(c == 2){
                let code = "<img id=\"p2\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/paper.png?raw=true\" alt=\"paper\">";
                console.log(code);
                document.getElementById("Hands").insertAdjacentHTML("afterbegin",code);
            }else{
                let code = "<img id=\"p2\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/scissors.png?raw=true\" alt=\"scissors\">";
                console.log(code);
                document.getElementById("Hands").insertAdjacentHTML("afterbegin",code);
            }
    }


    
   
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function play(p1){
    console.log(p1);
    var p2 = randomIntFromInterval(1,3);
    
    if ((p1==1 && p2==2) || (p1==2 && p2==3) ||(p1==3 && p2==1)){
        addImg(p2,"p2");
        addImg(p1,"p1");
        
        let d = "<img id=\"winOrLose\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/L.png?raw=true\" alt=\"Loser\">";
        document.getElementById("Hands").insertAdjacentHTML("afterbegin",d);
    }else if((p1==1 && p2==3) || (p1==2 && p2==1) ||(p1==3 && p2==2)){
        addImg(p2,"p2");
        addImg(p1,"p1");
        
        let d = "<img id=\"winOrLose\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/W.png?raw=true\" alt=\"Winner\">";
        document.getElementById("Hands").insertAdjacentHTML("afterbegin",d);
    }else{
        addImg(p2,"p2");
        addImg(p1,"p1");
        
        let d = "<img id=\"winOrLose\"  src=\"https://github.com/aaj90/swe-363-231/blob/main/JS/Pics/D.png?raw=true\" alt=\"Draw\">";
        document.getElementById("Hands").insertAdjacentHTML("afterbegin",d);
    }

    

};

