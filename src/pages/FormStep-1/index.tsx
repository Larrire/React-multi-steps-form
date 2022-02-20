import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useHistory } from 'react-router-dom'

export const FormStepOne = () => {

  const history = useHistory();

  const handleNextStep = () => {
    history.push('/step-two');
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        
        <hr />

        <label htmlFor="">
          Seu nome completo
          <input 
            type="text"
            autoFocus
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}
