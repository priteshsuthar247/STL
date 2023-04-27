var i, j, s;
for(i=1;i<=5;i++) 
{ 
 for(j=i;j<5;j++) 
 { 
 document.write("&nbsp &nbsp"); 
 } 
 for(s=1;s<=i;s++) 
 { 
 if((i+s)%2==0) 
 { 
 document.write("&nbsp 1 &nbsp"); 
 } 
else 
 { 
 document.write("&nbsp 0 &nbsp"); 
 }
} 
document.write("<br>"); 
}