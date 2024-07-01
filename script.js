document.addEventListener('DOMContentLoaded', () => {
    // const quantity = document.getElementsByClassName('Quantity');
    let choose = document.getElementsByClassName('choose');
    const Bill = document.getElementById('billitems');
    const item = document.getElementsByClassName('item');
    const cartForm  = document.querySelector('.Cartform');
    const Addbtn = document.querySelector('.Addbtn');

    Addbtn.addEventListener('click', () => { 
        cartForm.style.display = "block";
    });

    Array.from(choose).forEach((checkbox ,index)=> {
        checkbox.addEventListener('click', () => {
            console.log('clicked');
            updateTotal(index);
            totalprice();
        });

    });

    totalprice();

    function updateTotal(index){
    const quantity = document.getElementsByClassName('Quantity');
        if(choose[index].checked == true){
            console.log('false');
            const form = document.createElement('form');
            form.className = 'CartItems';
            const div = document.createElement('div');
            div.className = 'billitems';
            div.dataset.index = index;
            const label = document.createElement('label');
            label.className = 'Cartf';
            const h4 = document.createElement('h4');
            h4.className = 'item';
            h4.innerHTML = `${item[index+1].textContent}`;
            const h4_2 = document.createElement('h4');
            h4_2.className = 'price';
            h4_2.textContent = `${quantity[index].value} * $2.50 = $${parseInt(quantity[index].value) * 2.50}`;
            label.appendChild(h4);
            label.appendChild(h4_2);
            div.appendChild(label);
            form.appendChild(div)
            Bill.appendChild(form);
            console.log(quantity[index].value);
        } else{
            console.log('unchecked');
            const itemToRemove = Bill.querySelector(`[data-index="${index}"]`);
            if (itemToRemove) {
                itemToRemove.remove();
            }
        }
    }

    function totalprice() {
        let totalPriceDiv = document.querySelector('.totalPrice');
        if (!totalPriceDiv) {
            const form = document.createElement('form');
            form.className = 'totalBill';
            totalPriceDiv = document.createElement('div');
            totalPriceDiv.className = 'totalPrice';
            form.appendChild(totalPriceDiv);
            Bill.appendChild(form);
        }
    
        const updateValues = document.querySelectorAll('.billitems .price');
        let sum = 0;
        updateValues.forEach(updateValue => {
            let priceString = updateValue.textContent.split('$').pop();
            let price = parseFloat(priceString);
            if (!isNaN(price)) {
                sum += price;
            }
        });
    
        totalPriceDiv.innerHTML = `
            <label class="Cartf totalprice">
                <h2 class="item">Total Price</h2>
                <h4 class="price">$${sum.toFixed(2)}</h4>
            </label>
        `;
    }

});