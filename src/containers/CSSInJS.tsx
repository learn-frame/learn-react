import React, { ReactElement, ReactComponentElement } from 'react';
import styled from 'styled-components';

interface ICSSInJSProps {
  primary?: boolean;
}

class CSSInJS extends React.Component<ICSSInJSProps, {}> {
  constructor(props: ICSSInJSProps) {
    super(props);
    this.state = {};
  }

  public render() {
    // 基本玩法
    const H1 = styled.h1`
      font-size: 20px;
      color: blue;
      text-align: center;
    `;

    // 传入参数
    const Button = styled.button`
      background: ${(props: ICSSInJSProps) =>
        props.primary ? 'palevioletred' : 'white'};
      color: ${(props: ICSSInJSProps) =>
        props.primary ? 'white' : 'palevioletred'};
      font-size: 1em;
      margin: 1em;
      padding: 0.5em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      outline: none;
      cursor: pointer;
    `;

    // 继承
    const TomatoButton = styled(Button)`
      border-color: tomato;
      color: tomato;
    ` as any;

    const ReversedButton = (props: any) => (
      <button {...props} children={props.children.split('').reverse()} />
    );
    return (
      <div>
        <H1>Learn styled-component</H1>
        <Button primary>Primary</Button>
        <Button>Normal</Button>
        <TomatoButton>TomatoButton</TomatoButton>
        {/* 通过 as 将组件转换到某元素 */}
        <TomatoButton as='a' href='/'>
          实际是一个 a 标签
        </TomatoButton>

        {/* 通过 as 将组件转换成某元素 */}
        <TomatoButton as={ReversedButton}>TomatoButton</TomatoButton>
      </div>
    );
  }
}

export default CSSInJS;
