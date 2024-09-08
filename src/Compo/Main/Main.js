import React from 'react';
import './main.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Experiment from '../../pages/Experiment/Experiment';
import Task_M from '../../pages/Task_Management/Task_M';
import Data_M from '../../pages/Data_Management/Data_M';
import Analysis from '../../pages/Analysis/Analysis';
import Report from '../../pages/Report/Report';
import History from '../../pages/History/History';
import Settings from '../../pages/Settings/Settings'
import GroupView from '../../pages/View/GroupView';
import GPTtry from '../../pages/GPTtry'
import Footer from '../Footer/Footer';
import ClassManage from '../../pages/Task_Management/Child/ClassManage'
import GroupManage from '../../pages/Task_Management/Child/GroupManage'
import ReportView from '../../pages/View/ReportView'

const Main = ({ contentShift }) => {
    return (
        <div className={`main ${contentShift ? 'shifted' : ''}`}>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/experimants' element={<Experiment />} />
                <Route path='/studentmanage' element={<Task_M />} />
                {/* =======================child========================== */}
                <Route path='/studentmanage/classmanage' element={<ClassManage />} />
                <Route path='/studentmanage/groupmanage' element={<GroupManage />} />
                <Route path="/groupview/:groupId/:segment" element={<GroupView />} />

                <Route path='/datamanage' element={<Data_M />} />
                <Route path='/analysis' element={<Analysis />} />
                <Route path='/report' element={<Report />} />
                <Route path="/reportview/:reportId/:segment" element={<ReportView />} />
                <Route path='/history' element={<History />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/gpt_try' element={<GPTtry />} />
            </Routes>
            {/* <Footer /> */}
            <h2>Main Content</h2>
        </div>
    );
};

export default Main;
