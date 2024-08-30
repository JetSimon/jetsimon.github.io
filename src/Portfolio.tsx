import './App.css'
import Box from './components/Box'
import ThreeText from './components/ThreeText'

function Portfolio() {
  
  return (
    <div className='MainArea'>
      <Box>
        <ThreeText>Portfolio</ThreeText>
        <p>
          A few things I've made are floating around. If something interests you, click on it to check it out.
        </p>
      </Box>
    </div>
  )
}

export default Portfolio
