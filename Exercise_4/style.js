function changeBackground() 
{
    var R = document.getElementById("back_r").value;
    var G = document.getElementById("back_g").value;
    var B = document.getElementById("back_b").value;

    if (R.length === 0)
    {
        R = '0';
    }
    if (G.length === 0)
    {
        G = '0';
    }
    if (B.length === 0 )
    {
        B = '0';    
    }

    var element = document.getElementById("para");
    element.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}

function changeBorder() 
{
    //document.getElementById("para").style.border = "1px solid rgb(255,0,0)";
    var R = document.getElementById("borR").value;
    var G = document.getElementById("borG").value;
    var B = document.getElementById("borB").value;

    var width = document.getElementById("bor_width").value;
    if (R.length === 0)
    {
        R = '0';
    }
    if (G.length === 0)
    {
        G = '0';
    }
    if (B.length === 0)
    {
        B = '0';    
    }
    if (width.length === 0)
    {
        width = 'thin';    
    }

    var element = document.getElementById("para");
    element.style.borderWidth = width;
    element.style.borderColor = 'rgb(' + R + ',' + G + ',' + B + ')';
   // element.style.borderWidth = (width + 'px');
}

function both()
{
    changeBackground();
    changeBorder();
}