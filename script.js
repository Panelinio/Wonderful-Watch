let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function time()
{
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(time, 1);

let arrow_l = document.getElementById('arrow_l')
let arrow_r = document.getElementById('arrow_r')
let text = document.getElementById('text')

arrow_l.addEventListener('click',function()
{
    document.body.style.background = '#171717';
    text.style.color = '#F2F2F2';
});

arrow_r.addEventListener('click',function()
{
    document.body.style.background =  '#F2F2F2';
    text.style.color = '#171717';
});