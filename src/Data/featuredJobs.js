const dataOfFeaturedJobs = [
    {
        _id:1,
        jobTitle: "Software Engineer",
        companyLogo: "https://i.ibb.co/MDG5xCV/1.png",
        location: "San Francisco, USA",
        jobPostingTime: "12 hours ago",
        salaryRange: "$400 - $420 / month",
        jobType: "Full Time",
        jobNeed: "Urgent",
        rating: 5,
        jobPlace:'Remote',
        jobDescription:"As a Software Engineer, you will be a key contributor to the design, development, and maintenance of innovative software solutions. Collaborating with a multidisciplinary team, you will translate user requirements into functional code, ensuring the delivery of reliable, scalable, and efficient applications. Your responsibilities will encompass the entire software development lifecycle, from conceptualization and design to coding, testing, debugging, and deployment.",
        keyResponsibilities:{
            "resOne":"Analyze user needs and business requirements to propose software solutions.",
            "resTwo":"Design and implement software features and functionality, adhering to coding standards.",
            "resThree":"Collaborate with cross-functional teams to ensure alignment with project goals.",
            "resFour":"Participate in system architecture design and code reviews.",
            "resFive":"Debug and resolve software defects and issues in a timely manner",
            "resSix":"Stay updated with emerging technologies and industry trends.",
            "resSeven":"Contribute to the improvement of software development processes.",
            "resEight":"Implement and maintain front-end libraries and frameworks as needed."
        },

        qualifications:{
            "queOne":"Bachelor's degree in Computer Science, Software Engineering, or related field (or equivalent experience).",
            "queTwo":"Proficiency in programming languages such as Java, Python, C++, etc.",
            "queThree":"Strong problem-solving skills and attention to detail.",
            "queFour":"Experience with software development methodologies and tools.",
            "queFive":"Effective communication skills and ability to work in a collaborative environment.",
            "queSix":"Knowledge of version control systems (e.g., Git) and software testing techniques.",

        }
        
    },
    {
        _id:2,
        jobTitle: "Front-End Developer",
        companyLogo: "https://i.ibb.co/DWqTY7m/2.png",
        location: "London, UK",
        jobPostingTime: "5 days ago",
        salaryRange: "$620 - $650 / month",
        jobType: "Part Time",
        jobNeed: "Urgent",
        rating: 5,
        jobPlace:'Onsite',
        jobDescription:"As a Front-End Developer, you will be responsible for creating visually engaging and user-friendly interfaces for web applications. Collaborating closely with design and back-end teams, you will transform design mockups and user requirements into interactive and responsive web experiences. Your expertise in HTML, CSS, and JavaScript will contribute to delivering seamless and intuitive user interfaces that enhance user satisfaction.",
        keyResponsibilities:{
            "resOne":"Translate design concepts into functional, pixel-perfect user interfaces.",
            "resTwo":"Develop and implement user-facing features using HTML, CSS, and JavaScript.",
            "resThree":"Ensure cross-browser and cross-device compatibility of web applications.",
            "resFour":"Collaborate with designers to optimize visual elements and user interactions.",
            "resFive":"Implement and maintain front-end libraries and frameworks as needed.",
            "resSix":"Participate in code reviews to maintain code quality and best practices.",
            "resSeven":"Work closely with back-end developers to integrate front-end and back-end functionalities.",
            "resEight":"Stay up-to-date with front-end development trends and emerging technologies."
        },
        qualifications:{
            "queOne":"Bachelor's degree in Computer Science, Web Development, or related field (or equivalent experience).",
            "queTwo":"Proficiency in HTML, CSS, JavaScript, and front-end frameworks (e.g., React, Angular, Vue.js).",
            "queThree":"Experience with responsive design and mobile-first development",
            "queFour":"Strong problem-solving skills and attention to detail.",
            "queFive":"Familiarity with version control systems (e.g., Git) and build tools (e.g., Webpack).",
            "queSix":"Knowledge of web accessibility standards and SEO principles is a plus",

        }
    },
    {
        _id:3,
        jobTitle: "Product Manager",
        companyLogo: "https://i.ibb.co/SdK0PSn/3.png",
        location: "New York, USA",
        jobPostingTime: "22 hours ago",
        salaryRange: "$610 - $640 / month",
        jobType: "Full Time",
        rating: 5,
        jobPlace:'Remote',
        jobDescription:"As a Product Manager, you will be the driving force behind the creation and success of our products. You will work closely with cross-functional teams to conceptualize, develop, and launch innovative products that meet user needs and align with business goals. Your role involves defining product strategies, gathering requirements, and guiding the product development process from ideation to market release.",
        keyResponsibilities:{
            "resOne":"Develop and communicate a clear product vision and strategy to stakeholders.",
            "resTwo":"Collaborate with customers, market research, and internal teams to identify market opportunities and user requirements.",
            "resThree":"Create detailed product roadmaps, feature specifications, and user stories.",
            "resFour":"Work closely with design and engineering teams to ensure the product meets design and functionality goals.",
            "resFive":"Prioritize and manage the product backlog based on business value and customer feedback.",
            "resSix":"Monitor the product's performance and gather data for continuous improvement.",
            "resSeven":"Conduct competitor analysis and stay updated with industry trends.",
            "resEight":"Lead product launches and coordinate marketing, sales, and support efforts."
        },
        qualifications:{
            "queOne":"Bachelor's degree in Business, Engineering, Computer Science, or related field (or equivalent experience).",
            "queTwo":"Proven experience as a Product Manager or similar role in product development.",
            "queThree":"Strong analytical and problem-solving skills.",
            "queFour":"Excellent communication and leadership abilities.",
            "queFive":"Ability to work collaboratively in cross-functional teams.",
            "queSix":"Understanding of user experience (UX) design principles.",

        }
    },
    {
        _id:4,
        jobTitle: "Senior Full-Stack Web Developer",
        companyLogo: "https://i.ibb.co/QKZbnFH/4.png",
        location: "Los Angeles, USA",
        jobPostingTime: "12 hours ago",
        salaryRange: "$600 - $630 / month",
        jobType: "Part Time",
        jobNeed: "Urgent",
        rating: 5,
        jobPlace:'Hybrid',
        jobDescription:"As a Senior Full-Stack Web Developer, you will play a critical role in designing, developing, and maintaining complex web applications that deliver exceptional user experiences. Leveraging your expertise in both front-end and back-end technologies, you will lead the development of innovative features, mentor junior developers, and contribute to architectural decisions. Your deep understanding of web development principles will drive the creation of robust, scalable, and high-performance solutions.",
        keyResponsibilities:{
            "resOne":"Lead the end-to-end development of web applications, from conceptualization to deployment.",
            "resTwo":"Collaborate with cross-functional teams to gather and translate user requirements into technical specifications.",
            "resThree":"Architect and implement scalable, maintainable, and secure back-end systems using languages like Node.js, Python, Ruby, etc.",
            "resFour":"Develop interactive and responsive front-end interfaces using modern JavaScript frameworks like React, Angular, or Vue.js..",
            "resFive":"Integrate third-party APIs and services to enhance application functionality.",
            "resSix":"Mentor and provide technical guidance to junior developers, conducting code reviews and promoting best practices.",
            "resSeven":"Stay updated with industry trends and emerging technologies to drive continuous improvement.",
            "resEight":"Troubleshoot and resolve complex technical issues across the full stack."
        },
        qualifications:{
            "queOne":"Bachelor's degree in Computer Science, Software Engineering, or related field (or equivalent experience).",
            "queTwo":"Proven experience as a Full-Stack Web Developer, demonstrating expertise in both front-end and back-end technologies.",
            "queThree":"Proficiency in programming languages like JavaScript, Python, or Java.",
            "queFour":"Familiarity with version control systems (e.g., Git) and development workflows.",
            "queFive":"Strong knowledge of front-end frameworks (e.g., React, Angular, Vue.js) and back-end frameworks (e.g., Express, Django, Ruby on Rails).",
            "queSix":"Experience with database systems (e.g., MySQL, PostgreSQL, MongoDB).",

        }
    },
    {
        _id:5,
        jobTitle: "Junior Front-end Web Developer",
        companyLogo: "https://i.ibb.co/vQLT1dF/5.png",
        location: "Toronto, Canada",
        jobPostingTime: "5 days ago",
        salaryRange: "$580 - $600 / month",
        jobType: "Full Time",
        jobNeed: "Urgent",
        rating: 5,
        jobPlace:'Onsite',
        jobDescription:"As a Junior Front-End Web Developer, you will be a key contributor to creating visually appealing and interactive user interfaces for web applications. Collaborating with senior developers and designers, you will learn to transform design concepts into functional and responsive web experiences. Your role involves utilizing HTML, CSS, and JavaScript to bring user interface designs to life while gaining valuable hands-on experience in front-end development.",
        keyResponsibilities:{
            "resOne":"Assist in the implementation of user-facing features using HTML, CSS, and JavaScript.",
            "resTwo":"Collaborate with design and development teams to ensure accurate translation of design mockups into functional web elements.",
            "resThree":"Participate in code reviews and follow best practices to maintain code quality and consistency.",
            "resFour":"Learn about responsive design principles to ensure seamless user experiences across various devices.",
            "resFive":"Support the integration of third-party APIs and libraries to enhance application functionality.",
            "resSix":"Troubleshoot and debug front-end issues and contribute to their resolution.",
            "resSeven":"Stay updated with industry trends and emerging technologies to drive continuous improvement.",
            "resEight":"Stay updated with emerging front-end technologies and trends."
        },
        qualifications:{
            "queOne":"Bachelor's degree in Computer Science, Web Development, or related field (or equivalent experience).",
            "queTwo":"Basic understanding of HTML, CSS, and JavaScript.",
            "queThree":"Familiarity with front-end frameworks and libraries is a plus.",
            "queFour":"Portfolio showcasing personal or academic front-end projects is beneficial.",
            "queFive":"Passion for staying up-to-date with industry trends and expanding technical skill set.",
            "queSix":"Excellent problem-solving skills and attention to detail",

        }
    },
    {
        _id:6,
        jobTitle: "Data Scientist",
        companyLogo: "https://i.ibb.co/z6076bZ/6.png",
        location: "Seattle, USA",
        jobPostingTime: "12 hours ago",
        salaryRange: "$590 - $610 / month",
        jobType: "Temporary",
        rating: 4.2,
        jobPlace:'Hybrid',
        jobDescription:"As a Data Scientist, you will leverage your expertise in data analysis, statistical modeling, and machine learning to extract valuable insights and drive informed decision-making. You will work with large datasets to uncover patterns, trends, and correlations, contributing to the optimization of business strategies and processes. Your role involves employing advanced analytical techniques to solve complex problems and support data-driven initiatives.",
        keyResponsibilities:{
            "resOne":"Collect, clean, and preprocess large datasets from various sources for analysis.",
            "resTwo":"Apply statistical analysis and data mining techniques to identify trends, patterns, and anomalies.",
            "resThree":"Develop and implement machine learning models to predict outcomes and make data-driven recommendations.",
            "resFour":"Collaborate with cross-functional teams to understand business objectives and formulate data-driven solutions.",
            "resFive":"Visualize and communicate insights and findings to both technical and non-technical stakeholders.",
            "resSix":"Conduct A/B tests and experiments to evaluate the effectiveness of different strategies.",
            "resSeven":"Continuously refine and improve models based on feedback and new data.",
            "resEight":"Stay updated with the latest developments in data science, machine learning, and AI."
        },
        qualifications:{
            "queOne":"Master's or Ph.D. in Data Science, Computer Science, Statistics, or a related field (or equivalent experience)",
            "queTwo":"Proficiency in programming languages such as Python or R.",
            "queThree":"Strong knowledge of data manipulation, exploration, and visualization techniques.",
            "queFour":"Experience with machine learning frameworks and libraries (e.g., scikit-learn, TensorFlow, PyTorch).",
            "queFive":"Familiarity with data querying languages (e.g., SQL) and database systems.",
            "queSix":"Excellent problem-solving skills and attention to detail",

        }
    },
    {
        _id:7,
        jobTitle: "UI/UX Designer",
        companyLogo: "https://i.ibb.co/C1SJmFb/7.png",
        location: "Sydney, Australia",
        jobPostingTime: "5 days ago",
        salaryRange: "$610 - $630 / month",
        jobType: "Full Time",
        rating: 3.9,
        jobPlace:'Remote',
        jobDescription:"As a UI/UX Designer, you will be responsible for creating intuitive and visually appealing user interfaces that enhance user experiences across digital products. Your role involves understanding user needs, conducting research, and translating insights into user-centered design solutions. Through collaboration with cross-functional teams, you will contribute to the creation of compelling designs that combine aesthetics with functionality.",
        keyResponsibilities:{
            "resOne":"Collaborate with product managers and developers to understand user requirements and project goals.",
            "resTwo":"Conduct user research, including user interviews, surveys, and usability testing, to gather insights.",
            "resThree":"Create wireframes, prototypes, and mockups that effectively communicate design ideas and user flows.",
            "resFour":"Design visually engaging and user-friendly interfaces, considering user interactions and feedback.",
            "resFive":"Ensure consistency in design elements, such as typography, color schemes, and iconography.",
            "resSix":"Iterate on designs based on user feedback and usability testing results.",
            "resSeven":"Continuously refine and improve models based on feedback and new data.",
            "resEight":"Stay updated with industry trends and emerging UI/UX design practices."
        },
        qualifications:{
            "queOne":"Bachelor's degree in Graphic Design, Interaction Design, HCI, or related field (or equivalent experience).",
            "queTwo":"Proficiency in design tools such as Adobe XD, Sketch, Figma, or similar.",
            "queThree":"Understanding of user-centered design principles and best practices.",
            "queFour":"Strong portfolio showcasing UI/UX design projects and a user-centered design approach.",
            "queFive":"Excellent visual design skills, including layout, color theory, and typography.",
            "queSix":"Effective communication skills for articulating design decisions and rationale.",

        }
    },
    {
        _id:8,
        jobTitle: "Back-End Developer",
        companyLogo: "https://i.ibb.co/HBcWvnh/8.png",
        location: "Berlin, Germany",
        jobPostingTime: "22 hours ago",
        salaryRange: "$605 - $625 / month",
        jobType: "Temporary",
        jobNeed: "Urgent",
        rating: 5,
        jobPlace:'Remote',
        jobDescription:"As a Back-End Developer, you will be responsible for building the server-side logic, databases, and APIs that power our web applications and services. Your role involves designing and implementing scalable, reliable, and efficient back-end systems that support the functionality and performance of our digital products. Collaborating closely with front-end developers and other cross-functional teams, you will contribute to delivering seamless user experiences.",
        keyResponsibilities:{
            "resOne":"Collaborate with front-end developers and product managers to understand application requirements.",
            "resTwo":"Design and develop server-side architecture, APIs, and databases to support front-end functionality.",
            "resThree":"Write clean, efficient, and maintainable code in languages like Python, Java, Node.js, or others.",
            "resFour":"Optimize application performance and ensure data security and integrity.",
            "resFive":"Conduct thorough testing and debugging to identify and resolve issues.",
            "resSix":"Implement and integrate third-party APIs and services as needed.",
            "resSeven":"Collaborate with DevOps and infrastructure teams to deploy and maintain applications.",
            "resEight":"Stay updated with emerging technologies and trends in back-end development."
        },
        qualifications:{
            "queOne":"Bachelor's degree in Computer Science, Software Engineering, or related field (or equivalent experience)",
            "queTwo":"Proficiency in back-end programming languages such as Python, Java, Ruby, or Node.js.",
            "queThree":"Experience with back-end frameworks (e.g., Django, Flask, Express) and database systems (e.g., MySQL, PostgreSQL, MongoDB).",
            "queFour":"Familiarity with RESTful API design and implementation.",
            "queFive":"Effective communication skills for collaboration within cross-functional teams.",
            "queSix":"Understanding of software architecture principles and best practices.",

        }
    },
    {
        _id: 9,
        jobTitle: "Mobile App Developer",
        companyLogo: "https://i.ibb.co/R3XgFmk/9.png",
        location: "Paris, France",
        jobPostingTime: "12 hours ago",
        salaryRange: "$610 - $615 / month",
        jobType: "Full Time",
        jobNeed: "Urgent",
        rating: 3.7,
        jobPlace:'Onsite',
        jobDescription:"As a Mobile App Developer, you will play a pivotal role in designing, developing, and maintaining mobile applications that provide engaging and intuitive user experiences. Leveraging your expertise in mobile technologies, you will collaborate with cross-functional teams to transform design concepts into functional and user-friendly apps for various platforms. Your role involves staying updated with mobile development trends and implementing best practices to deliver high-quality mobile solutions.",
        keyResponsibilities:{
            "resOne":"Collaborate with designers and product managers to understand app requirements and user needs.",
            "resTwo":"Design and develop mobile applications for iOS and/or Android platforms.",
            "resThree":"Write clean, efficient, and maintainable code in programming languages such as Swift (for iOS) or Kotlin/Java (for Android).",
            "resFour":"Implement UI/UX designs and ensure optimal app performance and responsiveness.",
            "resFive":"Integrate with backend APIs and services to provide seamless functionality.",
            "resSix":"Conduct testing, debugging, and troubleshooting to identify and resolve issues.",
            "resSeven":"Stay up-to-date with platform-specific guidelines and emerging mobile technologies.",
            "resEight":"Participate in code reviews and contribute to continuous improvement."
        },
        qualifications:{
            "queOne":"Bachelor's degree in Computer Science, Software Engineering, or related field (or equivalent experience)",
            "queTwo":"Proficiency in mobile app development languages and tools such as Swift, Kotlin, Android Studio, and Xcode.",
            "queThree":"Experience with mobile app development frameworks (e.g., SwiftUI, Flutter, React Native) is a plus.",
            "queFour":"Familiarity with mobile app architecture patterns and design principles.",
            "queFive":"Effective communication skills for collaboration within cross-functional teams.",
            "queSix":"Knowledge of app publishing processes for app stores (Apple App Store, Google Play Store).",

        }
    },
    {
        _id:10,
        jobTitle: "DevOps Engineer",
        companyLogo: "https://i.ibb.co/XJ5c1b5/10.png",
        location: "Bangalore, India",
        jobPostingTime: "5 days ago",
        salaryRange: "$400 - $405 / month",
        jobType: "Full Time",
        rating: 4.7,
        jobPlace:'Onsite',
        jobDescription:"As a DevOps Engineer, you will bridge the gap between development and IT operations, focusing on automating and optimizing the software delivery pipeline. Your role involves implementing and managing tools and processes that enable efficient code deployment, continuous integration, and seamless application delivery. Collaborating with development, operations, and quality assurance teams, you will ensure the reliability, scalability, and performance of our software products.",
        keyResponsibilities:{
            "resOne":"Design, implement, and maintain automated deployment pipelines for continuous integration and continuous delivery (CI/CD).",
            "resTwo":"Collaborate with development teams to optimize code for deployment and application performance.",
            "resThree":"Implement and manage configuration management and infrastructure as code (IaC) solutions.",
            "resFour":"Monitor and troubleshoot application performance, identifying and addressing bottlenecks and issues",
            "resFive":"Ensure security and compliance by implementing best practices and relevant security measures",
            "resSix":"Implement and manage cloud infrastructure and services (e.g., AWS, Azure, GCP).",
            "resSeven":"Contribute to the creation and maintenance of documentation for deployment processes and procedure",
            "resEight":"Stay updated with industry trends and emerging DevOps technologies."
        },
        qualifications:{
            "queOne":"Bachelor's degree in Computer Science, IT, or related field (or equivalent experience).",
            "queTwo":"Proficiency in scripting languages (e.g., Bash, Python, PowerShell) for automation.",
            "queThree":"Experience with containerization technologies (e.g., Docker, Kubernetes) and orchestration tools.",
            "queFour":"Knowledge of configuration management tools (e.g., Ansible, Puppet, Chef).",
            "queFive":"Familiarity with CI/CD tools (e.g., Jenkins, GitLab CI/CD, CircleCI).",
            "queSix":"Experience with cloud platforms and services (e.g., AWS, Azure, GCP).",

        }
    },
    {
        _id: 11,
        jobTitle: "Software Developer Intern",
        companyLogo: "https://i.ibb.co/ZBbVfqZ/11.png",
        location: "Chicago, USA",
        jobPostingTime: "22 hours ago",
        salaryRange: "$505 - $530 / month",
        jobType: "Part Time",
        jobNeed: "Urgent",
        rating: 3.1,
        jobPlace:'Onsite', 
        jobDescription:"As a Software Developer Intern, you will gain hands-on experience working in a dynamic development environment and contribute to the creation of software solutions. Collaborating with experienced developers and cross-functional teams, you will be involved in various aspects of the software development lifecycle, from coding and testing to debugging and deployment. This internship offers a valuable opportunity to learn and apply programming skills, gain insights into real-world projects, and make a meaningful impact on our software products.", 
        keyResponsibilities:{
            "resOne":"Assist in the design, coding, testing, and debugging of software applications.",
            "resTwo":"Collaborate with senior developers to implement new features and functionality.",
            "resThree":"Participate in code reviews to learn best practices and maintain code quality.",
            "resFour":"Contribute to documentation and provide support for software-related tasks.",
            "resFive":"Learn about version control systems, development tools, and software development methodologies.",
            "resSix":"Gain exposure to agile practices and cross-functional teamwork.",
            "resSeven":"Troubleshoot and resolve software defects under the guidance of experienced developers.",
            "resEight":"Proactively seek opportunities to learn and contribute to team initiatives"
        },
        qualifications:{
            "queOne":"Enrollment in a degree program in Computer Science, Software Engineering, or related field.",
            "queTwo":"Basic knowledge of programming languages such as Python, Java, C++, etc.",
            "queThree":"Strong willingness to learn, adapt, and take on new challenges.",
            "queFour":"Good problem solving skills and attention to detail.",
            "queFive":"Familiarity with version control systems (e.g., Git) is a plus.",
            "queSix":"Previous coursework or personal projects related to programming is beneficial.",

        }    
    },
    {
        _id: 12,
        jobTitle: "Temporary QA Tester",
        companyLogo: "https://i.ibb.co/HnR7vJY/12.png",
        location: "London, UK",
        jobPostingTime: "12 hours ago",
        salaryRange: "$630 - $640 / month",
        jobType: "Temporary",
        rating: 4.4,
        jobPlace:'Remote',
        jobDescription:"As a Temporary QA Tester, you will play a crucial role in ensuring the quality and functionality of our software products during a specific project or testing phase. Your responsibilities will include identifying defects, reporting issues, and working closely with the development team to verify bug fixes and validate software functionality. This temporary role offers an opportunity to gain experience in software testing, contribute to product improvement, and assist in delivering a reliable and user-friendly software experience.",
        keyResponsibilities:{
            "resOne":"Execute manual testing procedures to identify software defects and inconsistencies.",
            "resTwo":"Verify that software applications meet established quality standards and specifications.",
            "resThree":"Document and report issues using bug tracking tools, providing clear and detailed descriptions.",
            "resFour":"Collaborate with developers and cross-functional teams to reproduce and troubleshoot issues.",
            "resFive":"Perform regression testing to ensure that bug fixes and enhancements do not introduce new problems.",
            "resSix":"Participate in test case creation and review to ensure comprehensive test coverage.",
            "resSeven":"Assist in test data preparation and setup for testing environments.",
            "resEight":"Maintain accurate records of testing activities and results."
        },
        qualifications:{
            "queOne":"High school diploma or equivalent (some college coursework in Computer Science or related field is a plus).",
            "queTwo":"Attention to detail and strong observational skills.",
            "queThree":"Basic understanding of software testing concepts and methodologies.",
            "queFour":"Strong written and verbal communication skills for documenting and reporting issues.",
            "queFive":"Problem-solving mindset and curiosity to investigate and reproduce issues.",
            "queSix":"Familiarity with bug tracking tools (e.g., JIRA, Bugzilla) is a plus.",

        }    
    },
];

export default dataOfFeaturedJobs;
