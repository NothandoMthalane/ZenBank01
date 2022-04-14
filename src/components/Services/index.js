import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, 
         ServicesCard,
         ServicesH1,
         ServicesH2,
         ServicesIcon,
         ServicesP,
         ServicesWrapper
        } from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Save and Invest</ServicesH2>
                <ServicesP>We will help you save, invest and monitor your money from anywhere in the world.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Rewards</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cashback.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>24/7 Support</ServicesH2>
                <ServicesP>You have access to our support team 24/7, anywhere in the world.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services