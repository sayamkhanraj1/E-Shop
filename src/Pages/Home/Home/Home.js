import React from 'react';
import PaymentHeading from '../../Payment/PaymentHeading/PaymentHeading';
import PaymentMathod from '../../Payment/PaymentMathod/PaymentMathod';
import ShippingInfomation from '../../Payment/ShippingInfomation/ShippingInfomation';
import ShopingCart from '../ShopingCart/ShopingCart';

const Home = () => {
         return (
                  <div>
                  <PaymentHeading />
                  <div className="row">
                           <div className="col-md-5">
                                    <ShippingInfomation />
                           </div>
                           <div className="col-md-3">
                                    <PaymentMathod />
                           </div>
                           <div className="col-md-4">
                                    <ShopingCart />
                           </div>
                  </div>
                  </div>
         );
};

export default Home;