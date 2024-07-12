import { BsFlower1 } from "react-icons/bs";
import { AiOutlineSun } from "react-icons/ai";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        src: '/spring',
        icon: <BsFlower1 />,
        title: 'Spring'
    },
    {
        src: '/summer',
        icon: <AiOutlineSun />,
        title: 'Summer'
    },
    {
        src: '/fall',
        icon: <FaCanadianMapleLeaf />,
        title: 'Fall'
    },
    {
        src: '/winter',
        icon: <FaRegSnowflake />,
        title: 'Winter'
    }
];

export const snsLinks = [
    {
        src: 'https://github.com/jinsujini',
        icon: <AiFillGithub />,
        rel: 'noopener noreferrer'
    },
    {
        src: 'https://www.instagram.com/weomeowl',
        icon: <AiOutlineInstagram />,
        rel: 'noopener noreferrer'
    }
];
