import React,{Fragment} from 'react';
import SliderComponent from '../layout/SliderComponent/SliderComponent';

function Home({slides}) {
  return (
    <Fragment>
        <SliderComponent slides={slides}/>
    </Fragment>
  )
}

export default Home