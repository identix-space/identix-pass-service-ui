/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum AgentsRoles {
  Holder = 'holder',
  Issuer = 'issuer',
  Verifier = 'verifier'
}

export type EventLogEntry = {
  __typename?: 'EventLogEntry';
  created: Scalars['String'];
  id: Scalars['Float'];
  message: Scalars['String'];
  owner: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  issuerVC: Scalars['Boolean'];
  requestVcVerification: Scalars['Boolean'];
  verifyVC: Scalars['Boolean'];
};


export type MutationIssuerVcArgs = {
  holderDid: Scalars['String'];
  vcParams: Scalars['String'];
  vcTypeDid: Scalars['String'];
};


export type MutationRequestVcVerificationArgs = {
  vcDid: Scalars['String'];
  verifierDid: Scalars['String'];
};


export type MutationVerifyVcArgs = {
  vcDid: Scalars['String'];
  verificationStatus: VerificationStatuses;
};

export type Query = {
  __typename?: 'Query';
  checkAccountExists: Scalars['Boolean'];
  getEventLogEntries: Array<EventLogEntry>;
  getUserVCs: Array<Vc>;
  whoami: Scalars['String'];
};


export type QueryCheckAccountExistsArgs = {
  did: Scalars['String'];
};


export type QueryGetEventLogEntriesArgs = {
  count?: InputMaybe<Scalars['Int']>;
  startIndex?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUserVCsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<AgentsRoles>;
  startIndex?: InputMaybe<Scalars['Int']>;
};

export type Vc = {
  __typename?: 'VC';
  createdAt: Scalars['String'];
  holderDid: Scalars['String'];
  issuerDid: Scalars['String'];
  updatedAt: Scalars['String'];
  vcDid: Scalars['String'];
  vcParams: Scalars['String'];
  vcRawText: Scalars['String'];
  vcTypeDid: Scalars['String'];
  verificationCases: Array<VerificationCase>;
};

export type VerificationCase = {
  __typename?: 'VerificationCase';
  status: VerificationStatuses;
  verifierDid: Scalars['String'];
};

export enum VerificationStatuses {
  Approved = 'approved',
  PendingApproval = 'pendingApproval',
  Rejected = 'rejected'
}

