import './App.css'
import Box from './components/Box'
import ThreeText from './components/ThreeText'

import portfolioData from './data/PortfolioData'

import { useState } from 'react'
import PortfolioButton from './components/PortfolioButton'

import "./Portfolio.css"

function Portfolio() {

  const [selectedItemTitle, setSelectedItemTitle] = useState<string>("");
  
  function getBoxContent() {
    if(selectedItemTitle == "") {
      return (<>
        <ThreeText>Portfolio</ThreeText>
        <p>
          A few things I've made are floating around. If something interests you, click on it to check it out.
        </p>
        <p>
          If something is in the way, just drag and drop it somewhere else.
        </p>
        </>
      );
    }

    const item = portfolioData.filter((item) => item.title == selectedItemTitle)[0];

    return (<div className='PortfolioBox'>
      <ThreeText>{item.title}</ThreeText>
      <img className="PortfolioImage" src={item.image}></img>
      <p>
        {item.desc}
      </p>
      <p>
        Made with: {item.tech.join(", ")}
      </p>
      <a href={item.link}>Try It</a>
      {item.source != "" && <a href={item.source}>Source</a>}
      </div>
    );
  }

  return (
    <div className='Portfolio'>
      <Box key={selectedItemTitle}>
        {getBoxContent()}
      </Box>
      <div className='PortfolioButtonHolder'>
        {portfolioData.map((item) => <PortfolioButton item={item} key={item.title} setSelectedItemTitle={setSelectedItemTitle} selected={item.title == selectedItemTitle}></PortfolioButton>)}
      </div>
    </div>
  )
}

export default Portfolio
