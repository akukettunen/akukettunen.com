import { Card, Typography, Box, ImageListItem, Grid, Paper, Button, Modal } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
const stack = require('../Stack.json');

const Project = ({project}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgOpened, setImgOpened] = useState(false);

  const openImage = index => {
    setImgIndex(index)
    setImgOpened(true)
  }

  const closeImage = () => {
    setImgOpened(false)
  }

  const nextImage = () => {
    let nextIndex = imgIndex + 1 >= project.screenshots.length ? 0 : imgIndex + 1
    setImgIndex(nextIndex)
  }

  const prevImage = () => {
    let nextIndex = imgIndex - 1 <= 0 ? project.screenshots.length - 1 : imgIndex - 1
    setImgIndex(nextIndex)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '1000px',
    maxHeight: 'calc(100vh)',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    display: 'flex',
    flexDirection: 'row'
  };

  if(!project) return

  return (
    <motion.div>
      <Card sx={{margin: '2em 4em', padding: '2em'}}>
        {
          project.logo &&
          <Box sx={{height: '100px', display: 'flex'}}>
            <img className="projectLogo" src={project.logo} alt="logo"></img>
          </Box>
        }
        {
          !project.logo &&
          <Typography variant="h3" sx={{margin: '0 0 1em 0'}}>
            { project.name }
          </Typography>
        }
        {
          project.link &&
          <div>
            <Typography variant="h5" sx={{margin: '2em 0 0.5em 0'}}>Check it out</Typography>
            <Button variant="outlined" onClick={() => {window.open(project.link, '_blank');}}>
              Go to { project.name }
              <ArrowForwardIcon sx={{marginLeft: '1em'}}/>
            </Button>
          </div>

        }
        <Typography variant="h5" sx={{margin: '2em 0 0.5em 0'}}>Stack</Typography>
        <div className="stacks">
          {
            project.stack?.map(s => {
              let technology = stack.find(a => a.id === s)

              return (
                <div className="stackCard">
                  <img className="stackImage" src={ technology?.logo } alt="stacklogo"></img>
                  <div>{ technology?.name }</div>
                </div>
              )
            })
          }
        </div>
        <Typography variant="h5" sx={{margin: '2em 0 0.5em 0'}}>Info</Typography>
        <Typography variant="p" sx={{lineHeight: '1.5'}}>
          { project?.info }
        </Typography>
        {
          project.screenshots && 
          <Typography variant="h5" sx={{margin: '2em 0 0.5em 0'}}>Screenshots</Typography>
        }
          <Grid 
            spacing={2}
            container 
            // className="screenshotList"
          >
            {
              project.screenshots?.map((s, index) => {
                return (
                  <Grid item xs={12} sm={6} lg={4}>
                    <Paper sx={{height: 'none'}} elevation={3} onClick={() => { openImage(index) } }>
                      <ImageListItem 
                        className="screenshotListImage"
                      >
                          <img className="screenshotListImage--image" src={s} alt="screenshot"></img>
                      </ImageListItem>
                    </Paper>
                  </Grid>
                )
              })
            }
          </Grid>
          {
            project.screenshots && 
            <Modal
              open={imgOpened}
              onClose={closeImage}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="modalArrow" onClick={prevImage}>
                  <ArrowBackIosNew/>
                </div>
                <img style={{maxWidth: 'min(950px, calc(100vw - 40px))'}} src={project.screenshots[imgIndex]} alt="screenshot"></img>
                <div className="modalArrow" onClick={nextImage}>
                  <ArrowForwardIos/>
                </div>
              </Box>

            </Modal>

          }
      </Card>
    </motion.div>
  )
}

export default Project