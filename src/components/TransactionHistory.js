<<<<<<< HEAD
import React from 'react';
import '../App.css';
=======
// import React from 'react';
// import '../App.css';

// const TransactionHistory = ({ transactions, deleteTransaction }) => {
//   return (
//     <div className="transaction-history">
//       <h3>Transaction History</h3>
//       {transactions.length === 0 ? (
//         <p>No transactions available.</p>
//       ) : (
//         transactions.map((transaction, index) => (
//           <div key={index} className="transaction">
//             <div className="trans_container">
//               <div className='trans_1'>
//                 <div className='transaction_category'>{transaction.category}</div>
//                 <div className='transaction_amount'>${transaction.amount}</div>
//               </div>
//               <div className='trans_2'>
//                 <div>{transaction.type}</div>
//                 <div className='bin'>
//                   <button onClick={() => deleteTransaction(index)}>
//                     <i className="fa-solid fa-trash"></i> {/* Updated to solid style */}
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className='transaction_description'>{transaction.description}</div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default TransactionHistory;

import React from "react";
import "../App.css";
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368

const TransactionHistory = ({ transactions, deleteTransaction }) => {
  return (
    <div className="w-full h-full px-8 bg-[##F9F9F9] flex flex-col items-start justify-start">
      <h3 className="text-3xl font-bold py-8">Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        transactions.map((transaction, index) => (
          <div key={index} className="transaction">
            <div className="trans_container">
              <div className="trans_1">
                <div className="transaction_category">
                  {transaction.category}
                </div>
                <div className="transaction_amount">${transaction.amount}</div>
              </div>
<<<<<<< HEAD
              <div className='trans_2'>
                <div className='bin_side'>{transaction.type}</div>
                <div className='bin'>
=======
              <div className="trans_2">
                <div>{transaction.type}</div>
                <div className="bin">
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368
                  <button onClick={() => deleteTransaction(index)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="transaction_description">
              {transaction.description}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionHistory;
