import { GlobalStyle } from './GlobalStyle';
import Counter from './Feetback/Feetback';
import Controls from './Feetback/Controls';

export const App = () => {
  return (
    <>
      <h1> Please leave feedback </h1>
      
      <GlobalStyle />
      <Counter />
      <Controls />
      <h1> Statistiks </h1>
    </>
  );
};
