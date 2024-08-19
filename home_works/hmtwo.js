School {
    _areas: [
      {
        name: 'Computer Science',  // Area name
        _levels: [                 // Levels within the Area
          {
            name: 'Undergraduate', // Level name
            description: 'Bachelor of Science in CS', // Level description
            _groups: [
              {
                directionName: 'Software Engineering', // Group's direction name
                levelName: 'Undergraduate',            // Group's level name
                _area: {                               // Reference to Area object
                  name: 'Computer Science',            // Area name
                  _levels: [
                    {
                      name: 'Undergraduate',           // Level name
                      description: 'Bachelor of Science in CS', // Level description
                      _groups: [
                        {
                          directionName: 'Software Engineering', // This group (circular reference)
                          levelName: 'Undergraduate',  // Group's level name
                          _area: {                     // Circular reference to Area
                            name: 'Computer Science',  // Area name
                            _levels: [ /* This level and other levels in this area */ ]
                          },
                          _status: 'Active',           // Group status
                          _students: [
                            {
                              _firstName: 'John',      // Student's first name
                              _lastName: 'Doe',        // Student's last name
                              _birthYear: 2000,        // Student's birth year
                              _grades: {               // Grades for various works
                                "Math Exam 1": 85,
                                "Science Project": 90,
                              },
                              _visits: {               // Attendance record
                                "2024-08-01": true,
                                "2024-08-02": false,
                              },
                              getPerformanceRating(): 87.5 // Method to calculate performance
                            },
                            {
                              _firstName: 'Jane',      // Another Student
                              _lastName: 'Smith',      // Student's last name
                              _birthYear: 2001,        // Student's birth year
                              _grades: {
                                "Math Exam 1": 92,
                                "Science Project": 88,
                              },
                              _visits: {
                                "2024-08-01": true,
                                "2024-08-02": true,
                              },
                              getPerformanceRating(): 90 // Example performance rating
                            }
                          ]
                        },
                        {
                          directionName: 'Data Science', // Another group within the same Level
                          levelName: 'Undergraduate',    // Group's level name
                          _area: {                       // Reference to Area object
                            name: 'Computer Science',    // Area name
                            _levels: [ /* Levels within this Area */ ]
                          },
                          _status: 'Active',             // Group status
                          _students: [
                            {
                              _firstName: 'Alice',     // Student's first name
                              _lastName: 'Brown',      // Student's last name
                              _birthYear: 1999,        // Student's birth year
                              _grades: {
                                "Data Science Project": 95,
                                "Statistics Exam": 88,
                              },
                              _visits: {
                                "2024-08-01": true,
                                "2024-08-02": false,
                              },
                              getPerformanceRating(): 91.5 // Example performance rating
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'Graduate',                // Another Level within the same Area
                      description: 'Master of Science in CS', // Level description
                      _groups: [
                        {
                          directionName: 'Artificial Intelligence', // Group's direction name
                          levelName: 'Graduate',        // Group's level name
                          _area: {                      // Reference to Area object
                            name: 'Computer Science',   // Area name
                            _levels: [ /* Levels within this Area */ ]
                          },
                          _status: 'Active',            // Group status
                          _students: [
                            {
                              _firstName: 'Bob',        // Student's first name
                              _lastName: 'Green',       // Student's last name
                              _birthYear: 1998,         // Student's birth year
                              _grades: {
                                "AI Final Project": 90,
                                "Machine Learning Exam": 85,
                              },
                              _visits: {
                                "2024-08-01": true,
                                "2024-08-02": true,
                              },
                              getPerformanceRating(): 87.5 // Example performance rating
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                _status: 'Active',                     // Group status
                _students: [
                  {
                    _firstName: 'John',                // Student's first name
                    _lastName: 'Doe',                  // Student's last name
                    _birthYear: 2000,                  // Student's birth year
                    _grades: {                         // Grades for various works
                      "Math Exam 1": 85,
                      "Science Project": 90,
                    },
                    _visits: {                         // Attendance record
                      "2024-08-01": true,
                      "2024-08-02": false,
                    },
                    getPerformanceRating(): 87.5       // Method to calculate performance
                  },
                  {
                    _firstName: 'Jane',                // Another Student
                    _lastName: 'Smith',                // Student's last name
                    _birthYear: 2001,                  // Student's birth year
                    _grades: {
                      "Math Exam 1": 92,
                      "Science Project": 88,
                    },
                    _visits: {
                      "2024-08-01": true,
                      "2024-08-02": true,
                    },
                    getPerformanceRating(): 90         // Example performance rating
                  }
                ]
              },
              {
                directionName: 'Data Science',         // Another group within the same Level
                levelName: 'Undergraduate',            // Group's level name
                _area: {                               // Reference to Area object
                  name: 'Computer Science',            // Area name
                  _levels: [ /* Levels within this Area */ ]
                },
                _status: 'Active',                     // Group status
                _students: [
                  {
                    _firstName: 'Alice',               // Student's first name
                    _lastName: 'Brown',                // Student's last name
                    _birthYear: 1999,                  // Student's birth year
                    _grades: {
                      "Data Science Project": 95,
                      "Statistics Exam": 88,
                    },
                    _visits: {
                      "2024-08-01": true,
                      "2024-08-02": false,
                    },
                    getPerformanceRating(): 91.5       // Example performance rating
                  }
                ]
              }
            ]
          },
          {
            name: 'Graduate',                         // Another Level within the Area
            description: 'Master of Science in CS',   // Level description
            _groups: [
              {
                directionName: 'Artificial Intelligence', // Group's direction name
                levelName: 'Graduate',                // Level name
                _area: {                               // Reference to Area object
                  name: 'Computer Science',           // Area name
                  _levels: [ /* Levels within this Area */ ]
                },
                _status: 'Active',                   // Group status
                _students: [
                  {
                    _firstName: 'Bob',               // Student's first name
                    _lastName: 'Green',              // Student's last name
                    _birthYear: 1998,                // Student's birth year
                    _grades: {
                      "AI Final Project": 90,
                      "Machine Learning Exam": 85,
                    },
                    _visits: {
                      "2024-08-01": true,
                      "2024-08-02": true,
                    },
                    getPerformanceRating(): 87.5     // Example performance rating
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Mathematics',                         // Another Area
        _levels: [
          {
            name: 'Undergraduate',                  // Level name
            description: 'Bachelor of Science in Mathematics', // Level description
            _groups: [
              {
                directionName: 'Pure Mathematics',  // Group's direction name
                levelName: 'Undergraduate',         // Level name
                _area: {                            // Reference to Area object
                  name: 'Mathematics',              // Area name
                  _levels: [ /* Levels within this Area */ ]
                },
                _status: 'Active',                  // Group status
                _students: [
                  {
                    _firstName: 'Charlie',           // Student's first name
                    _lastName: 'Davis',              // Student's last name
                    _birthYear: 2000,                // Student's birth year
                    _grades: {
                      "Algebra Exam": 88,
                      "Calculus Project": 92,
                    },
                    _visits: {
                      "2024-08-01": true,
                      "2024-08-02": false,
                    },
                    getPerformanceRating(): 90       // Example performance rating
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    _lecturers: [                                   // Array of Lecturer objects
      {
        name: 'Alice',                              // Lecturer's first name
        surname: 'Smith',                           // Lecturer's last name
        position: 'Professor',                      // Lecturer's position
        company: 'University of Example',           // Lecturer's affiliated company
        experience: 10,                             // Lecturer's experience in years
        courses: ['Software Engineering', 'AI'],    // Courses taught by the Lecturer
        contacts: ['alice@example.com']             // Lecturer's contact details
      },
      {
        name: 'Bob',                                // Another Lecturer
        surname: 'Johnson',
        position: 'Assistant Professor',
        company: 'University of Example',
        experience: 5,
        courses: ['Data Science', 'Machine Learning'],
        contacts: ['bob@example.com']
      }
    ]
  }
  