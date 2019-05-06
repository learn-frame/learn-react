import React from 'react';

// 我们知道 React 的一个组件必须有父节点包裹，因此下面的形式会报错。

// public render() {
//   return (
//     <Component1 />
//     <Component2 />
//     <Component3 />
//   );
// }

// 很多时候组件之间只是简单的排列组合，因此额外添加一个父节点显然不合适
// 我们可以通过 Fragment 组件来将子组件分组，而无需向 DOM 添加额外节点

interface IData {
  name: string;
  description: string;
}

interface IFragmentStates {
  data: IData[];
}

class Fragment extends React.Component<{}, IFragmentStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Yancey',
          description: '前端小菜鸡。',
        },
        {
          name: 'YOSHIKI',
          description: '最牛逼的音乐家。',
        },
        {
          name: '山本彩',
          description: '我老婆！',
        },
      ],
    };
  }

  // 明确使用 React.Fragment 组件来分组
  public MyComponent1 = (
    <React.Fragment>
      <input type='text' />
      <button />
    </React.Fragment>
  );

  // 也可以使用 Fragment 的简写形式，即一组空的尖括号
  public MyComponent2 = (
    <>
      <input type='text' />
      <button />
    </>
  );

  public render() {
    const { data } = this.state;

    const MyComponent3 = (
      <dl>
        {data.map((item: any) => (
          // 目前 Fragment 仅可以传入 key 属性 (v16.8.6)
          // 官方立了 Flag，未来可能会支持事件
          // 当传入属性时，目前尚不能使用简写形式
          <React.Fragment key={item.name}>
            <dt>{item.name}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
    return <>{MyComponent3}</>;
  }
}

export default Fragment;
