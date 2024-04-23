import { tableData } from "../data/data";
function Tables() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Total Orders</th>
          </tr>
        </thead>

        <tr>
          <th className="heading">Name</th>
          <th className="heading">Age</th>
          <th className="heading">Email</th>
        </tr>
        {tableData.map((props) => {
          const { id, name, age, email } = props;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Tables;
