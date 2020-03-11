window.onload=function()
{
    var number=document.getElementById('numbers');
    var clear=document.getElementById('clear');
    var answer=document.getElementById('answer');


   
    number.addEventListener('click', function(e){
        if(e.target.nodeName ==='LI'){

            var v=e.target.innerHTML;
            if(v==="="){
                try{
                answer.innerHTML=eval(answer.innerHTML);
            }catch(e)
            {
                answer.innerHTML=e.message;
                console.log(e.message);
            }
        }
            else{
            answer.innerHTML+=v;
        }
    }
    });
    
    clear.addEventListener('click',function(){
        answer.innerHTML="";
    });
}