import { BrowserRouter, Route } from 'react-router-dom';
import { FormStepOne } from './pages/FormStep-1'
import { FormStepTwo } from './pages/FormStep-2'
import { FormStepThree } from './pages/FormStep-3'

export const Router = () => {
  return (
    <BrowserRouter>
      
      <Route path="/" exact component={FormStepOne}/>
      
      <Route path="/step-two" component={FormStepTwo}/>

      <Route path="/step-three" component={FormStepThree}/>

    </BrowserRouter>
  )
}