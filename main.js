const numberOfNotches = 18;

function massiveCreate(){
    let container = document.getElementsByClassName("speedometer-container")[0];   
    for(let i = 1; i<= numberOfNotches+1 ;i++)
    {
        let div = document.createElement('div');
        div.classList.add("speedometer-notch");
        div.classList.add("notch" + i);
        container.appendChild(div);
    }
}

function setSpeed_GIGACHAD(speed) {
    const arrowWrapper = document.querySelector('.arrow-wrapper');
    const speedNumber = document.querySelector('.speedometer-number');
    const notches = document.querySelectorAll('.speedometer-notch');

    arrowWrapper.style.transform = `rotate(${speed}deg)`; 

    if (speed == 30)
    {
        for (let i = 0; i < 4; i++)
        {
            notches[i].classList.add("active");
        }
        for (let i = 4; i < 19; i++)
        {
            notches[i].classList.remove("active");
        }
        speedNumber.innerHTML = speed + "km/h";
    }
    else if (speed == 90)
    {
        for (let i = 0; i < 10; i++)
        {
            notches[i].classList.add("active");
        }
        for (let i = 10; i < 19; i++)
        {
            notches[i].classList.remove("active");
        }
        speedNumber.innerHTML = speed + "km/h";
    }
    else if (speed == 180)
    {
        for (let i = 0; i < 19; i++)
        {
            notches[i].classList.add("active");
        }
        speedNumber.innerHTML = speed + "km/h";
    }
    else
    {
        for (let i = 0; i < 19; i++)
        {
            notches[i].classList.remove("active");
        }
        speedNumber.innerHTML = speed + "km/h";
    }
}