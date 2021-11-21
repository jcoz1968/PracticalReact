import './house.css';

const House = ({ house }) => {
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12">{house.contry}</h5>
      </div>
      <div className="row">
        <div className="col-md-12">{house.address}</div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={`/images/${house.photo}.jpeg`} alt="House" />
        </div>
        <div className="col-md-5">
          <p className="price">${house.price}</p>
          <p>{house.decription}</p>
        </div>
      </div>
    </div>
  );
};

export default House;
