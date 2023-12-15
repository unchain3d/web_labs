import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import chainsaws from '../ChainsawData/chainsawData';
import './chainsawDetail.css';

function ChainsawDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const chainsaw = chainsaws.find((chainsaw) => chainsaw.id === parseInt(id));

  if (!chainsaw) {
    return <div>Chainsaw not found</div>;
  }

  const handleGoBack = () => {
    navigate('/catalog');
  };

  return (
    <div className="chainsaw-detail-container">
      <div className="chainsaw-detail">
        <img src={process.env.PUBLIC_URL + '/' + chainsaw.image} alt={chainsaw.title} width="700" height="500" />
        <div className="chainsaw-info">
          <button className="characteristic-btn blue">Description</button>
          <button className="characteristic-btn black">Properties</button>
          <h3>{chainsaw.title}</h3>
          <p>{chainsaw.description}</p>
        </div>
      </div>
      <div className="chainsaw-actions">
        <p className="chainsaw-price">Price: {chainsaw.price} uah</p>
        <div className="action-buttons">
          <button onClick={handleGoBack}>Go Back</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ChainsawDetail;
