import React from 'react';
export * from './types/SSRPackage';

import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Handler,
} from 'aws-lambda';

import ReactDOM from 'react-dom/client';
import type { RenderPageProps } from '@goldstack/template-ssr-server';
import type { LambdaApiDeploymentConfiguration } from '@goldstack/utils-aws-lambda';
import type { SSRDeploymentConfiguration } from './types/SSRPackage';

export type SSRHandler = Handler<
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2
>;

export type {
  RenderDocumentProps,
  PartialRenderPageProps,
  BuildConfiguration,
  ClientBuildOptionsArgs,
  ServerBuildOptionsArgs,
} from '@goldstack/template-ssr-server';

export const renderPage = async <PropType>(
  props: RenderPageProps<PropType>
): Promise<APIGatewayProxyResultV2> => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require('@goldstack/template-ssr-server').renderPage(props);
};

function isServer(): boolean {
  return !(typeof window != 'undefined' && window.document);
}

export const createLambdaAPIDeploymentConfiguration = (
  configuration: SSRDeploymentConfiguration
): LambdaApiDeploymentConfiguration => {
  return {
    apiDomain: configuration.domain,
    hostedZoneDomain: configuration.hostedZoneDomain,
    lambdas: configuration.lambdas,
    lambdaNamePrefix: configuration.lambdaNamePrefix,
  };
};

export const hydrate = (
  // element: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  c: React.FunctionComponent<any>
): void => {
  if (isServer()) return;

  const node = document.getElementById('root');
  if (node) {
    ReactDOM.hydrateRoot(
      node,
      React.createElement(c, (window as any).initialProperties)
    );
  }

  // hydration not required in test environments
  if (!node && !process.env.JEST_WORKER_ID) {
    throw new Error(
      'Cannot hydrate server-side rendered content and initialise JavaScript on the client. No element with id "root" found on page.'
    );
  }
};
