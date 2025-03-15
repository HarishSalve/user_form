import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className='position-absolute top-50 start-50 translate-middle bg-secondary-subtle'>
      <div  className="m-4">
        <h6 className="text-warning">Oops!</h6>
        <h6 className="text-primary">{error?.error?.message}</h6>
        <button
          className="btn btn-success"
          style={{ margin: 20 }}
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Error;
