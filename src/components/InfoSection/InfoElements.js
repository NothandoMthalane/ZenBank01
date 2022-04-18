import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => lightBg ? '#f9f9f9' : '#010606'};

  @media screen and (max-width: 768px){
      padding: 6rem 0;
  }
`

export const InfoWrapper = styled.div`
  display: gid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-column: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStrt}) => (imgStrt ? `'col2 col1'` : `'col1 col2'` ) };

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStrt}) => (imgStrt ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` ) }; 
  }
`

export const Column1 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 12rem;
  padding-bottom: 2rem;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 700;
  letter-spacing: .2rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width:480px ){
      font-size: 2rem;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.button`
  display: flex;
  justify-content: flex-start;
  border: none;
  outline: none;
  background: none;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 .5rem 0;
  padding-right: 0;
`
