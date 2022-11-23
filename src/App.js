import './App.css';
import './index.css';
import Cv from './components/Cv'
import About from './components/About'
import Projects from './components/Projects'
import Project from './components/Project'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'
import { Typography, Button } from '@mui/material'

const projects = require('./Projects.json');

const App = () => {  
  const location = useLocation();
  const navigate = useNavigate();

  const style = {}

  style.header = {} 
  style.header.text = {} 
  style.header.navigation = {} 

  style.header.initial = {
    height: '80px',
    // backgroundColor: 'red',
    position: 'relative'
  }

  style.header.compact = {
    height: '100vh',
    position: 'relative'
  }

  style.header.initial.image = {
    width: '400px',
    height: '400px',
    position: 'absolute',
    left: 'calc(100vw / 2 - 200px)',
    top: '50px',
    zIndex: 10
  }

  style.header.compact.image = {
    width: '50px',
    height: '50px',
    position: 'absolute',
    left: '10px',
    top: '10px',
    zIndex: 10
  }

  style.header.text.compact = {
    opacity: 1,
    paddingTop: '500px'
  }

  style.header.text.initial = {
    fontSize: '10px',
    opacity: 0,
    paddingTop: '0px'
    // fontSize: '10px'
  }

  style.header.navigation.compact = {
    paddingTop: '700px',
    left: 'calc(50% - 120px)',
    top: '10px',
    position: 'absolute',
    zIndex: 10
  }

  style.header.navigation.initial = {
    paddingTop: '10px',
    left: '100px',
    top: '10px',
    position: 'absolute',
    zIndex: 10
  }

  

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={ false }
          animate={ location.pathname !== '/' ? style.header.initial : style.header.compact }
          exit={ location.pathname === '/' ? style.header.initial : style.header.compact }
          style={ location.pathname === '/' ? style.header.initial : style.header.compact }
          transition={{ duration: 0.5 }}
        >
          <div sx={{verticalAlign: 'center'}}>
            <motion.div
              initial={ location.pathname !== '/' ? style.header.initial.image : style.header.compact.image }
              animate={ location.pathname === '/' ? style.header.initial.image : style.header.compact.image }
              exit={ location.pathname !== '/' ? style.header.initial.image : style.header.compact.image }
              style={ location.pathname !== '/' ? style.header.initial.image : style.header.compact.image }
              transition={{ duration: 0.5 }}
            >
              <img
                style={{borderRadius: '50%', margin: '0 auto', height: '100%', width: '100%', cursor: 'pointer', zIndex: 1000}} 
                src={'/images/face.png'} 
                alt="face"
                onClick={() => { navigate('/') }}
              ></img>
            </motion.div>
            <div 
              initial={ location.pathname !== '/' ? style.header.navigation.initial : style.header.navigation.compact }
              animate={ location.pathname === '/' ? style.header.navigation.initial : style.header.navigation.compact }
              exit={ location.pathname !== '/' ? style.header.navigation.initial : style.header.navigation.compact }
              style={ location.pathname !== '/' ? style.header.navigation.initial : style.header.navigation.compact }
              transition={{ duration: 0.5 }}
            >
              <Button onClick={() => {navigate('/projects/epesis')}}>Projects</Button>
              <Button onClick={() => {navigate('/cv')}}>CV</Button>
              <Button onClick={() => {navigate('/about')}}>About me</Button>
            </div>
            <motion.div
              initial={ location.pathname === '/' ? style.header.text.initial : style.header.text.compact }
              animate={ location.pathname !== '/' ? style.header.text.initial : style.header.text.compact }
              exit={ location.pathname === '/' ? style.header.text.initial : style.header.text.compact }
              style={ location.pathname === '/' ? style.header.text.initial : style.header.text.compact }
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" sx={{textAlign: 'center'}}>
                Aku Kettunen
              </Typography>
              <Typography variant="h6" sx={{textAlign: 'center'}}>
                A freelance software developer
              </Typography>
              <Typography sx={{textAlign: 'center', marginTop: '30px'}}>
                aku@kettunen.com
              </Typography>
            </motion.div>
          </div>
        </motion.div>
        <Routes location={location} key={location.pathname}>
            <Route path="about" element={<About/>} />
            <Route path="projects" element={<Projects/>}>
              {
                projects.map(project => {
                  return (
                    <Route key={project.id} path={project.path} element={<Project project={project}/>}></Route>
                  )
                })
              }
              <Route path="kepittv" element={<Project/>}></Route>
              <Route path="nerdstuff" element={<Project/>}></Route>
              <Route path="akukettunen" element={<Project/>}></Route>
            </Route>
            <Route path="cv" element={<Cv/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
