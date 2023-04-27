function code(event)
{
    let unicode=event.which;
    document.getElementById("code").innerHTML=unicode;
}
function vowel(event)
{
    let x=event.key;
    if(x=="a" || x=="A" || x=="e" || x=="E" ||x=="i" || x=="I" ||x=="o" || x=="O" ||x=="u" || x=="U" )
    {
        document.getElementById("vowel").innerHTML="Entered Key is vowel";
    }
    else
    {
        document.getElementById("vowel").innerHTML="Not a Vowel";
    }
}
let a=document.getElementById("btn");
a.addEventListener("click",function onClick(event)
{
    document.body.style.background='red';
    event.target.style.color='black'
}
)