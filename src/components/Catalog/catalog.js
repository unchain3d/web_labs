import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CatalogFilter from '../CatalogFilter/catalogFilter';
import Loader from '../Loader/loader';
import { getFilteredChainsaws } from '../../api';
import './catalog.css';

function Catalog({ searchTerm }) {
  const [filteredChainsaws, setFilteredChainsaws] = useState([]);
  const [sort, setSort] = useState('');
  const [idOption, setIdOption] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasMounted = useRef(false);

  const applyFilters = async () => {
    setIsLoading(true);
    try {
      const data = await getFilteredChainsaws({ searchTerm, sort, idOption, price });
      setFilteredChainsaws(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      applyFilters();
    };

    if (hasMounted.current) {
      fetchData();
    } else {
      hasMounted.current = true;
    }

  }, [sort, idOption, price, searchTerm]);

  const handleApplyFilters = (filters) => {
    setSort(filters.sort);
    setIdOption(filters.idOption);
    setPrice(filters.price);
  };

  return (
    <>
      <CatalogFilter onApplyFilters={handleApplyFilters} />
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Loader />
        </div>
      ) : (
        <div className="catalog">
          {filteredChainsaws.map((chainsaw) => (
            <div key={chainsaw.id} className="chainsaw">
              <img src={chainsaw.image} alt={chainsaw.title} width="300" height="250" />
              <h3>{chainsaw.title}</h3>
              <p>{chainsaw.description}</p>
              <p><span style={{ fontWeight: 'bold' }}>Price:</span> {chainsaw.price} UAH</p>
              <Link to={`/chainsaw/${chainsaw.id}`} className="chainsaw-link">View more</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Catalog;
