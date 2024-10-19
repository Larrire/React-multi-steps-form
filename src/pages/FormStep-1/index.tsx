import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useHistory } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStepOne = () => {
  const history = useHistory();
  const { state, dispatch } = useForm()

  const handleNextStep = () => {
    if (!nameIsValid(state.name)) return invalidNameWarning();
    history.push("/step-two");
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: event.target.value,
    });
  };

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

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
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};

const nameIsValid = (name: string) => name.trim();

const invalidNameWarning = () =>
  alert("Digite seu nome completo para prosseguir!");
