import React from 'react';
import PropsAndStates from '../components/PropsAndStates/PropsAndStates';

class PropsState extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <>
        <PropsAndStates counterName='唱' initValue={0} />
        <PropsAndStates counterName='跳' initValue={10} />
        <PropsAndStates counterName='rap' initValue={4} />
        <PropsAndStates initValue={4} />
      </>
    );
  }
}

export default PropsState;
