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

export type IssuerVcMutationVariables = Exact<{
  holderDid: Scalars['String'];
  vcTypeDid: Scalars['String'];
  vcParams: Scalars['String'];
}>;


export type IssuerVcMutation = { __typename?: 'Mutation', issuerVC: boolean };


export const GetUserVCsDocument = gql`
    query GetUserVCs($role: AgentsRoles, $startIndex: Int, $count: Int) {
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