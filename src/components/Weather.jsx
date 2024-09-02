import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import clear_icon from "../assets/clear.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1207062c5c1b56c44e10d2b57235851f`;
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          alert("City not found. Please enter a valid city name.");
        } else {
          throw new Error("Failed to fetch weather data");
        }
        return;
      }
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    search("Islamabad");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(inputRef.current.value);
  };

  return (
    <div className="font-poppins p-5 md:p-10 rounded-lg bg-gradient-to-br from-[#2f4680] to-[#500ae4] flex flex-col items-center shadow-black shadow-2xl space-y-6">
      <form className="flex items-center gap-2 w-full" onSubmit={handleSubmit}>
        <input
          className="w-full h-[50px] border-none outline-none rounded-[40px] pl-[25px] text-[#626262] bg-[#ebfffc] text-[16px] md:text-[18px]"
          type="text"
          placeholder="Search City"
          ref={inputRef}
        />
        <button
          type="submit"
          className="w-[50px] h-[50px] flex-shrink-0 rounded-full bg-[#ebfffc] cursor-pointer flex items-center justify-center"
        >
          <FaSearch size={25} className="text-gray-400" />
        </button>
      </form>

      {weatherData && (
        <>
          <img
            src={weatherData.icon}
            alt="Weather Icon"
            className="w-[120px] sm:w-[150px] my-2"
          />
          <p className="text-white text-[50px] sm:text-[70px] leading-none">
            {weatherData.temperature}°C
          </p>
          <p className="text-white text-[30px] sm:text-[40px]">
            {weatherData.location}
          </p>
          <div className="w-full mt-[40px] text-white flex flex-col sm:flex-row justify-between gap-6">
            <div className="flex items-start gap-[12px] text-[20px] sm:text-[22px]">
              <img
                src={humidity_icon}
                alt="Humidity Icon"
                className="w-[26px] mt-[10px]"
              />
              <div>
                <p>{weatherData.humidity} %</p>
                <span className="block text-[16px]">Humidity</span>
              </div>
            </div>
            <div className="flex items-start gap-[12px] text-[20px] sm:text-[22px]">
              <img
                src={wind_icon}
                alt="Wind Icon"
                className="w-[26px] mt-[10px]"
              />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span className="block text-[16px]">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
