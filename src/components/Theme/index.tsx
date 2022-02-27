import * as C from './styles';
import { Header } from '../Header';
import { ReactNode } from 'react';
import { SidebarItem } from '../SideBarItem';

type Props = {
  children: ReactNode
}

export const Theme = ({children}: Props) => {
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
            />

            <SidebarItem 
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step-two"
            />

            <SidebarItem 
              title="Contatos"
              description="Como te achamos"
              icon="mail"
              path="/step-three"
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
