let imagePointer = document.querySelector('img');
let buttonPointer = document.querySelector('button');
let h1Pointer = document.querySelector('h1');

if(!localStorage.getItem('name'))
{
     setUserName();
}
else
{
   let storedName = localStorage.getItem('name');
   h1Pointer.textContent = 'bible verses for, ' + storedName;
} 

function setUserName()
{

   let userName = prompt('Please enter your name');
   if(!userName)
   {
        setUserName();
   }
   else
   {
     localStorage.setItem('name', userName);
     h1Pointer.textContent - 'bible verses for, ' + userName;  
  }
   
}

buttonPointer.onclick = function()
{
     setUserName();
}

imagePointer.onclick = function()
{
    let mySrc = imagePointer.getAttribute('src');
    if(mySrc === 'plentyflowers.jfif')
    {
         imagePointer.setAttribute('src', 'purpleflowers.jfif');
    }
    else
    {
         imagePointer.setAttribute('src', 'plentyflowers.jfif');
    }

} 

