/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'

import { Outlet, Link } from "react-router-dom"

import { Box, Button, Typography, ButtonGroup } from '@mui/material'
import './Projects.css'

const Projects = () => {
  const path = useLocation()['pathname']
  const navigate = useNavigate();

  const getButtonStyle = pathPortion => {
    return path?.includes(pathPortion) ? 'contained' : 'text'
  }

  return (
    <motion.div
      // initial={{ width: 0 }}
      // animate={{ width: '100%' }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Typography variant="h2" sx={{margin: '1em 0 1em 1em'}}>
        My projects
      </Typography>
      <div className="navigator">
        <ButtonGroup size="medium" variant="text" aria-label="text button group">
          <Button
            onClick={() => navigate('/projects/epesis')} 
            variant={ getButtonStyle('epesis') }
          >ePesis</Button>
          <Button 
            onClick={() => navigate('/projects/kepittv')} 
            variant={ getButtonStyle('kepittv') }
          >Kepit TV</Button>
          <Button
            onClick={() => navigate('/projects/nerdstuff')} 
            variant={ getButtonStyle('nerdstuff') }
          >Data-analysis</Button>
          <Button
            onClick={() => navigate('/projects/akukettunen')} 
            variant={ getButtonStyle('akukettunen') }
          >akukettunen.com</Button>
        </ButtonGroup>
      </div>
      <motion.div
        initial={false}
        animate={false}
        exit={false}
        style={{paddingBottom: '50px'}}
      >
        <Outlet/>
      </motion.div>
    </motion.div>
  )
}

export default Projects