let select = document.getElementById("colorSelect");
let button = document.querySelector("input[type='button']");

button.addEventListener("click", function (){
    let selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
        selectedOption.remove();
    }
});
