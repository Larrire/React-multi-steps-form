import * as C from './styles';
import { Header } from '../Header';
import { ReactNode } from 'react';
import { SidebarItem } from '../SideBarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
  children: ReactNode
}

export const Theme = ({children}: Props) => {
  const { state } = useForm();
  
  return (
    <C.Container>
      <C.Area>
        <Header/>

        <C.Steps>
          <C.Sidebar>
            
            <SidebarItem 
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep===1}
            />

            <SidebarItem 
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step-two"
              active={state.currentStep===2}
            />

            <SidebarItem 
              title="Contatos"
              description="Como te achamos"
              icon="mail"
              path="/step-three"
              active={state.currentStep===3}
            />

          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>

      </C.Area>
    </C.Container>
  )
}
