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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Account = {
  __typename?: 'Account';
  avatarUrl?: Maybe<Scalars['String']>;
  connections?: Maybe<Array<OAuthConnection>>;
  createdAt: Scalars['DateTime'];
  did: Scalars['String'];
  id: Scalars['Int'];
  roles?: Maybe<Array<AccountRole>>;
  sessions?: Maybe<Array<AccountSession>>;
  status: AccountStatus;
  updatedAt: Scalars['DateTime'];
};

export enum AccountRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type AccountSession = {
  __typename?: 'AccountSession';
  account: Account;
  accountId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['Int'];
  ipAddr: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userAgent?: Maybe<Scalars['String']>;
};

export enum AccountStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE'
}

export enum AgentsRoles {
  Holder = 'holder',
  Issuer = 'issuer',
  Verifier = 'verifier'
}

export type EventLogEntry = {
  __typename?: 'EventLogEntry';
  eventDate: Scalars['DateTime'];
  eventType: Scalars['String'];
  id: Scalars['Int'];
  message: Scalars['String'];
  ownerDid: Scalars['String'];
  vcDid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAccount: Scalars['Boolean'];
  issueVC: Scalars['Boolean'];
  requestVcVerification: Scalars['Boolean'];
  verifyVC: Scalars['Boolean'];
};


export type MutationIssueVcArgs = {
  holderDid: Scalars['String'];
  vcParams: Scalars['String'];
  vcTypeDid: Scalars['String'];
};


export type MutationRequestVcVerificationArgs = {
  vcDid: Scalars['String'];
  verifierDid: Scalars['String'];
};


export type MutationVerifyVcArgs = {
  verificationData: Scalars['String'];
};

export type OAuthConnection = {
  __typename?: 'OAuthConnection';
  account: Account;
  accountId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  otherData: Scalars['JSON'];
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  checkAccountExists: Scalars['Boolean'];
  getAllAccounts: Array<Scalars['String']>;
  getEventLogEntries: Array<EventLogEntry>;
  getUserVCs: Array<Vc>;
  getVC: Vc;
  getVcTypes: Array<VcTypeInfo>;
  logout: Scalars['Boolean'];
  whoami: Account;
};


export type QueryCheckAccountExistsArgs = {
  did: Scalars['String'];
};


export type QueryGetEventLogEntriesArgs = {
  count?: InputMaybe<Scalars['Int']>;
  startIndex?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUserVCsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<AgentsRoles>;
  vcType?: InputMaybe<Scalars['String']>;
};


export type QueryGetVcArgs = {
  vcDid: Scalars['String'];
};

export type Vc = {
  __typename?: 'VC';
  blockchain: Scalars['String'];
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

export type VcTypeInfo = {
  __typename?: 'VcTypeInfo';
  vcTypeDid: Scalars['String'];
  vcTypeTag: Scalars['String'];
};

export type VerificationCase = {
  __typename?: 'VerificationCase';
  verificationStatus: VerificationStatuses;
  verifierDid: Scalars['String'];
};

export enum VerificationStatuses {
  Accepted = 'ACCEPTED',
  PendingVerify = 'PENDING_VERIFY',
  Rejected = 'REJECTED'
}

export type GetUserVCsQueryVariables = Exact<{
  role?: InputMaybe<AgentsRoles>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  vcType?: InputMaybe<Scalars['String']>;
}>;


export type GetUserVCsQuery = { __typename?: 'Query', getUserVCs: Array<{ __typename?: 'VC', vcDid: string, vcTypeDid: string, vcParams: string, vcRawText: string, issuerDid: string, holderDid: string, createdAt: string, updatedAt: string, blockchain: string, verificationCases: Array<{ __typename?: 'VerificationCase', verifierDid: string, verificationStatus: VerificationStatuses }> }> };

export type CheckUserVCsQueryVariables = Exact<{
  role?: InputMaybe<AgentsRoles>;
  vcType?: InputMaybe<Scalars['String']>;
}>;


export type CheckUserVCsQuery = { __typename?: 'Query', getUserVCs: Array<{ __typename?: 'VC', vcDid: string }> };

export type GetVcQueryVariables = Exact<{
  vcDid: Scalars['String'];
}>;


export type GetVcQuery = { __typename?: 'Query', getVC: { __typename?: 'VC', vcDid: string, vcTypeDid: string, vcParams: string, vcRawText: string, issuerDid: string, holderDid: string, createdAt: string, updatedAt: string, blockchain: string, verificationCases: Array<{ __typename?: 'VerificationCase', verifierDid: string, verificationStatus: VerificationStatuses }> } };

export type CheckAccountExistsQueryVariables = Exact<{
  did: Scalars['String'];
}>;


export type CheckAccountExistsQuery = { __typename?: 'Query', checkAccountExists: boolean };

export type GetEventLogEntriesQueryVariables = Exact<{
  startIndex?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type GetEventLogEntriesQuery = { __typename?: 'Query', getEventLogEntries: Array<{ __typename?: 'EventLogEntry', id: number, ownerDid: string, eventType: string, vcDid: string, message: string, eventDate: any }> };

export type GetVcTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVcTypesQuery = { __typename?: 'Query', getVcTypes: Array<{ __typename?: 'VcTypeInfo', vcTypeDid: string, vcTypeTag: string }> };

export type WhoamiQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoamiQuery = { __typename?: 'Query', whoami: { __typename?: 'Account', id: number, did: string, status: AccountStatus, avatarUrl?: string | null, roles?: Array<AccountRole> | null, connections?: Array<{ __typename?: 'OAuthConnection', otherData: any }> | null } };

export type IssuerVcMutationVariables = Exact<{
  holderDid: Scalars['String'];
  vcTypeDid: Scalars['String'];
  vcParams: Scalars['String'];
}>;


export type IssuerVcMutation = { __typename?: 'Mutation', issueVC: boolean };

export type RequestVcVerificationMutationVariables = Exact<{
  verifierDid: Scalars['String'];
  vcDid: Scalars['String'];
}>;


export type RequestVcVerificationMutation = { __typename?: 'Mutation', requestVcVerification: boolean };

export type VerifyVcMutationVariables = Exact<{
  verificationData: Scalars['String'];
}>;


export type VerifyVcMutation = { __typename?: 'Mutation', verifyVC: boolean };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout: boolean };

export type DeleteAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAccountMutation = { __typename?: 'Mutation', deleteAccount: boolean };


export const GetUserVCsDocument = gql`
    query getUserVCs($role: AgentsRoles, $page: Int, $limit: Int, $vcType: String) {
  getUserVCs(role: $role, page: $page, limit: $limit, vcType: $vcType) {
    vcDid
    vcTypeDid
    vcParams
    vcRawText
    issuerDid
    holderDid
    createdAt
    updatedAt
    blockchain
    verificationCases {
      verifierDid
      verificationStatus
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
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      vcType: // value for 'vcType'
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
export const CheckUserVCsDocument = gql`
    query checkUserVCs($role: AgentsRoles, $vcType: String) {
  getUserVCs(role: $role, vcType: $vcType) {
    vcDid
  }
}
    `;

/**
 * __useCheckUserVCsQuery__
 *
 * To run a query within a React component, call `useCheckUserVCsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUserVCsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUserVCsQuery({
 *   variables: {
 *      role: // value for 'role'
 *      vcType: // value for 'vcType'
 *   },
 * });
 */
export function useCheckUserVCsQuery(baseOptions?: Apollo.QueryHookOptions<CheckUserVCsQuery, CheckUserVCsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckUserVCsQuery, CheckUserVCsQueryVariables>(CheckUserVCsDocument, options);
      }
export function useCheckUserVCsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckUserVCsQuery, CheckUserVCsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckUserVCsQuery, CheckUserVCsQueryVariables>(CheckUserVCsDocument, options);
        }
