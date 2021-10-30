import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: unknown;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  /** The `Long` scalar type represents 52-bit integers */
  Long: unknown;
  /** Input type for dynamic zone content of ProjectDetail */
  ProjectDetailContentDynamicZoneInput: unknown;
  /** A time string with format: HH:mm:ss.SSS */
  Time: unknown;
  /** The `Upload` scalar type represents a file upload. */
  Upload: unknown;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username: Maybe<Scalars['String']>;
};

export type Award = {
  __typename?: 'Award';
  category: Scalars['String'];
  created_at: Scalars['DateTime'];
  endYear: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  prize: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type AwardAggregator = {
  __typename?: 'AwardAggregator';
  avg: Maybe<AwardAggregatorAvg>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<AwardAggregatorMax>;
  min: Maybe<AwardAggregatorMin>;
  sum: Maybe<AwardAggregatorSum>;
  totalCount: Maybe<Scalars['Int']>;
};

export type AwardAggregatorAvg = {
  __typename?: 'AwardAggregatorAvg';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type AwardAggregatorMax = {
  __typename?: 'AwardAggregatorMax';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type AwardAggregatorMin = {
  __typename?: 'AwardAggregatorMin';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type AwardAggregatorSum = {
  __typename?: 'AwardAggregatorSum';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type AwardConnection = {
  __typename?: 'AwardConnection';
  aggregate: Maybe<AwardAggregator>;
  groupBy: Maybe<AwardGroupBy>;
  values: Maybe<Array<Maybe<Award>>>;
};

export type AwardConnectionCategory = {
  __typename?: 'AwardConnectionCategory';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['String']>;
};

export type AwardConnectionCreated_At = {
  __typename?: 'AwardConnectionCreated_at';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type AwardConnectionEndYear = {
  __typename?: 'AwardConnectionEndYear';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['Int']>;
};

export type AwardConnectionId = {
  __typename?: 'AwardConnectionId';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['ID']>;
};

export type AwardConnectionPrize = {
  __typename?: 'AwardConnectionPrize';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['String']>;
};

export type AwardConnectionPublished_At = {
  __typename?: 'AwardConnectionPublished_at';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type AwardConnectionStartYear = {
  __typename?: 'AwardConnectionStartYear';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['Int']>;
};

export type AwardConnectionTitle = {
  __typename?: 'AwardConnectionTitle';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['String']>;
};

export type AwardConnectionUpdated_At = {
  __typename?: 'AwardConnectionUpdated_at';
  connection: Maybe<AwardConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type AwardGroupBy = {
  __typename?: 'AwardGroupBy';
  category: Maybe<Array<Maybe<AwardConnectionCategory>>>;
  created_at: Maybe<Array<Maybe<AwardConnectionCreated_At>>>;
  endYear: Maybe<Array<Maybe<AwardConnectionEndYear>>>;
  id: Maybe<Array<Maybe<AwardConnectionId>>>;
  prize: Maybe<Array<Maybe<AwardConnectionPrize>>>;
  published_at: Maybe<Array<Maybe<AwardConnectionPublished_At>>>;
  startYear: Maybe<Array<Maybe<AwardConnectionStartYear>>>;
  title: Maybe<Array<Maybe<AwardConnectionTitle>>>;
  updated_at: Maybe<Array<Maybe<AwardConnectionUpdated_At>>>;
};

export type AwardInput = {
  category: Scalars['String'];
  created_by: Maybe<Scalars['ID']>;
  endYear: Maybe<Scalars['Int']>;
  prize: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Scalars['Int'];
  title: Scalars['String'];
  updated_by: Maybe<Scalars['ID']>;
};

export type Career = {
  __typename?: 'Career';
  company: Scalars['String'];
  created_at: Scalars['DateTime'];
  endYear: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  position: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type CareerAggregator = {
  __typename?: 'CareerAggregator';
  avg: Maybe<CareerAggregatorAvg>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<CareerAggregatorMax>;
  min: Maybe<CareerAggregatorMin>;
  sum: Maybe<CareerAggregatorSum>;
  totalCount: Maybe<Scalars['Int']>;
};

export type CareerAggregatorAvg = {
  __typename?: 'CareerAggregatorAvg';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type CareerAggregatorMax = {
  __typename?: 'CareerAggregatorMax';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type CareerAggregatorMin = {
  __typename?: 'CareerAggregatorMin';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type CareerAggregatorSum = {
  __typename?: 'CareerAggregatorSum';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type CareerConnection = {
  __typename?: 'CareerConnection';
  aggregate: Maybe<CareerAggregator>;
  groupBy: Maybe<CareerGroupBy>;
  values: Maybe<Array<Maybe<Career>>>;
};

export type CareerConnectionCompany = {
  __typename?: 'CareerConnectionCompany';
  connection: Maybe<CareerConnection>;
  key: Maybe<Scalars['String']>;
};

export type CareerConnectionCreated_At = {
  __typename?: 'CareerConnectionCreated_at';
  connection: Maybe<CareerConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type CareerConnectionEndYear = {
  __typename?: 'CareerConnectionEndYear';
  connection: Maybe<CareerConnection>;
  key: Maybe<Scalars['Int']>;
};

export type CareerConnectionId = {
  __typename?: 'CareerConnectionId';
  connection: Maybe<CareerConnection>;
  key: Maybe<Scalars['ID']>;
};

export type CareerConnectionPosition = {
  __typename?: 'CareerConnectionPosition';
  connection: Maybe<CareerConnection>;
  key: Maybe<Scalars['String']>;
};

export type CareerConnectionPublished_At = {
  __typename?: 'CareerConnectionPublished_at';
  connection: Maybe<CareerConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type CareerConnectionStartYear = {
  __typename?: 'CareerConnectionStartYear';
  connection: Maybe<CareerConnection>;
  key: Maybe<Scalars['Int']>;
};

export type CareerConnectionUpdated_At = {
  __typename?: 'CareerConnectionUpdated_at';
  connection: Maybe<CareerConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type CareerGroupBy = {
  __typename?: 'CareerGroupBy';
  company: Maybe<Array<Maybe<CareerConnectionCompany>>>;
  created_at: Maybe<Array<Maybe<CareerConnectionCreated_At>>>;
  endYear: Maybe<Array<Maybe<CareerConnectionEndYear>>>;
  id: Maybe<Array<Maybe<CareerConnectionId>>>;
  position: Maybe<Array<Maybe<CareerConnectionPosition>>>;
  published_at: Maybe<Array<Maybe<CareerConnectionPublished_At>>>;
  startYear: Maybe<Array<Maybe<CareerConnectionStartYear>>>;
  updated_at: Maybe<Array<Maybe<CareerConnectionUpdated_At>>>;
};

export type CareerInput = {
  company: Scalars['String'];
  created_by: Maybe<Scalars['ID']>;
  endYear: Maybe<Scalars['Int']>;
  position: Scalars['String'];
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Scalars['Int'];
  updated_by: Maybe<Scalars['ID']>;
};

export type ComponentCommonImage = {
  __typename?: 'ComponentCommonImage';
  alt: Scalars['String'];
  id: Scalars['ID'];
  isPortrait: Scalars['Boolean'];
  objectPosition: Maybe<Scalars['String']>;
  placeholder: Scalars['String'];
  source: Maybe<UploadFile>;
};

export type ComponentCommonImageInput = {
  alt: Scalars['String'];
  isPortrait: Maybe<Scalars['Boolean']>;
  objectPosition: Maybe<Scalars['String']>;
  placeholder: Scalars['String'];
  source: Maybe<Scalars['ID']>;
};

export type ComponentMainProjectThumbnail = {
  __typename?: 'ComponentMainProjectThumbnail';
  id: Scalars['ID'];
  slug: Scalars['String'];
  summary: Scalars['String'];
  thumbnail: Maybe<ComponentCommonImage>;
  title: Scalars['String'];
};

export type ComponentMainProjectThumbnailInput = {
  slug: Scalars['String'];
  summary: Scalars['String'];
  thumbnail: ComponentCommonImageInput;
  title: Scalars['String'];
};

export type ComponentProjectClient = {
  __typename?: 'ComponentProjectClient';
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
};

export type ComponentProjectClientInput = {
  name: Maybe<Scalars['String']>;
};

export type ComponentProjectExplanation = {
  __typename?: 'ComponentProjectExplanation';
  description: Scalars['String'];
  id: Scalars['ID'];
  isRight: Maybe<Scalars['Boolean']>;
};

export type ComponentProjectExplanationInput = {
  description: Scalars['String'];
  isRight: Maybe<Scalars['Boolean']>;
};

export type ComponentProjectTeam = {
  __typename?: 'ComponentProjectTeam';
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
};

export type ComponentProjectTeamInput = {
  name: Maybe<Scalars['String']>;
};

export enum Enum_Work_Type {
  Client = 'CLIENT',
  PersonalWork = 'PERSONAL_WORK',
  Team = 'TEAM'
}

export type FileInfoInput = {
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  created_by: Maybe<Scalars['ID']>;
  ext: Maybe<Scalars['String']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width: Maybe<Scalars['Int']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code: Maybe<Scalars['String']>;
  created_by: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type MainThumbnailInput = {
  created_by: Maybe<Scalars['ID']>;
  projectThumbnail: Maybe<Array<ComponentMainProjectThumbnailInput>>;
  published_at: Maybe<Scalars['DateTime']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type MainThumbnails = {
  __typename?: 'MainThumbnails';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  projectThumbnail: Maybe<Array<Maybe<ComponentMainProjectThumbnail>>>;
  published_at: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type Morph = Award | AwardAggregator | AwardAggregatorAvg | AwardAggregatorMax | AwardAggregatorMin | AwardAggregatorSum | AwardConnection | AwardConnectionCategory | AwardConnectionCreated_At | AwardConnectionEndYear | AwardConnectionId | AwardConnectionPrize | AwardConnectionPublished_At | AwardConnectionStartYear | AwardConnectionTitle | AwardConnectionUpdated_At | AwardGroupBy | Career | CareerAggregator | CareerAggregatorAvg | CareerAggregatorMax | CareerAggregatorMin | CareerAggregatorSum | CareerConnection | CareerConnectionCompany | CareerConnectionCreated_At | CareerConnectionEndYear | CareerConnectionId | CareerConnectionPosition | CareerConnectionPublished_At | CareerConnectionStartYear | CareerConnectionUpdated_At | CareerGroupBy | ComponentCommonImage | ComponentMainProjectThumbnail | ComponentProjectClient | ComponentProjectExplanation | ComponentProjectTeam | I18NLocale | MainThumbnails | Outsourcing | OutsourcingAggregator | OutsourcingAggregatorAvg | OutsourcingAggregatorMax | OutsourcingAggregatorMin | OutsourcingAggregatorSum | OutsourcingConnection | OutsourcingConnectionCreated_At | OutsourcingConnectionDescription | OutsourcingConnectionEndYear | OutsourcingConnectionId | OutsourcingConnectionPublished_At | OutsourcingConnectionStartYear | OutsourcingConnectionTitle | OutsourcingConnectionUpdated_At | OutsourcingGroupBy | Project | ProjectAggregator | ProjectAggregatorAvg | ProjectAggregatorMax | ProjectAggregatorMin | ProjectAggregatorSum | ProjectConnection | ProjectConnectionBackgroundColor | ProjectConnectionColor | ProjectConnectionCreated_At | ProjectConnectionDescription | ProjectConnectionEndDate | ProjectConnectionFixedTitleColor | ProjectConnectionId | ProjectConnectionLink | ProjectConnectionMainCoverImage | ProjectConnectionOrder | ProjectConnectionPublished_At | ProjectConnectionScope | ProjectConnectionSlug | ProjectConnectionStartDate | ProjectConnectionStickyTitleColor | ProjectConnectionSummary | ProjectConnectionThumbnail | ProjectConnectionTitle | ProjectConnectionUpdated_At | ProjectConnectionWork | ProjectDetail | ProjectDetailAggregator | ProjectDetailConnection | ProjectDetailConnectionBackgroundColor | ProjectDetailConnectionColor | ProjectDetailConnectionCreated_At | ProjectDetailConnectionId | ProjectDetailConnectionProject | ProjectDetailConnectionPublished_At | ProjectDetailConnectionUpdated_At | ProjectDetailGroupBy | ProjectGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Work | WorkAggregator | WorkConnection | WorkConnectionCreated_At | WorkConnectionId | WorkConnectionPublished_At | WorkConnectionType | WorkConnectionUpdated_At | WorkConnectionValue | WorkGroupBy | CreateAwardPayload | CreateCareerPayload | CreateOutsourcingPayload | CreateProjectDetailPayload | CreateProjectPayload | CreateRolePayload | CreateUserPayload | CreateWorkPayload | DeleteAwardPayload | DeleteCareerPayload | DeleteFilePayload | DeleteMainThumbnailPayload | DeleteOutsourcingPayload | DeleteProjectDetailPayload | DeleteProjectPayload | DeleteRolePayload | DeleteUserPayload | DeleteWorkPayload | UpdateAwardPayload | UpdateCareerPayload | UpdateMainThumbnailPayload | UpdateOutsourcingPayload | UpdateProjectDetailPayload | UpdateProjectPayload | UpdateRolePayload | UpdateUserPayload | UpdateWorkPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createAward: Maybe<CreateAwardPayload>;
  createCareer: Maybe<CreateCareerPayload>;
  createOutsourcing: Maybe<CreateOutsourcingPayload>;
  createProject: Maybe<CreateProjectPayload>;
  createProjectDetail: Maybe<CreateProjectDetailPayload>;
  /** Create a new role */
  createRole: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser: Maybe<CreateUserPayload>;
  createWork: Maybe<CreateWorkPayload>;
  deleteAward: Maybe<DeleteAwardPayload>;
  deleteCareer: Maybe<DeleteCareerPayload>;
  /** Delete one file */
  deleteFile: Maybe<DeleteFilePayload>;
  deleteMainThumbnail: Maybe<DeleteMainThumbnailPayload>;
  deleteOutsourcing: Maybe<DeleteOutsourcingPayload>;
  deleteProject: Maybe<DeleteProjectPayload>;
  deleteProjectDetail: Maybe<DeleteProjectDetailPayload>;
  /** Delete an existing role */
  deleteRole: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser: Maybe<DeleteUserPayload>;
  deleteWork: Maybe<DeleteWorkPayload>;
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateAward: Maybe<UpdateAwardPayload>;
  updateCareer: Maybe<UpdateCareerPayload>;
  updateFileInfo: UploadFile;
  updateMainThumbnail: Maybe<UpdateMainThumbnailPayload>;
  updateOutsourcing: Maybe<UpdateOutsourcingPayload>;
  updateProject: Maybe<UpdateProjectPayload>;
  updateProjectDetail: Maybe<UpdateProjectDetailPayload>;
  /** Update an existing role */
  updateRole: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser: Maybe<UpdateUserPayload>;
  updateWork: Maybe<UpdateWorkPayload>;
  upload: UploadFile;
};


export type MutationCreateAwardArgs = {
  input?: Maybe<CreateAwardInput>;
};


export type MutationCreateCareerArgs = {
  input?: Maybe<CreateCareerInput>;
};


export type MutationCreateOutsourcingArgs = {
  input?: Maybe<CreateOutsourcingInput>;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
};


export type MutationCreateProjectDetailArgs = {
  input?: Maybe<CreateProjectDetailInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationCreateWorkArgs = {
  input?: Maybe<CreateWorkInput>;
};


export type MutationDeleteAwardArgs = {
  input?: Maybe<DeleteAwardInput>;
};


export type MutationDeleteCareerArgs = {
  input?: Maybe<DeleteCareerInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationDeleteOutsourcingArgs = {
  input?: Maybe<DeleteOutsourcingInput>;
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
};


export type MutationDeleteProjectDetailArgs = {
  input?: Maybe<DeleteProjectDetailInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationDeleteWorkArgs = {
  input?: Maybe<DeleteWorkInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAwardArgs = {
  input?: Maybe<UpdateAwardInput>;
};


export type MutationUpdateCareerArgs = {
  input?: Maybe<UpdateCareerInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateMainThumbnailArgs = {
  input?: Maybe<UpdateMainThumbnailInput>;
};


export type MutationUpdateOutsourcingArgs = {
  input?: Maybe<UpdateOutsourcingInput>;
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
};


export type MutationUpdateProjectDetailArgs = {
  input?: Maybe<UpdateProjectDetailInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationUpdateWorkArgs = {
  input?: Maybe<UpdateWorkInput>;
};


export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type Outsourcing = {
  __typename?: 'Outsourcing';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  endYear: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type OutsourcingAggregator = {
  __typename?: 'OutsourcingAggregator';
  avg: Maybe<OutsourcingAggregatorAvg>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<OutsourcingAggregatorMax>;
  min: Maybe<OutsourcingAggregatorMin>;
  sum: Maybe<OutsourcingAggregatorSum>;
  totalCount: Maybe<Scalars['Int']>;
};

export type OutsourcingAggregatorAvg = {
  __typename?: 'OutsourcingAggregatorAvg';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type OutsourcingAggregatorMax = {
  __typename?: 'OutsourcingAggregatorMax';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type OutsourcingAggregatorMin = {
  __typename?: 'OutsourcingAggregatorMin';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type OutsourcingAggregatorSum = {
  __typename?: 'OutsourcingAggregatorSum';
  endYear: Maybe<Scalars['Float']>;
  startYear: Maybe<Scalars['Float']>;
};

export type OutsourcingConnection = {
  __typename?: 'OutsourcingConnection';
  aggregate: Maybe<OutsourcingAggregator>;
  groupBy: Maybe<OutsourcingGroupBy>;
  values: Maybe<Array<Maybe<Outsourcing>>>;
};

export type OutsourcingConnectionCreated_At = {
  __typename?: 'OutsourcingConnectionCreated_at';
  connection: Maybe<OutsourcingConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type OutsourcingConnectionDescription = {
  __typename?: 'OutsourcingConnectionDescription';
  connection: Maybe<OutsourcingConnection>;
  key: Maybe<Scalars['String']>;
};

export type OutsourcingConnectionEndYear = {
  __typename?: 'OutsourcingConnectionEndYear';
  connection: Maybe<OutsourcingConnection>;
  key: Maybe<Scalars['Int']>;
};

export type OutsourcingConnectionId = {
  __typename?: 'OutsourcingConnectionId';
  connection: Maybe<OutsourcingConnection>;
  key: Maybe<Scalars['ID']>;
};

export type OutsourcingConnectionPublished_At = {
  __typename?: 'OutsourcingConnectionPublished_at';
  connection: Maybe<OutsourcingConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type OutsourcingConnectionStartYear = {
  __typename?: 'OutsourcingConnectionStartYear';
  connection: Maybe<OutsourcingConnection>;
  key: Maybe<Scalars['Int']>;
};

export type OutsourcingConnectionTitle = {
  __typename?: 'OutsourcingConnectionTitle';
  connection: Maybe<OutsourcingConnection>;
  key: Maybe<Scalars['String']>;
};

export type OutsourcingConnectionUpdated_At = {
  __typename?: 'OutsourcingConnectionUpdated_at';
  connection: Maybe<OutsourcingConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type OutsourcingGroupBy = {
  __typename?: 'OutsourcingGroupBy';
  created_at: Maybe<Array<Maybe<OutsourcingConnectionCreated_At>>>;
  description: Maybe<Array<Maybe<OutsourcingConnectionDescription>>>;
  endYear: Maybe<Array<Maybe<OutsourcingConnectionEndYear>>>;
  id: Maybe<Array<Maybe<OutsourcingConnectionId>>>;
  published_at: Maybe<Array<Maybe<OutsourcingConnectionPublished_At>>>;
  startYear: Maybe<Array<Maybe<OutsourcingConnectionStartYear>>>;
  title: Maybe<Array<Maybe<OutsourcingConnectionTitle>>>;
  updated_at: Maybe<Array<Maybe<OutsourcingConnectionUpdated_At>>>;
};

export type OutsourcingInput = {
  created_by: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  endYear: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updated_by: Maybe<Scalars['ID']>;
};

export type Project = {
  __typename?: 'Project';
  backgroundColor: Scalars['String'];
  color: Scalars['String'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  endDate: Scalars['String'];
  fixedTitleColor: Scalars['String'];
  id: Scalars['ID'];
  link: Maybe<Scalars['String']>;
  mainCoverImage: Maybe<ComponentCommonImage>;
  order: Scalars['Int'];
  projectDetails: Maybe<Array<Maybe<ProjectDetail>>>;
  published_at: Maybe<Scalars['DateTime']>;
  scope: Scalars['String'];
  slug: Scalars['String'];
  startDate: Scalars['String'];
  stickyTitleColor: Scalars['String'];
  summary: Scalars['String'];
  thumbnail: Maybe<ComponentCommonImage>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  work: Maybe<Work>;
};


export type ProjectProjectDetailsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProjectAggregator = {
  __typename?: 'ProjectAggregator';
  avg: Maybe<ProjectAggregatorAvg>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<ProjectAggregatorMax>;
  min: Maybe<ProjectAggregatorMin>;
  sum: Maybe<ProjectAggregatorSum>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ProjectAggregatorAvg = {
  __typename?: 'ProjectAggregatorAvg';
  order: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorMax = {
  __typename?: 'ProjectAggregatorMax';
  order: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorMin = {
  __typename?: 'ProjectAggregatorMin';
  order: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorSum = {
  __typename?: 'ProjectAggregatorSum';
  order: Maybe<Scalars['Float']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Maybe<ProjectAggregator>;
  groupBy: Maybe<ProjectGroupBy>;
  values: Maybe<Array<Maybe<Project>>>;
};

export type ProjectConnectionBackgroundColor = {
  __typename?: 'ProjectConnectionBackgroundColor';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionColor = {
  __typename?: 'ProjectConnectionColor';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionCreated_At = {
  __typename?: 'ProjectConnectionCreated_at';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type ProjectConnectionDescription = {
  __typename?: 'ProjectConnectionDescription';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionEndDate = {
  __typename?: 'ProjectConnectionEndDate';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionFixedTitleColor = {
  __typename?: 'ProjectConnectionFixedTitleColor';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionId = {
  __typename?: 'ProjectConnectionId';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['ID']>;
};

export type ProjectConnectionLink = {
  __typename?: 'ProjectConnectionLink';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionMainCoverImage = {
  __typename?: 'ProjectConnectionMainCoverImage';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['ID']>;
};

export type ProjectConnectionOrder = {
  __typename?: 'ProjectConnectionOrder';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['Int']>;
};

export type ProjectConnectionPublished_At = {
  __typename?: 'ProjectConnectionPublished_at';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type ProjectConnectionScope = {
  __typename?: 'ProjectConnectionScope';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionSlug = {
  __typename?: 'ProjectConnectionSlug';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionStartDate = {
  __typename?: 'ProjectConnectionStartDate';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionStickyTitleColor = {
  __typename?: 'ProjectConnectionStickyTitleColor';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionSummary = {
  __typename?: 'ProjectConnectionSummary';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionThumbnail = {
  __typename?: 'ProjectConnectionThumbnail';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['ID']>;
};

export type ProjectConnectionTitle = {
  __typename?: 'ProjectConnectionTitle';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectConnectionUpdated_At = {
  __typename?: 'ProjectConnectionUpdated_at';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type ProjectConnectionWork = {
  __typename?: 'ProjectConnectionWork';
  connection: Maybe<ProjectConnection>;
  key: Maybe<Scalars['ID']>;
};

export type ProjectDetail = {
  __typename?: 'ProjectDetail';
  backgroundColor: Scalars['String'];
  color: Scalars['String'];
  content: Maybe<Array<Maybe<ProjectDetailContentDynamicZone>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  project: Maybe<Project>;
  published_at: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type ProjectDetailAggregator = {
  __typename?: 'ProjectDetailAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ProjectDetailConnection = {
  __typename?: 'ProjectDetailConnection';
  aggregate: Maybe<ProjectDetailAggregator>;
  groupBy: Maybe<ProjectDetailGroupBy>;
  values: Maybe<Array<Maybe<ProjectDetail>>>;
};

export type ProjectDetailConnectionBackgroundColor = {
  __typename?: 'ProjectDetailConnectionBackgroundColor';
  connection: Maybe<ProjectDetailConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectDetailConnectionColor = {
  __typename?: 'ProjectDetailConnectionColor';
  connection: Maybe<ProjectDetailConnection>;
  key: Maybe<Scalars['String']>;
};

export type ProjectDetailConnectionCreated_At = {
  __typename?: 'ProjectDetailConnectionCreated_at';
  connection: Maybe<ProjectDetailConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type ProjectDetailConnectionId = {
  __typename?: 'ProjectDetailConnectionId';
  connection: Maybe<ProjectDetailConnection>;
  key: Maybe<Scalars['ID']>;
};

export type ProjectDetailConnectionProject = {
  __typename?: 'ProjectDetailConnectionProject';
  connection: Maybe<ProjectDetailConnection>;
  key: Maybe<Scalars['ID']>;
};

export type ProjectDetailConnectionPublished_At = {
  __typename?: 'ProjectDetailConnectionPublished_at';
  connection: Maybe<ProjectDetailConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type ProjectDetailConnectionUpdated_At = {
  __typename?: 'ProjectDetailConnectionUpdated_at';
  connection: Maybe<ProjectDetailConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type ProjectDetailContentDynamicZone = ComponentCommonImage | ComponentProjectExplanation;

export type ProjectDetailGroupBy = {
  __typename?: 'ProjectDetailGroupBy';
  backgroundColor: Maybe<Array<Maybe<ProjectDetailConnectionBackgroundColor>>>;
  color: Maybe<Array<Maybe<ProjectDetailConnectionColor>>>;
  created_at: Maybe<Array<Maybe<ProjectDetailConnectionCreated_At>>>;
  id: Maybe<Array<Maybe<ProjectDetailConnectionId>>>;
  project: Maybe<Array<Maybe<ProjectDetailConnectionProject>>>;
  published_at: Maybe<Array<Maybe<ProjectDetailConnectionPublished_At>>>;
  updated_at: Maybe<Array<Maybe<ProjectDetailConnectionUpdated_At>>>;
};

export type ProjectDetailInput = {
  backgroundColor: Maybe<Scalars['String']>;
  color: Maybe<Scalars['String']>;
  content: Maybe<Array<Scalars['ProjectDetailContentDynamicZoneInput']>>;
  created_by: Maybe<Scalars['ID']>;
  project: Maybe<Scalars['ID']>;
  published_at: Maybe<Scalars['DateTime']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  backgroundColor: Maybe<Array<Maybe<ProjectConnectionBackgroundColor>>>;
  color: Maybe<Array<Maybe<ProjectConnectionColor>>>;
  created_at: Maybe<Array<Maybe<ProjectConnectionCreated_At>>>;
  description: Maybe<Array<Maybe<ProjectConnectionDescription>>>;
  endDate: Maybe<Array<Maybe<ProjectConnectionEndDate>>>;
  fixedTitleColor: Maybe<Array<Maybe<ProjectConnectionFixedTitleColor>>>;
  id: Maybe<Array<Maybe<ProjectConnectionId>>>;
  link: Maybe<Array<Maybe<ProjectConnectionLink>>>;
  mainCoverImage: Maybe<Array<Maybe<ProjectConnectionMainCoverImage>>>;
  order: Maybe<Array<Maybe<ProjectConnectionOrder>>>;
  published_at: Maybe<Array<Maybe<ProjectConnectionPublished_At>>>;
  scope: Maybe<Array<Maybe<ProjectConnectionScope>>>;
  slug: Maybe<Array<Maybe<ProjectConnectionSlug>>>;
  startDate: Maybe<Array<Maybe<ProjectConnectionStartDate>>>;
  stickyTitleColor: Maybe<Array<Maybe<ProjectConnectionStickyTitleColor>>>;
  summary: Maybe<Array<Maybe<ProjectConnectionSummary>>>;
  thumbnail: Maybe<Array<Maybe<ProjectConnectionThumbnail>>>;
  title: Maybe<Array<Maybe<ProjectConnectionTitle>>>;
  updated_at: Maybe<Array<Maybe<ProjectConnectionUpdated_At>>>;
  work: Maybe<Array<Maybe<ProjectConnectionWork>>>;
};

export type ProjectInput = {
  backgroundColor: Maybe<Scalars['String']>;
  color: Maybe<Scalars['String']>;
  created_by: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  endDate: Scalars['String'];
  fixedTitleColor: Maybe<Scalars['String']>;
  link: Maybe<Scalars['String']>;
  mainCoverImage: ComponentCommonImageInput;
  order: Scalars['Int'];
  projectDetails: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at: Maybe<Scalars['DateTime']>;
  scope: Scalars['String'];
  slug: Scalars['String'];
  startDate: Scalars['String'];
  stickyTitleColor: Maybe<Scalars['String']>;
  summary: Scalars['String'];
  thumbnail: ComponentCommonImageInput;
  title: Scalars['String'];
  updated_by: Maybe<Scalars['ID']>;
  work: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  award: Maybe<Award>;
  awards: Maybe<Array<Maybe<Award>>>;
  awardsConnection: Maybe<AwardConnection>;
  career: Maybe<Career>;
  careers: Maybe<Array<Maybe<Career>>>;
  careersConnection: Maybe<CareerConnection>;
  files: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection: Maybe<UploadFileConnection>;
  mainThumbnail: Maybe<MainThumbnails>;
  me: Maybe<UsersPermissionsMe>;
  outsourcing: Maybe<Outsourcing>;
  outsourcings: Maybe<Array<Maybe<Outsourcing>>>;
  outsourcingsConnection: Maybe<OutsourcingConnection>;
  project: Maybe<Project>;
  projectDetail: Maybe<ProjectDetail>;
  projectDetails: Maybe<Array<Maybe<ProjectDetail>>>;
  projectDetailsConnection: Maybe<ProjectDetailConnection>;
  projects: Maybe<Array<Maybe<Project>>>;
  projectsConnection: Maybe<ProjectConnection>;
  role: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection: Maybe<UsersPermissionsRoleConnection>;
  user: Maybe<UsersPermissionsUser>;
  users: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection: Maybe<UsersPermissionsUserConnection>;
  work: Maybe<Work>;
  works: Maybe<Array<Maybe<Work>>>;
  worksConnection: Maybe<WorkConnection>;
};


export type QueryAwardArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryAwardsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryAwardsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCareerArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCareersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCareersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMainThumbnailArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryOutsourcingArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryOutsourcingsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOutsourcingsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectDetailArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectDetailsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectDetailsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWorkArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryWorksArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWorksConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by: Maybe<Scalars['ID']>;
  description: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Maybe<Array<Maybe<Scalars['ID']>>>;
  type: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['ID']>;
  users: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext: Maybe<Scalars['String']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg: Maybe<UploadFileAggregatorAvg>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<UploadFileAggregatorMax>;
  min: Maybe<UploadFileAggregatorMin>;
  sum: Maybe<UploadFileAggregatorSum>;
  totalCount: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate: Maybe<UploadFileAggregator>;
  groupBy: Maybe<UploadFileGroupBy>;
  values: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection: Maybe<UploadFileConnection>;
  key: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked: Maybe<Scalars['Boolean']>;
  confirmationToken: Maybe<Scalars['String']>;
  confirmed: Maybe<Scalars['Boolean']>;
  created_by: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  resetPasswordToken: Maybe<Scalars['String']>;
  role: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']>;
  confirmed: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy: Maybe<Scalars['String']>;
  role: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type: Maybe<Scalars['String']>;
  users: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate: Maybe<UsersPermissionsRoleAggregator>;
  groupBy: Maybe<UsersPermissionsRoleGroupBy>;
  values: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection: Maybe<UsersPermissionsRoleConnection>;
  key: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection: Maybe<UsersPermissionsRoleConnection>;
  key: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection: Maybe<UsersPermissionsRoleConnection>;
  key: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection: Maybe<UsersPermissionsRoleConnection>;
  key: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']>;
  confirmed: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider: Maybe<Scalars['String']>;
  role: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate: Maybe<UsersPermissionsUserAggregator>;
  groupBy: Maybe<UsersPermissionsUserGroupBy>;
  values: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection: Maybe<UsersPermissionsUserConnection>;
  key: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type Work = {
  __typename?: 'Work';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at: Maybe<Scalars['DateTime']>;
  type: Enum_Work_Type;
  updated_at: Scalars['DateTime'];
  value: Maybe<Scalars['String']>;
};

export type WorkAggregator = {
  __typename?: 'WorkAggregator';
  count: Maybe<Scalars['Int']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type WorkConnection = {
  __typename?: 'WorkConnection';
  aggregate: Maybe<WorkAggregator>;
  groupBy: Maybe<WorkGroupBy>;
  values: Maybe<Array<Maybe<Work>>>;
};

export type WorkConnectionCreated_At = {
  __typename?: 'WorkConnectionCreated_at';
  connection: Maybe<WorkConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type WorkConnectionId = {
  __typename?: 'WorkConnectionId';
  connection: Maybe<WorkConnection>;
  key: Maybe<Scalars['ID']>;
};

export type WorkConnectionPublished_At = {
  __typename?: 'WorkConnectionPublished_at';
  connection: Maybe<WorkConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type WorkConnectionType = {
  __typename?: 'WorkConnectionType';
  connection: Maybe<WorkConnection>;
  key: Maybe<Scalars['String']>;
};

export type WorkConnectionUpdated_At = {
  __typename?: 'WorkConnectionUpdated_at';
  connection: Maybe<WorkConnection>;
  key: Maybe<Scalars['DateTime']>;
};

export type WorkConnectionValue = {
  __typename?: 'WorkConnectionValue';
  connection: Maybe<WorkConnection>;
  key: Maybe<Scalars['String']>;
};

export type WorkGroupBy = {
  __typename?: 'WorkGroupBy';
  created_at: Maybe<Array<Maybe<WorkConnectionCreated_At>>>;
  id: Maybe<Array<Maybe<WorkConnectionId>>>;
  published_at: Maybe<Array<Maybe<WorkConnectionPublished_At>>>;
  type: Maybe<Array<Maybe<WorkConnectionType>>>;
  updated_at: Maybe<Array<Maybe<WorkConnectionUpdated_At>>>;
  value: Maybe<Array<Maybe<WorkConnectionValue>>>;
};

export type WorkInput = {
  created_by: Maybe<Scalars['ID']>;
  published_at: Maybe<Scalars['DateTime']>;
  type: Enum_Work_Type;
  updated_by: Maybe<Scalars['ID']>;
  value: Maybe<Scalars['String']>;
};

export type CreateAwardInput = {
  data: Maybe<AwardInput>;
};

export type CreateAwardPayload = {
  __typename?: 'createAwardPayload';
  award: Maybe<Award>;
};

export type CreateCareerInput = {
  data: Maybe<CareerInput>;
};

export type CreateCareerPayload = {
  __typename?: 'createCareerPayload';
  career: Maybe<Career>;
};

export type CreateOutsourcingInput = {
  data: Maybe<OutsourcingInput>;
};

export type CreateOutsourcingPayload = {
  __typename?: 'createOutsourcingPayload';
  outsourcing: Maybe<Outsourcing>;
};

export type CreateProjectDetailInput = {
  data: Maybe<ProjectDetailInput>;
};

export type CreateProjectDetailPayload = {
  __typename?: 'createProjectDetailPayload';
  projectDetail: Maybe<ProjectDetail>;
};

export type CreateProjectInput = {
  data: Maybe<ProjectInput>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project: Maybe<Project>;
};

export type CreateRoleInput = {
  data: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user: Maybe<UsersPermissionsUser>;
};

export type CreateWorkInput = {
  data: Maybe<WorkInput>;
};

export type CreateWorkPayload = {
  __typename?: 'createWorkPayload';
  work: Maybe<Work>;
};

export type DeleteAwardInput = {
  where: Maybe<InputId>;
};

export type DeleteAwardPayload = {
  __typename?: 'deleteAwardPayload';
  award: Maybe<Award>;
};

export type DeleteCareerInput = {
  where: Maybe<InputId>;
};

export type DeleteCareerPayload = {
  __typename?: 'deleteCareerPayload';
  career: Maybe<Career>;
};

export type DeleteFileInput = {
  where: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file: Maybe<UploadFile>;
};

export type DeleteMainThumbnailPayload = {
  __typename?: 'deleteMainThumbnailPayload';
  mainThumbnail: Maybe<MainThumbnails>;
};

export type DeleteOutsourcingInput = {
  where: Maybe<InputId>;
};

export type DeleteOutsourcingPayload = {
  __typename?: 'deleteOutsourcingPayload';
  outsourcing: Maybe<Outsourcing>;
};

export type DeleteProjectDetailInput = {
  where: Maybe<InputId>;
};

export type DeleteProjectDetailPayload = {
  __typename?: 'deleteProjectDetailPayload';
  projectDetail: Maybe<ProjectDetail>;
};

export type DeleteProjectInput = {
  where: Maybe<InputId>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project: Maybe<Project>;
};

export type DeleteRoleInput = {
  where: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user: Maybe<UsersPermissionsUser>;
};

export type DeleteWorkInput = {
  where: Maybe<InputId>;
};

export type DeleteWorkPayload = {
  __typename?: 'deleteWorkPayload';
  work: Maybe<Work>;
};

export type EditAwardInput = {
  category: Maybe<Scalars['String']>;
  created_by: Maybe<Scalars['ID']>;
  endYear: Maybe<Scalars['Int']>;
  prize: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditCareerInput = {
  company: Maybe<Scalars['String']>;
  created_by: Maybe<Scalars['ID']>;
  endYear: Maybe<Scalars['Int']>;
  position: Maybe<Scalars['String']>;
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Maybe<Scalars['Int']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditComponentCommonImageInput = {
  alt: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  isPortrait: Maybe<Scalars['Boolean']>;
  objectPosition: Maybe<Scalars['String']>;
  placeholder: Maybe<Scalars['String']>;
  source: Maybe<Scalars['ID']>;
};

export type EditComponentMainProjectThumbnailInput = {
  id: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
  summary: Maybe<Scalars['String']>;
  thumbnail: Maybe<EditComponentCommonImageInput>;
  title: Maybe<Scalars['String']>;
};

export type EditComponentProjectClientInput = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type EditComponentProjectExplanationInput = {
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  isRight: Maybe<Scalars['Boolean']>;
};

export type EditComponentProjectTeamInput = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type EditFileInput = {
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  created_by: Maybe<Scalars['ID']>;
  ext: Maybe<Scalars['String']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  mime: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  previewUrl: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Maybe<Scalars['Float']>;
  updated_by: Maybe<Scalars['ID']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type EditLocaleInput = {
  code: Maybe<Scalars['String']>;
  created_by: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditMainThumbnailInput = {
  created_by: Maybe<Scalars['ID']>;
  projectThumbnail: Maybe<Array<Maybe<EditComponentMainProjectThumbnailInput>>>;
  published_at: Maybe<Scalars['DateTime']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditOutsourcingInput = {
  created_by: Maybe<Scalars['ID']>;
  description: Maybe<Scalars['String']>;
  endYear: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['DateTime']>;
  startYear: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditProjectDetailInput = {
  backgroundColor: Maybe<Scalars['String']>;
  color: Maybe<Scalars['String']>;
  content: Maybe<Array<Scalars['ProjectDetailContentDynamicZoneInput']>>;
  created_by: Maybe<Scalars['ID']>;
  project: Maybe<Scalars['ID']>;
  published_at: Maybe<Scalars['DateTime']>;
  updated_by: Maybe<Scalars['ID']>;
};

export type EditProjectInput = {
  backgroundColor: Maybe<Scalars['String']>;
  color: Maybe<Scalars['String']>;
  created_by: Maybe<Scalars['ID']>;
  description: Maybe<Scalars['String']>;
  endDate: Maybe<Scalars['String']>;
  fixedTitleColor: Maybe<Scalars['String']>;
  link: Maybe<Scalars['String']>;
  mainCoverImage: Maybe<EditComponentCommonImageInput>;
  order: Maybe<Scalars['Int']>;
  projectDetails: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at: Maybe<Scalars['DateTime']>;
  scope: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  startDate: Maybe<Scalars['String']>;
  stickyTitleColor: Maybe<Scalars['String']>;
  summary: Maybe<Scalars['String']>;
  thumbnail: Maybe<EditComponentCommonImageInput>;
  title: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['ID']>;
  work: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by: Maybe<Scalars['ID']>;
  description: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  permissions: Maybe<Array<Maybe<Scalars['ID']>>>;
  type: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['ID']>;
  users: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked: Maybe<Scalars['Boolean']>;
  confirmationToken: Maybe<Scalars['String']>;
  confirmed: Maybe<Scalars['Boolean']>;
  created_by: Maybe<Scalars['ID']>;
  email: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  resetPasswordToken: Maybe<Scalars['String']>;
  role: Maybe<Scalars['ID']>;
  updated_by: Maybe<Scalars['ID']>;
  username: Maybe<Scalars['String']>;
};

export type EditWorkInput = {
  created_by: Maybe<Scalars['ID']>;
  published_at: Maybe<Scalars['DateTime']>;
  type: Maybe<Enum_Work_Type>;
  updated_by: Maybe<Scalars['ID']>;
  value: Maybe<Scalars['String']>;
};

export type UpdateAwardInput = {
  data: Maybe<EditAwardInput>;
  where: Maybe<InputId>;
};

export type UpdateAwardPayload = {
  __typename?: 'updateAwardPayload';
  award: Maybe<Award>;
};

export type UpdateCareerInput = {
  data: Maybe<EditCareerInput>;
  where: Maybe<InputId>;
};

export type UpdateCareerPayload = {
  __typename?: 'updateCareerPayload';
  career: Maybe<Career>;
};

export type UpdateMainThumbnailInput = {
  data: Maybe<EditMainThumbnailInput>;
};

export type UpdateMainThumbnailPayload = {
  __typename?: 'updateMainThumbnailPayload';
  mainThumbnail: Maybe<MainThumbnails>;
};

export type UpdateOutsourcingInput = {
  data: Maybe<EditOutsourcingInput>;
  where: Maybe<InputId>;
};

export type UpdateOutsourcingPayload = {
  __typename?: 'updateOutsourcingPayload';
  outsourcing: Maybe<Outsourcing>;
};

export type UpdateProjectDetailInput = {
  data: Maybe<EditProjectDetailInput>;
  where: Maybe<InputId>;
};

export type UpdateProjectDetailPayload = {
  __typename?: 'updateProjectDetailPayload';
  projectDetail: Maybe<ProjectDetail>;
};

export type UpdateProjectInput = {
  data: Maybe<EditProjectInput>;
  where: Maybe<InputId>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project: Maybe<Project>;
};

export type UpdateRoleInput = {
  data: Maybe<EditRoleInput>;
  where: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data: Maybe<EditUserInput>;
  where: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user: Maybe<UsersPermissionsUser>;
};

export type UpdateWorkInput = {
  data: Maybe<EditWorkInput>;
  where: Maybe<InputId>;
};

export type UpdateWorkPayload = {
  __typename?: 'updateWorkPayload';
  work: Maybe<Work>;
};

export type ProjectSlugPage_ProjectDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProjectSlugPage_ProjectDetailQuery = { __typename?: 'Query', project: { __typename?: 'Project', id: string, slug: string, title: string, summary: string, description: string, scope: string, link: string | null, color: string, backgroundColor: string, fixedTitleColor: string, stickyTitleColor: string, startDate: string, endDate: string, order: number, work: { __typename?: 'Work', type: Enum_Work_Type, value: string | null } | null, mainCoverImage: { __typename?: 'ComponentCommonImage', alt: string, placeholder: string, source: { __typename?: 'UploadFile', url: string } | null } | null, projectDetails: Array<{ __typename?: 'ProjectDetail', id: string, color: string, backgroundColor: string, content: Array<{ __typename: 'ComponentCommonImage', alt: string, placeholder: string, source: { __typename?: 'UploadFile', width: number | null, height: number | null, url: string } | null } | { __typename: 'ComponentProjectExplanation', description: string, isRight: boolean | null } | null> | null } | null> | null } | null };

export type ProjectSlugPage_ProjectLinkQueryVariables = Exact<{
  order: Scalars['Int'];
}>;


export type ProjectSlugPage_ProjectLinkQuery = { __typename?: 'Query', next: Array<{ __typename?: 'Project', slug: string, title: string } | null> | null, prev: Array<{ __typename?: 'Project', slug: string, title: string } | null> | null };

export type ProjectSlugPage_ProjectSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectSlugPage_ProjectSlugsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', slug: string } | null> | null };

export type ProjectSlugPage_ProjectIdQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ProjectSlugPage_ProjectIdQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, order: number } | null> | null };

export type AboutPage_AwardsQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPage_AwardsQuery = { __typename?: 'Query', awards: Array<{ __typename?: 'Award', title: string, category: string, prize: string, startYear: number, endYear: number | null } | null> | null };

export type AboutPage_CareersQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPage_CareersQuery = { __typename?: 'Query', careers: Array<{ __typename?: 'Career', company: string, position: string, startYear: number, endYear: number | null } | null> | null };

export type AboutPage_OutsourcingsQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPage_OutsourcingsQuery = { __typename?: 'Query', outsourcings: Array<{ __typename?: 'Outsourcing', title: string, description: string, startYear: number, endYear: number | null } | null> | null };

export type IndexPage_MainThumbnailQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPage_MainThumbnailQuery = { __typename?: 'Query', mainThumbnail: { __typename?: 'MainThumbnails', projectThumbnail: Array<{ __typename?: 'ComponentMainProjectThumbnail', slug: string, title: string, summary: string, thumbnail: { __typename?: 'ComponentCommonImage', placeholder: string, alt: string, source: { __typename?: 'UploadFile', url: string } | null } | null } | null> | null } | null };

export type ProjectPage_ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectPage_ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', slug: string, title: string, summary: string, thumbnail: { __typename?: 'ComponentCommonImage', alt: string, placeholder: string, source: { __typename?: 'UploadFile', url: string, width: number | null, height: number | null } | null } | null } | null> | null };

export type Projects_ThumbnailsFragment = { __typename?: 'Project', slug: string, title: string, summary: string, thumbnail: { __typename?: 'ComponentCommonImage', alt: string, placeholder: string, source: { __typename?: 'UploadFile', url: string, width: number | null, height: number | null } | null } | null };

export const Projects_ThumbnailsFragmentDoc = gql`
    fragment Projects_Thumbnails on Project {
  slug
  title
  summary
  thumbnail {
    source {
      url
      width
      height
    }
    alt
    placeholder
  }
}
    `;
export const ProjectSlugPage_ProjectDetailDocument = gql`
    query ProjectSlugPage_ProjectDetail($id: ID!) {
  project(id: $id) {
    id
    slug
    title
    summary
    description
    scope
    link
    color
    backgroundColor
    fixedTitleColor
    stickyTitleColor
    startDate
    endDate
    order
    work {
      type
      value
    }
    mainCoverImage {
      alt
      placeholder
      source {
        url
      }
    }
    projectDetails {
      id
      color
      backgroundColor
      content {
        __typename
        ... on ComponentCommonImage {
          alt
          placeholder
          source {
            width
            height
            url
          }
        }
        ... on ComponentProjectExplanation {
          description
          isRight
        }
      }
    }
  }
}
    `;

/**
 * __useProjectSlugPage_ProjectDetailQuery__
 *
 * To run a query within a React component, call `useProjectSlugPage_ProjectDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectSlugPage_ProjectDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectSlugPage_ProjectDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectSlugPage_ProjectDetailQuery(baseOptions: Apollo.QueryHookOptions<ProjectSlugPage_ProjectDetailQuery, ProjectSlugPage_ProjectDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectSlugPage_ProjectDetailQuery, ProjectSlugPage_ProjectDetailQueryVariables>(ProjectSlugPage_ProjectDetailDocument, options);
      }
export function useProjectSlugPage_ProjectDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectSlugPage_ProjectDetailQuery, ProjectSlugPage_ProjectDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectSlugPage_ProjectDetailQuery, ProjectSlugPage_ProjectDetailQueryVariables>(ProjectSlugPage_ProjectDetailDocument, options);
        }
export type ProjectSlugPage_ProjectDetailQueryHookResult = ReturnType<typeof useProjectSlugPage_ProjectDetailQuery>;
export type ProjectSlugPage_ProjectDetailLazyQueryHookResult = ReturnType<typeof useProjectSlugPage_ProjectDetailLazyQuery>;
export type ProjectSlugPage_ProjectDetailQueryResult = Apollo.QueryResult<ProjectSlugPage_ProjectDetailQuery, ProjectSlugPage_ProjectDetailQueryVariables>;
export const ProjectSlugPage_ProjectLinkDocument = gql`
    query ProjectSlugPage_ProjectLink($order: Int!) {
  next: projects(sort: "order:desc", where: {order_lt: $order}, limit: 1) {
    slug
    title
  }
  prev: projects(where: {order_gt: $order}, limit: 1) {
    slug
    title
  }
}
    `;

/**
 * __useProjectSlugPage_ProjectLinkQuery__
 *
 * To run a query within a React component, call `useProjectSlugPage_ProjectLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectSlugPage_ProjectLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectSlugPage_ProjectLinkQuery({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useProjectSlugPage_ProjectLinkQuery(baseOptions: Apollo.QueryHookOptions<ProjectSlugPage_ProjectLinkQuery, ProjectSlugPage_ProjectLinkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectSlugPage_ProjectLinkQuery, ProjectSlugPage_ProjectLinkQueryVariables>(ProjectSlugPage_ProjectLinkDocument, options);
      }
export function useProjectSlugPage_ProjectLinkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectSlugPage_ProjectLinkQuery, ProjectSlugPage_ProjectLinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectSlugPage_ProjectLinkQuery, ProjectSlugPage_ProjectLinkQueryVariables>(ProjectSlugPage_ProjectLinkDocument, options);
        }
export type ProjectSlugPage_ProjectLinkQueryHookResult = ReturnType<typeof useProjectSlugPage_ProjectLinkQuery>;
export type ProjectSlugPage_ProjectLinkLazyQueryHookResult = ReturnType<typeof useProjectSlugPage_ProjectLinkLazyQuery>;
export type ProjectSlugPage_ProjectLinkQueryResult = Apollo.QueryResult<ProjectSlugPage_ProjectLinkQuery, ProjectSlugPage_ProjectLinkQueryVariables>;
export const ProjectSlugPage_ProjectSlugsDocument = gql`
    query ProjectSlugPage_ProjectSlugs {
  projects {
    slug
  }
}
    `;

/**
 * __useProjectSlugPage_ProjectSlugsQuery__
 *
 * To run a query within a React component, call `useProjectSlugPage_ProjectSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectSlugPage_ProjectSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectSlugPage_ProjectSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectSlugPage_ProjectSlugsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectSlugPage_ProjectSlugsQuery, ProjectSlugPage_ProjectSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectSlugPage_ProjectSlugsQuery, ProjectSlugPage_ProjectSlugsQueryVariables>(ProjectSlugPage_ProjectSlugsDocument, options);
      }
export function useProjectSlugPage_ProjectSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectSlugPage_ProjectSlugsQuery, ProjectSlugPage_ProjectSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectSlugPage_ProjectSlugsQuery, ProjectSlugPage_ProjectSlugsQueryVariables>(ProjectSlugPage_ProjectSlugsDocument, options);
        }
export type ProjectSlugPage_ProjectSlugsQueryHookResult = ReturnType<typeof useProjectSlugPage_ProjectSlugsQuery>;
export type ProjectSlugPage_ProjectSlugsLazyQueryHookResult = ReturnType<typeof useProjectSlugPage_ProjectSlugsLazyQuery>;
export type ProjectSlugPage_ProjectSlugsQueryResult = Apollo.QueryResult<ProjectSlugPage_ProjectSlugsQuery, ProjectSlugPage_ProjectSlugsQueryVariables>;
export const ProjectSlugPage_ProjectIdDocument = gql`
    query ProjectSlugPage_ProjectId($slug: String!) {
  projects(where: {slug: $slug}) {
    id
    order
  }
}
    `;

/**
 * __useProjectSlugPage_ProjectIdQuery__
 *
 * To run a query within a React component, call `useProjectSlugPage_ProjectIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectSlugPage_ProjectIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectSlugPage_ProjectIdQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProjectSlugPage_ProjectIdQuery(baseOptions: Apollo.QueryHookOptions<ProjectSlugPage_ProjectIdQuery, ProjectSlugPage_ProjectIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectSlugPage_ProjectIdQuery, ProjectSlugPage_ProjectIdQueryVariables>(ProjectSlugPage_ProjectIdDocument, options);
      }
export function useProjectSlugPage_ProjectIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectSlugPage_ProjectIdQuery, ProjectSlugPage_ProjectIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectSlugPage_ProjectIdQuery, ProjectSlugPage_ProjectIdQueryVariables>(ProjectSlugPage_ProjectIdDocument, options);
        }
export type ProjectSlugPage_ProjectIdQueryHookResult = ReturnType<typeof useProjectSlugPage_ProjectIdQuery>;
export type ProjectSlugPage_ProjectIdLazyQueryHookResult = ReturnType<typeof useProjectSlugPage_ProjectIdLazyQuery>;
export type ProjectSlugPage_ProjectIdQueryResult = Apollo.QueryResult<ProjectSlugPage_ProjectIdQuery, ProjectSlugPage_ProjectIdQueryVariables>;
export const AboutPage_AwardsDocument = gql`
    query AboutPage_Awards {
  awards(sort: "startYear:desc") {
    title
    category
    prize
    startYear
    endYear
  }
}
    `;

/**
 * __useAboutPage_AwardsQuery__
 *
 * To run a query within a React component, call `useAboutPage_AwardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutPage_AwardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutPage_AwardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutPage_AwardsQuery(baseOptions?: Apollo.QueryHookOptions<AboutPage_AwardsQuery, AboutPage_AwardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutPage_AwardsQuery, AboutPage_AwardsQueryVariables>(AboutPage_AwardsDocument, options);
      }
export function useAboutPage_AwardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutPage_AwardsQuery, AboutPage_AwardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutPage_AwardsQuery, AboutPage_AwardsQueryVariables>(AboutPage_AwardsDocument, options);
        }
export type AboutPage_AwardsQueryHookResult = ReturnType<typeof useAboutPage_AwardsQuery>;
export type AboutPage_AwardsLazyQueryHookResult = ReturnType<typeof useAboutPage_AwardsLazyQuery>;
export type AboutPage_AwardsQueryResult = Apollo.QueryResult<AboutPage_AwardsQuery, AboutPage_AwardsQueryVariables>;
export const AboutPage_CareersDocument = gql`
    query AboutPage_Careers {
  careers(sort: "startYear:desc") {
    company
    position
    startYear
    endYear
  }
}
    `;

/**
 * __useAboutPage_CareersQuery__
 *
 * To run a query within a React component, call `useAboutPage_CareersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutPage_CareersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutPage_CareersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutPage_CareersQuery(baseOptions?: Apollo.QueryHookOptions<AboutPage_CareersQuery, AboutPage_CareersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutPage_CareersQuery, AboutPage_CareersQueryVariables>(AboutPage_CareersDocument, options);
      }
export function useAboutPage_CareersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutPage_CareersQuery, AboutPage_CareersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutPage_CareersQuery, AboutPage_CareersQueryVariables>(AboutPage_CareersDocument, options);
        }
export type AboutPage_CareersQueryHookResult = ReturnType<typeof useAboutPage_CareersQuery>;
export type AboutPage_CareersLazyQueryHookResult = ReturnType<typeof useAboutPage_CareersLazyQuery>;
export type AboutPage_CareersQueryResult = Apollo.QueryResult<AboutPage_CareersQuery, AboutPage_CareersQueryVariables>;
export const AboutPage_OutsourcingsDocument = gql`
    query AboutPage_Outsourcings {
  outsourcings(sort: "startYear:desc") {
    title
    description
    startYear
    endYear
  }
}
    `;

/**
 * __useAboutPage_OutsourcingsQuery__
 *
 * To run a query within a React component, call `useAboutPage_OutsourcingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutPage_OutsourcingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutPage_OutsourcingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutPage_OutsourcingsQuery(baseOptions?: Apollo.QueryHookOptions<AboutPage_OutsourcingsQuery, AboutPage_OutsourcingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutPage_OutsourcingsQuery, AboutPage_OutsourcingsQueryVariables>(AboutPage_OutsourcingsDocument, options);
      }
export function useAboutPage_OutsourcingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutPage_OutsourcingsQuery, AboutPage_OutsourcingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutPage_OutsourcingsQuery, AboutPage_OutsourcingsQueryVariables>(AboutPage_OutsourcingsDocument, options);
        }
export type AboutPage_OutsourcingsQueryHookResult = ReturnType<typeof useAboutPage_OutsourcingsQuery>;
export type AboutPage_OutsourcingsLazyQueryHookResult = ReturnType<typeof useAboutPage_OutsourcingsLazyQuery>;
export type AboutPage_OutsourcingsQueryResult = Apollo.QueryResult<AboutPage_OutsourcingsQuery, AboutPage_OutsourcingsQueryVariables>;
export const IndexPage_MainThumbnailDocument = gql`
    query IndexPage_MainThumbnail {
  mainThumbnail {
    projectThumbnail {
      slug
      title
      summary
      thumbnail {
        source {
          url
        }
        placeholder
        alt
      }
    }
  }
}
    `;

/**
 * __useIndexPage_MainThumbnailQuery__
 *
 * To run a query within a React component, call `useIndexPage_MainThumbnailQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexPage_MainThumbnailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexPage_MainThumbnailQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexPage_MainThumbnailQuery(baseOptions?: Apollo.QueryHookOptions<IndexPage_MainThumbnailQuery, IndexPage_MainThumbnailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IndexPage_MainThumbnailQuery, IndexPage_MainThumbnailQueryVariables>(IndexPage_MainThumbnailDocument, options);
      }
export function useIndexPage_MainThumbnailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndexPage_MainThumbnailQuery, IndexPage_MainThumbnailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IndexPage_MainThumbnailQuery, IndexPage_MainThumbnailQueryVariables>(IndexPage_MainThumbnailDocument, options);
        }
export type IndexPage_MainThumbnailQueryHookResult = ReturnType<typeof useIndexPage_MainThumbnailQuery>;
export type IndexPage_MainThumbnailLazyQueryHookResult = ReturnType<typeof useIndexPage_MainThumbnailLazyQuery>;
export type IndexPage_MainThumbnailQueryResult = Apollo.QueryResult<IndexPage_MainThumbnailQuery, IndexPage_MainThumbnailQueryVariables>;
export const ProjectPage_ProjectsDocument = gql`
    query ProjectPage_Projects {
  projects(sort: "order:desc") {
    ...Projects_Thumbnails
  }
}
    ${Projects_ThumbnailsFragmentDoc}`;

/**
 * __useProjectPage_ProjectsQuery__
 *
 * To run a query within a React component, call `useProjectPage_ProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectPage_ProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectPage_ProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectPage_ProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectPage_ProjectsQuery, ProjectPage_ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectPage_ProjectsQuery, ProjectPage_ProjectsQueryVariables>(ProjectPage_ProjectsDocument, options);
      }
export function useProjectPage_ProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectPage_ProjectsQuery, ProjectPage_ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectPage_ProjectsQuery, ProjectPage_ProjectsQueryVariables>(ProjectPage_ProjectsDocument, options);
        }
export type ProjectPage_ProjectsQueryHookResult = ReturnType<typeof useProjectPage_ProjectsQuery>;
export type ProjectPage_ProjectsLazyQueryHookResult = ReturnType<typeof useProjectPage_ProjectsLazyQuery>;
export type ProjectPage_ProjectsQueryResult = Apollo.QueryResult<ProjectPage_ProjectsQuery, ProjectPage_ProjectsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Morph": [
      "Award",
      "AwardAggregator",
      "AwardAggregatorAvg",
      "AwardAggregatorMax",
      "AwardAggregatorMin",
      "AwardAggregatorSum",
      "AwardConnection",
      "AwardConnectionCategory",
      "AwardConnectionCreated_at",
      "AwardConnectionEndYear",
      "AwardConnectionId",
      "AwardConnectionPrize",
      "AwardConnectionPublished_at",
      "AwardConnectionStartYear",
      "AwardConnectionTitle",
      "AwardConnectionUpdated_at",
      "AwardGroupBy",
      "Career",
      "CareerAggregator",
      "CareerAggregatorAvg",
      "CareerAggregatorMax",
      "CareerAggregatorMin",
      "CareerAggregatorSum",
      "CareerConnection",
      "CareerConnectionCompany",
      "CareerConnectionCreated_at",
      "CareerConnectionEndYear",
      "CareerConnectionId",
      "CareerConnectionPosition",
      "CareerConnectionPublished_at",
      "CareerConnectionStartYear",
      "CareerConnectionUpdated_at",
      "CareerGroupBy",
      "ComponentCommonImage",
      "ComponentMainProjectThumbnail",
      "ComponentProjectClient",
      "ComponentProjectExplanation",
      "ComponentProjectTeam",
      "I18NLocale",
      "MainThumbnails",
      "Outsourcing",
      "OutsourcingAggregator",
      "OutsourcingAggregatorAvg",
      "OutsourcingAggregatorMax",
      "OutsourcingAggregatorMin",
      "OutsourcingAggregatorSum",
      "OutsourcingConnection",
      "OutsourcingConnectionCreated_at",
      "OutsourcingConnectionDescription",
      "OutsourcingConnectionEndYear",
      "OutsourcingConnectionId",
      "OutsourcingConnectionPublished_at",
      "OutsourcingConnectionStartYear",
      "OutsourcingConnectionTitle",
      "OutsourcingConnectionUpdated_at",
      "OutsourcingGroupBy",
      "Project",
      "ProjectAggregator",
      "ProjectAggregatorAvg",
      "ProjectAggregatorMax",
      "ProjectAggregatorMin",
      "ProjectAggregatorSum",
      "ProjectConnection",
      "ProjectConnectionBackgroundColor",
      "ProjectConnectionColor",
      "ProjectConnectionCreated_at",
      "ProjectConnectionDescription",
      "ProjectConnectionEndDate",
      "ProjectConnectionFixedTitleColor",
      "ProjectConnectionId",
      "ProjectConnectionLink",
      "ProjectConnectionMainCoverImage",
      "ProjectConnectionOrder",
      "ProjectConnectionPublished_at",
      "ProjectConnectionScope",
      "ProjectConnectionSlug",
      "ProjectConnectionStartDate",
      "ProjectConnectionStickyTitleColor",
      "ProjectConnectionSummary",
      "ProjectConnectionThumbnail",
      "ProjectConnectionTitle",
      "ProjectConnectionUpdated_at",
      "ProjectConnectionWork",
      "ProjectDetail",
      "ProjectDetailAggregator",
      "ProjectDetailConnection",
      "ProjectDetailConnectionBackgroundColor",
      "ProjectDetailConnectionColor",
      "ProjectDetailConnectionCreated_at",
      "ProjectDetailConnectionId",
      "ProjectDetailConnectionProject",
      "ProjectDetailConnectionPublished_at",
      "ProjectDetailConnectionUpdated_at",
      "ProjectDetailGroupBy",
      "ProjectGroupBy",
      "UploadFile",
      "UploadFileAggregator",
      "UploadFileAggregatorAvg",
      "UploadFileAggregatorMax",
      "UploadFileAggregatorMin",
      "UploadFileAggregatorSum",
      "UploadFileConnection",
      "UploadFileConnectionAlternativeText",
      "UploadFileConnectionCaption",
      "UploadFileConnectionCreated_at",
      "UploadFileConnectionExt",
      "UploadFileConnectionFormats",
      "UploadFileConnectionHash",
      "UploadFileConnectionHeight",
      "UploadFileConnectionId",
      "UploadFileConnectionMime",
      "UploadFileConnectionName",
      "UploadFileConnectionPreviewUrl",
      "UploadFileConnectionProvider",
      "UploadFileConnectionProvider_metadata",
      "UploadFileConnectionSize",
      "UploadFileConnectionUpdated_at",
      "UploadFileConnectionUrl",
      "UploadFileConnectionWidth",
      "UploadFileGroupBy",
      "UserPermissionsPasswordPayload",
      "UsersPermissionsLoginPayload",
      "UsersPermissionsMe",
      "UsersPermissionsMeRole",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsRoleAggregator",
      "UsersPermissionsRoleConnection",
      "UsersPermissionsRoleConnectionDescription",
      "UsersPermissionsRoleConnectionId",
      "UsersPermissionsRoleConnectionName",
      "UsersPermissionsRoleConnectionType",
      "UsersPermissionsRoleGroupBy",
      "UsersPermissionsUser",
      "UsersPermissionsUserAggregator",
      "UsersPermissionsUserConnection",
      "UsersPermissionsUserConnectionBlocked",
      "UsersPermissionsUserConnectionConfirmed",
      "UsersPermissionsUserConnectionCreated_at",
      "UsersPermissionsUserConnectionEmail",
      "UsersPermissionsUserConnectionId",
      "UsersPermissionsUserConnectionProvider",
      "UsersPermissionsUserConnectionRole",
      "UsersPermissionsUserConnectionUpdated_at",
      "UsersPermissionsUserConnectionUsername",
      "UsersPermissionsUserGroupBy",
      "Work",
      "WorkAggregator",
      "WorkConnection",
      "WorkConnectionCreated_at",
      "WorkConnectionId",
      "WorkConnectionPublished_at",
      "WorkConnectionType",
      "WorkConnectionUpdated_at",
      "WorkConnectionValue",
      "WorkGroupBy",
      "createAwardPayload",
      "createCareerPayload",
      "createOutsourcingPayload",
      "createProjectDetailPayload",
      "createProjectPayload",
      "createRolePayload",
      "createUserPayload",
      "createWorkPayload",
      "deleteAwardPayload",
      "deleteCareerPayload",
      "deleteFilePayload",
      "deleteMainThumbnailPayload",
      "deleteOutsourcingPayload",
      "deleteProjectDetailPayload",
      "deleteProjectPayload",
      "deleteRolePayload",
      "deleteUserPayload",
      "deleteWorkPayload",
      "updateAwardPayload",
      "updateCareerPayload",
      "updateMainThumbnailPayload",
      "updateOutsourcingPayload",
      "updateProjectDetailPayload",
      "updateProjectPayload",
      "updateRolePayload",
      "updateUserPayload",
      "updateWorkPayload"
    ],
    "ProjectDetailContentDynamicZone": [
      "ComponentCommonImage",
      "ComponentProjectExplanation"
    ]
  }
};
      export default result;
    