import React, { useEffect, useState } from 'react';
import { getAllHall } from '../../../services/Hallservice';
import axios from 'axios';
import { toast } from 'react-toastify';

const Createtimetable = () => {
    const [hallrecord, setHallrecord] = useState([]);
    const [formData, setFormData] = useState({
        faculty:'',
        semester:'',
        year:'',
        // details8_30to10_30: { courseid: '', hallId: '' }, // Provide initial structure
        details10_30to12_30: { courseid: '', hallId: '' }, // Provide initial structure
        details1_30to3_30: { courseid: '', hallId: '' }, // Provide initial structure
        details3_30to5_30: { courseid: '', hallId: '' }, // Provide initial structure
        monday: { 
            details8_30to10_30: { courseid: '', hallId: '' },
            details10_30to12_30: { courseid: '', hallId: '' },
            details1_30to3_30: { courseid: '', hallId: '' },
            details3_30to5_30: { courseid: '', hallId: '' },
        }, // Provide initial structure
        tuesday: { 
            details8_30to10_30: { courseid: '', hallId: '' },
            details10_30to12_30: { courseid: '', hallId: '' },
            details1_30to3_30: { courseid: '', hallId: '' },
            details3_30to5_30: { courseid: '', hallId: '' },
        },
        wednesday:{ 
            details8_30to10_30: { courseid: '', hallId: '' },
            details10_30to12_30: { courseid: '', hallId: '' },
            details1_30to3_30: { courseid: '', hallId: '' },
            details3_30to5_30: { courseid: '', hallId: '' },
        },
        thursday: { 
            details8_30to10_30: { courseid: '', hallId: '' },
            details10_30to12_30: { courseid: '', hallId: '' },
            details1_30to3_30: { courseid: '', hallId: '' },
            details3_30to5_30: { courseid: '', hallId: '' },
        },
        friday: { 
            details8_30to10_30: { courseid: '', hallId: '' },
            details10_30to12_30: { courseid: '', hallId: '' },
            details1_30to3_30: { courseid: '', hallId: '' },
            details3_30to5_30: { courseid: '', hallId: '' },
        },
    })
    

    const {
        faculty,
        semester,
        year,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,

    } =formData

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


    const  createTimeTable = async(e)=>{
        e.preventDefault();
        try{
            const responce = axios.CreateTimeTable(formData)
            if(responce){
                toast.success("Time Table Created successfully")
            }

        }catch(e){
            console.error(e)
        }

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
    console.log(formData)


    return (
        <div className='container'>
            <form onSubmit={createTimeTable}>
                <div className='d-flex'>
                <div className="input-group mb-3 m-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Faculty</span>
                    <select className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name='faculty' value={faculty} onChange={handleInputChange} required>
                            <option selected>Choose one</option>
                            <option>SE</option>
                            <option>IT</option>
                        </select>
                </div>
                <div class="input-group mb-3 m-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Year</span>
                    <select  className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name='year' value={year} onChange={handleInputChange} required>
                            <option selected>Choose one</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                    </select>
                </div>
                <div class="input-group mb-3 m-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Semester</span>
                    <select className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name='semester' value={semester} onChange={handleInputChange} required>
                            <option selected>Choose one</option>
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
                            <td className='bg-secondary'>8.30 - 10.30 </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='monday.details8_30to10_30.courseid' value={monday.details8_30to10_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select name='monday.details8_30to10_30.hallId' value={monday.details8_30to10_30.hallId} onChange={handleInputChange}>
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.monday.time8_30to10_30}>{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='tuesday.details8_30to10_30.courseid' value={tuesday.details8_30to10_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={tuesday.details8_30to10_30.hallId} name='tuesday.details8_30to10_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.tuesday.time8_30to10_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code'  name='wednesday.details8_30to10_30.courseid' value={wednesday.details8_30to10_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={wednesday.details8_30to10_30.hallId} name='wednesday.details8_30to10_30.hallId' onChange={handleInputChange} >
                                    <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.wednesday.time8_30to10_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='thursday.details8_30to10_30.courseid' value={thursday.details8_30to10_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={thursday.details8_30to10_30.hallId} name='thursday.details8_30to10_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.thursday.time8_30to10_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='friday.details8_30to10_30.courseid' value={friday.details8_30to10_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={friday.details8_30to10_30.hallId} name='friday.details8_30to10_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.friday.time8_30to10_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                        </tr>

                         {/* 10.30-12.30 */}
                         <tr>
                            <td className='bg-secondary'>10.30 - 12.30 </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='monday.details10_30to12_30.courseid' value={monday.details10_30to12_30.courseid} onChange={handleInputChange} /></div>
                                <div>
                                    <select value={monday.details10_30to12_30.hallId} name='monday.details10_30to12_30.hallId' onChange={handleInputChange} >
                                    <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.monday.time10_30to12_30}>{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='tuesday.details10_30to12_30.courseid' value={tuesday.details10_30to12_30.courseid} onChange={handleInputChange} /></div>
                                <div>
                                    <select value={tuesday.details10_30to12_30.hallId} name='tuesday.details10_30to12_30.hallId' onChange={handleInputChange} >
                                    <option selected>Select</option>

                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.tuesday.time10_30to12_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='wednesday.details10_30to12_30.courseid' value={wednesday.details10_30to12_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={wednesday.details10_30to12_30.hallId} name='wednesday.details10_30to12_30.hallId' onChange={handleInputChange} >
                                    <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.wednesday.time10_30to12_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='thursday.details10_30to12_30.courseid' value={thursday.details10_30to12_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={thursday.details10_30to12_30.hallId} name='thursday.details10_30to12_30.hallId' onChange={handleInputChange} >
                                    <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.thursday.time10_30to12_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='friday.details10_30to12_30.courseid' value={friday.details10_30to12_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={friday.details10_30to12_30.hallId} name='friday.details10_30to12_30.hallId' onChange={handleInputChange} >
                                    <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.friday.time10_30to12_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                        </tr>


                        {/* 1.30 to 3.30  */}
                        <tr>
                            <td className='bg-secondary'>1.30 - 3.30 </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='monday.details1_30to3_30.courseid' value={monday.details1_30to3_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={monday.details1_30to3_30.hallId} name='monday.details1_30to3_30.hallId' onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.monday.time1_30to3_30}>{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='tuesday.details1_30to3_30.courseid' value={tuesday.details1_30to3_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={tuesday.details1_30to3_30.hallId} name='tuesday.details1_30to3_30.hallId' onChange={handleInputChange} >
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.tuesday.time1_30to3_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='wednesday.details1_30to3_30.courseid' value={wednesday.details1_30to3_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={wednesday.details1_30to3_30.hallId} name='wednesday.details1_30to3_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.wednesday.time1_30to3_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='thursday.details1_30to3_30.courseid' value={thursday.details1_30to3_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={thursday.details1_30to3_30.hallId} name='thursday.details1_30to3_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.thursday.time1_30to3_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='friday.details1_30to3_30.courseid' value={friday.details1_30to3_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={friday.details1_30to3_30.hallId} name='friday.details1_30to3_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.friday.time1_30to3_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                        </tr>

                        {/* 3.30 to 5.30 */}
                        <tr>
                            <td className='bg-secondary'>3.30 - 5.30 </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='monday.details3_30to5_30.courseid' value={monday.details3_30to5_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={monday.details3_30to5_30.hallId} name='monday.details3_30to5_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.monday.time3_30to5_30}>{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='tuesday.details3_30to5_30.courseid' value={tuesday.details3_30to5_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={tuesday.details3_30to5_30.hallId} name='tuesday.details3_30to5_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.tuesday.time3_30to5_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='wednesday.details3_30to5_30.courseid' value={wednesday.details3_30to5_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={wednesday.details3_30to5_30.hallId} name='wednesday.details3_30to5_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.wednesday.time3_30to5_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='thursday.details3_30to5_30.courseid' value={thursday.details3_30to5_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={thursday.details3_30to5_30.hallId} name='thursday.details3_30to5_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.thursday.time3_30to5_30} >{hallmap.hallName}</option>
                                            ))}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div><input type='text' placeholder='Enter module code' name='friday.details3_30to5_30.courseid' value={friday.details3_30to5_30.courseid} onChange={handleInputChange}/></div>
                                <div>
                                    <select value={friday.details3_30to5_30.hallId} name='friday.details3_30to5_30.hallId' onChange={handleInputChange} >
                                        <option selected>Select</option>
                                        {hallrecord.map((hallmap) => (
                                            <option key={hallmap._id} value={hallmap.hallName} disabled={hallmap.friday.time3_30to5_30} >{hallmap.hallName}</option>
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
