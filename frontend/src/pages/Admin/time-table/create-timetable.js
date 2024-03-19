import React, { useEffect, useState } from 'react';
import { getAllHall } from '../../../services/Hallservice';

const Createtimetable = () => {
    const [hallrecord, setHallrecord] = useState([]);
    const [formData, setFormData] = useState({
        faculty:'',
        semester:'',
        year:'',
        details8_30to9_30:'',
        details9_30to10_30:'',
        details10_30to11_30:'',
        details11_30to12_30:'',
        details1_30to2_30:'',
        details2_30to3_30:'',
        details3_30to4_30:'',
        details4_30to5_30:'',
        monday:'',
        tuesday:'',
        wednesday:'',
        thursday:'',
        friday:'',
    })

    const {
        faculty,
        semester,
        year,
        details8_30to9_30,
        details9_30to10_30,
        details10_30to11_30,
        details11_30to12_30,
        details1_30to2_30,
        details2_30to3_30,
        details3_30to4_30,
        details4_30to5_30,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday

    } =formData

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


    const  createTimeTable = async(e)=>{
        e.preventDefault();
    }




    useEffect(() => {
        async function fetchHallrecords() {
            const halldata = await getAllHall();
            setHallrecord(halldata);
            console.log(halldata);
        }
        fetchHallrecords();
    }, []);
    // disabled={hallmap.availableTime.time8_30to9_30}


    return (
        <div className='container'>
            <form>
                <div className='d-flex'>
                <div className="input-group mb-3 m-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Faculty</span>
                    <select className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name='faculty' value={faculty} onChange={handleInputChange} required>
                            <option>SE</option>
                            <option>IT</option>
                        </select>
                </div>
                <div class="input-group mb-3 m-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Year</span>
                    <select  className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name='year' value={year} onChange={handleInputChange} required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                    </select>
                </div>
                <div class="input-group mb-3 m-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Semester</span>
                    <select className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name='semester' value={semester} onChange={handleInputChange} required>
                            <option>1</option>
                            <option>2</option>
                        </select>
                </div>
                </div>

                <table className="table table-hover border-dark">
                    <thead className='table-secondary'>
                        <tr>
                            <th className='bg-secondary'>Time</th>
                            <th className='text-center'>Monday</th>
                            <th className='text-center'>Tuesday</th>
                            <th className='text-center'>Wednesday</th>
                            <th className='text-center'>Thursday</th>
                            <th className='text-center'>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='bg-secondary'>8.30 - 9.30 </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='monday.details8_30to9_30.courseId' value={monday.details8_30to9_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select name='monday.details8_30to9_30.hallId' value={monday.details8_30to9_30.hallId} onChange={handleInputChange}>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.monday.time8_30to9_30}>{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='tuesday.details8_30to9_30.courseId' value={tuesday.details8_30to9_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={tuesday.hallmap.hallName} disabled={tuesday.hallmap.tuesday.time8_30to9_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'/></div>
                                <div>
                                    <select value={wednesday.details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.wednesday.time8_30to9_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'/></div>
                                <div>
                                    <select value={details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.thursday.time8_30to9_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'/></div>
                                <div>
                                    <select value={details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.friday.time8_30to9_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                        </tr>

                         {/* 9.30-10.30 */}
                         <tr>
                            <td className='bg-secondary'>9.30 - 10.30 </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'/></div>
                                <div>
                                    <select value={details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.monday.time8_30to10_30}>{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'/></div>
                                <div>
                                    <select value={details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.tuesday.time8_30to10_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'/></div>
                                <div>
                                    <select value={details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.wednesday.time8_30to10_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'/></div>
                                <div>
                                    <select value={details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.thursday.time8_30to10_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'/></div>
                                <div>
                                    <select value={details8_30to9_30.hallId} onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.friday.time8_30to10_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                        </tr>


                        
                    </tbody>
                </table>
                <button className='btn btn-success' type='submit'>Submit</button>
                </form>
        </div>
    );
}

export default Createtimetable;
