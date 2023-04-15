import React, { useContext } from "react";
import DataContext from "../../Context/DataContext";
import Cities from "../../Data/Cities.json";

const Header = () => {
  const { setCities } = useContext(DataContext);

  const handleChange = (event) => {
    setCities(event.target.value);
  };

  return (
    <div>
      <div>
        <select
          className="h-[30px] w-[150px] rounded-md text-center text-[1rem]"
          onChange={handleChange}
        >
          {Cities.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
