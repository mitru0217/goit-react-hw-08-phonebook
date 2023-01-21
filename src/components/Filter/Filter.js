import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/Filter/sliceFilter';
import {
  FilterWraper,
  InputForm,
  LabelFilter,
} from 'components/Filter/Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const hanleChangeFilter = e => {
    const query = e.target.value;
    dispatch(changeFilter(query));
    console.log(query);
  };

  return (
    <FilterWraper>
      <LabelFilter htmlFor="filter">Find contacts by name</LabelFilter>
      <InputForm type="text" name="filter" onChange={hanleChangeFilter} />
    </FilterWraper>
  );
};

export default Filter;
