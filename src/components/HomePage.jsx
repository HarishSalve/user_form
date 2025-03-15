import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="container mt-5">
      <h1>Home Page</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link
                  to={`/update/${item.id}`}
                  className="btn btn-primary me-2"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add" className="btn btn-success">
        Add
      </Link>
    </div>
  );
};

export default HomePage;
