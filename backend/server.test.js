const request = require("supertest");
const app = require("./server");
const protect = require("./middleware/authMiddleware");

describe('Course API Testing...', () => {
    let testcid;
    it('test case 1 ---> getAllCourses(get) API ', () => {
        return request(app)
            .get('/api/course')
            .expect('Content-Type', /json/)
            .expect(200)
            .timeout(10000)
            .then((response) => {
                // Check if response body is an array of course objects
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            name: expect.any(String),
                            code: expect.any(String),
                            description: expect.any(String),
                            credit: expect.any(Number),
                            faculty: expect.any(String),
                            semester: expect.any(String),
                            acYear: expect.any(String),
                        })
                    ])
                );
            });
    });

    it('test case 2 ---> getCourseById(get) API ', () => {
        return request(app)
            .get('/api/course/65e9aeb63c8de7aa5a45da4c')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        _id: expect.any(String),
                        name: expect.any(String),
                        code: expect.any(String),
                        description: expect.any(String),
                        credit: expect.any(Number),
                        faculty: expect.any(String),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                        __v: expect.any(Number),
                        lecturer: expect.any(Array) 
                    })
                );
            });
        });


        it('test case 3 --> CreateCourse(post) API', () => {
            return request(app)
                .post('/api/course')
                .send({
                    name: 'Cname',
                    code: 'C1',
                    description: 'Cdescription',
                    credit: 2,
                    faculty: 'IT',
                    semester: '1',
                    acYear: '1'
                })
                .expect(201)
                .then((response) => {
                    testcid = response.body._id
                    expect(response.body).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            name: 'Cname',
                            code: 'C1',
                            description: 'Cdescription',
                            credit: 2,
                            faculty: 'IT',
                            semester: '1',
                            acYear: '1',
                            __v: expect.any(Number),
                            lecturer: expect.any(Array),
                        })
                    );
                });
        });



        it('test case 4 --> updateCourse(patch) API', () => {
            return request(app)
                .patch(`/api/course/${testcid}`)
                .send({
                    name: 'CnameUpdate',
                    code: 'code1',
                    description: 'Cdescription update',
                    credit: 3,
                    faculty: 'SE',
                    semester: '2',
                    acYear: '2'
                })
                .expect(200)
                .then((response) => {
                    expect(response.body).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            name: 'CnameUpdate',
                            code: 'code1',
                            description: 'Cdescription update',
                            credit: 3,
                            faculty: 'SE',
                            semester: '2',
                            acYear: '2',
                            __v: expect.any(Number),
                            lecturer: expect.any(Array),
                        })
                    );
                });
        });


        it('test case 5 --> deleteCourse(delete) API', () => {
            return request(app)
                .delete(`/api/course/remove-course/${testcid}`).expect(202)
                
        });

    });



    let testuserid;
    let logintoken;
//-------------------Auth API testing-------------------
    describe('Auth API Testing', () => {
        
        it(' Test case 1 ---> register API ', () => {
            return request(app)
                .post('/api/user/register')
                .send({
                    userID: 'testId',
                    name: 'testname',
                    email: 'test@gmail.com',
                    password: '1234567',
                    faculty: 'IT',
                    phone: '0717586321',
                    usertype: 'Faculty'
                })
                .expect(201)
                .then((response) => {
                    testuserid = response.body._id
                    expect(response.body).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            email: 'test@gmail.com',
                            faculty: 'IT',
                            name: 'testname',
                            phone: '0717586321',
                            usertype: 'Faculty',
                        })
                    );
                });
        });

        it(' Test case 2 ---> login API ', () => {
            return request(app)
                .post('/api/user')
                .send({
                    email: 'test@gmail.com',
                    password: '1234567',
                })
                .expect(200)
                .then((response) => {
                    logintoken = response.body.token
                    expect(response.body).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            email: 'test@gmail.com',
                            faculty: 'IT',
                            name: 'testname',
                            phone: '0717586321',
                            usertype: 'Faculty',
                        })
                    );
                });
        });
        

        it('test case 3 ---> getAllUser(get) API ', () => {
            return request(app)
                .get('/api/user/all-users')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((response) => {
                    expect(response.body).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({
                                email: expect.any(String),
                                faculty: expect.any(String),
                                name: expect.any(String),
                                phone: expect.any(String),
                                usertype: expect.any(String),
                            })
                        ])
                    );
                });
        });

        it('test case 4 ---> getUserById(get) API ', () => {
            return request(app)
                .get(`/api/user/get-user/${testuserid}`)
                .expect('Content-Type', /json/)
                .expect(200)
                .then((response) => {
                    expect(response.body).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            email: expect.any(String),
                            faculty: expect.any(String),
                            name: expect.any(String),
                            phone: expect.any(String),
                            usertype: expect.any(String),
                        })
                    );
                });
        });
   
    });
    console.log("test token");
        console.log(logintoken);



