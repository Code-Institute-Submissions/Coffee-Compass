const Review = () => {
    let name = document.querySelector('#name');
    let order = document.querySelector("#order");
    let rating = document.querySelector("#rating");
    let tContent = document.querySelector(".table-content");
        //referenced code from stack overflow
        document.querySelector('form#input-form').addEventListener('submit', function (e) {

        //prevent the normal submission of the form
        e.preventDefault();
        tContent.innerHTML=`<td>${name.value}</td><td>${order.value}</td><td>${rating.value}</td>`
        
        

       
    });
    


}
Review()