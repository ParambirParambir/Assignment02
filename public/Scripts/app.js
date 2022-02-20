/* app.js
Students's name: Parambir Singh
StudentID: 301175171
Date: 12 Feb, 2021
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