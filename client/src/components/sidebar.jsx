import React from 'react';
import { Box } from '@mui/material';

export default class Sidebar extends React.Component {
    
    Menus = [
        {title: 'Dashboard', src: 'dashboard'},
        {title: 'Members', src: 'members'}, 
        {title: 'Patients Data', src: 'patient'},
        
    ]

    render() {
        
        return(


            <Box className="w-72 h-screen bg-white relative drop-shadow-md">

                {/*<KeyboardArrowLeftIcon 
                    className='absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-primary-abu-2 bg-primary-abu-2'
                />*/}

                <Box className='h-36 bg-primary-abu-2'>
                     <img
                        className='cursor-pointer p-5 px-20'
                        src="src/assets/OIG 2.png" alt="" 
                    />
                </Box>

                <ul 
                    className='text-[#999999] pt-6 p-5'
                >

                    {this.Menus.map((menu, index) => (
                        <li 
                        className={`flex items-center gap-x-4 cursor-pointer p-2 py-5 hover:text-black hover:bg-gray-200 rounded-md ${
                            menu.title === 'Members' ? 'pl-4' : 'pl-5'
                        } ${menu.title === 'Patients Data' ? 'pl-6' : 'pl-5'}`}
                            key={index}
                        >
                            <img
                                src={`src/assets/${menu.src}.png`} 
                                alt={menu.title}
                            />
                            <span
                                className='flex-grow pl-3'
                            >
                                {menu.title}
                            </span>
                        </li>
                    ))}

                </ul>


            </Box>

        );
    };
};