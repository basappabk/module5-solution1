var Arrays = ["John","Jose","Helon","Mellon"];

function print(Names){
  
    for(var i=0; i<Names.length; i++){
        
        if(Names[i].charAt(0)=='J' || Names[i].charAt(0)=='j')
        {
            console.log("Goodbye " + Names[i]);
        }
        else{
            console.log("Hello " + Names[i])
        }
    }
}

print(Arrays);
