console.log('Add validation!');

let form = document.querySelector("#parking-form")
console.log(form);
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("form was submitted");
    const nameField = document.querySelector("#name")
    console.log(nameField.value)
    if (nameField.value.length > 0 )  {
        nameField.parentElement.classList.add("input-invalid");
        console.log(nameField.parentElement);
    }
})
