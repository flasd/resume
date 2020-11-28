import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Layout from './components/Layout';
import Header from './components/composite/Header';
import ProfessionalProfile from './components/composite/ProfessionalProfile';
import Experience from './components/composite/Experience';
import { Block } from 'baseui/block';
import Sidebar from './components/composite/Sidebar';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Layout>
          <Block display="flex" flexDirection="row">
            <div>
              <Header />
              <main>
                <ProfessionalProfile />
                <Experience />
              </main>
            </div>
            <Sidebar />
          </Block>
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
