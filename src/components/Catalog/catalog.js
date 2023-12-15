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

  if (sort === 'sortByPrice') {
    filteredChainsaws.sort((a, b) => a.price - b.price);
  } else if (sort === 'sortByTitle') {
    filteredChainsaws.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (idOption === '1') {
    filteredChainsaws = filteredChainsaws.filter((chainsaw) => chainsaw.id < 2);
  } else if (idOption === '2') {
    filteredChainsaws = filteredChainsaws.filter((chainsaw) => chainsaw.id >= 3 && chainsaw.id <= 4);
  }

  if (price) {
    filteredChainsaws = filteredChainsaws.filter((chainsaw) => {
      const chainsawPrice = parseInt(chainsaw.price, 10);

      if (price === '10000') {
        return chainsawPrice <= 10000;
      } else if (price === '10001-20000') {
        return chainsawPrice >= 10001 && chainsawPrice <= 20000;
      } else if (price === '20001+') {
        return chainsawPrice >= 20001;
      } else {
        return false;
      }
    });
  }

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
