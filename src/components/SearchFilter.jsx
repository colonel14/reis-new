import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const SearchFilter = () => {
  const navigate = useNavigate();

  const [rentFrequency, setRentFrequency] = useState("monthly");
  const [lang, setLang] = useState("en");
  const [purpose, setPurpose] = useState("for-rent");

  const handleSearch = () => {
    navigate({
      pathname: "/properties",
      search: `?rentFrequency=${rentFrequency}&lang=${lang}&purpose=${purpose}`,
    });
  };

  return (
    <div className="bg-[#ffffff] py-8 px-14 mt-6 mx-auto max-w-[1400px] justify-between flex flex-1 rounded-md">
      <div className="items-center">
        <h4 className="flex-1 font-semibold text-lg text-[#2C3A61] mb-2">
          Location
        </h4>
        <div>
          <label className="text-[#889099]" htmlFor="city">
            Rent Frequenct
          </label>
          <select
            onChange={(e) => setRentFrequency(e.target.value)}
            className=" cursor-pointer text-[#4A60A1]"
            name="city"
            id="1"
          >
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
            <option value="weekly">weekly</option>
          </select>
        </div>
      </div>
      <div className="items-center">
        <h4 className="flex-1 font-semibold text-lg text-[#2C3A61] mb-2">
          Location
        </h4>
        <div>
          <label className="text-[#889099]" htmlFor="city">
            Language
          </label>
          <select
            onChange={(e) => setLang(e.target.value)}
            className=" cursor-pointer text-[#4A60A1]"
            name="city"
            id="1"
          >
            <option value="ar">Arabic</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
      <div className="items-center">
        <h4 className="flex-1 font-semibold text-lg text-[#2C3A61] mb-2">
          Location
        </h4>
        <div>
          <label className="text-[#889099]" htmlFor="city">
            Purpose
          </label>
          <select
            onChange={(e) => setPurpose(e.target.value)}
            className=" cursor-pointer text-[#4A60A1]"
            name="city"
            id="1"
          >
            <option value="for-rent"> for-rent</option>
            <option value="for-sale">for-sale</option>
          </select>
        </div>
      </div>
      <Button
        onClick={handleSearch}
        text={"Search"}
        bg={"bg-[#4a60a1]"}
        color={"text-[#ffffff]"}
      />
    </div>
  );
};

export default SearchFilter;
