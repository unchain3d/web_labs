import React, { useState } from 'react';
import SelectSort from './selectSort';
import './CatalogFilter.css';

const sortOptions = [
  { value: 'sortByPrice', label: 'Sort by price' },
  { value: 'sortByTitle', label: 'Sort by title' },
  { value: 'sortByType', label: 'Sort by type' },


];

const CatalogFilter = ({ onApplyFilters }) => {
  const [sort, setSort] = useState('');
  const [idOption, setIdOption] = useState('');
  const [price, setPrice] = useState('');

  const handleApply = () => {
    onApplyFilters({ sort, idOption, price });
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <SelectSort name="sort" options={sortOptions} onChange={(e) => setSort(e.target.value)} />
        <SelectSort name="idOption" options={idOptions} onChange={(e) => setIdOption(e.target.value)} />
        <SelectSort name="price" options={priceOptions} onChange={(e) => setPrice(e.target.value)} />
        <button className="myButton" onClick={handleApply}>
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
