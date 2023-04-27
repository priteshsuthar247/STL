function form()
{
    var a=document.f1.nm.value;   
    var b=document.f1.ph.value;    
    var c=document.f1.bd.value;    
    var d=document.f1.pn.value;
    var mailformat = /\S+@\S+\.\S+/;
    if (a=="" || !/^[a-zA-Z]*$/g.test(a))
    {
      alert("Enter Name");
      document.f1.nm.focus(); 
      return false;
    }
    if (b==""||isNaN(b) ||b.length>10 ||b.length<10)
    {
      alert("Enter Your Phone Number");
      document.f1.ph.focus();
      return false; 
    }
    if (c=="")
    {
      alert("Enter Birth Date");
      document.f1.bd.focus();
      return false;  
    }
    if (d==""||d.length>6||d.length<6)
    {
      alert("Enter Pincode");
      document.f1.pn.focus();
      return false;  
    }
    if(email.value.match(mailformat))
    {
      document.f1.email.focus();
      return true;
    }
    else
    {
    alert("Invalid email address.");
    document.f1.email.focus();
    return false;
    }
}
function CheckPassword(inputtxt)
{
  var passw = /^(?=.*[A-Z]).{8,12}$/;
  if(pwd.value.match(passw))
  { 
    document.f1.pwd.focus();
    return true;
  }
  else
  { 
    alert('Password must be 8 to 12 characters long with first letter being capital');
    document.f1.pwd.focus();
    return false;
  }
}