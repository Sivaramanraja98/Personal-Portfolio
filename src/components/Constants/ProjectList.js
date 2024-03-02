import imgchat from "../Assets/chat.PNG";
import imggmail from "../Assets/gmail.PNG";
import imgcrm from "../Assets/CRM.PNG";
import imgauth from "../Assets/auth.PNG";
import imgTODO from "../Assets/TodoMERN.PNG";
import imgrtodo from "../Assets/Reacttodo.PNG";
import imgwea from "../Assets/weather.PNG";
import imgpc from "../Assets/pricecard.PNG";
import imgcal from "../Assets/calc.PNG";
import imgpag from "../Assets/page.PNG";
import imgBMI from "../Assets/BMI"

export let projects = [
  {
    id: 1,
    Type: "Mern",
    name: "MERN CRM APPLICATION",
    description:
      "This full-stack application lets you store information about customers to help you track the status of every customer relationshipand this will store and edit customer details, as well as keep notes about them",
    frontendcode: "https://github.com/Sivaramanraja98/WEBCODE-CRM-FRONTEND.git",
    backendcode: "https://github.com/Sivaramanraja98/WEBCODE-CRM-BACKEND.git",
    applink: "https://amazing-mousse-4d5cd0.netlify.app/",
    img: imgcrm,
    techFrontend: [
      "React.js",
      "React Router",
      "Axios",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Express JWT",
      "Bcrypt",
      "NodeMailer",
      "Stripe",
    ],
  },
  {
    id: 2,
    Type: "Mern",
    name: "MERN Gmail Clone Application",
    description:
      "This project is a clone of the popular email service Gmail, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It replicates key features of Gmail such as sending and receiving emails, and folders, composing emails with organizing emails  .",
    frontendcode: "https://github.com/Sivaramanraja98/Gmail-Clone-Frontend.git",
    backendcode: "https://github.com/Sivaramanraja98/Gmail-Clone-Backend.git",
    applink: "https://gmailcloneproject.netlify.app/",
    img: imggmail,
    techFrontend: [
      "React.js",
      "React Router",
      "React-Redux",
      "Redux Thunk",
      "Axios",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bcrypt",
      "Express Validator",
      "CORS",
      "Morgan",
      "Dotenv",
    ],
  },
  {
    id: 3,
    Type: "Mern",
    name: " MERN Auth - Reset Password Application",
    description:
      "This Application allows the user to register with mail verification, login, reset password with mail verification",
    frontendcode:
      "https://github.com/Sivaramanraja98/Passwordreset-frontend.git",
    backendcode: "https://github.com/Sivaramanraja98/Passwordreset-Backend.git",
    applink: "https://myauthapp.netlify.app",
    img: imgauth,
    techFrontend: [
      "React.js",
      "React Router",
      "Axios",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Bcrypt",
      "Dotenv",
      "JWT",
      "Nodemailer",
      "JOI",
      "NodeMon",
    ],
  },
  {
    id: 4,
    Type: "Mern",
    name: "MERN Chat Application",
    description:
      "This project is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with Socket.IO for enabling real-time communication between users. It provides users with the ability to engage in instant messaging, creating private and group chats seamlessly.",
    frontendcode:
      "https://github.com/Sivaramanraja98/chat-application-frontend.git",
    backendcode:
      "https://github.com/Sivaramanraja98/Chat-Application-Backend.git",
    applink: "https://chatappmern2298.netlify.app",
    img: imgchat,
    techFrontend: [
      "React.js",
      "React Router",
      "Redux",
      "React-Redux",
      "Redux Toolkit",
      "Axios",
      "Socket.IO",
      "Bootstrap",
      "React-Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Bcrypt",
      "Express Validator",
      "CORS",
      "Dotenv",
    ],
  },
  {
    id: 5,
    Type: "Mern",
    name: "MERN Todo Application",
    description:
      "This project is a full-stack Todo application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create, read, update, and delete tasks, providing a simple yet effective interface for managing daily tasks and schedules.",
    frontendcode: "https://github.com/Sivaramanraja98/Mern-Todo-Frontend.git",
    backendcode: "https://github.com/Sivaramanraja98/MERN-TODO-BACKEND.git",
    applink: "https://merntodo2298.netlify.app/",
    img: imgTODO,
    techFrontend: [
      "React.js",
      "React Router",
      "Bootstrap",
      "React-Bootstrap",
      "Axios",
      "Moment.js",
      "React-Icons",
      "React-Toastify",
      "Node.js ",
      " Express.js",
      "MongoDB ",
      " Mongoose",
      "JWT",
      "Bcrypt",
      "Express",
      "CORS",
      "Dotenv",
      "Nodemon",
    ],
  },
  {
    id: 6,
    Type: "React",
    name: "simple-ToDo",
    description:
      "This project is a simple Todo application built using React.js. It allows users to create, read, update, and delete tasks, providing a straightforward interface for managing daily tasks and schedules. The application incorporates state management to efficiently handle task data and user interactions.",
    frontendcode: "https://github.com/Sivaramanraja98/TODO-Application.git",
    applink: "https://react-todo-app-2298.netlify.app/",
    img: imgrtodo,
    techFrontend: ["React.js", "React Router", "Short id"],
  },
  {
    id: 7,
    Type: "React",
    name: "Weather - app",
    description:
      "This project is a weather application built using React.js, providing users with real-time weather information for a specified location. It utilizes an external API to fetch weather data and displays it in a user-friendly interface, allowing users to easily access current weather conditions, forecasts, and other relevant information",
    frontendcode: "https://github.com/Sivaramanraja98/WeatherAPI.git",
    applink: "https://cityweather2298.netlify.app/",
    img: imgwea,
    techFrontend: ["React.js", "React Router", "axios"],
  },
  {
    id: 8,
    Type: "React",
    name: "Price-Card",
    description:
      "This project is a React component for displaying price cards, commonly used in e-commerce websites or product pages to showcase different pricing plans or packages.",
    frontendcode: "https://github.com/Sivaramanraja98/bootcard.git",
    applink: "https://clinquant-crostata-348555.netlify.app/",
    img: imgpc,
    techFrontend: ["React.js", "Bootstrap"],
  },
  {
    id: 9,
    Type: "JavaScript",
    name: "Simple Calculator Web Application",
    description: "This project is a simple calculator web application that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Users can input numerical values and operators through a graphical user interface, and the application displays the result of the calculation.",
    frontendcode: "https://github.com/Sivaramanraja98/Calculator-task.git",
    applink: "https://glittering-clafoutis-5e023e.netlify.app/",
    img: imgcal,
    techFrontend: ["HTML", "Css", "Javascript", "DOM manipulation"],
  },
  {
    id: 10,
    Type: "JavaScript",
    name: "Pagination Component with XMLHttpRequest",
    description:
      "This project is a simple pagination component built using JavaScript's XMLHttpRequest to fetch data from an external JSON file. It displays paginated data in a table format, allowing users to navigate through multiple pages of data efficiently.",
    frontendcode: "https://github.com/Sivaramanraja98/Pagination.git",
    applink: "https://rad-paletas-f9bd3a.netlify.app/",
    img: imgpag,
    techFrontend: [
      "HTML",
      "Css",
      "Javascript",
      "DOM manipulation",
      "XMLHttpRequest (XHR)",
    ],
  },
  {
    id: 11,
    Type: "React",
    name: "BMI-CALCULATOR",
    description:
      "",
    frontendcode: "https://github.com/Sivaramanraja98/React-BMI.git",
    applink: "",
    img: imgBMI,
    techFrontend: ["React.js", "React-Bootstrap","Bootstrap", "UseState"],
  },
];
