import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/sliceFilter';

const Filter = () => {
  const dispatch = useDispatch();

  const hanleChangeFilter = e => {
    const query = e.target.value;
    dispatch(changeFilter(query));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={hanleChangeFilter} />
    </label>
  );
};

export default Filter;
