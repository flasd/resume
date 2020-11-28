import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import Layout from './components/Layout';
import Header from './components/composite/Header';
import ProfessionalProfile from './components/composite/ProfessionalProfile';
import Experience from './components/composite/Experience';
import { Block } from 'baseui/block';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Layout>
          <Header />
          <Block display="flex" flexDirection="row">
            <main>
              <ProfessionalProfile />
              <Experience />
            </main>
            <aside style={{ width: 700, marginRight: 48 }}></aside>
          </Block>
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
