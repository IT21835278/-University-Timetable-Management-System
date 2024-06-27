import React, { useEffect, useState } from 'react';
import { getAllHall } from '../../../services/Hallservice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AddTimeTable } from '../../../services/TimetableService';

const Createtimetable = () => {
    const [hallrecord, setHallrecord] = useState([]);
    const [formData, setFormData] = useState({
        faculty: '',
        semester: '',
        year: '',
        monday: { 
            details8_30to10_30: { courseid: '', hallId: '' },
            details10_30to12_30: { courseid: '', hallId: '' },
            details1_30to3_30: { courseid: '', hallId: '' },
            details3_30to5_30: { courseid: '', hallId: '' },
        }, 
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
    });

    const createTimeTable = async (e) => {
        e.preventDefault();
        try {
            const response = await AddTimeTable(formData); // Replace with your actual API endpoint
            if (response) {
                toast.success("Time Table Created successfully");
            }
        } catch (e) {
            console.error(e);
            toast.error("Failed to create Time Table");
        }
    };

    useEffect(() => {
        async function fetchHallrecords() {
            const halldata = await getAllHall();
            setHallrecord(halldata);
        }
        fetchHallrecords();
    }, []);

    return (
        <div className='container'>
            <form onSubmit={createTimeTable}>
                <div className='d-flex'>
                    <div className="input-group mb-3 m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Faculty</span>
                        <select 
                            className='form-control' 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                            name='faculty' 
                            value={formData.faculty} 
                            onChange={(e) => setFormData({ ...formData, faculty: e.target.value })} 
                            required
                        >
                            <option value="" disabled>Choose one</option>
                            <option>SE</option>
                            <option>IT</option>
                        </select>
                    </div>
                    <div className="input-group mb-3 m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Year</span>
                        <select 
                            className='form-control' 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                            name='year' 
                            value={formData.year} 
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })} 
                            required
                        >
                            <option value="" disabled>Choose one</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="input-group mb-3 m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Semester</span>
                        <select 
                            className='form-control' 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                            name='semester' 
                            value={formData.semester} 
                            onChange={(e) => setFormData({ ...formData, semester: e.target.value })} 
                            required
                        >
                            <option value="" disabled>Choose one</option>
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
                        {['8_30to10_30', '10_30to12_30', '1_30to3_30', '3_30to5_30'].map((timeSlot) => (
                            <tr key={timeSlot}>
                                <td className='bg-secondary'>{timeSlot.replace(/_/g, ':').replace('to', ' - ')}</td>
                                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
                                    <td key={day}>
                                        <div>
                                            <input 
                                                type='text' 
                                                placeholder='Enter module code' 
                                                name={`${day}.${timeSlot}.courseid`} 
                                                value={formData[day][`details${timeSlot}`].courseid} 
                                                onChange={(e) => setFormData({
                                                    ...formData,
                                                    [day]: {
                                                        ...formData[day],
                                                        [`details${timeSlot}`]: {
                                                            ...formData[day][`details${timeSlot}`],
                                                            courseid: e.target.value
                                                        }
                                                    }
                                                })}
                                            />
                                        </div>
                                        <div>
                                            <select 
                                                name={`${day}.${timeSlot}.hallId`} 
                                                value={formData[day][`details${timeSlot}`].hallId} 
                                                onChange={(e) => setFormData({
                                                    ...formData,
                                                    [day]: {
                                                        ...formData[day],
                                                        [`details${timeSlot}`]: {
                                                            ...formData[day][`details${timeSlot}`],
                                                            hallId: e.target.value
                                                        }
                                                    }
                                                })}
                                            >
                                                <option value="" disabled>Select</option>
                                                {hallrecord.map((hallmap) => (
                                                    <option 
                                                        key={hallmap._id} 
                                                        value={hallmap.hallName} 
                                                        disabled={hallmap[day]?.[`time${timeSlot.replace(/_/g, ':')}`]}
                                                    >
                                                        {hallmap.hallName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='btn btn-success' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Createtimetable;
