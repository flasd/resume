import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Layout from './components/Layout';
import Header from './components/composite/Header';
import ProfessionalProfile from './components/composite/ProfessionalProfile';
import Experience from './components/composite/Experience';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Layout>
          <Header />
          <main>
            <ProfessionalProfile />
            <Experience />
          </main>
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
