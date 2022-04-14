import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import { HomeContainer, HomeBG, VideoBG, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'
import { Button } from '../ButtonElements'


const HomeSection = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HomeContainer id='home'>
        <HomeBG>
            <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
        </HomeBG>
        <HomeContent>
          <HomeH1>Virtual Banking Made Easy</HomeH1>
          <HomeP>
            We offer various services just for you!
          </HomeP>
          <HomeBtnWrapper>
            <Button to='services' onMouseEnter={onHover} onMouseLeave={onHover}>
              View Services {hover ? <ArrowForward/> : <ArrowRight />}
            </Button>
          </HomeBtnWrapper>
        </HomeContent>
    </HomeContainer>
  )
}

export default HomeSection