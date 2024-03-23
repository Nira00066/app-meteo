document.addEventListener('DOMContentLoaded', function() {
 
  function fetchWeather(city) {
      const apiKey =b37034fc4d8846c6cc928ffc38768438
      fetchWeather('https://api.openweathermap.org/data/2.5/weather?q=Bayonne,FR&appid=b37034fc4d8846c6cc928ffc38768438')
          .then(response => response.json())
          .then(data => displayWeather(data))
          .catch(error => console.error('Erreur lors de la récupération des données météo :', error));
  }

  
  function displayWeather(data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;

     
      const cityElement = document.querySelector('.city');
      const iconElement = document.querySelector('.icon');
      const descriptionElement = document.querySelector('.description');
      const tempElement = document.querySelector('.temp');
      const humidityElement = document.querySelector('.humidity');
      const windElement = document.querySelector('.wind');

  
  }

  
  fetchWeather('Bayonne');
});

































//document.addEventListener('DOMContentLoaded', function() {

    // Chargement des données de configuration
   // fetch('config.json')
//.then(response => response.json())
     // .then(config => {
        // Récupération de la ville depuis la configuration
     //   const city = config.city;
  
      
  //      fetch input,         
    //     .then(response => response.json())
      //    .then(data => { 
            // Affichage des données météo
      //      const weatherInfo = document.getElementById('weather-info');
//weatherInfo.innerHTML = `
           //   <h2>${city}</h2>
          //   <p>Température: ${Math.round(data.main.temp - 273.15)}°C</p>
           //  <p>Météo: ${data.weather[0].description}</p>
         //   `;
        //  })
       //   .catch(error => {
      //    console.error('Erreur lors de la récupération des données météo :', error);
      //    });
      //})
     // .catch(error => {
     //   console.error('Erreur lors du chargement du fichier de configuration :', error);
   //   });
  
 // });
  