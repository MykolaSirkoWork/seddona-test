import { activityTableData } from "../../../../data";
import { ReactComponent as EthIcon } from "../../../../assets/images/icons/eth.svg";
import { ReactComponent as LinkIcon } from "../../../../assets/images/icons/external-link-icon.svg";

const ActivityTable = () => {
  return (
    <table className="activity-table">
      <thead className="activity-table__head">
        <tr>
          {tableHeaders.map((item, idx) => {
            return (
              <th key={idx} className="h-cell">
                {item}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody className="activity-table__body">
      {activityTableData.map((item) => {
          return (
            <tr className="row">
              <td className="b-cell">
                <div className="cell-item">
                  <div className="img-container">
                    <img src={item.image} alt="item image" />
                  </div>
                  <div className="text">{item.name}</div>
                </div>
              </td>
              <td className="b-cell">
                <div className="cell-price">
                  <EthIcon className="mr-6" />
                  {item.price}
                </div>
              </td>
              <td className="b-cell cell-quantity">{item.quantity}</td>
              <td className="b-cell cell-from">{item.from}</td>
              <td className="b-cell cell-to">{item.to}</td>
              <td className="b-cell">
                <div className="cell-time">
                  {item.time}
                  <a href="">
                    <LinkIcon />
                  </a>
                </div>
              </td>
              </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ActivityTable;


const tableHeaders = ['item', 'price', 'quantity', 'from', 'to', 'time']


    //   <div className="activity-tab__table">
    //     <div className="activity-tab__table-head">
    //         {tableHeaders.map((item, idx) => {
    //           return (
    //             <div key={idx} className="h-cell">{item}</div>
    //           )
    //         })}
    //     </div>
    //     <div className="activity-tab__table-body">
    //       {activityTableData.map((item) => {
    //         return (
    //           <div className="row">
    //             <div className="b-cell cell-item">
    //               <div className="img-container">
    //                 <img src={item.image} alt="item image" />
    //               </div>
    //               <div className="text">{item.name}</div>
    //             </div>
    //             <div className="b-cell cell-price">
    //               <EthIcon className="mr-6" />
    //               {item.price}
    //             </div>
    //             <div className="b-cell cell-quantity">{item.quantity}</div>
    //             <div className="b-cell cell-from">{item.from}</div>
    //             <div className="b-cell cell-to">{item.to}</div>
    //             <div className="b-cell cell-time">
    //               {item.time}
    //               <a href="">
    //                 <LinkIcon />
    //               </a>
    //             </div>
    //             </div>
    //         )
    //       })}
    //   </div>
    // </div>