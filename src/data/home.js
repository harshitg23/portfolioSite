import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram';

const HI = "Hi I'm "
const NAME = "Harshit Goyal"
const INTRODUCTION = "I'm currently working as a Software Engineer in VectoScalar Technologies Pvt Ltd since Feb 2022. This is my first company where I started my journey in professional life. I got this opportunity through my College Placement cell. Here I am exploring mySelf in the Web and App Development field through ReactJS and React Native."

const PROFILES = [
    {
        link: 'https://github.com/harshitg23',
        className: 'icon i-github',
        icon: <GithubIcon />,
    },
    {
        link: 'https://www.linkedin.com/in/harshit-goyal-62a124193/',
        className: 'icon i-linked',
        icon: <LinkedInIcon />,
    },
    {
        link: 'https://www.facebook.com/harshit.goyal.7564129',
        className: 'icon i-facebook',
        icon: <FacebookIcon />,
    },
    {
        link: 'https://www.youtube.com/channel/UCfKtmHRAVjz7Fv4WE3WOwtw',
        className: 'icon i-youtube',
        icon: <YoutubeIcon />,
    },
    {
        link: 'https://www.instagram.com/harshit_goyal99/',
        className: 'icon i-instagram',
        icon: <InstagramIcon />,
    },
]

export { HI, NAME, INTRODUCTION, PROFILES }