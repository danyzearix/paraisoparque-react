import React,{Fragment} from 'react';
import SliderComponent from '../layout/SliderComponent/SliderComponent';
import Countdown from '../layout/Countdown/Countdown';
import Welcome from '../layout/Welcome/Welcome';

function Home({slides}) {
  return (
    <Fragment>
        <SliderComponent slides={slides}/>
        <Countdown></Countdown>
        <Welcome/>
    </Fragment>
  )
}

export default Home