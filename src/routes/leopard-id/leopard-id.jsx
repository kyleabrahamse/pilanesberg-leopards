import "./leopard-id.scss";
import LeopardIdCard from "../../components/leopard-id-card/leopard-id-card";
import leopardIdCards from "../../leopard-profiles";
import Footer from "../../components/footer/footer"

function LeopardProfiles() {
  return (
    <div className="profiles-container">
      <h1>Leopards of Pilanesberg</h1>
      <div className="id-list">
        {leopardIdCards.map((info) => {
          return <LeopardIdCard name={info.name} img={info.imgUrl} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default LeopardProfiles;
