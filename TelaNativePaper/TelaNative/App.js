import React from 'react';
import { PaperProvider } from 'react-native-paper';
import CadastroTela from './telas/CadastroTela';

export default function App() {
  return (
    <PaperProvider>
      <CadastroTela />
    </PaperProvider>
  );
}
