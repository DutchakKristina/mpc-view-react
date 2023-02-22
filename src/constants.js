import overview_icon from './images/overview.svg';
import projects_icon from './images/projects.svg';
import stations_icon from './images/stations.svg';
import alarms_icon from './images/alarms.svg';
import commands_icon from './images/commands.svg';
import users_icon from './images/users.svg';

const menuList = [
    {
        title: 'Overview',
        url: '/overview',
        img: overview_icon
    },
    {
        title: 'Projects',
        url: '/projects',
        img: projects_icon
    },
    {
        title: 'Stations',
        url: '/stations',
        img: stations_icon
    },
    {
        title: 'Alarms',
        url: '/alarms',
        img: alarms_icon
    },
    {
        title: 'Commands',
        url: '/commands',
        img: commands_icon
    },
    {
        title: 'Users',
        url: '/users',
        img: users_icon
    }
];
export default menuList;