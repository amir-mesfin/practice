const apikey = "9840996303239d437a15b6646ccb0aa5";
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weather_icon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
      const data = await response.json();
      console.log(data);
      document.querySelector('.city').innerHTML=data.name;
      document.querySelector('.temp').innerHTML= Math.round
      (data.main.temp) +"°c";
      document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
      document.querySelector('.wind').innerHTML=data.wind.speed +" km/h";
   
      if(data.weather[0].main =="clouds"){
          weather_icon.src = "./tools/images./clouds.png"
      } else if(data.weather[0].main =="clear"){
        weather_icon.src = "./tools/images./clear.png"
    } else if(data.weather[0].main =="Rain"){
      weather_icon.src = "./tools/images./rain.png"
    }     
}

searchButton.addEventListener('click',()=>{
checkWeather(searchbox.value);
      
});



