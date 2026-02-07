import { IntlayerProvider } from 'react-intlayer';
import { Locales } from 'intlayer';
import { Documentation } from './Documentation';
import './App.css';

function App() {
  return (
    <IntlayerProvider locale={Locales.ENGLISH}>
      <div className="App">
        <Documentation />
      </div>
    </IntlayerProvider>
  );
}

export default App;
