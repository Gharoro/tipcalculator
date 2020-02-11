const getBill = () => {

    let amount = Number(document.getElementById("bill").value);
    let tip = Number(document.getElementById("tip").value);
    let numPeople = Number(document.getElementById("people").value);

    if (tip === 0) {
        let billPerPerson = amount / numPeople;
        billPerPerson = (Math.round(billPerPerson * 100) / 100).toFixed(2);

        document.getElementById('no-tip').innerHTML = '*Sorry, no tip for         you!';
        document.getElementById('result').innerHTML = `Each person is to pay:     N${billPerPerson}`;

    } else {

        const tipamount = (tip / 100) * amount;
        const totalBill = amount + tipamount;
        let billPerPerson = totalBill / numPeople;
        billPerPerson = (Math.round(billPerPerson * 100) / 100).toFixed(2);

        document.getElementById('result').innerHTML = `Each person is to pay:     N${billPerPerson}`;

    }


}

document.getElementById("calculate").addEventListener('click', () => {
    getBill();
});

