const el=document.querySelector(".element");
el.animate([
    {transform:"translateX(0px)"},
    {transform:"translateX(200px)"}
],
{
    duration:1000,
    iterations:Infinity,
    direction:"alternate"
}
)