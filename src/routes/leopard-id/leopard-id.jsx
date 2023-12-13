import { useState } from "react";
import LeopardIdCard from "../../components/leopard-id-card/leopard-id-card";
import leopardIdCardsSorted from "../../leopard-profiles";

import "./leopard-id.scss";

function LeopardProfiles() {
  const [inValue, setInValue] = useState("");

  function handleChange(event) {
    setInValue(event.target.value.toLowerCase());
  }

  const filteredLeopards = leopardIdCardsSorted.filter((a) => {
    return a.name.toLowerCase().includes(inValue);
  });

  return (
    <div className="profiles-container">
      <h1>Leopards of Pilanesberg</h1>
      <div className="search-container">
        <input
          type="search"
          className="search-box"
          placeholder="Search Name"
          onChange={handleChange}
        />
      </div>
      <div className="id-list">
        {filteredLeopards.map((info, i) => {
          return <LeopardIdCard key={i} name={info.name} img={info.imgUrl} route={info.name}/>;
        })}
      </div>
    </div>
  );
}

export default LeopardProfiles;