//---------------------- Enroll API ------------------------------
describe('Enroll API Testing...', () => {
    // it('Test case 1 ---> EnrollCourse API ', () => {
    //     return request(app)
    //         .post('/api/enroll')
    //         .set(`${protect}`, `${logintoken}`)
    //         .send({
    //             Sid: 'testId',
    //             semester: 1,
    //             acYear: 1,
    //             faculty: 'IT'
    //         })
    //         .expect(201)
    //         .then((response) => {
    //             expect(response.body).toEqual(
    //                 expect.objectContaining({
    //                     _id: expect.any(String),
    //                     Sid: 'testId',
    //                     semester: 1,
    //                     acYear: 1,
    //                     faculty: 'IT'
    //                 })
    //             );
    //         });
    // });




    it('Test case 2 ---> EnrollCourse API ', () => {
        return request(app)
            .get('/api/enroll')
            .expect(200)
            .then((response) => {
                expect(Array.isArray(response.body)).toBe(true);
    
                response.body.forEach(enrollment => {
                    expect(enrollment).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            refid: expect.any(String),
                            Sid: expect.any(String),
                            semester: expect.any(Number),
                            acYear: expect.any(Number),
                            faculty: expect.any(String)
                        })
                    );
                });
            });
    });

});




describe('Hall API Testing...', () => {
    let testhallid;
    it(' Test case 2 ---> createNewHall(post) API ', () => {
        return request(app)
            .post('/api/hall')
            .send({
                hallName:'testHall',
                capacity:20,
                typeofhall:'lecture',
            })
            .expect(201)
            .then((response) => {
                testhallid = response.body._id
                expect(response.body).toEqual(
                    expect.objectContaining({
                        _id: expect.any(String),
                        hallName:'testHall',
                        capacity:20,
                        typeofhall:'lecture',
                        monday:expect.any(Object),
                        tuesday:expect.any(Object),
                        wednesday:expect.any(Object),
                        thursday:expect.any(Object),
                        friday:expect.any(Object),
                        
                    })
                );
            });
    });

    it('Test case 2 ---> getAllHalls{get} API ', () => {
        return request(app)
            .get('/api/hall')
            .expect(200)
            .then((response) => {
                expect(Array.isArray(response.body)).toBe(true);
    
                response.body.forEach(enrollment => {
                    expect(enrollment).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            hallName:expect.any(String),
                            capacity:expect.any(Number),
                            typeofhall:expect.any(String),
                            monday:expect.any(Object),
                            tuesday:expect.any(Object),
                            wednesday:expect.any(Object),
                            thursday:expect.any(Object),
                            friday:expect.any(Object),
                        })
                    );
                });
            });
    });

    it(' Test case 3 ---> updateNewHall(patch) API ', () => {
        return request(app)
            .patch(`/api/hall/${testhallid}`)
            .send({
                hallName:'UpdatetestHall',
                capacity:30,
                typeofhall:'updateLecture',
            })
            .expect(202)
            .then((response) => {
                testhallid = response.body._id
                expect(response.body).toEqual(
                    expect.objectContaining({
                        _id: expect.any(String),
                        hallName:'UpdatetestHall',
                        capacity:30,
                        typeofhall:'updateLecture',
                        monday:expect.any(Object),
                        tuesday:expect.any(Object),
                        wednesday:expect.any(Object),
                        thursday:expect.any(Object),
                        friday:expect.any(Object),
                        
                    })
                );
            });
    });


    it('test case 4 --> deleteHall(delete) API', () => {
        return request(app)
            .delete(`/api/hall/${testhallid}`).expect(202)
            
    });

})



