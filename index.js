const input_github_username = document.getElementById('username');

const userInfo = document.getElementById('user-info');

input_github_username.onkeydown = (e) => {

    if (e.key === 'Enter') {

        getUserInfo();

    }
};

async function getUserInfo() {

    const username = document.getElementById('username').value;

    const section = document.getElementById('section')

    const response = await fetch('https://api.github.com/users/' + username);

    const data = await response.json();

    if (response.status === 200) {

        userInfo.innerHTML = `

        <div class="profil_photo">

        <img src="${data.avatar_url}">

        <p><strong>Adı:</strong> ${data.name || 'Məlumat yoxdur'}</p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Daxil ol:</strong> ${data.login || 'Məlumat yoxdur'}</p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        </div>

        <div class="github_container_about">

        <p><strong>GitHub Linki:</strong> <a href="${data.html_url || 'Məlumat yoxdur'}">${data.html_url || 'Məlumat yoxdur'}</a></p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Bloq Linki:</strong> <a href="${data.blog || '#'}">${data.blog || 'Məlumat yoxdur'}</a></p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Şəhər:</strong> ${data.location || 'Məlumat yoxdur'}</p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Poçt:</strong> ${data.email || 'Məlumat yoxdur'}</p>

        <div style="border: 1px solid black; height: 0.1px; opacity: 0.1;"></div>

        <p><strong>Abunəçilərin sayı:</strong> ${data.followers}</p>

        <div style="border: 1px solid black; ; opacity: 0.1;"></div>

        <p><strong>Abunələrin sayı:</strong> ${data.following}</p>

        <div style="border: 1px solid black; opacity: 0.1;"></div>

        </div>
        `;

        section.style.display = 'block'
    } else {

        userInfo.innerHTML = "<p>Belə bir istifadəçi tapılmadı.</p>";
    }
}







const weather_input = document.getElementById('cityInput');

const currentWeather = document.getElementById('currentWeather');

const hourlyWeather = document.getElementById('hourlyWeather');

const hourlyWeather_h2 = document.getElementById('hourlyWeather_h2')

weather_input.onkeydown = (e) => {

    if (e.key === 'Enter') {

        temperatur();

    }
};

const temperatur = async () => {

    const city = document.getElementById('cityInput').value;

    const apiKey = '077118ed465d578cff1db686007f4f40';

    const currentResponse_live = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    const currentData = await currentResponse_live.json();

    const forecastResponse_hours = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);

    const forecastData = await forecastResponse_hours.json();

    if (currentResponse_live.status === 200 || forecastResponse_hours.status === 2000) {

        const currentWeather = document.getElementById('currentWeather');

        currentWeather.innerHTML = `

        <div class="location_date">
        
        <h3>${currentData.name}</h3>
        
        <strong>Tarix: ${new Date().toLocaleDateString()}</strong>
        
        </div>

        <div class="container_now_weather">
        
        <div>

        <p class="weather_des">${currentData.weather[0].main}</p>
        
        <img src="http://openweathermap.org/img/wn/${currentData.weather[0].icon}.png">
        
        </div>
        
        <div class="weather_now_c">
        
        <strong class="weather_now_c_element"> ${currentData.main.temp}°C</strong>
        
        </div>
       
        <div class="weather_more">
        
        <p>Ən aşağı temperatur: ${currentData.main.temp_min}°C</p>
        
        <p>Ən yuxarı temperatur: ${currentData.main.temp_max}°C</p>
        
        <p>Wind Speed: ${currentData.wind.speed} m/s</p>
        
        </div>
        
        </div>
        `;

        const hourlyWeather = document.getElementById('hourlyWeather');

        hourlyWeather_h2.style.display = 'block'

        hourlyWeather.innerHTML = '';

        for (let i = 0; i < 9; i++) {

            const hourlyData = forecastData.list[i];

            const time = new Date(hourlyData.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

            const icon = hourlyData.weather[0].icon;

            const description = hourlyData.weather[0].main;

            const temperature = hourlyData.main.temp;

            const windSpeed = hourlyData.wind.speed;

            hourlyWeather.innerHTML += `
                <div class="hourly-weather-item">
        
                <p>Saat: ${time}</p>
        
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
        
                <p>Havanın təsviri: ${description}</p>
        
                <p>Dərəcə: ${temperature}°C</p>
        
                <p>Külək sürəti: ${windSpeed} m/s</p>
        
                </div>
            `;
        }
    } else {
        currentWeather.innerHTML = `Yalnış ərazi`
        
        hourlyWeather.innerHTML.display = 'none'
    }

}
