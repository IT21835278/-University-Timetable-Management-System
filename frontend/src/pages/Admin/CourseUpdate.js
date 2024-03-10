import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getbyIdCoures, updateCoures } from '../../services/CourseServices';
import { useParams } from 'react-router-dom';

const CourseUpdate = () => {
    const {courseid} = useParams();
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        description: '',
        credit: '',
        faculty: '',
    });

  const { name, code, description, credit, faculty } = formData;

  useEffect(()=>{
    async function fetchrecords(){
        const data = await getbyIdCoures(courseid)
        setFormData(data)
        console.log(data);
    }
    fetchrecords()
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const CourseUpdate = async (e) => {
    e.preventDefault();

    const data = await updateCoures(formData,courseid);

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Course Update Successfully. Thank you!',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="container d-flex align-items-end ">
        <div className="col-lg-6 offset-lg-3 p-4 ">
          <form className="border p-4 bg-light border-dark " onSubmit={CourseUpdate}>
            <p className="fs-3 text-center">Add New Course</p>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Course Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Code</label>
              <input type="text" className="form-control" id="exampleFormControlInput2" name="code" value={formData.code} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">Credit</label>
              <input type="number" className="form-control" id="exampleFormControlInput3" min={0} name="credit" value={formData.credit} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" value={formData.description} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlSelect1" className="form-label">Faculty</label>
              <select className="form-select" id="exampleFormControlSelect1" name="faculty" value={formData.faculty} onChange={handleInputChange} required>
                <option defaultValue>Choose Faculty</option>
                <option value="SE">SE</option>
                <option value="IT">IT</option>
                <option value="BS">BS</option>
                <option value="IM">IM</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default CourseUpdate;
