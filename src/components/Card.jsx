/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ cardData }) => {
  return (
    <div className="col-lg-4 col-sm-12 my-2">
      <div className="card p-3 rounded-border">
        <div className="text-muted text-center ls-1">{cardData.title}</div>
        <h1 className="text-center mt-3">{cardData.price}/month</h1>
        <hr />
        <ul>
          <li>
            <i className="fas fa-check"></i>
            {cardData.user}
          </li>
          <li>
            <i className="fas fa-check"></i>
            {cardData.storage}
          </li>
          <li>
            <i className="fas fa-check"></i>Unlimited Private Projects
          </li>
          <li>
            <i className="fas fa-check"></i>Community Access
          </li>
          <li className={`${cardData.project}`}>
            <i className={`${cardData.projectIcon}`}></i>
            Unlimited Private Projects
          </li>
          <li className={`${cardData.phone}`}>
            <i className={`${cardData.phoneIcon}`}></i>
            Dedicated Phone Support
          </li>
          <li className={`${cardData.subDomain}`}>
            <i className={`${cardData.subDomainIcon} `}></i>
            Free Subdomain
          </li>
          <li className={`${cardData.monthly}`}>
            <i className={`${cardData.monthlyIcon}`}></i>
            Monthly Status Reports
          </li>
        </ul>
        <button className="btn btn-primary rounded-pill ls-1 p-3">
          BUTTON
        </button>
      </div>
    </div>
  );
};

export default Card;
