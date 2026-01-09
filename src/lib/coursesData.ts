// src/lib/coursesData.ts

export interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    instructor: string;
    videoUrl: string; // YouTube video ID or embed URL
    technology: string;
}

export interface TechnologyCategory {
    id: string;
    name: string;
    icon: string;
    description: string;
    courseCount: number;
}

export const technologyCategories: TechnologyCategory[] = [
    {
        id: 'salesforce',
        name: 'Salesforce',
        icon: '/logos/salesforce.png',
        description: 'Master Salesforce CRM and cloud solutions',
        courseCount: 5
    },
    {
        id: 'aws',
        name: 'AWS',
        icon: '/logos/aws.png',
        description: 'Amazon Web Services cloud computing',
        courseCount: 5
    },
    {
        id: 'python',
        name: 'Python',
        icon: '/logos/python.png',
        description: 'Python programming and development',
        courseCount: 5
    },
    {
        id: 'java',
        name: 'Java',
        icon: '/logos/java.png',
        description: 'Java programming and enterprise development',
        courseCount: 5
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        icon: '/logos/javascript.png',
        description: 'Modern JavaScript and ES6+',
        courseCount: 5
    },
    {
        id: 'react',
        name: 'React',
        icon: '/logos/react.png',
        description: 'React.js frontend development',
        courseCount: 5
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        icon: '/logos/nodejs.svg',
        description: 'Node.js backend development',
        courseCount: 5
    },
    {
        id: 'docker',
        name: 'Docker',
        icon: '/logos/docker.svg',
        description: 'Containerization with Docker',
        courseCount: 5
    },
    {
        id: 'kubernetes',
        name: 'Kubernetes',
        icon: '/logos/kubernetes.svg',
        description: 'Container orchestration with Kubernetes',
        courseCount: 5
    },
    {
        id: 'azure',
        name: 'Azure',
        icon: '/logos/azure.svg',
        description: 'Microsoft Azure cloud platform',
        courseCount: 5
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        icon: '/logos/mongodb.svg',
        description: 'NoSQL database with MongoDB',
        courseCount: 4
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: '/logos/postgresql.svg',
        description: 'Advanced PostgreSQL database',
        courseCount: 4
    }
];

