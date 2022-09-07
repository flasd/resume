import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Layout from './components/Layout';
import Header from './components/composite/Header';
import ProfessionalProfile from './components/composite/ProfessionalProfile';
import Experience from './components/composite/Experience';
import OpenSourceProjects from './components/composite/OpenSourceProjects';

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
            <OpenSourceProjects />
          </main>
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
