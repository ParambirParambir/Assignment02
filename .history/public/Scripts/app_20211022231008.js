/* app.js
Students's name: Arshpreet Singh
StudentID: 301174738
Date: 22 October, 2021
*/

/*IIFE*/

(function()
{
    function Start()
    {
        console.log("App started...");

        let deleteButtons=document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();