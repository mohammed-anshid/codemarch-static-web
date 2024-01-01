import { FaLightbulb,FaRegCheckCircle } from 'react-icons/fa';
import { ImStarFull } from 'react-icons/im';


import jsCamp from '../assets/campsImages/Js-Codecamp.png'
import htmlCamp from '../assets/campsImages/HTML-Codecamp.png'
import tailwindCamp from '../assets/campsImages/Tailwindcss-Codecamp.jpeg'
import reactCamp from '../assets/campsImages/React-Codecamp.jpeg'


export const courseContents = [
  {
    module: 'Day-01',
    contents: [
      {
        title: 'Introduction to JavaScript',
        content: 'An overview of JavaScript and its usage Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        media: [
          {
            type: 'image',
            url: 'https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg',
          },
        ],
      },
      {
        title: 'Variables and Data Types',
        content: 'An overview of JavaScript and its usage Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        media: [
          {
            type: 'image',
            url: 'https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg',
          },
        ],
      },
      {
        title: 'Control Structures',
        content: 'Explore if statements and loops...',
        media: [],
      },
      {
        title: 'Functions and Scope',
        content: 'Understand functions and variable scope...',
        media: [],
      },
    ],
  },
  {
    module: 'Day-02',
    contents: [
      {
        title: 'Object-Oriented Programming',
        content: 'Learn about objects, classes, and inheritance...',
        media: [],
      },
      {
        title: 'Asynchronous JavaScript',
        content: 'Explore asynchronous programming with Promises and async/await...',
        media: [],
      },
      {
        title: 'ES6 Features',
        content: 'Discover the latest ES6 features...',
        media: [],
      },
      {
        title: 'Design Patterns',
        content: 'Study common design patterns in JavaScript...',
        media: [],
      },
    ],
  },
  {
    module: 'Day-03',
    contents: [
      {
        title: 'HTML and CSS Basics',
        content: 'Learn the fundamentals of HTML and CSS...',
        media: [],
      },
      {
        title: 'DOM Manipulation',
        content: 'Manipulate the Document Object Model...',
        media: [],
      },
      {
        title: 'Event Handling',
        content: 'Handle events in web applications...',
        media: [],
      },
      {
        title: 'Responsive Design',
        content: 'Create responsive web pages...',
        media: [],
      },
    ],
  },
  {
    module: 'Day-04',
    contents: [
      {
        title: 'AJAX and Fetch API',
        content: 'Make asynchronous requests to the server...',
        media: [],
      },
      {
        title: 'Single-Page Applications',
        content: 'Build SPAs with frameworks like React or Vue...',
        media: [],
      },
      {
        title: 'Server-Side Development',
        content: 'Learn about Node.js and back-end development...',
        media: [],
      },
      {
        title: 'Deployment and Hosting',
        content: 'Deploy your web apps to the cloud...',
        media: [],
      },
    ],
  }
]   
  

export const codecampsData = [
  {
    type: "live",
    title: "HTML5 & CSS3 Essentials",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Students: 10,
    time: "8 Weeks",
    box: 5,
  },
  {
    type: "live",
    title: "JavaScript Fundamentals",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Students: 10,
    time: "8 Weeks",
    box: 5,
  },
  {
    type: "UPCOMING",
    title: "Python3 Essentials",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Students: 10,
    time: "85 Weeks",
    box: 5,
  },
  {
    type: "UPCOMING",
    title: "HTML5 & CSS3-Advanced Topics",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Students: 10,
    time: "80 Weeks",
    box: 5,
  },
  {
    type: "live",
    title: "HTML5 & CSS3 Essentials",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Students: 10,
    time: "15 Weeks",
    box: 5,
  },
  {
    type: "live",
    title: "JavaScript Fundamentals",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Students: 10,
    time: "3 Weeks",
    box: 5,
  },
  {
    type: "UPCOMING",
    title: "Python3 Essentials",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Students: 10,
    time: "9 Weeks",
    box: 5,
  },
  
];

