import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: 20px;
  color: blue;
`;

interface ICSSInJSProps {
  primary?: boolean;
}

class CSSInJS extends React.Component<ICSSInJSProps, {}> {
  constructor(props: ICSSInJSProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const Button = styled.button`
      background: ${(props: ICSSInJSProps) =>
        props.primary ? 'palevioletred' : 'white'};
      color: ${(props: ICSSInJSProps) =>
        props.primary ? 'white' : 'palevioletred'};

      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      outline: none;
      cursor: pointer;
    `;
    return (
      <div>
        <P>尝试 styled-component</P>
        <Button primary>primary</Button>
        <Button>default</Button>
      </div>
    );
  }
}

export default CSSInJS;
