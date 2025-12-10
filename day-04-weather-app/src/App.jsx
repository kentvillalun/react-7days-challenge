import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import Axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState(false);

  const handleCity = (event) => {
    setCity(event.target.value);
    console.log(event.target.value);
  };

  const fetchData = () => {
    Axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en&format=json`
    )
      .then((res) => {
        setCityList(res.data.results || []);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };

  const fetchWeather = (latitude, longitude) => {
    Axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
    ).then((res) => {
      setWeather(res.data);
      setLocation(true);
    });
  };

  return (
    <>
      <div className="">
        <Header />
        <div className="relative top-14">
          <SearchBar handleCity={handleCity} fetchData={fetchData} />
          <div className="">
            <div className="px-10 flex flex-col gap-2">
              <p className="font-semibold text-lg">Results:</p>
              <div className="flex flex-col">
                {isPending && <div>Loading...</div>}
                {cityList.map((location) => {
                  return (
                    <div
                      className="p-2 rounded hover:bg-blue-50 cursor-pointer"
                      key={location.id}
                    >
                      <button
                        className="cursor-pointer"
                        onClick={() =>
                          fetchWeather(location.latitude, location.longitude)
                        }
                      >
                        {location.name}, {location.country},{" "}
                        {location.country_code}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {location && (
            <div className="p-3 mt-10 shadow-lg m-7 rounded-lg">
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="p-2 flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold">Current Weather</h1>
                  <p className="text-xl text-center">
                    {" "}
                    Location: {weather.timezone},{" "}
                    {weather.timezone_abbreviation}
                  </p>
                </div>

                <div className="flex flex-col gap-3 rounded-xl bg-white p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-gray-500">
                        Current Temperature
                      </p>
                      <p className="text-5xl font-extrabold">
                        {weather.current.temperature_2m}
                        <span className="text-2xl font-semibold">
                          {weather.current_units.temperature_2m}
                        </span>
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-500">Feels like</p>
                      <p className="text-2xl font-bold">
                        {weather.current.apparent_temperature}
                        {weather.current_units.apparent_temperature}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <p className="text-xs text-gray-500">Wind Speed</p>
                      <p className="text-lg font-semibold">
                        {weather.current.wind_speed_10m}{" "}
                        {weather.current_units.wind_speed_10m}
                      </p>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-3">
                      <p className="text-xs text-gray-500">Last Updated</p>
                      <p className="text-lg font-semibold">
                        {weather.current.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
