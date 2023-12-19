// ReceiptContext.js
import React, { createContext, useContext, useState } from 'react';

const ContextApi = createContext();

export const Provider = ({ children }) => {
  const [receipts, setReceipts] = useState([]);
  console.log(receipts)

  const addReceipt = (newReceipt) => {
    setReceipts((prevReceipts) => [...prevReceipts, newReceipt]);
  };

  const removeReceipts = (receiptNumber) => {
    const updatedReceipts = receipts.filter((receipt) => receipt.receiptNo !== receiptNumber);
    setReceipts(updatedReceipts);
  };
 
  return (
    <ContextApi.Provider value={{ receipts, addReceipt, removeReceipts }}>
      {children}
    </ContextApi.Provider>
  );
};

export const useContextApi = () => {
  return useContext(ContextApi);
};
