import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
import 
   { ServiceContainer ,
     ServicesCard,
     ServicesH1,
     ServicesH2,
     ServicesIcon,
     ServicesP,
     ServicesWraper
    } from './ServiceElements'
const Services = () => {
  return (
    <ServiceContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWraper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your Fee and increase your revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtual offices</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cashback</ServicesP>
            </ServicesCard>
        </ServicesWraper>
    </ServiceContainer>
  )
}

export default Services

