import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addData, updateData } from '../appStore/formDataSlice';




const FormPage = () => {
  const [formData, setFormData] = useState({ id: "", name: "" });
  const { id } = useParams();
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const existingData = data.find((item) => item.id === id);
      if (existingData) {
        setFormData(existingData);
      }
    }
  }, [id, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateData(formData));
    } else {
      dispatch(addData({ ...formData, id: Date.now().toString() }));
    }
    navigate("/");
  };

  return (
    <>
      <div className="container mt-5">
        <h1>{id ? "Update" : "Add"} Data</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormPage;
