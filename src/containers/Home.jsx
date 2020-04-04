import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import Orders from '../components/Orders/Orders';
import getProducts from './products';
import OrderKitchen from '../components/OrderKitchen/OrderKitchen';
import AddOrders from '../components/Orders/AddOrders';
import GetOrders from '../components/Orders/GetOrders';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [category, setCategory] = useState('');
  // const [AlldataOrder, setAllDataOrder] = useState([]);
  const [client, setClient] = useState('');
  const token = localStorage.getItem('token');

  const updateProducts = () => getProducts(token).then((res) => (category !== ''
    ? setDataProducts(res.filter((obj) => obj.type === category))
    : setDataProducts(res)));

  useEffect(() => {
    updateProducts();
  }, [category]);

  const handleClick = (type) => {
    setCategory(type);
  };

  const addOrder = (uniqueArray) => {
    setDataOrder(uniqueArray);
  };

  const deleteProduct = (newOrders) => {
    setDataOrder(newOrders);
  };

  // const viewAllOrder = () => {
  //   GetOrders(localStorage.getItem('token')).then((NewDataOrders) => setAllDataOrder(NewDataOrders), console.log(AlldataOrder));
  // };

  const sendOrder = () => {
    const _id = '01';
    if (!client) {
      alert('Ingrese nombre del cliente');
    }
    AddOrders(token,
      _id,
      client,
      dataOrder.map((objOrder) => ({ productId: objOrder._id, qty: objOrder.qty })))
      .then((res) => console.log(res));
  };

  const handleName = (e) => {
    setClient(e.target.value);
  };

  return (
    <>
      <Header />
      <Menu
        handleClick={handleClick}
        dataProducts={dataProducts}
        addOrder={addOrder}
      />
      <Orders
        dataOrder={dataOrder}
        deleteProduct={deleteProduct}
        sendOrder={sendOrder}
        handleName={handleName}
      />
    </>
  );
};

export default Home;
