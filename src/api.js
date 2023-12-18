import axios from 'axios';

export const getFilteredChainsaws = async ({ searchTerm, sort, idOption, price }) => {
  try {
    const response = await axios.get('http://localhost:8080/api/chainsaws/filtered', {
      params: {
        searchTerm,
        sort: sort || null,
        idOption: idOption || null,
        price: price || null,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getChainsawById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/chainsaws/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chainsaw details:', error);
     throw error;
  }
};