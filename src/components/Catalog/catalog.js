import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './catalog.css';
import CatalogFilter from '../CatalogFilter/catalogFilter';
import chainsaws from '../ChainsawData/chainsawData';

function Catalog({ searchTerm }) {
  const [sort, setSort] = useState('');
  const [idOption, setIdOption] = useState('');
  const [price, setPrice] = useState('');

  const handleApplyFilters = (filters) => {
    setSort(filters.sort);
    setIdOption(filters.idOption);
    setPrice(filters.price);
  };

  let filteredChainsaws = chainsaws.filter((chainsaw) => chainsaw.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <CatalogFilter onApplyFilters={handleApplyFilters} />
      <div className="catalog">
        {filteredChainsaws.map((chainsaw) => (
          <div key={chainsaw.id} className="chainsaw">
            <img src={chainsaw.image} alt={chainsaw.title} width="300" height="250" />
            <h3>{chainsaw.title}</h3>
            <p>{chainsaw.description}</p>
            <p><span style={{ fontWeight: 'bold' }}>Price:</span> {chainsaw.price} uah</p>
            <Link to={`/chainsaw/${chainsaw.id}`} className="chainsaw-link">View more</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Catalog;