//-------------------------------Time table API -----------------------
describe('Time Table API(end) Testing...', () => {
    let testtableid;
    it('Test case 1 ---> createTimeTable(post) API', () => {
        return request(app)
            .post('/api/time-table')
            .send({
                faculty: 'SE',
                semester: 2,
                year: 2,
                monday: {
                    details8_30to10_30: {
                        courseid: 'h1',
                        hallId: 'ww'
                    },
                    details10_30to12_30: {
                        courseid: 'h1',
                        hallId: 'ww'
                    },
                },
                tuesday: {
                    details8_30to10_30: {
                        courseid: 'h1',
                        hallId: 'ww'
                    },
                    details10_30to12_30: {
                        courseid: 'h1',
                        hallId: 'ww'
                    },
                },
                wednesday: {
                    details8_30to10_30: {
                        courseid: 'h1',
                        hallId: 'ww'
                    },
                    details10_30to12_30: {
                        courseid: 'h1',
                        hallId: 'ww'
                    },
                },
            })
            .expect(201)
            .then((response) => {
                testtableid = response.body._id
                expect(response.body).toEqual(
                    expect.objectContaining({
                        _id: expect.any(String),
                        faculty: 'SE',
                        semester: 2,
                        year: 2,
                    })
                );
            });
    });



    it('Test case 2 ---> getAllTimeTables{get} API ', () => {
        return request(app)
            .get('/api/time-table')
            .expect(200)
            .then((response) => {
                expect(Array.isArray(response.body)).toBe(true);
    
                response.body.forEach(enrollment => {
                    expect(enrollment).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            faculty:expect.any(String),
                            semester:expect.any(Number),
                            year:expect.any(Number),
                            monday:expect.any(Object),
                            tuesday:expect.any(Object),
                            wednesday:expect.any(Object),
                            thursday:expect.any(Object),
                            friday:expect.any(Object),
                        })
                    );
                });
            });
    });


    it('test case 3 --> deleteTimetable(delete) API', () => {
        return request(app)
           .delete(`/api/time-table/${testtableid}`)
           .expect(200)
           .timeout(15000); // Increase timeout to 10 seconds (10000 ms)
    });
    
    
    
})


//------------------------------Anounsment API Test ---------------------------------
describe('Auth API(end) Testing...', () => {
    it(' Test case 2 ---> createAnnousement(post) API ', () => {
        return request(app)
            .post('/api/annousement')
            .send({
                title:'testTitle',
                anousement:'TestAnousment',
                semester:2,
                acYear:2,
                faculty:'SE',
            })
            .expect(201)
            .then((response) => {
                testhallid = response.body._id
                expect(response.body).toEqual(
                    expect.objectContaining({
                        _id: expect.any(String),
                        title:'testTitle',
                        anousement:'TestAnousment',
                        semester:2,
                        acYear:2,
                        faculty:'SE',
                        
                    })
                );
            });
    });

    it('Test case 2 ---> getAllTimeTables{get} API ', () => {
        return request(app)
            .get('/api/annousement/get-annousement')
            .expect(200)
            .timeout(10000)
            .then((response) => {
                expect(Array.isArray(response.body)).toBe(true);
    
                response.body.forEach(enrollment => {
                    expect(enrollment).toEqual(
                        expect.objectContaining({
                            _id: expect.any(String),
                            title:expect.any(String),
                            anousement:expect.any(String),
                            semester:expect.any(Number),
                            acYear:expect.any(Number),
                            faculty:expect.any(String),
                        })
                    );
                });
            });
    });
})



describe('Auth API(end) Testing...', () => {
    it('test case 5 --> logout(get) API', () => {
        return request(app)
            .get(`/api/user`).expect(200)
            
    });


     it('test case 6 --> deleteUser(delete) API', () => {
         return request(app)
            .delete(`/api/user/${testuserid}`).expect(202)            
    });

})
