const searchWeather = () => {
  const searchField = document.getElementById("searchField");
  const searchText = searchField.value;
  searchField.value = "";
  if (searchText == "") {
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=2eeb42ee46f76e949232683d95ae34bf`
    )
      .then((res) => res.json())
      .then((data) => DisplayWeather(data));
      
  }
};
const DisplayWeather = (data) => {
  const div = document.getElementById("status");
  div.textContent = "";
  console.log(data);
  div.innerHTML = `
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  <h1 id="location">${data.name}</h1>
  <h3><span>${data.main.temp}</span>&deg;C</h3>
  <h1>${data.weather[0].main}</h1>
    `;
};
