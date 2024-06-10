import { LuLayoutDashboard } from "react-icons/lu";
import { AiTwotoneExperiment } from "react-icons/ai";
import { FaTasks, FaDatabase, FaHistory } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";


export const RouteItem = [
    {
        id: 1,
        path: '/dashboard',
        name: 'Dashboard',
        icon: <LuLayoutDashboard />,
    },
    {
        id: 2,
        path: '/experimants',
        name: 'Experimants',
        icon: <AiTwotoneExperiment />,
    },
    {
        id: 3,
        path: '/taskmanage',
        name: 'Task Management',
        icon: <FaTasks />,
    },
    {
        id: 4,
        path: '/datamanage',
        name: 'Data Management',
        icon: <FaDatabase />,
    },
    {
        id: 5,
        path: '/analysis',
        name: 'Analysis',
        icon: <IoMdAnalytics />,
    },
    {
        id: 6,
        path: '/report',
        name: 'Report',
        icon: <TbReportAnalytics />,
    },
    {
        id: 7,
        path: '/history',
        name: 'History',
        icon: <FaHistory />,
    },
    {
        id: 8,
        path: '/settings',
        name: 'Settings',
        icon: <IoSettingsOutline     />,
    },
]