import React, { useContext } from "react";
import DataContext from "../../Context/DataContext";

function Main() {
  const { cities, citiesData } = useContext(DataContext);

  return (
    <div className=" max-w-[90vw] ">
      {" "}
      <div className=" mb-16  flex w-full justify-center text-xl font-semibold ">
        City: {cities}
      </div>
      <div className=" flex  gap-12 overflow-x-auto text-base font-semibold md:items-center md:justify-center   ">
        {citiesData &&
          citiesData.map((item, index) => {
            if (index % 7 === 0 || index === 39) {
              return (
                <div className=" flex flex-col items-center justify-center ">
                  {" "}
                  <h3 className="mt-3">
                    {new Date(item.dt * 1000).toString().split(" ")[0]}
                  </h3>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="weatherIMG"
                  />
                  <span>
                    {item.main.temp_max.toFixed(1)}° /{" "}
                    {item.main.temp_min.toFixed(1)}°
                  </span>{" "}
                </div>
              );
            }
            return " ";
          })}
      </div>
    </div>
  );
}

export default Main;
