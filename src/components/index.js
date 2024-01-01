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
      "Hands-On Experience: Build real-world projects including personal websites and interactive landing pages.",
      "Expert Knowledge: Learn HTML, CSS, Tailwind, and Git with step-by-step guidance and practical examples.",
      "Community Support: Join a community of learners and experts on CodeMarch, share your progress, and collaborate on projects."
    ],
    aboutCourse: "This 30-day CodeCamp is tailored to build a solid foundation in web development. It introduces key concepts and tools including HTML, CSS, Tailwind CSS, and Git, laying the groundwork for your journey as a developer. Through a blend of theory, practical exercises, and project work, the course ensures a comprehensive grasp of essential web development skills. While it won't make you an expert overnight, it sets the stage for advanced learning and development in the field.",

    // "syllabus": {
    //   "days": [
    //     { day: "Day 1", title: "Basics of HTML", "text": "Setting Up, Headings, Paragraphs, Text Formatting" },
    //     { "day": "Day 2", "title": "Links, Anchor Tags, Images, Favicon, Lists" },
    //     { "day": "Day 3", "title": "Tables, HTML Blocks & Inlines, Forms, Semantic Elements" },
    //     { "day": "Day 4", "title": "Iframes, Multimedia, Emojis, Canvas" },
    //     { "day": "Day 5", "title": "Building a Personal Website" },
    //     { "day": "Day 6", "title": "Introduction to Git - Installation, Staging, Checkouts, Branches, Merging, .gitignore" },
    //     { "day": "Day 7", "title": "Getting Started with GitHub - Repository Creation, Pushing Code, Collaboration, Forking, Cloning, Pull Requests" },
    //     { "day": "Day 8", "title": "Rest Day" },
    //     { "day": "Day 9", title: "CSS Introduction" , description:"you will delve into the fundamental concepts of Cascading Style Sheets" , 
    //       includes:['Adding CSS, Selectors, Colors, Backgrounds','CSS Text & Effects - Opacity, Filters, Box Sizing, Pseudo-Classes','CSS Box Model, Display Properties','CSS Positioning, Fonts, Z-index, Overflow, Float','CSS Values & Units, Shadows, Gradients, Flexbox, Transitions, Animations',"CSS Media Queries, Responsive Web Design","Designing a Landing Page"] 
    //     },
    //     { "day": "Day 10", "title": "" },
    //     { "day": "Day 11", "title": "" },
    //     { "day": "Day 12", "title": "" },
    //     { "day": "Day 13", "title": "" },
    //     { "day": "Day 14", "title":  },
    //     { "day": "Days 15 & 16", "title":  },
    //     { "day": "Days 17 & 18", "title": },
    //     { "day": "Day 19", "title": "Rest Day" },
    //     { "day": "Day 20", "title": "Tailwind Basics - Layout, Spacing" },
    //     { "day": "Day 21", "title": "Tailwind Components - Flexbox, Grid, Responsive Classes, Cards, Badges" },
    //     { "day": "Day 22", "title": "Tailwind Transitions" },
    //     { "day": "Days 23 & 24", "title": "Creating a Landing Page" },
    //     { "day": "Days 25 & 26", "title": "Projects with Light/Dark Modes" },
    //     { "day": "Day 27", "title": "Rest Day" },
    //     { "day": "Day 28", "title": "Content Creation Techniques" },
    //     { "day": "Day 29", "title": "Practical Content Creation" },
    //     { "day": "Day 30", "title": "Review Day" }
    //   ]
    // }
    
  },

  {
    id:'js-cdmp-2',
    image:jsCamp,
    type: "UPCOMING",
    title: "100 Days of JavaScript Mastery",
    description: "Embark on a comprehensive journey through JavaScript with our 100-day program. From basics to advanced topics, transform your coding skills and become proficient in JavaScript.",
    highlights: [
      "In-Depth Learning: Delve into every aspect of JavaScript, from basics to complex concepts.",
      "Project-Based Approach: Apply your learning in real-world scenarios through weekly projects.",
      "Weekly 1:1 Expert Review: Receive personalized guidance and feedback from experienced developers to enhance your learning and development."
    ],
    aboutCourse: "Our '100 Days of JavaScript Mastery' course offers a structured and progressive journey through JavaScript. It blends theoretical learning with practical application, covering everything from basic concepts to advanced JavaScript features. Each week alternates between focused learning and project work, culminating in weekly 1:1 reviews with experienced developers. This format ensures a deep understanding of JavaScript, preparing you for real-world development challenges.",
    // "syllabus": [
    //   {
    //     "week": 1,
    //     "topics": [
    //       "Intro to JavaScript",
    //       "Variables & Constants",
    //       "Data Types & Operators",
    //       "Conditional Statements",
    //       "Loops",
    //       "Functions",
    //       "Arrays"
    //     ]
    //   },
    //   {
    //     "week": 2,
    //     "topics": ["Various JavaScript Assignments"]
    //   },
    //   {
    //     "week": 3,
    //     "topics": [
    //       "Strings & Objects",
    //       "Basic DOM Manipulation",
    //       "Dates & Math Operations",
    //       "Hoisting & Scopes",
    //       "Classes & Properties",
    //       "Sets & Maps",
    //       "Recursion"
    //     ]
    //   },
    //   {
    //     "week": 4,
    //     "topics": ["Advanced JavaScript Projects"]
    //   },
    //   {
    //     "week": 5,
    //     "topics": [
    //       "Destructuring",
    //       "Rest & Spread Operators",
    //       "Callbacks",
    //       "Promises & Chaining",
    //       "Async/Await",
    //       "Timers",
    //       "Closures"
    //     ]
    //   },
    //   {
    //     "week": 6,
    //     "topics": ["Interactive JavaScript Projects"]
    //   },
    //   {
    //     "week": 7,
    //     "topics": [
    //       "Modules in JS",
    //       "Object-Oriented Programming",
    //       "DOM & Event Listeners",
    //       "Advanced DOM",
    //       "Prototypes",
    //       "Function Types",
    //       "Memoization"
    //     ]
    //   },
    //   {
    //     "week": 8,
    //     "topics": ["Complex JS Assignments"]
    //   },
    //   {
    //     "week": 9,
    //     "topics": [
    //       "Introduction to APIs",
    //       "Advanced API Concepts",
    //       "Event Loop & Call Stack",
    //       "Polyfill Techniques",
    //       "Currying",
    //       "Event Handling Techniques",
    //       "Deep vs Shallow Copy"
    //     ]
    //   },
    //   {
    //     "week": 10,
    //     "topics": ["API and Event-Driven Projects"]
    //   },
    //   {
    //     "week": 11,
    //     "topics": [
    //       "Debouncing",
    //       "Throttling",
    //       "Execution Context",
    //       "V8 Engine",
    //       "Ecosystem Tools",
    //       "Debugging Techniques",
    //       "Miscellaneous Topics"
    //     ]
    //   },
    //   {
    //     "week": "12-15",
    //     "topics": ["Comprehensive Project Work"]
    //   }
    // ]
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
      "Foundational Skills: Start from the basics and gradually delve into complex React features.",
      "Practical Projects: Apply your knowledge through weekly hands-on projects, building everything from user profiles to a full-fledged music player app.",
      "Expert Insights: Learn the latest practices in React development, including hooks, state management, and performance optimization."
    ],
    aboutCourse: "\"30 Days to React Mastery\" is a foundational course designed to introduce you to React. Over 30 days, you'll learn the basics and explore advanced concepts through a mix of theory and practical projects. While this course lays a solid foundation, mastering React requires ongoing practice beyond these 30 days. Our aim is to equip you with the necessary skills and understanding to continue your learning journey in React development.",
    // "syllabus": [
    //   {
    //     "week": 1,
    //     "topics": [
    //       "Getting Started with React",
    //       "Understanding Components",
    //       "Hands-On Project: Create a Card",
    //       "Using Props in Components",
    //       "Styling and Media in React",
    //       "Hands-On Project: User Profile",
    //       "Introduction to Hooks"
    //     ]
    //   },
    //   {
    //     "week": 2,
    //     "topics": [
    //       "Hands-On Project: Task Tracker App",
    //       "Working with Effects",
    //       "Styling in React",
    //       "Hands-On Project: Random Quote Generator",
    //       "Dynamic Rendering in React",
    //       "Working with Forms in React",
    //       "Hands-On Project: API Key Generator"
    //     ]
    //   },
    //   {
    //     "week": 3,
    //     "topics": [
    //       "Routing in React",
    //       "Hands-On Project: Gadget Store",
    //       "Class Components in React",
    //       "React Lifecycle Methods",
    //       "Hands-On Project: Movie Finder",
    //       "State Management in React",
    //       "Hands-On Project: Book Store Website"
    //     ]
    //   },
    //   {
    //     "week": 4,
    //     "topics": [
    //       "Higher-Order Components (HOCs)",
    //       "Rendering Patterns in React",
    //       "Hands-On Project: Music Player App",
    //       "Error Handling in React",
    //       "More Hooks: Beyond useState and useEffect",
    //       "Creating Custom Hooks",
    //       "Performance Optimization in React"
    //     ]
    //   },
    //   {
    //     "week": 5,
    //     "topics": [
    //       "Mega Project Day: Code Editor",
    //       "Deployment Day"
    //     ]
    //   }
    // ]
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
      "Hands-On Experience: Build real-world projects with Tailwind CSS.",
      "Comprehensive Learning: Cover the basics and advanced features of Tailwind CSS.",
      "Community Support: Join a community of learners, share your progress, and collaborate on projects."
    ],
    aboutCourse: "This 30-day Tailwind CSS CodeCamp is tailored to help you master the art of responsive web design using utility-first CSS. Each day covers essential concepts, providing you with a solid foundation for creating visually appealing and responsive web pages.",
    // "syllabus": [
    //   {
    //     "day": 1,
    //     "title": "Introduction to Tailwind CSS",
    //     "text": "Understanding the basics, installation, and project setup."
    //   },
    //   {
    //     "day": 2,
    //     "title": "Utility-First Philosophy",
    //     "text": "Exploring the utility-first approach and its advantages."
    //   },
    //   {
    //     "day": 3,
    //     "title": "Responsive Design",
    //     "text": "Creating responsive layouts and handling different screen sizes."
    //   },
    //   {
    //     "day": 4,
    //     "title": "Typography and Text Styling",
    //     "text": "Working with fonts, text sizes, and styles."
    //   },
    //   {
    //     "day": 5,
    //     "title": "Colors and Backgrounds",
    //     "text": "Using colors, gradients, and background utilities."
    //   },
    //   {
    //     "day": 6,
    //     "title": "Spacing and Sizing",
    //     "text": "Managing spacing, padding, and margin utilities."
    //   },
    //   {
    //     "day": 7,
    //     "title": "Flexbox and Grid",
    //     "text": "Applying Flexbox and Grid utilities for layout design."
    //   },
    //   {
    //     "day": 8,
    //     "title": "Forms and Inputs",
    //     "text": "Styling forms, inputs, and form elements with Tailwind CSS."
    //   },
    //   {
    //     "day": 9,
    //     "title": "Navigation Menus",
    //     "text": "Creating responsive navigation menus with Tailwind CSS."
    //   },
    //   {
    //     "day": 10,
    //     "title": "Project: Personal Portfolio",
    //     "text": "Building a personal portfolio website using Tailwind CSS."
    //   },
    //   {
    //     "day": 11,
    //     "title": "Animations and Transitions",
    //     "text": "Adding animations and transitions to enhance user experience."
    //   },
    //   {
    //     "day": 12,
    //     "title": "Hover and Focus Styles",
    //     "text": "Creating interactive hover and focus styles for elements."
    //   },
    //   {
    //     "day": 13,
    //     "title": "Customizing Tailwind CSS",
    //     "text": "Understanding configuration and customizing Tailwind CSS."
    //   },
    //   {
    //     "day": 14,
    //     "title": "Responsive Images",
    //     "text": "Handling images and optimizing for different devices."
    //   },
    //   {
    //     "day": 15,
    //     "title": "Dark Mode Implementation",
    //     "text": "Implementing dark mode for your Tailwind CSS projects."
    //   },
    //   {
    //     "day": 16,
    //     "title": "Project: Blog Design",
    //     "text": "Designing a responsive blog using Tailwind CSS."
    //   },
    //   {
    //     "day": 17,
    //     "title": "Optimizing for Performance",
    //     "text": "Tips and tricks for optimizing Tailwind CSS for performance."
    //   },
    //   {
    //     "day": 18,
    //     "title": "Working with Plugins",
    //     "text": "Exploring and using Tailwind CSS plugins."
    //   },
    //   {
    //     "day": 19,
    //     "title": "Tailwind CSS and JavaScript",
    //     "text": "Integrating Tailwind CSS with JavaScript frameworks."
    //   },
    //   {
    //     "day": 20,
    //     "title": "Project: E-commerce Site",
    //     "text": "Building a responsive e-commerce site with Tailwind CSS."
    //   },
    //   {
    //     "day": 21,
    //     "title": "Best Practices",
    //     "text": "Understanding and following best practices in Tailwind CSS."
    //   },
    //   {
    //     "day": 22,
    //     "title": "Accessibility in Design",
    //     "text": "Ensuring accessibility in your Tailwind CSS projects."
    //   },
    //   {
    //     "day": 23,
    //     "title": "Localization and Internationalization",
    //     "text": "Handling localization and internationalization in Tailwind CSS."
    //   },
    //   {
    //     "day": 24,
    //     "title": "Project: Social Media Dashboard",
    //     "text": "Designing a social media dashboard using Tailwind CSS."
    //   },
    //   {
    //     "day": 25,
    //     "title": "State Management with Alpine.js",
    //     "text": "Integrating Tailwind CSS with Alpine.js for state management."
    //   },
    //   {
    //     "day": 26,
    //     "title": "Project: Landing Page",
    //     "text": "Creating an engaging landing page with Tailwind CSS."
    //   },
    //   {
    //     "day": 27,
    //     "title": "Versioning and Upgrading Tailwind CSS",
    //     "text": "Managing versions and upgrading Tailwind CSS in projects."
    //   },
    //   {
    //     "day": 28,
    //     "title": "Project: Tech Conference Website",
    //     "text": "Designing a tech conference website using Tailwind CSS."
    //   },
    //   {
    //     "day": 29,
    //     "title": "Tailwind CSS and Server-Side Rendering",
    //     "text": "Implementing Tailwind CSS with server-side rendering."
    //   },
    //   {
    //     "day": 30,
    //     "title": "Final Project Showcase",
    //     "text": "Showcasing and sharing your final Tailwind CSS projects."
    //   }
    // ]
  }
]