import "./leopard-id-card.scss";


function LeopardIdCard({ name, img }) {
 return <div className="card-id-container">
    <img src={img}/>
    <h3>{name}</h3>
  </div>;
}

export default LeopardIdCard;
