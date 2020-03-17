import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import Item from '../components/Item/Item';
import getProducts from './products';

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();
    getProducts().then((res) => {
      // const nombres = res.products.map((el) => el.name);
      res.products.forEach((el) => {
        console.log(el.name);
      });
    });
  };
  const [dataProducts, setDataProducts] = useState([]);
  const [filtro, setFiltro] = useState('desayuno');
  getProducts().then((res) => (filtro !== ''
    ? setDataProducts(res.filter((element) => element.type === filtro))
    : setDataProducts(res)));
  return (
    <>
      <Menu
        handleClick={handleClick}
      />
      <Item data={dataProducts} />
    </>
  );
};

export default Home;
