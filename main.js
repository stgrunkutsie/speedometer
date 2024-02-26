function massiveCreate()
{
    var notches = document.getElementsByClassName("speedometer-notch");
    var i = 1;
    for (const index of notches)
    {
        index.classList.add(`notch${i}`);
        i++;
    }
}

function setSpeed(speed)
{
    
}