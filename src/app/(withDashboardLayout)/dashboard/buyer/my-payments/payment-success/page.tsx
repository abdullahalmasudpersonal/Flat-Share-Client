"use client";
import React, { Suspense } from 'react';
import PaymentSuccess from '../../components/paymentSuccess/PaymentSuccess';

const SuccessPage = () => {
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess />
    </Suspense>
);
};

export default SuccessPage;
