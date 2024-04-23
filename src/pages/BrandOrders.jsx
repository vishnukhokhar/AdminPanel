import "../App.css";
const BrandOrders = () => {
  return (
    <>
      <div className="mainBrands">
        <form>
          <button type="button">Export Data</button>
          <button type="button">Export prevData</button>
          <input type="text" name="" id="" placeholder="search" />
          <select>
            <option value="" disabled selected>
              -Select Store-
            </option>
            <option value="">All</option>
            <option value="">The Moody Chef</option>
          </select>
          <select>
            <option value="" disabled selected>
              -All-
            </option>
            <option value="">Due</option>
            <option value="">Processing</option>
            <option value="">Rejected</option>
            <option value="">Cancel</option>
            <option value="">Ready to be picked</option>
            <option value="">On the way</option>
            <option value="">Delivered</option>
          </select>
          <select>
            <option value="" disabled selected>
              -All Operating Zones-
            </option>
            <option value="">All</option>
            <option value="">The Moody Chef</option>
          </select>
          <input type="date" placeholder="date from" />
          <input type="date" placeholder="date till" />
          <button>Go</button>
          <button>Reset</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Order id</th>
              <th>Order Delivered</th>
              <th>Store</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
              <th>Order Status</th>
              <th>Runners</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>__NA__</td>
              <td>__NA__</td>
              <td>__NA__</td>
              <td>__NA__</td>
              <td>__NA__</td>
              <td>__NA__</td>
              <td>__NA__</td>
              <td>__NA__</td>
              <td>__NA__</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BrandOrders;
