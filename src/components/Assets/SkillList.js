import {FaReact, FaBootstrap,FaNodeJs,FaCss3,FaHtml5,FaGithub} from 'react-icons/fa';
import {TbBrandMysql,TbBrandVscode} from 'react-icons/tb';
import {BiLogoMongodb} from 'react-icons/bi';
import {SiPostman,SiExpress} from 'react-icons/si';

export const skills = [
    {   
        id:'1',
        title:"Front-End",
        skills:[
            {
                name:"React Js",
                icons:<FaReact />
            },
            {
                name:"HTML",
                icons:<FaHtml5/>
            },
            {
                name:"CSS",
                icons:<FaCss3/>
            },
            {
                name:"Bootstrap",
                icons:<FaBootstrap/>
            }
        ]
    },
    {   
        id:'2',
        title:"Back-End",
        skills:[
            {
                name:"Node Js",
                icons:<FaNodeJs/>
            },
            {
                name:"Express Js",
                icons:<SiExpress/>
            }
        ]
    },
    {
        id:'3',
        title:"DataBase",
        skills:[
            {
                name:"MongoDB",
                icons:<BiLogoMongodb/>
            },
            {
                name:"MY SQL",
                icons:<TbBrandMysql/>
            }
        ]
    },
    {
        id:'4',
        title:"Other Tools",
        skills:[
            {
                name:"Github",
                icons:<FaGithub/>
            },
            {
                name:"Postman",
                icons:<SiPostman/>
            },
            {
                name:"VS Code",
                icons:<TbBrandVscode/>
            }
        ]
    }
]