export const courses: Course[] = [
    // Salesforce Courses
    {
        id: 'sf-001',
        title: 'Salesforce Administration Fundamentals',
        description: 'Learn the basics of Salesforce administration including user management, security, and data management.',
        duration: '4 hours',
        level: 'Beginner',
        instructor: 'Sarah Johnson',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        technology: 'salesforce'
    },
    {
        id: 'sf-002',
        title: 'Advanced Salesforce Development',
        description: 'Deep dive into Apex programming, triggers, and Lightning components.',
        duration: '6 hours',
        level: 'Advanced',
        instructor: 'Michael Chen',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        technology: 'salesforce'
    },
    {
        id: 'sf-003',
        title: 'Salesforce Lightning Experience',
        description: 'Master the Lightning Experience interface and Lightning App Builder.',
        duration: '3 hours',
        level: 'Intermediate',
        instructor: 'Emily Rodriguez',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        technology: 'salesforce'
    },
    {
        id: 'sf-004',
        title: 'Salesforce Integration Patterns',
        description: 'Learn how to integrate Salesforce with external systems using APIs.',
        duration: '5 hours',
        level: 'Advanced',
        instructor: 'David Kim',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        technology: 'salesforce'
    },
    {
        id: 'sf-005',
        title: 'Salesforce Reports and Dashboards',
        description: 'Create powerful reports and interactive dashboards for data visualization.',
        duration: '2.5 hours',
        level: 'Beginner',
        instructor: 'Lisa Anderson',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        technology: 'salesforce'
    },

    // AWS Courses
    {
        id: 'aws-001',
        title: 'AWS Cloud Practitioner Essentials',
        description: 'Introduction to AWS cloud services and fundamental concepts.',
        duration: '4 hours',
        level: 'Beginner',
        instructor: 'John Smith',
        videoUrl: 'https://www.youtube.com/embed/3hLmDS179YE',
        technology: 'aws'
    },
    {
        id: 'aws-002',
        title: 'AWS Solutions Architect',
        description: 'Design and deploy scalable systems on AWS infrastructure.',
        duration: '8 hours',
        level: 'Advanced',
        instructor: 'Amanda Williams',
        videoUrl: 'https://www.youtube.com/embed/3hLmDS179YE',
        technology: 'aws'
    },
    {
        id: 'aws-003',
        title: 'AWS Lambda and Serverless',
        description: 'Build serverless applications using AWS Lambda and API Gateway.',
        duration: '5 hours',
        level: 'Intermediate',
        instructor: 'Robert Martinez',
        videoUrl: 'https://www.youtube.com/embed/3hLmDS179YE',
        technology: 'aws'
    },
    {
        id: 'aws-004',
        title: 'AWS Security Best Practices',
        description: 'Implement security controls and compliance in AWS environments.',
        duration: '4.5 hours',
        level: 'Advanced',
        instructor: 'Jennifer Lee',
        videoUrl: 'https://www.youtube.com/embed/3hLmDS179YE',
        technology: 'aws'
    },
    {
        id: 'aws-005',
        title: 'AWS Database Services',
        description: 'Explore RDS, DynamoDB, and other AWS database solutions.',
        duration: '3.5 hours',
        level: 'Intermediate',
        instructor: 'Thomas Brown',
        videoUrl: 'https://www.youtube.com/embed/3hLmDS179YE',
        technology: 'aws'
    },

    // Python Courses
    {
        id: 'py-001',
        title: 'Python Programming Basics',
        description: 'Learn Python fundamentals including syntax, data types, and control flow.',
        duration: '5 hours',
        level: 'Beginner',
        instructor: 'Nina Patel',
        videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        technology: 'python'
    },
    {
        id: 'py-002',
        title: 'Advanced Python Techniques',
        description: 'Master decorators, generators, context managers, and metaclasses.',
        duration: '6 hours',
        level: 'Advanced',
        instructor: 'Carlos Santos',
        videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        technology: 'python'
    },
    {
        id: 'py-003',
        title: 'Python for Data Science',
        description: 'Use Python with Pandas, NumPy, and Matplotlib for data analysis.',
        duration: '7 hours',
        level: 'Intermediate',
        instructor: 'Rachel Green',
        videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        technology: 'python'
    },
    {
        id: 'py-004',
        title: 'Python Web Development with Django',
        description: 'Build full-stack web applications using the Django framework.',
        duration: '8 hours',
        level: 'Intermediate',
        instructor: 'Kevin Zhang',
        videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        technology: 'python'
    },
    {
        id: 'py-005',
        title: 'Python Automation and Scripting',
        description: 'Automate tasks and create powerful scripts with Python.',
        duration: '4 hours',
        level: 'Beginner',
        instructor: 'Sophia Miller',
        videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        technology: 'python'
    },

    // Java Courses
    {
        id: 'java-001',
        title: 'Java Programming Fundamentals',
        description: 'Introduction to Java syntax, OOP concepts, and basic programming.',
        duration: '6 hours',
        level: 'Beginner',
        instructor: 'Marcus Johnson',
        videoUrl: 'https://www.youtube.com/embed/eIrMbAQSU34',
        technology: 'java'
    },
    {
        id: 'java-002',
        title: 'Java Spring Boot Framework',
        description: 'Build enterprise applications with Spring Boot and Spring MVC.',
        duration: '8 hours',
        level: 'Advanced',
        instructor: 'Angela White',
        videoUrl: 'https://www.youtube.com/embed/eIrMbAQSU34',
        technology: 'java'
    },
    {
        id: 'java-003',
        title: 'Java Microservices Architecture',
        description: 'Design and implement microservices using Java and Spring Cloud.',
        duration: '7 hours',
        level: 'Advanced',
        instructor: 'Daniel Park',
        videoUrl: 'https://www.youtube.com/embed/eIrMbAQSU34',
        technology: 'java'
    },
    {
        id: 'java-004',
        title: 'Java Performance Optimization',
        description: 'Optimize Java applications for better performance and efficiency.',
        duration: '5 hours',
        level: 'Intermediate',
        instructor: 'Olivia Martinez',
        videoUrl: 'https://www.youtube.com/embed/eIrMbAQSU34',
        technology: 'java'
    },
    {
        id: 'java-005',
        title: 'Java Enterprise Edition (JEE)',
        description: 'Learn JEE technologies including EJB, JPA, and JAX-RS.',
        duration: '9 hours',
        level: 'Advanced',
        instructor: 'Christopher Lee',
        videoUrl: 'https://www.youtube.com/embed/eIrMbAQSU34',
        technology: 'java'
    },

    // JavaScript Courses
    {
        id: 'js-001',
        title: 'JavaScript Essentials',
        description: 'Master JavaScript fundamentals and ES6+ features.',
        duration: '5 hours',
        level: 'Beginner',
        instructor: 'Emma Thompson',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        technology: 'javascript'
    },
    {
        id: 'js-002',
        title: 'Advanced JavaScript Patterns',
        description: 'Learn design patterns, closures, and advanced JS concepts.',
        duration: '6 hours',
        level: 'Advanced',
        instructor: 'Ryan Cooper',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        technology: 'javascript'
    },
    {
        id: 'js-003',
        title: 'Asynchronous JavaScript',
        description: 'Master Promises, async/await, and event loops.',
        duration: '4 hours',
        level: 'Intermediate',
        instructor: 'Isabella Garcia',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        technology: 'javascript'
    },
    {
        id: 'js-004',
        title: 'JavaScript Testing with Jest',
        description: 'Write comprehensive tests for JavaScript applications.',
        duration: '3.5 hours',
        level: 'Intermediate',
        instructor: 'Matthew Wilson',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        technology: 'javascript'
    },
    {
        id: 'js-005',
        title: 'TypeScript for JavaScript Developers',
        description: 'Add static typing to JavaScript with TypeScript.',
        duration: '5.5 hours',
        level: 'Intermediate',
        instructor: 'Ava Robinson',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        technology: 'javascript'
    },

    // React Courses
    {
        id: 'react-001',
        title: 'React Fundamentals',
        description: 'Learn React components, props, state, and hooks.',
        duration: '6 hours',
        level: 'Beginner',
        instructor: 'Ethan Davis',
        videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
        technology: 'react'
    },
    {
        id: 'react-002',
        title: 'Advanced React Patterns',
        description: 'Master render props, HOCs, and compound components.',
        duration: '5 hours',
        level: 'Advanced',
        instructor: 'Mia Anderson',
        videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
        technology: 'react'
    },
    {
        id: 'react-003',
        title: 'React State Management',
        description: 'Learn Redux, Context API, and modern state management.',
        duration: '4.5 hours',
        level: 'Intermediate',
        instructor: 'Noah Taylor',
        videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
        technology: 'react'
    },
    {
        id: 'react-004',
        title: 'React Performance Optimization',
        description: 'Optimize React apps with memoization and lazy loading.',
        duration: '3.5 hours',
        level: 'Advanced',
        instructor: 'Charlotte Moore',
        videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
        technology: 'react'
    },
    {
        id: 'react-005',
        title: 'React Native Mobile Development',
        description: 'Build cross-platform mobile apps with React Native.',
        duration: '8 hours',
        level: 'Intermediate',
        instructor: 'Liam Jackson',
        videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
        technology: 'react'
    },

    // Node.js Courses
    {
        id: 'node-001',
        title: 'Node.js Basics',
        description: 'Introduction to Node.js runtime and core modules.',
        duration: '4 hours',
        level: 'Beginner',
        instructor: 'Harper White',
        videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
        technology: 'nodejs'
    },
    {
        id: 'node-002',
        title: 'Building REST APIs with Express',
        description: 'Create scalable REST APIs using Express.js framework.',
        duration: '6 hours',
        level: 'Intermediate',
        instructor: 'James Harris',
        videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
        technology: 'nodejs'
    },
    {
        id: 'node-003',
        title: 'Node.js Authentication & Security',
        description: 'Implement JWT authentication and security best practices.',
        duration: '5 hours',
        level: 'Intermediate',
        instructor: 'Evelyn Martin',
        videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
        technology: 'nodejs'
    },
    {
        id: 'node-004',
        title: 'Node.js Microservices',
        description: 'Build microservices architecture with Node.js.',
        duration: '7 hours',
        level: 'Advanced',
        instructor: 'Alexander Thompson',
        videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
        technology: 'nodejs'
    },
    {
        id: 'node-005',
        title: 'Node.js Testing and Debugging',
        description: 'Test and debug Node.js applications effectively.',
        duration: '4.5 hours',
        level: 'Intermediate',
        instructor: 'Abigail Garcia',
        videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
        technology: 'nodejs'
    },

    // Docker Courses
    {
        id: 'docker-001',
        title: 'Docker Fundamentals',
        description: 'Learn Docker containers, images, and basic commands.',
        duration: '4 hours',
        level: 'Beginner',
        instructor: 'Benjamin Martinez',
        videoUrl: 'https://www.youtube.com/embed/fqMOX6JJhGo',
        technology: 'docker'
    },
    {
        id: 'docker-002',
        title: 'Docker Compose and Multi-Container Apps',
        description: 'Orchestrate multi-container applications with Docker Compose.',
        duration: '5 hours',
        level: 'Intermediate',
        instructor: 'Sofia Rodriguez',
        videoUrl: 'https://www.youtube.com/embed/fqMOX6JJhGo',
        technology: 'docker'
    },
    {
        id: 'docker-003',
        title: 'Docker Networking and Storage',
        description: 'Master Docker networking and volume management.',
        duration: '4.5 hours',
        level: 'Intermediate',
        instructor: 'Lucas Wilson',
        videoUrl: 'https://www.youtube.com/embed/fqMOX6JJhGo',
        technology: 'docker'
    },
    {
        id: 'docker-004',
        title: 'Docker Security Best Practices',
        description: 'Secure your Docker containers and images.',
        duration: '3.5 hours',
        level: 'Advanced',
        instructor: 'Amelia Anderson',
        videoUrl: 'https://www.youtube.com/embed/fqMOX6JJhGo',
        technology: 'docker'
    },
    {
        id: 'docker-005',
        title: 'Docker in Production',
        description: 'Deploy and manage Docker containers in production.',
        duration: '6 hours',
        level: 'Advanced',
        instructor: 'Henry Thomas',
        videoUrl: 'https://www.youtube.com/embed/fqMOX6JJhGo',
        technology: 'docker'
    },

    // Kubernetes Courses
    {
        id: 'k8s-001',
        title: 'Kubernetes Basics',
        description: 'Introduction to Kubernetes architecture and core concepts.',
        duration: '5 hours',
        level: 'Beginner',
        instructor: 'Ella Jackson',
        videoUrl: 'https://www.youtube.com/embed/X48VuDVv0do',
        technology: 'kubernetes'
    },
    {
        id: 'k8s-002',
        title: 'Kubernetes Deployments and Services',
        description: 'Deploy and expose applications in Kubernetes.',
        duration: '6 hours',
        level: 'Intermediate',
        instructor: 'Sebastian Lee',
        videoUrl: 'https://www.youtube.com/embed/X48VuDVv0do',
        technology: 'kubernetes'
    },
    {
        id: 'k8s-003',
        title: 'Kubernetes Configuration Management',
        description: 'Use ConfigMaps and Secrets for application configuration.',
        duration: '4 hours',
        level: 'Intermediate',
        instructor: 'Victoria Walker',
        videoUrl: 'https://www.youtube.com/embed/X48VuDVv0do',
        technology: 'kubernetes'
    },
    {
        id: 'k8s-004',
        title: 'Kubernetes Monitoring and Logging',
        description: 'Monitor and troubleshoot Kubernetes clusters.',
        duration: '5.5 hours',
        level: 'Advanced',
        instructor: 'Jack Harris',
        videoUrl: 'https://www.youtube.com/embed/X48VuDVv0do',
        technology: 'kubernetes'
    },
    {
        id: 'k8s-005',
        title: 'Advanced Kubernetes Operations',
        description: 'Master operators, custom resources, and cluster management.',
        duration: '7 hours',
        level: 'Advanced',
        instructor: 'Grace Clark',
        videoUrl: 'https://www.youtube.com/embed/X48VuDVv0do',
        technology: 'kubernetes'
    },

    // Azure Courses
    {
        id: 'azure-001',
        title: 'Azure Fundamentals',
        description: 'Introduction to Microsoft Azure cloud services.',
        duration: '4 hours',
        level: 'Beginner',
        instructor: 'Samuel Lewis',
        videoUrl: 'https://www.youtube.com/embed/NKEFWyqJ5XA',
        technology: 'azure'
    },
    {
        id: 'azure-002',
        title: 'Azure App Services',
        description: 'Deploy web applications on Azure App Services.',
        duration: '5 hours',
        level: 'Intermediate',
        instructor: 'Chloe Robinson',
        videoUrl: 'https://www.youtube.com/embed/NKEFWyqJ5XA',
        technology: 'azure'
    },
    {
        id: 'azure-003',
        title: 'Azure DevOps and CI/CD',
        description: 'Implement CI/CD pipelines with Azure DevOps.',
        duration: '6 hours',
        level: 'Intermediate',
        instructor: 'Daniel Young',
        videoUrl: 'https://www.youtube.com/embed/NKEFWyqJ5XA',
        technology: 'azure'
    },
    {
        id: 'azure-004',
        title: 'Azure Security and Identity',
        description: 'Manage security and identity in Azure environments.',
        duration: '5.5 hours',
        level: 'Advanced',
        instructor: 'Lily King',
        videoUrl: 'https://www.youtube.com/embed/NKEFWyqJ5XA',
        technology: 'azure'
    },
    {
        id: 'azure-005',
        title: 'Azure Kubernetes Service (AKS)',
        description: 'Deploy and manage Kubernetes on Azure.',
        duration: '6.5 hours',
        level: 'Advanced',
        instructor: 'Owen Wright',
        videoUrl: 'https://www.youtube.com/embed/NKEFWyqJ5XA',
        technology: 'azure'
    },

    // MongoDB Courses
    {
        id: 'mongo-001',
        title: 'MongoDB Basics',
        description: 'Introduction to NoSQL and MongoDB fundamentals.',
        duration: '4 hours',
        level: 'Beginner',
        instructor: 'Zoe Scott',
        videoUrl: 'https://www.youtube.com/embed/-56x56UppqQ',
        technology: 'mongodb'
    },
    {
        id: 'mongo-002',
        title: 'MongoDB Data Modeling',
        description: 'Design efficient data models for MongoDB.',
        duration: '5 hours',
        level: 'Intermediate',
        instructor: 'Carter Green',
        videoUrl: 'https://www.youtube.com/embed/-56x56UppqQ',
        technology: 'mongodb'
    },
    {
        id: 'mongo-003',
        title: 'MongoDB Aggregation Framework',
        description: 'Master complex queries with aggregation pipelines.',
        duration: '4.5 hours',
        level: 'Advanced',
        instructor: 'Penelope Adams',
        videoUrl: 'https://www.youtube.com/embed/-56x56UppqQ',
        technology: 'mongodb'
    },
    {
        id: 'mongo-004',
        title: 'MongoDB Performance Tuning',
        description: 'Optimize MongoDB for better performance.',
        duration: '3.5 hours',
        level: 'Advanced',
        instructor: 'Wyatt Baker',
        videoUrl: 'https://www.youtube.com/embed/-56x56UppqQ',
        technology: 'mongodb'
    },

    // PostgreSQL Courses
    {
        id: 'pg-001',
        title: 'PostgreSQL Fundamentals',
        description: 'Learn PostgreSQL database management and SQL.',
        duration: '5 hours',
        level: 'Beginner',
        instructor: 'Stella Nelson',
        videoUrl: 'https://www.youtube.com/embed/qw--VYLpxG4',
        technology: 'postgresql'
    },
    {
        id: 'pg-002',
        title: 'Advanced PostgreSQL Queries',
        description: 'Master complex queries, joins, and window functions.',
        duration: '6 hours',
        level: 'Advanced',
        instructor: 'Leo Carter',
        videoUrl: 'https://www.youtube.com/embed/qw--VYLpxG4',
        technology: 'postgresql'
    },
    {
        id: 'pg-003',
        title: 'PostgreSQL Performance Optimization',
        description: 'Optimize queries and database performance.',
        duration: '4.5 hours',
        level: 'Advanced',
        instructor: 'Hazel Mitchell',
        videoUrl: 'https://www.youtube.com/embed/qw--VYLpxG4',
        technology: 'postgresql'
    },
    {
        id: 'pg-004',
        title: 'PostgreSQL Administration',
        description: 'Manage PostgreSQL databases and users.',
        duration: '5.5 hours',
        level: 'Intermediate',
        instructor: 'Julian Perez',
        videoUrl: 'https://www.youtube.com/embed/qw--VYLpxG4',
        technology: 'postgresql'
    }
];

export function getCoursesByTechnology(tech: string): Course[] {
    return courses.filter(course => course.technology === tech);
}

export function getCourseById(id: string): Course | undefined {
    return courses.find(course => course.id === id);
}
