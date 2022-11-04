function Validate()
{
    var initialPass = document.getElementById("first"); 
    var secondPass = document.getElementById("second"); 
    if(initialPass != secondPass)
    {
        alert("Passwords Don't Match!")
    }
    else if(initialPass.length < 8) 
    {
        alert("Passwords Length less than 8!")
    }
    else
    {
        alert("Passwords Match!")
    }

}