import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import LeadContext from '../context/LeadContext'

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);



const ReportPage = () => {
    const {statusArray,allleads}  = useContext(LeadContext)

     const newLeadCount = allleads.reduce((acc, curr) => {
        return curr.status === 'New' ? acc + 1 : acc;
    }, 0);
    const ContactedleadCount = allleads.reduce((acc, curr) => {
            return curr.status === 'Contacted' ? acc + 1 : acc;
    }, 0);
    const QualifiedleadCount = allleads.reduce((acc, curr) => {
            return curr.status === 'Qualified' ? acc + 1 : acc;
    }, 0);
    const ProposeleadCount = allleads.reduce((acc, curr) => {
            return curr.status === 'Proposal Sent' ? acc + 1 : acc;
    }, 0);
    const ClosedleadCount = allleads.reduce((acc, curr) => {
            return curr.status === 'Closed' ? acc + 1 : acc;
    }, 0);

    const data = {
    labels: ['New', 'Contacted', 'Qualified','Proposal Sent','Closed'],
    datasets: [
        {
        label: 'Status',
        data: statusArray,
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',   
            'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
        },
    ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            position: 'bottom',
            },
        },
    };

    const data2 = {
    labels: ['Closed', 'NotClosed'],
    datasets: [
            {
            label: 'Status',
            data: [ClosedleadCount,newLeadCount+ContactedleadCount+ProposeleadCount+QualifiedleadCount],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };
  return (
    <div>
        <h2 className='mainheading'>  Anvaya CRM Reports  </h2>
        <div className="box">
            <Sidebar/>
            <div className="container dashcontainer">
                <h3> Report Overview</h3>
                <div>
                    <p><strong>Lead Status Distribution:</strong></p>
                    <div style={{ width: '400px', height: '400px' }}>
                        <Pie data={data} options={options} /> 
                    </div>
                </div>
                <div>
                    <p><strong>Total Leads closed and in Pipeline::</strong></p>
                    <div style={{ width: '400px', height: '400px' }}>
                        <Pie data={data2} options={options} /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReportPage