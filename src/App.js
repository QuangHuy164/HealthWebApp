import React from 'react';
import './App.css';
import { Route, Routes } from 'react-route-dom';
import { Box } from '@mui/material'

const App = () => {
    return (
        <Box width='400px'>
            Navbar 
            <Routes>
                <Route path='/' element={<Home />}>
                
                </Route>
            </Routes>
            </Box>
    )
}

export default App