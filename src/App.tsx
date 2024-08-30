import './App.css'
import Box from './components/Box'
import ThreeText from './components/ThreeText'
import TopBar from './components/TopBar'

function App() {
  
  return (
    <div className='MainArea'>
      <TopBar></TopBar>
      <Box>
        <ThreeText>About Me</ThreeText>
        <p>
          I'm Jet. Yes that is my birth name, no it's not short for anything. I live in Vancouver and went to Simon Fraser University for a BSc in Computer Science.
        </p>
        <p>
          I am a huge advocate of just making things. I've participated in many game jams and done my fair share of hackathons. I'm interested in game development, web development, and machine learning. I also dabble in embedded systems and wish I knew more about compilers!
        </p>
        <p>
          If you need to contact me, you can <a href="mailto:jetjdsimon@gmail.com">email me</a>, add me on <a href="https://www.linkedin.com/in/jet-simon/">LinkedIn</a>, fork me on <a href="https://github.com/jetsimon">GitHub</a>!
        </p>
      </Box>
    </div>
  )
}

export default App
