function function1(str) 
{
    const arr = str.split('');
    const revarr = arr.reverse();
    const revstr = revarr.join('');
    if(str == revstr) 
    {
        alert('String is a palindrome');
    }
    else 
    {
        alert('String is not a palindrome');
    }
}
const str = prompt('Enter a string: ');
function1(str);