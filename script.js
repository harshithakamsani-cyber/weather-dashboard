const apiKey ="368fa4f492317c549d067b173bed9b13";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
    const city = document.getElementById("city").value;

    if (city === "") {
        document.getElementById("error").innerText = "Please enter a city name";
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = data.main.temp;
        document.getElementById("humidity").innerText = data.main.humidity;
        document.getElementById("wind").innerText = data.wind.speed;
        document.getElementById("error").innerText = "";

    } catch (error) {
        document.getElementById("error").innerText = error.message;
    }
});
