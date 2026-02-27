const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/5a682cfd51786a0ca379dd20/latest/${currencyFirstEl.value}`).then(res => res.json()).then(data => {// Sends request to API using selected base currency, Converts API response into a JavaScript object, Receives exchange rate data from the API
        const rate = data.conversion_rates[currencySecondEl.value];// Extracts exchange rate for the selected target currency
        console.log(rate);
        exchangeRateEl.innerHTML = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;// Displays exchange rate text on the page
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2); // .toFixed(2) for currency converters, because users expect amounts to be rounded to two decimal places.
    });
}// The updateRate() function fetches the latest exchange rates from the API, converts the response into JSON, extracts the conversion rate between the selected base and target currencies, logs the rate for debugging, updates the exchange-rate paragraph to show "1 [base] = [rate] [target]", and calculates the converted amount for the second input field (rounded to 2 decimals).

currencyFirstEl.addEventListener("change", updateRate);// Runs updateRate() when the base currency is changed
currencySecondEl.addEventListener("change", updateRate);// Runs updateRate() when the target currency is changed
worthFirstEl.addEventListener("input", updateRate);// Runs updateRate() whenever the user types or changes the amount in the first input field. This allows for real-time conversion as the user types.