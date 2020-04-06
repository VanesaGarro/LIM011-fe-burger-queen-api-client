import React, { useState, useEffect } from 'react';
import './OrderKitchen.css';
import ItemOrderProducts from '../ItemOrderProducts/ItemOrderProducts';
import GetOrders from '../../controller/Orders/GetOrders';
import Header from '../Header/Header';
// import EditOrder from '../Orders/EditOrder';

const OrderKitchen = () => {
  const [AlldataOrder, setAllDataOrder] = useState([]);
  // const [status, setStatus] = useState('');
  const viewAllOrder = () => {
    GetOrders(localStorage.getItem('token')).then((NewDataOrders) => setAllDataOrder(NewDataOrders));
  };
  useEffect(() => {
    viewAllOrder();
  }, []);

  // const handleClickStatus = (strStatus) => {
  //   setStatus(strStatus);
  // };

  return (
    <>
      <Header />
      <section className="kitchen-view">
        {AlldataOrder.map((objOrder) => (
          <div className="container-order-kitchen" key={objOrder._id}>
            <div className="order-body-kitchen">
              <p> Órden</p>
              <ItemOrderProducts
                _id={objOrder._id}
                userId={objOrder.userId}
                AllDataOrder={AlldataOrder}
                ArrayProduct={objOrder.products}
                objOrder={objOrder}
                client={objOrder.client}
                dateEntry={objOrder.dateEntry}
                status={objOrder.status}
                dateProcessed={objOrder.dateProcessed}
              />

            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default OrderKitchen;
