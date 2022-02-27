import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStepTwo = () => {

  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    
  }

  const setLevel = ( level: number ) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }

  useEffect(() => {
    if(state.name === '') return history.push('/');

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [dispatch])

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name},  o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz seu estado atual, profissionalmente.</p>
        
        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={()=>setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={()=>setLevel(1)}
        />

        <Link to="/" className='backButton'>Voltar</Link>

        <button onClick={handleNextStep}>Próximo</button>

      </C.Container>
    </Theme>
  )
}