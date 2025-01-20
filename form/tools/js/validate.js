const apikey = "9840996303239d437a15b6646ccb0aa5";
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weather_icon = document.querySelector('.weather-icon12');
const inputField = document.querySelector(".writingMeanu");

async function checkWeather(city){
    const response = await fetch(apiurl +city+`&appid=${apikey}`);
      const data = await response.json();
      if (response.status == 404){
           document.querySelector(".error").style.display="block"
           document.querySelector(".weather").style.display="none";

      }
      else{
      document.querySelector('.city').innerHTML=data.name;
      document.querySelector('.temp').innerHTML= Math.round
      (data.main.temp) +"°c";
      document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
      document.querySelector('.wind').innerHTML=data.wind.speed +" km/h";
      console.log(data.weather[0].main);
   
      if(data.weather[0].main =="Clouds"){
          weather_icon.src = "./tools/images/cloud.png"
      } else if(data.weather[0].main =="Clear"){
        weather_icon.src = "./tools/images/clear.png"
    } else if(data.weather[0].main =="Rain"){
        weather_icon.src = "./tools/images/rain.png"
    }  else if (data.weather[0].main =="Drizzle"){
      weather_icon.src = "./tools/images/drizzle.png"
    }  else if (data.weather[0].main =="Mist"){
      weather_icon.src = "./tools/images/snow.png"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none"

}
}

searchButton.addEventListener('click',()=>{
checkWeather(searchbox.value);
});

inputField.addEventListener("keydown", (event)=>{
   if (event.key === 'Enter') {
     checkWeather(searchbox.value);
    }
})





