import React from 'react';
import { Box } from '@mui/material'
import Sidebar from '/src/components/sidebar.jsx';

export default class Dashboard extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            header1: 'Total Patients',
            content1: '34', 
            header2: 'Weather',
            content2: '24'
        }
    }

    render() {

        return (

            <div className="flex bg-primary-abu">

                <Sidebar />

                <div className='flex-grow h-screen p-20 text-2xl font-bold'>

                    <h1>Dashboard</h1>

                    <DashboardContentWrapper >

                        <img
                            className='opacity-50'
                            src="/src/assets/logo.png"
                            alt="Logo"
                        />

                    </DashboardContentWrapper>

                </div>

            </div>
            
        );
    };
};

class DashboardContentWrapper extends React.Component {

    render() {

        return(

            <Box className="flex flex-row justify-between w-full h-full py-20">
               <Box className="flex flex-row justify-center rounded-lg bg-white p-10 shadow-lg max-w-lg max-h-lg mx-auto">
                  {this.props.children}
               </Box>
           </Box>
            
        );
    };
};

class ContentWrapper extends React.Component {

    render() {

        return(

            <Box 
                className="h-32 p-5 mx-2 rounded-lg bg-gradient-to-r from-primary-gradient-1-1 to-primary-gradient-1-2"
            >

                <h1>
                    {this.props.header}
                </h1>

                <h1>
                    {this.props.content}
                </h1>

            </Box>
            
        );
    }

}