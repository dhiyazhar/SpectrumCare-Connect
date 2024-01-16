import React from "react";
import {
    Box, 
    Button, 
    Grid,
    Stack
} from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebar from '/src/components/sidebar.jsx';

export default class MemberDashboard extends React.Component {
    
    render () {

        const { classes } = this.props;

        return (

            <Box
                className='flex bg-primary-abu'
            >

                <Sidebar />

                <Box
                    className='p-20 h-screen w-screen'
                >
                    <h1
                        className='text-2xl font-bold mb-4'
                    >
                        Member
                    </h1>

                    <Box
                        className='flex flex-grow space-x-auto rounded-lg bg-white shadow-lg p-20 mt-5'
                    >
                        
                        <Grid container>

                            <Grid>
                                <Button 
                                    color='ijokan'
                                    variant="contained"
                                    startIcon={<PersonAddAltOutlinedIcon />}
                                >
                                    Add Member
                                </Button>
                            </Grid>

                            <Grid>

                                <Button
                                    variant="contained"
                                    endIcon={<SearchOutlinedIcon />}
                                >
                                    Search
                                </Button> 

                            </Grid>

                        </Grid>


                    </Box> 
                </Box> 

                
            </Box>
            
            
        );
    }
}
