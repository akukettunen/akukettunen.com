import { motion } from 'framer-motion'

const cv = () => {
  return (
    <motion.div 
      // initial={{ width: 0 }}
      // animate={{ width: '100%' }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      style={{textAlign: 'center', height: 'calc(100vh - 80px)', overflowY: 'scroll'}}
    >
      <img style={{maxWidth: 'min(1000px, 100vw)'}} src="/images/cv/akukettunen_cv.png" alt="cv_akukettunen"></img>
    </motion.div>
  )
}

export default cv