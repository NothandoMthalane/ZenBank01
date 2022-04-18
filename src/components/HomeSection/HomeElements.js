import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 50rem;
  position: relative;
  z-index: 1;

  :before{
    content: '';
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%),
                linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%);
    z-index: 2;
  }
`  

export const HomeBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0%
  height: 100%;
  overflow: hidden;
`

export const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const HomeContent  =styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: .5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`

export const HomeP  = styled.p`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`

export const HomeBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: .5rem;
  font-size: 1rem;
`

export const ArrowRight= styled(MdKeyboardArrowRight)`
  margin-left: .5rem;
  font-size: 1rem;
`
