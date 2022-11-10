function Validate()
{
    var initialPass = document.getElementById("first").value; 
    var secondPass = document.getElementById("second").value; 
    if(initialPass != secondPass)
    {
        alert("Passwords Don't Match!");
    }
    else if(initialPass.length < 8) 
    {
        alert("Passwords Length less than 8!");
    }
    else
    {
        alert("Passwords Match!");
    }

}

function changeType()
{
    let typeOne = document.getElementById("first"); 
    let typeTwo = document.getElementById("second"); 
    if(typeOne.type == 'text')
    {
        typeOne.type = 'password';
        typeTwo.type = 'password';
    }
    else
    {
        typeOne.type = 'text';
        typeTwo.type = 'text';
    }

}