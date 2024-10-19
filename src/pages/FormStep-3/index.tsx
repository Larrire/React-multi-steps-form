import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useHistory, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStepThree = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.email.trim() === "" || state.github.trim() === "") {
      return alert("Preencha os campos corretamente");
    }

    console.log(state);
    alert("Cadastro realizado com sucesso!");
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value,
    });
  };

  const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value,
    });
  };

  useEffect(() => {
    if (state.name === "") return history.push("/");

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, [dispatch]);

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos conversar.</p>

        <hr />

        <label htmlFor="">
          Qual seu e-mail?
          <input
            type="email"
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="">
          Qual o link do seu github?
          <input
            type="text"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step-two" className="backButton">
          Voltar
        </Link>

        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </C.Container>
    </Theme>
  );
};

const nameIsValid = (name: string) => name.trim();

const invalidNameWarning = () =>
  alert("Digite seu nome completo para prosseguir!");