export type GetUserVCsQueryVariables = Exact<{
  role?: InputMaybe<AgentsRoles>;
  startIndex?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserVCsQuery = { __typename?: 'Query', getUserVCs: Array<{ __typename?: 'VC', vcDid: string, vcTypeDid: string, vcParams: string, vcRawText: string, issuerDid: string, holderDid: string, createdAt: string, updatedAt: string, verificationCases: Array<{ __typename?: 'VerificationCase', verifierDid: string, status: VerificationStatuses }> }> };

export type CheckAccountExistsQueryVariables = Exact<{
  did: Scalars['String'];
}>;


export type CheckAccountExistsQuery = { __typename?: 'Query', checkAccountExists: boolean };

export type GetEventLogEntriesQueryVariables = Exact<{
  startIndex?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type GetEventLogEntriesQuery = { __typename?: 'Query', getEventLogEntries: Array<{ __typename?: 'EventLogEntry', id: number, owner: string, created: string, message: string }> };

export type WhoamiQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoamiQuery = { __typename?: 'Query', whoami: string };

export type IssuerVcMutationVariables = Exact<{
  holderDid: Scalars['String'];
  vcTypeDid: Scalars['String'];
  vcParams: Scalars['String'];
}>;


export type IssuerVcMutation = { __typename?: 'Mutation', issuerVC: boolean };

export type RequestVcVerificationMutationVariables = Exact<{
  verifierDid: Scalars['String'];
  vcDid: Scalars['String'];
}>;


export type RequestVcVerificationMutation = { __typename?: 'Mutation', requestVcVerification: boolean };

export type VerifyVcMutationVariables = Exact<{
  vcDid: Scalars['String'];
  verificationStatus: VerificationStatuses;
}>;


export type VerifyVcMutation = { __typename?: 'Mutation', verifyVC: boolean };


export const GetUserVCsDocument = gql`
    query getUserVCs($role: AgentsRoles, $startIndex: Int, $count: Int) {
  getUserVCs(role: $role, startIndex: $startIndex, count: $count) {
    vcDid
    vcTypeDid
    vcParams
    vcRawText
    issuerDid
    holderDid
    createdAt
    updatedAt
    verificationCases {
      verifierDid
      status
    }
  }
}
    `;

/**
 * __useGetUserVCsQuery__
 *
 * To run a query within a React component, call `useGetUserVCsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserVCsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserVCsQuery({
 *   variables: {
 *      role: // value for 'role'
 *      startIndex: // value for 'startIndex'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetUserVCsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserVCsQuery, GetUserVCsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserVCsQuery, GetUserVCsQueryVariables>(GetUserVCsDocument, options);
      }
export function useGetUserVCsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserVCsQuery, GetUserVCsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserVCsQuery, GetUserVCsQueryVariables>(GetUserVCsDocument, options);
        }
export type GetUserVCsQueryHookResult = ReturnType<typeof useGetUserVCsQuery>;
export type GetUserVCsLazyQueryHookResult = ReturnType<typeof useGetUserVCsLazyQuery>;
export type GetUserVCsQueryResult = Apollo.QueryResult<GetUserVCsQuery, GetUserVCsQueryVariables>;
export const CheckAccountExistsDocument = gql`
    query checkAccountExists($did: String!) {
  checkAccountExists(did: $did)
}
    `;

/**
 * __useCheckAccountExistsQuery__
 *
 * To run a query within a React component, call `useCheckAccountExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckAccountExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckAccountExistsQuery({
 *   variables: {
 *      did: // value for 'did'
 *   },
 * });
 */
export function useCheckAccountExistsQuery(baseOptions: Apollo.QueryHookOptions<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>(CheckAccountExistsDocument, options);
      }
export function useCheckAccountExistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>(CheckAccountExistsDocument, options);
        }
export type CheckAccountExistsQueryHookResult = ReturnType<typeof useCheckAccountExistsQuery>;
export type CheckAccountExistsLazyQueryHookResult = ReturnType<typeof useCheckAccountExistsLazyQuery>;
export type CheckAccountExistsQueryResult = Apollo.QueryResult<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>;
export const GetEventLogEntriesDocument = gql`
    query getEventLogEntries($startIndex: Int, $count: Int) {
  getEventLogEntries(startIndex: $startIndex, count: $count) {
    id
    owner
    created
    message
  }
}
    `;

/**
 * __useGetEventLogEntriesQuery__
 *
 * To run a query within a React component, call `useGetEventLogEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventLogEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventLogEntriesQuery({
 *   variables: {
 *      startIndex: // value for 'startIndex'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetEventLogEntriesQuery(baseOptions?: Apollo.QueryHookOptions<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>(GetEventLogEntriesDocument, options);
      }
export function useGetEventLogEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>(GetEventLogEntriesDocument, options);
        }
export type GetEventLogEntriesQueryHookResult = ReturnType<typeof useGetEventLogEntriesQuery>;
export type GetEventLogEntriesLazyQueryHookResult = ReturnType<typeof useGetEventLogEntriesLazyQuery>;
export type GetEventLogEntriesQueryResult = Apollo.QueryResult<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>;
export const WhoamiDocument = gql`
    query whoami {
  whoami
}
    `;

/**
 * __useWhoamiQuery__
 *
 * To run a query within a React component, call `useWhoamiQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoamiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoamiQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoamiQuery(baseOptions?: Apollo.QueryHookOptions<WhoamiQuery, WhoamiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WhoamiQuery, WhoamiQueryVariables>(WhoamiDocument, options);
      }
export function useWhoamiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WhoamiQuery, WhoamiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WhoamiQuery, WhoamiQueryVariables>(WhoamiDocument, options);
        }
export type WhoamiQueryHookResult = ReturnType<typeof useWhoamiQuery>;
export type WhoamiLazyQueryHookResult = ReturnType<typeof useWhoamiLazyQuery>;
export type WhoamiQueryResult = Apollo.QueryResult<WhoamiQuery, WhoamiQueryVariables>;
export const IssuerVcDocument = gql`
    mutation issuerVC($holderDid: String!, $vcTypeDid: String!, $vcParams: String!) {
  issuerVC(holderDid: $holderDid, vcTypeDid: $vcTypeDid, vcParams: $vcParams)
}
    `;
export type IssuerVcMutationFn = Apollo.MutationFunction<IssuerVcMutation, IssuerVcMutationVariables>;

/**
 * __useIssuerVcMutation__
 *
 * To run a mutation, you first call `useIssuerVcMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIssuerVcMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [issuerVcMutation, { data, loading, error }] = useIssuerVcMutation({
 *   variables: {
 *      holderDid: // value for 'holderDid'
 *      vcTypeDid: // value for 'vcTypeDid'
 *      vcParams: // value for 'vcParams'
 *   },
 * });
 */
export function useIssuerVcMutation(baseOptions?: Apollo.MutationHookOptions<IssuerVcMutation, IssuerVcMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IssuerVcMutation, IssuerVcMutationVariables>(IssuerVcDocument, options);
      }
export type IssuerVcMutationHookResult = ReturnType<typeof useIssuerVcMutation>;
export type IssuerVcMutationResult = Apollo.MutationResult<IssuerVcMutation>;
export type IssuerVcMutationOptions = Apollo.BaseMutationOptions<IssuerVcMutation, IssuerVcMutationVariables>;
export const RequestVcVerificationDocument = gql`
    mutation requestVcVerification($verifierDid: String!, $vcDid: String!) {
  requestVcVerification(verifierDid: $verifierDid, vcDid: $vcDid)
}
    `;
export type RequestVcVerificationMutationFn = Apollo.MutationFunction<RequestVcVerificationMutation, RequestVcVerificationMutationVariables>;

/**
 * __useRequestVcVerificationMutation__
 *
 * To run a mutation, you first call `useRequestVcVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestVcVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestVcVerificationMutation, { data, loading, error }] = useRequestVcVerificationMutation({
 *   variables: {
 *      verifierDid: // value for 'verifierDid'
 *      vcDid: // value for 'vcDid'
 *   },
 * });
 */
export function useRequestVcVerificationMutation(baseOptions?: Apollo.MutationHookOptions<RequestVcVerificationMutation, RequestVcVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestVcVerificationMutation, RequestVcVerificationMutationVariables>(RequestVcVerificationDocument, options);
      }
export type RequestVcVerificationMutationHookResult = ReturnType<typeof useRequestVcVerificationMutation>;
export type RequestVcVerificationMutationResult = Apollo.MutationResult<RequestVcVerificationMutation>;
export type RequestVcVerificationMutationOptions = Apollo.BaseMutationOptions<RequestVcVerificationMutation, RequestVcVerificationMutationVariables>;
export const VerifyVcDocument = gql`
    mutation verifyVC($vcDid: String!, $verificationStatus: VerificationStatuses!) {
  verifyVC(vcDid: $vcDid, verificationStatus: $verificationStatus)
}
    `;
export type VerifyVcMutationFn = Apollo.MutationFunction<VerifyVcMutation, VerifyVcMutationVariables>;

/**
 * __useVerifyVcMutation__
 *
 * To run a mutation, you first call `useVerifyVcMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyVcMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyVcMutation, { data, loading, error }] = useVerifyVcMutation({
 *   variables: {
 *      vcDid: // value for 'vcDid'
 *      verificationStatus: // value for 'verificationStatus'
 *   },
 * });
 */
export function useVerifyVcMutation(baseOptions?: Apollo.MutationHookOptions<VerifyVcMutation, VerifyVcMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyVcMutation, VerifyVcMutationVariables>(VerifyVcDocument, options);
      }
export type VerifyVcMutationHookResult = ReturnType<typeof useVerifyVcMutation>;
export type VerifyVcMutationResult = Apollo.MutationResult<VerifyVcMutation>;
export type VerifyVcMutationOptions = Apollo.BaseMutationOptions<VerifyVcMutation, VerifyVcMutationVariables>;