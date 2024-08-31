import './App.css'
import Box from './components/Box'
import ThreeText from './components/ThreeText'

function ErrorPage() {
  
  return (
    <div className='MainArea'>
      <Box>
        <ThreeText>Uh oh!</ThreeText>
        <p>Seems like there isn't anything here! 404!</p>
      </Box>
    </div>
  )
}

export default ErrorPage
