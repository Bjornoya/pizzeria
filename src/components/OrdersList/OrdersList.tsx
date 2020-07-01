import React from 'react';
import style from './OrdersList.module.scss';

interface IOrderListProps {
  count: number;
  date: string;
  price: number;
  status: string;
  id: string;
}

const fakeData = [
  { count: 2, date: '02/07/2020', price: '12$', status: 'ready', id: '54jv0cspdf4035' },
  { count: 4, date: '02/07/2020', price: '30$', status: 'ready', id: '90s8fvj4h56pds' },
];

const OrdersList = () => {
  return (
    <div>
      <table className={style.table}>
        <thead className={style.head}>
          <tr>
            <th>Date</th>
            <th>Order Id</th>
            <th>Price</th>
            <th>Count</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((item) => {
            return (
              <tr className={style.row}>
                <td>{item.date}</td>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
