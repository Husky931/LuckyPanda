// import {
//   ProductQueryDocument,
//   ProductQueryQuery,
//   ProductQueryQueryVariables,
// } from '@/app/graphql/generated/graphql';

import ProductQuery from '@/app/graphql/queries/ProductQuery.graphql';

import { CLIENT } from '@/app/lib/client';

export async function fetchProduct(handle: string) {
  const variables = { handle };

  try {
    const { data, errors } = await CLIENT.request(ProductQuery, { variables });

    if (errors) {
      console.error('GraphQL errors:', errors);
      return null;
    }

    return data?.product ?? null;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

// export async function fetchProduct(handle: string) {
//   const { data, errors, extensions } = await CLIENT.request(ProductQuery, {
//     variables: {
//       handle: ProductQueryQueryVariables,
//     },
//   });
// }

// export async function fetchProduct(handle: string) {
//   const variables: ProductQueryQueryVariables = { handle };

//   const { data, errors } = await CLIENT.request<
//     ProductQueryQuery,
//     ProductQueryQueryVariables
//   >(ProductQuery, { variables });

//   if (errors) {
//     console.error('GraphQL errors:', errors);
//     return null;
//   }

//   return data?.product ?? null;
// }
