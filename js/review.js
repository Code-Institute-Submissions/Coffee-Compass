const Review = () => {
    let name = document.querySelector('#name');
    let order = document.querySelector("#order");
    let rating = document.querySelector("#rating")
        //referenced code from stack overflow
        document.querySelector('form#input-form').addEventListener('submit', function (e) {

        //prevent the normal submission of the form
        e.preventDefault();

        console.log(name.value,order.value,rating.value);
        

       
    });
    let name = ""


}
Review()