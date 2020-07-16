var num = [0];

function change(num,cond){

     sel=document.getElementById("PortaNum");
     elem=document.getElementsByClassName("PortDiv");
 
     if (cond === true){
          num[0]--; 
          if(num[0] == -1){
               num[0] = elem.length - 1;
          }
     }

     else if(cond === false){
          num[0]++;
		if(num[0] == elem.length){
			num[0] = 0;
          }    
     }

    for(i = 0; i < elem.length; i++){
         elem[i].style.display="none";
    }

    elem[num[0]].style.display="block";
    sel.innerHTML = (num[0]+1) + "/" + elem.length;
}


