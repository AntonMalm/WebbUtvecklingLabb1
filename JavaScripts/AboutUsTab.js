async function getTemperature() {
  const triviaUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=57.7974&longitude=12.148&hourly=temperature_2m&forecast_days=1";

  const response = await fetch(triviaUrl);

  const results = await response.json();

  const currTemp = "Temperaturen i Björsared är idag: " + (results["hourly"]["temperature_2m"])[0] + "℃";
  console.log(currTemp)
  const TempBox = document.getElementById("TempBox");
  TempBox.innerText = currTemp;
}
getTemperature();


