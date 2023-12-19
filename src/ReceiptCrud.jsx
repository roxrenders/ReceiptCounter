import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid';
import { useContextApi } from './ContextApi';

export const ReceiptCrud = ({addReceiptList}) => {
  const navigate = useNavigate()
  const {addReceipt} = useContextApi()


  const [personName, setPersonName] = useState('');
  const [remarks, setRemarks] = useState('');
  const [netAmount, setNetAmount] = useState();
  const [receiptNo, setReceiptNo] = useState(nanoid);
  const [date, setDate] = useState(new Date());

  
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState();
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState();

  useEffect(() => {
    const calculatedAmount = quantity * rate;
    setAmount(calculatedAmount);
  
   const calculatedNetAmount = amount - discount;
   setNetAmount(calculatedNetAmount);

  }, [quantity, rate,amount,discount]);

  const handleSave = () => {
  
    const newReceipt = {
      receiptNo,
      date,
      personName,
      totalQty: quantity,
      netAmount,
      remarks,
    };
    
    addReceipt(newReceipt);
    navigate('/home');
  };


  const handleCancel =()=>{
      navigate('/home')
  }
  const handlePrint =()=>{
      navigate('/home')
  }
  

  return (
    <>
    <div className='container p-4  '>
    <div className='d-flex p-1 justify-content-between text-center '>
        <h1>Reciept CRUD</h1>
        <div >
            <button onClick={handleSave} >Save</button>
            <button onClick={handleCancel}>Exit</button>
            <button>Refresh</button>
            <button onClick={handlePrint}>Print</button>
        </div>
    </div>


   <div className='container p-4 border border-secondary '>
    <div className='d-flex justify-content-between '>
      <h6 className='border border-secondary p-2'>Receipt No - {receiptNo}</h6>
      <h6 className='border border-secondary p-2'>Receipt Date - {date.toLocaleDateString()}</h6>
    </div>

  <div>
    <td><textarea name="personName" value={personName} onChange={e=>setPersonName(e.target.value)} placeholder=' Full Name'  cols="20" rows="1">Person Name</textarea> </td>
    </div>

  <div className='container'>
   <table className="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Sr NO.</th>
      <th scope="col">Description</th>
      <th scope="col">Unit</th>
      <th scope="col">Rate</th>
      <th scope="col">Qty</th>
      <th scope="col">Discount</th>
      <th scope="col">Amount</th>
    
    </tr>
  </thead>
  <tbody>
  
  <tr >
    <td></td>
    <td><input type="text" class="form-control"  name='description' rows=''/></td>
    <td><input type="text" class="form-control" name='unit' /></td>
    <td><input type="number" class="form-control" name='rate'  value={rate}
                onChange={(e) => setRate((e.target.value))} /></td>
    <td><input type="number" class="form-control" name='qty'  value={quantity}
                onChange={(e) => setQuantity((e.target.value))} /></td>
    <td><input type="number" class="form-control" name='discount'  value={discount}
                onChange={(e) => setDiscount((e.target.value))} /></td>
    <td  name='amount'>{amount}</td>
    
  </tr>
  </tbody>
</table>
</div>

<div className='d-flex justify-content-between'>
<div className="mb-3 col-4">
  <h5>Remarks</h5>
  <textarea className="form-control" id="remarks" rows="6"  value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Enter your remarks here"></textarea>
</div>
      <div className='border border-secondary p-2 row-2'>
         <h5>Total Quantity - </h5>
        <h5>{quantity} </h5>
      </div>

      <div >
        <h5 className='border border-secondary p-2 '>Total - {amount}</h5>
        <h5 className='border border-secondary p-2 '>Discount - {discount} </h5>
        <h5 className='border border-secondary p-2 '>NetAmount - {netAmount}</h5>
      </div>
    </div>
   </div>
    </div>
    </>
  )
}
