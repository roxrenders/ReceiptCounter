import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContextApi } from './ContextApi'


const ReceiptList = () => {
    const navigate = useNavigate()
    const {receipts,removeReceipts} = useContextApi()

    const handleAdd =()=>{
        navigate('/Receiptcrud')
    }
    const handlePrint =()=>{
        navigate('/Receiptcrud')
    }
    const handleExit =()=>{
        navigate('/home')
    }

  return (
    <div className='container p-4'>
    <div className='d-flex p-1 justify-content-between text-center '>
        <h1>Reciept List</h1>
        <div >
            <button onClick={handleAdd}>Add</button>
            <button>Refresh</button>
            <button onClick={handlePrint}>Print</button>
            <button onClick={handleExit}>Exit</button>
        </div>
    </div>
   <div>
   <table className="table table-hover  table-striped table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Sr NO.</th>
      <th scope="col">Receipt No </th>
      <th scope="col">Receipt Date</th>
      <th scope="col">Person Name</th>
      <th scope="col">Total Qty</th>
      <th scope="col">Net Amount</th>
      <th scope="col">Remarks</th>
      <th scope="col">  </th>
    </tr>
  </thead>
  <tbody>
  {receipts.map((receipt, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{receipt.receiptNo}</td>
                <td>{receipt.date.toLocaleDateString()}</td>
                <td>{receipt.personName}</td>
                <td>{receipt.totalQty}</td>
                <td>{receipt.netAmount}</td>
                <td>{receipt.remarks}</td>
                <td > <button  onClick={()=>removeReceipts(receipt. receiptNo)}>❌</button></td>
              </tr>
            ))}
  
  </tbody>
</table>
   </div>
    </div>
  )
}

export default ReceiptList
