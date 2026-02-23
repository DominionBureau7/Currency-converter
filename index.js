const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/5a682cfd51786a0ca379dd20/latest/${currencyFirstEl.value}`).then(res => res.json()).then(data => {
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerHTML = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2); // .toFixed(2) for currency converters, because users expect amounts to be rounded to two decimal places.
    });
}// The updateRate() function fetches the latest exchange rates from the API, converts the response into JSON, extracts the conversion rate between the selected base and target currencies, logs the rate for debugging, updates the exchange-rate paragraph to show "1 [base] = [rate] [target]", and calculates the converted amount for the second input field (rounded to 2 decimals).

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);