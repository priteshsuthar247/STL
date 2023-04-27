// let a,b,c,i,n=0;
// a=prompt('Enter a string');
// b=prompt('Search');
// c=a.split('');
// for(i=0;i<c.length;i++){
//     if(c[i]==b){
//         n=1;
//         break;
//     }
// }
// if(n==1){
//     alert(`Found ${b} at ${i+1} location's`);
// }
// else{
//     alert(`Didn't found ${b} `);
// }
function search()
{
    var x = 0, y=0;
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return ""+word+" was found "+x+" times.";
}
text=prompt('Enter a string');
word=prompt('Search a word');
alert(search());


