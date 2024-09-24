/* All Reusable Functions*/

// Input Value Function
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const numberInputvalue = parseFloat(inputValue);
    return numberInputvalue;
}

// Text Value Function

function getTextValue (id) {
    const textValue = document.getElementById(id).innerText;
    const numberTextValue = parseFloat(textValue);
    return numberTextValue;
}

// Show Main Donation and History Section function 

function showAnySectionbyId(id) {
    document.getElementById('noakhali-donate-Section').classList.add('hidden');
    document.getElementById('feni-donate-Section').classList.add('hidden');
    document.getElementById('quota-donate-Section').classList.add('hidden');
    document.getElementById('btn-history').classList.add('bg-primary');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
    
}

// Donations Button Event Listner
document.getElementById('btn-donataion').addEventListener('click', function(){
    document.getElementById('noakhali-donate-Section').classList.remove('hidden');
    document.getElementById('feni-donate-Section').classList.remove('hidden');
    document.getElementById('quota-donate-Section').classList.remove('hidden');
    document.getElementById('section-history').classList.add('hidden');
    document.getElementById('btn-history').classList.remove('bg-primary');
    document.getElementById('btn-donataion').classList.add('bg-primary');
});

// History Button Event Listner
document.getElementById('btn-history').addEventListener('click', function(){
    showAnySectionbyId('section-history');
    document.getElementById('btn-history').classList.add('bg-primary');
    document.getElementById('btn-donataion').classList.remove('bg-primary');
});

// document.getElementById('btn-flood-noakhali').addEventListener('click', function(){
//     showAnySectionbyId('my_modal_5');
    
//     document.getElementById('btn-donataion').classList.remove('hidden');
// })

// document.getElementById('btn-blog').addEventListener('click', function(){
//     window.location = "./blog/blog.html";
// })
// The Event Lisnter-1 for NoaKhali Flood Donation

document.getElementById('btn-flood-noakhali')
    .addEventListener('click', function(event){
    event.preventDefault();
    const mainBalance = getTextValue('main-balance');
    const inputBalance = getInputValue('noakhali-input-money');
    const remainingBalance = getTextValue('flood-noakhali-balance');
    // Input Validation Check
    if ( isNaN(inputBalance) || inputBalance<1 || inputBalance > mainBalance ) {
        alert("Your Donation is Invalid!!!");
        document.getElementById('noakhali-input-money').value = "";
        return;
     } 
    
    const totalNoakhaliDoantion = inputBalance + remainingBalance;
    const remainingMainBalance = mainBalance - inputBalance;
    document.getElementById('flood-noakhali-balance').innerText = totalNoakhaliDoantion;
    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('noakhali-input-money').value = "";

    const div = document.createElement('div');
    const p = new Date();
    div.innerHTML = `<div class="text-lg text-dark font-bold text-center space-2 bg-white rounded-lg py-4 px-3 shadow-sm">
    <p>Your Donation is ${inputBalance} BDT for Flood at Noakhali, Bangladesh Successfully Donated </p>
    <p class="text-lg font-semibold" >${p}</p>
    </div>`;
    document.getElementById('donate-history-amount').appendChild(div);
    
    

    my_modal_5.showModal();

});
// The Event Lisnter-2 for Feni Flood  Donation

document.getElementById('btn-flood-feni')
    .addEventListener('click', function(event){
    event.preventDefault();
    const inputBalance = getInputValue('feni-input-money');
    const remainingBalance = getTextValue('flood-feni-balance');
    const mainBalance = getTextValue('main-balance');
    
    // Input Validation Check
    if ( isNaN(inputBalance) || inputBalance<1 || inputBalance > mainBalance ) {
        alert("Your Donation is Invalid!!!");
        document.getElementById('feni-input-money').value = "";
        return;
     } 
    const totalFeniDoantion = inputBalance + remainingBalance;
    const remainingMainBalance = mainBalance - inputBalance;
    document.getElementById('flood-feni-balance').innerText = totalFeniDoantion;
    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('feni-input-money').value = "";

    const p = new Date();
    const div = document.createElement('div');
    div.innerHTML = `<div class="text-lg text-dark font-bold text-center bg-white rounded-lg py-4 px-3 shadow-sm">
    <p>Your Donation is ${inputBalance} BDT for Flood at Feni, Bangladesh Successfully Donated </p>
    <p class="text-lg font-semibold" >${p}</p>
    </div>`;
    document.getElementById('donate-history-amount').appendChild(div);
    my_modal_5.showModal();
});
// The Event Lisnter-3 for Quota Movement Injured Doantion

document.getElementById('btn-quota-movement')
    .addEventListener('click', function(event){
    event.preventDefault();
    const inputBalance = getInputValue('quota-input-money');
    const remainingBalance = getTextValue('quota-balance');
    const mainBalance = getTextValue('main-balance');
    // Input Validations
    if ( isNaN(inputBalance) || inputBalance<1 || inputBalance > mainBalance ) {
        alert("Your Donation is Invalid!!!");
        document.getElementById('quota-input-money').value = "";
        return;
     } 
    const totalQuotaDoantion = inputBalance + remainingBalance;
    const remainingMainBalance = mainBalance - inputBalance;
    document.getElementById('quota-balance').innerText = totalQuotaDoantion;
    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('quota-input-money').value = "";
    
    const p = new Date();
    const div = document.createElement('div');
    div.innerHTML = `<div class="text-lg text-dark font-bold text-center bg-white rounded-lg py-4 px-3 shadow-sm">
    <p>Your Donation is ${inputBalance} BDT for Quota Movement injured Students, Bangladesh Successfully Donated </p>
    <p class="text-lg font-semibold" >${p}</p>
    </div>`;
    document.getElementById('donate-history-amount').appendChild(div);
    my_modal_5.showModal();
});
    