export type CheckUserVCsQueryHookResult = ReturnType<typeof useCheckUserVCsQuery>;
export type CheckUserVCsLazyQueryHookResult = ReturnType<typeof useCheckUserVCsLazyQuery>;
export type CheckUserVCsQueryResult = Apollo.QueryResult<CheckUserVCsQuery, CheckUserVCsQueryVariables>;
export const GetVcDocument = gql`
    query getVC($vcDid: String!) {
  getVC(vcDid: $vcDid) {
    vcDid
    vcTypeDid
    vcParams
    vcRawText
    issuerDid
    holderDid
    createdAt
    updatedAt
    blockchain
    verificationCases {
      verifierDid
      verificationStatus
    }
  }
}
    `;

/**
 * __useGetVcQuery__
 *
 * To run a query within a React component, call `useGetVcQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVcQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVcQuery({
 *   variables: {
 *      vcDid: // value for 'vcDid'
 *   },
 * });
 */
export function useGetVcQuery(baseOptions: Apollo.QueryHookOptions<GetVcQuery, GetVcQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVcQuery, GetVcQueryVariables>(GetVcDocument, options);
      }
export function useGetVcLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVcQuery, GetVcQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVcQuery, GetVcQueryVariables>(GetVcDocument, options);
        }
export type GetVcQueryHookResult = ReturnType<typeof useGetVcQuery>;
export type GetVcLazyQueryHookResult = ReturnType<typeof useGetVcLazyQuery>;
export type GetVcQueryResult = Apollo.QueryResult<GetVcQuery, GetVcQueryVariables>;
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
    ownerDid
    eventType
    vcDid
    message
    eventDate
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
export const GetVcTypesDocument = gql`
    query getVcTypes {
  getVcTypes {
    vcTypeDid
    vcTypeTag
  }
}
    `;

/**
 * __useGetVcTypesQuery__
 *
 * To run a query within a React component, call `useGetVcTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVcTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVcTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVcTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetVcTypesQuery, GetVcTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVcTypesQuery, GetVcTypesQueryVariables>(GetVcTypesDocument, options);
      }
export function useGetVcTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVcTypesQuery, GetVcTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVcTypesQuery, GetVcTypesQueryVariables>(GetVcTypesDocument, options);
        }
export type GetVcTypesQueryHookResult = ReturnType<typeof useGetVcTypesQuery>;
export type GetVcTypesLazyQueryHookResult = ReturnType<typeof useGetVcTypesLazyQuery>;
export type GetVcTypesQueryResult = Apollo.QueryResult<GetVcTypesQuery, GetVcTypesQueryVariables>;
export const WhoamiDocument = gql`
    query whoami {
  whoami {
    id
    did
    status
    avatarUrl
    roles
    connections {
      otherData
    }
  }
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
  issueVC(holderDid: $holderDid, vcTypeDid: $vcTypeDid, vcParams: $vcParams)
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
    mutation verifyVC($verificationData: String!) {
  verifyVC(verificationData: $verificationData)
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
 *      verificationData: // value for 'verificationData'
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
export const LogoutDocument = gql`
    query logout {
  logout
}
    `;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
      }
export function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
        }
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const DeleteAccountDocument = gql`
    mutation deleteAccount {
  deleteAccount
}
    `;
export type DeleteAccountMutationFn = Apollo.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, options);
      }
export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = Apollo.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = Apollo.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;