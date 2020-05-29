
// TODO LIST

const addButton = document.querySelector('.addButton');
var input = document.querySelector('.bloco-de-notas');

const anotacoes = document.querySelector('.anotacoes');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<ion-icon name="trash-sharp"></ion-icon>';
        removeButton.classList.add('removeButton');

        anotacoes.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        anotacoes.removeChild(item);
    }

}

function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})



// CALENDARIO


var dt = new Date();

function RenderDate() {

    dt.setDate(1);
    var day = dt.getDay();
    
    console.log(dt.getDay())
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    
    console.log(endDate);
    
    var prevDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    
    var today = new Date();
    console.log(today);
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //console.log(months[dt.getMonth()]);
    document.getElementById('month').innerHTML = months[dt.getMonth()]
    
    var cells = '';
    
    for ( x = day; x > 0; x--) {
        cells += "<div class='prev_date' >" + (prevDate - x) + "</div>";   
    }
    
    for (let i = 1; i <= endDate; i++) {
        if ( i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }
    
    
    document.getElementsByClassName('days-year')[0].innerHTML = cells;
    
    
}

RenderDate();

function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);

    } else if (para == 'next'){
        dt.setMonth(dt.getMonth() + 1);

    }
    RenderDate();
}

function date() {

    var now = new Date();
    var hoje = 'hoje';
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    dates = [' ', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st', '32nd'];
    

    month = now.getMonth();
    day = now.getDate();
    year = now.getFullYear();
 
    document.getElementById('date_str').innerHTML =  'Day: ' + months[month] + ' ' + dates[day] + ''+ ', ' + year;
 
 };
 
 date();






