// All Reusable Functions
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const numberInputvalue = parseFloat(inputValue);
    return numberInputvalue;
}

// The Event Lisnter 

document.getElementById('btn-flood-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    const givenDoantion = getInputValue("noakhali-donate-money");
    const  noakhaliBalance = document.getElementById('flood-noakhali-balance').innerText;
    const numberOfNoakhaliBalance = getInputValue(noakhaliBalance);
    const totalNoakhaliDoantion = noakhaliBalance + numberOfNoakhaliBalance;
    document.getElementById('flood-noakhali-balance').innerText = totalNoakhaliDoantion;

})