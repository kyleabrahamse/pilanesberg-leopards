import "./leopard-id.scss";
import LeopardIdCard from "../../components/leopard-id-card/leopard-id-card";
import leopardIdCards from "../../leopard-profiles";

function LeopardProfiles() {
  return (
    <div className="profiles-container">
      <h1>Leopards of Pilanesberg</h1>
      <div className="id-list">
        {leopardIdCards.map((info) => {
          return <LeopardIdCard name={info.name} img={info.imgUrl} />;
        })}
      </div>
    </div>
  );
}

export default LeopardProfiles;
