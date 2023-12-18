import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/loader';
import { getChainsawById } from '../../api';
import { addToCart } from '../../redux/cartActions';
import './chainsawDetail.css';

function ChainsawDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chainsaw, setChainsaw] = useState(null);
  const [color, setColor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasMounted = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChainsaw = async () => {
      setIsLoading(true);
      try {
        const data = await getChainsawById(id);
        setChainsaw(data);
      } catch (error) {
        console.error('Error fetching chainsaw details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (hasMounted.current) {
      fetchChainsaw();
    } else {
      hasMounted.current = true;
    }
  }, [id]);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader />
      </div>
    );
  }
  
  if (!chainsaw) {
    return <div>Chainsaw not found</div>;
  }

  const handleGoBack = () => {
    navigate('/catalog');
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(chainsaw));
    navigate('/cart');
  };

  return (
    <div className="chainsaw-detail-container">
      <div className="chainsaw-detail">
        <img src={process.env.PUBLIC_URL + '/' + chainsaw.image} alt={chainsaw.title} width="700" height="500" />
        <div className="chainsaw-info">
          <button className="characteristic-btn blue">Description</button>
          <button className="characteristic-btn black">Characteristics</button>
          <h3>{chainsaw.title}</h3>
          <p>{chainsaw.description}</p>
          <div className="chainsaw-detail-add-info">
            <div className="chainsaw-selector-container">
              <h4>Select Color:</h4>
              <select className="chainsaw-selector" value={color} onChange={handleColorChange}>
                <option>Select</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="chainsaw-actions">
        <p className="chainsaw-price">Price: {chainsaw.price} uah</p>
        <div className="action-buttons">
          <button onClick={handleGoBack}>Go Back</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ChainsawDetail;
