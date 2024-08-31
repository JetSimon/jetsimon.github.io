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
      <a href={item.source}>Source</a>
      </div>
    );
  }

  return (
    <div className='Portfolio'>
      <Box key={selectedItemTitle}>
        {getBoxContent()}
      </Box>
      {portfolioData.map((item) => <PortfolioButton item={item} key={item.title} setSelectedItemTitle={setSelectedItemTitle} selected={item.title == selectedItemTitle}></PortfolioButton>)}
    </div>
  )
}

export default Portfolio
