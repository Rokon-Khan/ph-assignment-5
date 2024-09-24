/* All Reusable Functions*/

// Input Value Function
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const numberInputvalue = parseFloat(inputValue);
    // if ( isNaN(numberInputvalue) || inputValue<1 || numberInputvalue > mainBalance ) {
    //    alert("Your Donation is Invalid!!!");
    //    return;
    // } 
    return numberInputvalue;
}

// Text Value Function

function getTextValue (id) {
    const textValue = document.getElementById(id).innerText;
    const numberTextValue = parseFloat(textValue);
    return numberTextValue;
}

// Global Variable Declare 
const mainBalance = getTextValue('main-balance');
// console.log(mainBalance);

// The Event Lisnter-1 for NoaKhali Flood Donation

document.getElementById('btn-flood-noakhali')
    .addEventListener('click', function(event){
    event.preventDefault();

    const inputBalance = getInputValue('noakhali-input-money');
    const remainingBalance = getTextValue('flood-noakhali-balance');
    // Input Validation Check
    if ( isNaN(inputBalance) || inputBalance<1 || inputBalance > mainBalance ) {
        alert("Your Donation is Invalid!!!");
        return;
     } 
    
    const totalNoakhaliDoantion = inputBalance + remainingBalance;
    const remainingMainBalance = mainBalance - inputBalance;
    document.getElementById('flood-noakhali-balance').innerText = totalNoakhaliDoantion;
    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('noakhali-input-money').value = "";
});
// The Event Lisnter-2 for Feni Flood  Donation

document.getElementById('btn-flood-feni')
    .addEventListener('click', function(event){
    event.preventDefault();
    const inputBalance = getInputValue('feni-input-money');
    const remainingBalance = getTextValue('flood-feni-balance');
    
    // Input Validation Check
    if ( isNaN(inputBalance) || inputBalance<1 || inputBalance > mainBalance ) {
        alert("Your Donation is Invalid!!!");
        return;
     } 
    const totalFeniDoantion = inputBalance + remainingBalance;
    const remainingMainBalance = mainBalance - inputBalance;
    document.getElementById('flood-feni-balance').innerText = totalFeniDoantion;
    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('feni-input-money').value = "";
});
// The Event Lisnter-3 for Quota Movement Injured Doantion

document.getElementById('btn-quota-movement')
    .addEventListener('click', function(event){
    event.preventDefault();
    const inputBalance = getInputValue('quota-input-money');
    const remainingBalance = getTextValue('quota-balance');
    // Input Validations
    if ( isNaN(inputBalance) || inputBalance<1 || inputBalance > mainBalance ) {
        alert("Your Donation is Invalid!!!");
        return;
     } 
    const totalQuotaDoantion = inputBalance + remainingBalance;
    const remainingMainBalance = mainBalance - inputBalance;
    document.getElementById('quota-balance').innerText = totalQuotaDoantion;
    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('quota-input-money').value = "";
});
    

