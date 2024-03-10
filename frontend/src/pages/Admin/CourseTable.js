import React, { useEffect, useState } from 'react';
import { getAllCoures } from '../../services/CourseServices';
import { Link } from 'react-router-dom';

const CourseTable = () => {
    const [record, setRecord] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        async function fetchRecord() {
            const data = await getAllCoures();
            setRecord(data);
        }
        fetchRecord();
    }, []);

    const filteredRecord = Array.isArray(record) ? record.filter(reco =>
        reco.code?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reco.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reco.faculty?.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    return (
        <div > 
            <div className='container'>
            <div className="d-flex justify-content-end mt-3">
                <input type='text' placeholder='Search' className='form-control w-50 border-dark bg-Light mb-3' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div>
                <table className="table table-hover border-dark">
                    <thead className='table-secondary'>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Credit</th>
                            <th>Faculty</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecord.length > 0 ? (
                            filteredRecord.map(reco => (
                                <tr key={reco._id}>
                                    <td>{reco.code}</td>
                                    <td>{reco.name}</td>
                                    <td>{reco.credit}</td>
                                    <td>{reco.faculty}</td>
                                    <td><button className='btn border-dark ps-4 pe-4'><Link className='text-decoration-none text-dark' to={`/cource-update/${reco._id}`}>Edit</Link></button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5"> No Record Available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default CourseTable;
