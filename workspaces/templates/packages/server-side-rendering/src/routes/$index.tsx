import React from 'react';

import ReactDOM from 'react-dom';

import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda';

import { renderDocument } from './../_document';

import { renderPage } from '@goldstack/template-ssr';

type ProxyHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;

const Index = (): JSX.Element => {
  return (
    <>
      <div
        onClick={() => {
          alert('hi');
          throw new Error('Havent seen this');
        }}
      >
        Hello, world!
      </div>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: ProxyHandler = async (event, context) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return renderPage({
    element: <Index />,
    entryPoint: __filename,
    event: event,
    renderDocument,
  });
};

function isServer(): boolean {
  return !(typeof window != 'undefined' && window.document);
}

const hydrate = (): void => {
  const node = document.getElementById('root');

  ReactDOM.hydrate(<Index />, node);
};

if (!isServer()) {
  hydrate();
}

export default Index;