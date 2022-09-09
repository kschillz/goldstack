import React, { useState } from 'react';
import { hydrate, SSRHandler } from '@goldstack/template-ssr';

import { renderPage } from './../render';
import Panel from './../components/Panel';
import styles from './$index.module.css';

const Index = (props: { message: string }): JSX.Element => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          alert('hi');
          setClicked(true);
          throw new Error('Havent seen this');
        }}
        className={`${styles.message}`}
      >
        {props.message}
      </div>
      {clicked && <Panel />}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: SSRHandler = async (event, context) => {
  return renderPage({
    component: Index,
    properties: {
      message: 'Hi there',
      dummy: 123,
    },
    entryPoint: __filename,
    event: event,
  });
};

hydrate(Index);

export default Index;
