import imgchat from "./chat.PNG";
import imggmail from "./gmail.PNG";
import imgcrm from "./CRM.PNG";
import imgauth from "./auth.PNG";

export let projects = [
  {
    id: 1,
    name: "CRM APPLICATION",
    description:
      "This full-stack application lets you store information about customers to help you track the status of every customer relationshipand this will store and edit customer details, as well as keep notes about them",
    frontendcode: "https://github.com/Sivaramanraja98/WEBCODE-CRM-FRONTEND.git",
    backendcode: "https://github.com/Sivaramanraja98/WEBCODE-CRM-BACKEND.git",
    applink: "https://amazing-mousse-4d5cd0.netlify.app/",
    img: imgcrm,
  },
  {
    id: 2,
    name: "Gmail Clone",
    description:
      "Gmail Clone - Authenticated User can send Email and Read Email . User can send, receive & reply mails between them. Multi user communication & Profile picture updation.",
    frontendcode: "https://github.com/Sivaramanraja98/Gmail-Clone-Frontend.git",
    backendcode: "https://github.com/Sivaramanraja98/Gmail-Clone-Backend.git",
    applink: "https://gmailcloneproject.netlify.app/",
    img: imggmail,
  },
  {
    id: 3,
    name: "Reset PassWord with auth",
    description:
      "This Application allows the user to register with mail verification, login, reset password with mail verification",
    frontendcode:
      "https://github.com/Sivaramanraja98/Passwordreset-frontend.git",
    backendcode: "https://github.com/Sivaramanraja98/Passwordreset-Backend.git",
    applink: "https://myauthapp.netlify.app",
    img: imgauth,
  },
  {
    id: 4,
    name: "Chat Application",
    description:
      "Application that allows users to communicate with each other in real-time via chat messages. Users must sign up and log in to use the app and can send private messages to other users and can see the online status of other users and Users receive notifications when they receive new messages",
    frontendcode:
      "https://github.com/Sivaramanraja98/chat-application-frontend.git",
    backendcode:
      "https://github.com/Sivaramanraja98/Chat-Application-Backend.git",
    applink: "https://chatappmern2298.netlify.app",
    img: imgchat,
  },
];
