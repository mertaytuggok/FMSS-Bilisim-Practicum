import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [cities, setCities] = useState("Adana");
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    const getCity = async (cities) => {
      const apiKey = `${process.env.REACT_APP_API_KEY}`;

      try {
        const { data } = await axios.get(
          ` https://api.openweathermap.org/data/2.5/forecast?q=${cities}&units=metric&appid=${apiKey}`
        );
        setCitiesData(data.list);
      } catch {
        toast.error("Veri alinirken bir hata oluştu");
      }
    };
    cities && getCity(cities);
  }, [cities]);

  const values = { cities, setCities, citiesData };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
export default DataContext;
