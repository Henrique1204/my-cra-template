import React from 'react';
import { Playground, PlaygroundProps } from 'docz';
import { ThemeProvider } from 'styled-components';

import theme from 'Core/assets/theme';

import * as Styles from './index.styled.ts';

const CustomPlayground: React.FC<PlaygroundProps> = ({ __scope, children, ...props }) => {
  const customScope = {
    ...__scope,
    Styles,
  };

  return (
    <ThemeProvider theme={theme}>
      <Playground {...props} __scope={customScope}>
        <Styles.Container>{children}</Styles.Container>
      </Playground>
    </ThemeProvider>
  );
};

export default CustomPlayground;