export const featuresCard = [
  {
    icon:<ImStarFull/>,
    heading:"Feature 1",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon:<FaLightbulb/>,
    heading:"Feature 2",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon:<FaRegCheckCircle/>,
    heading:"Feature 1",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]



export const codecamps = [

  { 
    id: 'html-cdmp-1',
    image:htmlCamp,
    type: "UPCOMING",
    title: "30-Day Web Design CodeCamp",
    description: "Master the essentials of web development in just 30 days with our comprehensive CodeCamp. From HTML basics to advanced Tailwind, we've got you covered.",
    highlights: [
      "Foundation for Future",
      "Project Focus",
      "Interactive Learning"
    ],
    whatYoullGet: [
      {title :'Hands-On Experience', description:'Build real-world projects including personal websites and interactive landing pages'},
      {title :'Expert Knowledge', description:'Learn HTML, CSS, Tailwind, and Git with step-by-step guidance and practical examples.'},
      {title :'Community Support', description: 'Join a community of learners and experts on CodeMarch, share your progress, and collaborate on projects'}
    ],
    aboutCourse: "This 30-day CodeCamp is tailored to build a solid foundation in web development. It introduces key concepts and tools including HTML, CSS, Tailwind CSS, and Git, laying the groundwork for your journey as a developer. Through a blend of theory, practical exercises, and project work, the course ensures a comprehensive grasp of essential web development skills. While it won't make you an expert overnight, it sets the stage for advanced learning and development in the field.",

    
    syllabus : [
      {
        title: "Basics of HTML",
        description: "Introduction to HTML fundamentals, covering setting up, headings, paragraphs, and text formatting.",
        includes: [
          { title: "Setting Up, Headings, Paragraphs, Text Formatting", description: "Cover foundational HTML concepts for document structure and formatting." },
          { title: "Links, Anchor Tags, Images, Favicon, Lists", description: "Explore hyperlinking, image usage, and list structures in HTML." },
          { title: "Tables, HTML Blocks & Inlines, Forms, Semantic Elements", description: "Learn about tables, HTML block elements, forms, and semantic tags." },
          { title: "Iframes, Multimedia, Emojis, Canvas", description: "Integrate multimedia elements, emojis, and canvas in HTML documents." },
          { title: "Building a Personal Website", description: "Apply learned HTML concepts to create a personal website project." },
        ],
      },
      {
        title: "Introduction to Git",
        description: "Learn Git essentials, including installation, staging, checkouts, branches, merging, and .gitignore.",
        includes: [
          { title: "Installation, Staging, Checkouts, Branches, Merging, .gitignore", description: "Set up Git, stage changes, work with branches, and manage project files." },
          { title: "Repository Creation, Pushing Code, Collaboration, Forking, Cloning, Pull Requests", description: "Learn GitHub basics, including repository creation, collaboration, and pull requests." },
        ],
      },
      {
        title: "CSS Introduction",
        description: "Dive into Cascading Style Sheets, exploring various selectors, colors, and mastering visually appealing backgrounds.",
        includes: [
          { title: 'Adding CSS, Selectors, Colors, Backgrounds', description: 'Explore various selectors for targeting elements, experiment with a spectrum of colors, and master the art of crafting visually appealing backgrounds' },
          { title: 'CSS Text & Effects - Opacity, Filters, Box Sizing, Pseudo-Classes', description: "Apply text effects, opacity, filters, and box-sizing in CSS." },
          { title: 'CSS Box Model, Display Properties', description: "Understand the box model, display properties, and layout in CSS." },
          { title: 'CSS Positioning, Fonts, Z-index, Overflow, Float', description: "Learn about positioning, fonts, z-index, overflow, and float in CSS." },
          { title: 'CSS Values & Units, Shadows, Gradients, Flexbox, Transitions, Animations', description: "Explore CSS values, shadows, gradients, flexbox, transitions, and animations." },
          { title: "CSS Media Queries, Responsive Web Design", description: "Implement media queries for responsive web design in CSS." },
          { title: "Designing a Landing Page", description: "Apply CSS concepts to design a landing page project." }
        ],
      },
      {
        title: "Tailwind Basics",
        description: "Understand the basics of Tailwind CSS, covering layout, spacing, components, and transitions.",
        includes: [
          { title: "Tailwind Basics - Layout, Spacing", description: "Learn foundational concepts of layout and spacing in Tailwind CSS." },
          { title: "Tailwind Components - Flexbox, Grid, Responsive Classes, Cards, Badges", description: "Explore Tailwind components, including flexbox, grid, responsive classes, cards, and badges." },
          { title: "Tailwind Transitions", description: "Understand transitions and animations in Tailwind CSS." },
          { title: "Tailwind Basics - Layout, Spacing", description: "Revisit Tailwind basics related to layout and spacing." },
          { title: "Creating a Landing Page", description: "Apply Tailwind CSS concepts to create a landing page project." },
          { title: "Projects with Light/Dark Modes", description: "Implement light and dark modes in Tailwind CSS projects." },
        ],
      },
      {
        title: "Content Creation",
        description: "Explore techniques for content creation, practical application, and a dedicated review day.",
        includes: [
          { title: "Content Creation Techniques", description: "Learn techniques for effective content creation." },
          { title: "Practical Content Creation", description: "Apply content creation techniques in practical scenarios." },
          { title: "Review Day", description: "Dedicated day for reviewing and reinforcing learned concepts." },
        ],
      },
    ]
  },

  {
    id:'js-cdmp-2',
    image:jsCamp,
    type: "UPCOMING",
    title: "100 Days of JavaScript Mastery",
    description: "Embark on a comprehensive journey through JavaScript with our 100-day program. From basics to advanced topics, transform your coding skills and become proficient in JavaScript.",
    highlights: [
      "In-Depth Learning",
      "Project-Based Approach",
      "Deployment Best Practices"
    ],
    whatYoullGet: [
      { title: 'In-Depth Learning', description: 'Delve into every aspect of JavaScript, from basics to complex concepts.' },
      { title: 'Project-Based Approach', description: 'Apply your learning in real-world scenarios through weekly projects.' },
      { title: 'Weekly 1:1 Expert Review', description: 'Receive personalized guidance and feedback from experienced developers to enhance your learning and development.' }
      // ... other properties
    ],
    aboutCourse: "Our '100 Days of JavaScript Mastery' course offers a structured and progressive journey through JavaScript. It blends theoretical learning with practical application, covering everything from basic concepts to advanced JavaScript features. Each week alternates between focused learning and project work, culminating in weekly 1:1 reviews with experienced developers. This format ensures a deep understanding of JavaScript, preparing you for real-world development challenges.",
    syllabus: [
      {
        title: "Intro to JavaScript",
        description: "Foundational concepts of JavaScript including variables, constants, data types, operators, conditional statements, loops, functions, and arrays.",
        includes: [
          { title: "Variables & Constants", description: "Understand how to declare and use variables and constants in JavaScript." },
          { title: "Data Types & Operators", description: "Explore various data types and operators in JavaScript." },
          { title: "Conditional Statements", description: "Learn about if statements, switch statements, and other conditional structures." },
          { title: "Loops", description: "Master different types of loops like for, while, and do-while loops." },
          { title: "Functions", description: "Understand the creation and usage of functions in JavaScript." },
          { title: "Arrays", description: "Explore arrays and their manipulation in JavaScript." },
        ],
      },
      {
        title: "Various JavaScript Assignments",
        description: "Apply and reinforce JavaScript concepts through various coding assignments.",
        includes: [
          {
            title: "Assignment 1: Hello World",
            description: "Write a JavaScript program that prints 'Hello, World!' to the console.",
          },
          {
            title: "Assignment 2: Variable Manipulation",
            description: "Create variables to store information such as your name, age, and favorite programming language. Output these variables in a formatted message.",
          },
          {
            title: "Assignment 3: Basic Math Operations",
            description: "Write a JavaScript program that performs basic math operations (addition, subtraction, multiplication, division) on two numbers.",
          },
          // Add more includes as needed...
        ],
      },
      {
        title: "Advanced Concepts",
        description: "Explore advanced JavaScript topics such as strings, objects, basic DOM manipulation, dates, math operations, hoisting, scopes, classes, properties, sets, maps, and recursion.",
        includes: [
          { title: "Strings & Objects", description: "Learn about strings and objects in JavaScript." },
          { title: "Basic DOM Manipulation", description: "Understand basic DOM manipulation techniques." },
          { title: "Dates & Math Operations", description: "Explore working with dates and various math operations." },
          { title: "Hoisting & Scopes", description: "Understand hoisting and different scopes in JavaScript." },
          { title: "Classes & Properties", description: "Learn about classes and properties in JavaScript." },
          { title: "Sets & Maps", description: "Explore sets and maps in JavaScript." },
          { title: "Recursion", description: "Understand the concept of recursion in programming." },
          // Add more includes as needed...
        ],
      },
      // Add content for the remaining weeks...
    ]
    
  },

  {
    id:'react-cdmp-3',
    image:reactCamp,
    type: "UPCOMING",
    title: "30 Days to React Mastery",
    description: "Dive into the world of React in just 30 days. Our dynamic course covers everything from basic concepts to advanced techniques, empowering you to build impressive, interactive web applications.",
    highlights: [
      "Explore React Ecosystem",
      "Responsive Design Techniques",
      "Deployment Best Practices"
    ],
    whatYoullGet: [
      { title: 'Foundational Skills', description: 'Start from the basics and gradually delve into complex React features.' },
      { title: 'Practical Projects', description: 'Apply your knowledge through weekly hands-on projects, building everything from user profiles to a full-fledged music player app.' },
      { title: 'Expert Insights', description: 'Learn the latest practices in React development, including hooks, state management, and performance optimization.' }
      // ... other properties
    ],
    aboutCourse: " 30 Days to React Mastery : is a foundational course designed to introduce you to React. Over 30 days, you'll learn the basics and explore advanced concepts through a mix of theory and practical projects. While this course lays a solid foundation, mastering React requires ongoing practice beyond these 30 days. Our aim is to equip you with the necessary skills and understanding to continue your learning journey in React development.",
    syllabus: [
      {
        title: "Getting Started with React",
        description: "Introduction to the basics of React, covering components, props, styling, and an overview of hooks.",
        includes: [
          { title: "Understanding Components", description: "Learn the fundamentals of React components." },
          { title: "Hands-On Project: Create a Card", description: "Apply component knowledge to create a card in a practical project." },
          { title: "Using Props in Components", description: "Explore the usage of props to pass data between React components." },
          { title: "Styling and Media in React", description: "Learn styling techniques and handling media in React." },
          { title: "Hands-On Project: User Profile", description: "Create a user profile project using React components." },
          { title: "Introduction to Hooks", description: "Understand the basics of React hooks." },
        ],
      },
    
      {
        title: "Hand-On Project",
        description: "Hands-on projects to apply and reinforce React concepts.",
        includes: [
          { title: "Task Tracker App", description: "Build a task tracker application in React." },
          { title: "Working with Effects", description: "Explore the usage of effects in React." },
          { title: "Styling in React", description: "Learn advanced styling techniques in React." },
          { title: "Hands-On Project: Random Quote Generator", description: "Create a project generating random quotes using React." },
          { title: "Dynamic Rendering in React", description: "Understand dynamic rendering techniques in React." },
          { title: "Working with Forms in React", description: "Explore form handling in React applications." },
          { title: "Hands-On Project: API Key Generator", description: "Build a project generating API keys using React." },
        ],
      },
    
      {
        title: "Moving to Routing in React",
        description: "Transition into more advanced topics, including routing in React.",
        includes: [
          { title: "Routing in React", description: "Learn about routing concepts and implementation in React." },
          { title: "Hands-On Project: Gadget Store", description: "Create a gadget store project with React routing." },
          { title: "Class Components in React", description: "Understand and work with class components in React." },
          { title: "React Lifecycle Methods", description: "Explore lifecycle methods in React." },
          { title: "Hands-On Project: Movie Finder", description: "Build a movie finder project using React." },
          { title: "State Management in React", description: "Learn about state management in React applications." },
          { title: "Hands-On Project: Book Store Website", description: "Create a book store website project with React." },
        ],
      },
      
      {
        title: "Exploring Advanced Topics in React",
        description: "Delve into advanced topics such as higher-order components, rendering patterns, error handling, hooks beyond basics, creating custom hooks, and performance optimization.",
        includes: [
          { title: "Higher-Order Components (HOCs)", description: "Explore the concept and usage of higher-order components in React." },
          { title: "Rendering Patterns in React", description: "Understand different rendering patterns in React applications." },
          { title: "Hands-On Project: Music Player App", description: "Create a music player app project using React." },
          { title: "Error Handling in React", description: "Learn techniques for error handling in React applications." },
          { title: "More Hooks: Beyond useState and useEffect", description: "Explore additional hooks beyond the basics." },
          { title: "Creating Custom Hooks", description: "Understand how to create and use custom hooks in React." },
          { title: "Performance Optimization in React", description: "Learn techniques for optimizing the performance of React applications." },
        ],
      },
    
      {
        title: "React Project & Deployment",
        description: "Conclude the course with a mega project day for a code editor and deployment day.",
        includes: [
          { title: "Mega Project Day: Code Editor", description: "Work on a substantial project to create a code editor using React." },
          { title: "Deployment Day", description: "Learn and execute deployment strategies for React applications." },
        ],
      },
    ]
    
  },

  {
    id:'tailwind-cdmp-4',
    image:tailwindCamp,
    type: "UPCOMING",
    title: "30 Days of Tailwind CSS CodeCamp",
    description: "Master the art of responsive web design and utility-first CSS with our 30-day Tailwind CSS CodeCamp. Explore the power of Tailwind CSS and enhance your styling skills.",
    highlights: [
      "Responsive Web Design",
      "Utility-First CSS",
      "Practical Projects"
    ],
    whatYoullGet: [
      { title: 'Hands-On Experience', description: 'Build real-world projects with Tailwind CSS.' },
      { title: 'Comprehensive Learning', description: 'Cover the basics and advanced features of Tailwind CSS.' },
      { title: 'Community Support', description: 'Join a community of learners, share your progress, and collaborate on projects.' }
      // ... other properties
    ],
    aboutCourse: "This 30-day Tailwind CSS CodeCamp is tailored to help you master the art of responsive web design using utility-first CSS. Each day covers essential concepts, providing you with a solid foundation for creating visually appealing and responsive web pages.",
    syllabus: [
      {
        title: "Tailwind Basics",
        description: "Understand the basics of Tailwind CSS, covering layout, spacing, components, and transitions.",
        includes: [
          { title: "Tailwind Basics - Layout, Spacing", description: "Learn foundational concepts of layout and spacing in Tailwind CSS." },
          { title: "Tailwind Components - Flexbox, Grid, Responsive Classes, Cards, Badges", description: "Explore Tailwind components, including flexbox, grid, responsive classes, cards, and badges." },
          { title: "Tailwind Transitions", description: "Understand transitions and animations in Tailwind CSS." },
          { title: "Tailwind Basics - Layout, Spacing", description: "Revisit Tailwind basics related to layout and spacing." },
          { title: "Creating a Landing Page", description: "Apply Tailwind CSS concepts to create a landing page project." },
          { title: "Projects with Light/Dark Modes", description: "Implement light and dark modes in Tailwind CSS projects." },
        ],
      },
    ]
  },
]