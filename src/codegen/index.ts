import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};










export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  width?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  publicURL?: Maybe<Scalars['String']>;
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum GatsbyImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImgixFixed = {
  __typename?: 'ImgixFixed';
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type ImgixFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ImgixFluid = {
  __typename?: 'ImgixFluid';
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  aspectRatio: Scalars['Float'];
};

export type ImgixFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ImgixParamsInput = {
  ar?: Maybe<Scalars['String']>;
  auto?: Maybe<Scalars['String']>;
  bg?: Maybe<Scalars['String']>;
  blendAlign?: Maybe<Scalars['String']>;
  blendalign?: Maybe<Scalars['String']>;
  ba?: Maybe<Scalars['String']>;
  blendAlpha?: Maybe<Scalars['Int']>;
  blendalpha?: Maybe<Scalars['Int']>;
  balph?: Maybe<Scalars['Int']>;
  blendColor?: Maybe<Scalars['String']>;
  blendcolor?: Maybe<Scalars['String']>;
  blendClr?: Maybe<Scalars['String']>;
  blendclr?: Maybe<Scalars['String']>;
  blendCrop?: Maybe<Scalars['String']>;
  blendcrop?: Maybe<Scalars['String']>;
  bc?: Maybe<Scalars['String']>;
  blendFit?: Maybe<Scalars['String']>;
  blendfit?: Maybe<Scalars['String']>;
  bf?: Maybe<Scalars['String']>;
  blendH?: Maybe<Scalars['Float']>;
  blendh?: Maybe<Scalars['Float']>;
  bh?: Maybe<Scalars['Float']>;
  blendMode?: Maybe<Scalars['String']>;
  blendmode?: Maybe<Scalars['String']>;
  bm?: Maybe<Scalars['String']>;
  blendPad?: Maybe<Scalars['Int']>;
  blendpad?: Maybe<Scalars['Int']>;
  bp?: Maybe<Scalars['Int']>;
  blendSize?: Maybe<Scalars['String']>;
  blendsize?: Maybe<Scalars['String']>;
  bs?: Maybe<Scalars['String']>;
  blendW?: Maybe<Scalars['Float']>;
  blendw?: Maybe<Scalars['Float']>;
  bw?: Maybe<Scalars['Float']>;
  blendX?: Maybe<Scalars['Int']>;
  blendx?: Maybe<Scalars['Int']>;
  bx?: Maybe<Scalars['Int']>;
  blendY?: Maybe<Scalars['Int']>;
  blendy?: Maybe<Scalars['Int']>;
  by?: Maybe<Scalars['Int']>;
  blend?: Maybe<Scalars['String']>;
  b?: Maybe<Scalars['String']>;
  blur?: Maybe<Scalars['Int']>;
  borderBottom?: Maybe<Scalars['Int']>;
  borderLeft?: Maybe<Scalars['Int']>;
  borderRadiusInner?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['String']>;
  borderRight?: Maybe<Scalars['Int']>;
  borderTop?: Maybe<Scalars['Int']>;
  border?: Maybe<Scalars['String']>;
  bri?: Maybe<Scalars['Int']>;
  ch?: Maybe<Scalars['String']>;
  chromasub?: Maybe<Scalars['Int']>;
  colorquant?: Maybe<Scalars['Int']>;
  colors?: Maybe<Scalars['Int']>;
  con?: Maybe<Scalars['Int']>;
  cornerRadius?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  cs?: Maybe<Scalars['String']>;
  dl?: Maybe<Scalars['String']>;
  dpi?: Maybe<Scalars['Int']>;
  dpr?: Maybe<Scalars['Float']>;
  duotoneAlpha?: Maybe<Scalars['Int']>;
  duotone?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  expires?: Maybe<Scalars['String']>;
  faceindex?: Maybe<Scalars['Int']>;
  facepad?: Maybe<Scalars['Float']>;
  faces?: Maybe<Scalars['Int']>;
  fillColor?: Maybe<Scalars['String']>;
  fillcolor?: Maybe<Scalars['String']>;
  fill?: Maybe<Scalars['String']>;
  fit?: Maybe<Scalars['String']>;
  f?: Maybe<Scalars['String']>;
  flip?: Maybe<Scalars['String']>;
  fm?: Maybe<Scalars['String']>;
  fpDebug?: Maybe<Scalars['Boolean']>;
  fpX?: Maybe<Scalars['Float']>;
  fpY?: Maybe<Scalars['Float']>;
  fpZ?: Maybe<Scalars['Float']>;
  gam?: Maybe<Scalars['Int']>;
  gridColors?: Maybe<Scalars['String']>;
  gridSize?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  high?: Maybe<Scalars['Int']>;
  htn?: Maybe<Scalars['Int']>;
  hue?: Maybe<Scalars['Int']>;
  invert?: Maybe<Scalars['Boolean']>;
  inv?: Maybe<Scalars['Boolean']>;
  lossless?: Maybe<Scalars['Boolean']>;
  markAlign?: Maybe<Scalars['String']>;
  ma?: Maybe<Scalars['String']>;
  markalign?: Maybe<Scalars['String']>;
  markAlpha?: Maybe<Scalars['Int']>;
  markalpha?: Maybe<Scalars['Int']>;
  malph?: Maybe<Scalars['Int']>;
  markBase?: Maybe<Scalars['String']>;
  mb?: Maybe<Scalars['String']>;
  markbase?: Maybe<Scalars['String']>;
  markFit?: Maybe<Scalars['String']>;
  mf?: Maybe<Scalars['String']>;
  markfit?: Maybe<Scalars['String']>;
  markH?: Maybe<Scalars['Float']>;
  mh?: Maybe<Scalars['Float']>;
  markh?: Maybe<Scalars['Float']>;
  markPad?: Maybe<Scalars['Int']>;
  mp?: Maybe<Scalars['Int']>;
  markpad?: Maybe<Scalars['Int']>;
  markRot?: Maybe<Scalars['Float']>;
  markScale?: Maybe<Scalars['Int']>;
  ms?: Maybe<Scalars['Int']>;
  markscale?: Maybe<Scalars['Int']>;
  markTile?: Maybe<Scalars['String']>;
  mtile?: Maybe<Scalars['String']>;
  marktile?: Maybe<Scalars['String']>;
  markW?: Maybe<Scalars['Float']>;
  mw?: Maybe<Scalars['Float']>;
  markw?: Maybe<Scalars['Float']>;
  markX?: Maybe<Scalars['Int']>;
  mx?: Maybe<Scalars['Int']>;
  markx?: Maybe<Scalars['Int']>;
  markY?: Maybe<Scalars['Int']>;
  my?: Maybe<Scalars['Int']>;
  marky?: Maybe<Scalars['Int']>;
  mark?: Maybe<Scalars['String']>;
  m?: Maybe<Scalars['String']>;
  maskBg?: Maybe<Scalars['String']>;
  maskbg?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['String']>;
  maxH?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxW?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  minH?: Maybe<Scalars['Int']>;
  minHeight?: Maybe<Scalars['Int']>;
  minW?: Maybe<Scalars['Int']>;
  minWidth?: Maybe<Scalars['Int']>;
  monochrome?: Maybe<Scalars['String']>;
  mono?: Maybe<Scalars['String']>;
  nr?: Maybe<Scalars['Int']>;
  nrs?: Maybe<Scalars['Int']>;
  orient?: Maybe<Scalars['Int']>;
  or?: Maybe<Scalars['Int']>;
  padBottom?: Maybe<Scalars['Int']>;
  padLeft?: Maybe<Scalars['Int']>;
  padRight?: Maybe<Scalars['Int']>;
  padTop?: Maybe<Scalars['Int']>;
  pad?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  palette?: Maybe<Scalars['String']>;
  pdfAnnotation?: Maybe<Scalars['Boolean']>;
  annotation?: Maybe<Scalars['Boolean']>;
  prefix?: Maybe<Scalars['String']>;
  px?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['Int']>;
  rect?: Maybe<Scalars['String']>;
  rot?: Maybe<Scalars['Float']>;
  sat?: Maybe<Scalars['Int']>;
  sepia?: Maybe<Scalars['Int']>;
  shad?: Maybe<Scalars['Float']>;
  sharp?: Maybe<Scalars['Float']>;
  transparency?: Maybe<Scalars['String']>;
  trimColor?: Maybe<Scalars['String']>;
  trimcolor?: Maybe<Scalars['String']>;
  trimMd?: Maybe<Scalars['Float']>;
  trimmd?: Maybe<Scalars['Float']>;
  trimPad?: Maybe<Scalars['Int']>;
  trimpad?: Maybe<Scalars['Int']>;
  trimSd?: Maybe<Scalars['Float']>;
  trimsd?: Maybe<Scalars['Float']>;
  trimTol?: Maybe<Scalars['Float']>;
  trimtol?: Maybe<Scalars['Float']>;
  trim?: Maybe<Scalars['String']>;
  txtAlign?: Maybe<Scalars['String']>;
  txtalign?: Maybe<Scalars['String']>;
  ta?: Maybe<Scalars['String']>;
  txtClip?: Maybe<Scalars['String']>;
  txtclip?: Maybe<Scalars['String']>;
  tcl?: Maybe<Scalars['String']>;
  txtColor?: Maybe<Scalars['String']>;
  txtcolor?: Maybe<Scalars['String']>;
  txtClr?: Maybe<Scalars['String']>;
  txtclr?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  txtFit?: Maybe<Scalars['String']>;
  txtfit?: Maybe<Scalars['String']>;
  txtFont?: Maybe<Scalars['String']>;
  tf?: Maybe<Scalars['String']>;
  txtfont?: Maybe<Scalars['String']>;
  txtLead?: Maybe<Scalars['Int']>;
  txtlead?: Maybe<Scalars['Int']>;
  txtLig?: Maybe<Scalars['Int']>;
  txtlig?: Maybe<Scalars['Int']>;
  txtLineColor?: Maybe<Scalars['String']>;
  txtlinecolor?: Maybe<Scalars['String']>;
  txtLineClr?: Maybe<Scalars['String']>;
  txtlineclr?: Maybe<Scalars['String']>;
  txtLine?: Maybe<Scalars['Int']>;
  txtline?: Maybe<Scalars['Int']>;
  tl?: Maybe<Scalars['Int']>;
  txtPad?: Maybe<Scalars['Int']>;
  txtpad?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  txtShad?: Maybe<Scalars['Float']>;
  txtshad?: Maybe<Scalars['Float']>;
  tsh?: Maybe<Scalars['Float']>;
  txtSize?: Maybe<Scalars['Int']>;
  tsz?: Maybe<Scalars['Int']>;
  txtsize?: Maybe<Scalars['Int']>;
  txtTrack?: Maybe<Scalars['Int']>;
  txttrack?: Maybe<Scalars['Int']>;
  tt?: Maybe<Scalars['Int']>;
  txtWidth?: Maybe<Scalars['Int']>;
  txtwidth?: Maybe<Scalars['Int']>;
  txt?: Maybe<Scalars['String']>;
  t?: Maybe<Scalars['String']>;
  usm?: Maybe<Scalars['Int']>;
  usmrad?: Maybe<Scalars['Float']>;
  vib?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export enum ImgixPlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type PrismicAllDocumentTypes = PrismicBlogCategory | PrismicBlogPost;

export type PrismicAlternateLanguageType = {
  __typename?: 'PrismicAlternateLanguageType';
  id?: Maybe<Scalars['ID']>;
  uid?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  document?: Maybe<PrismicAllDocumentTypes>;
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicAlternateLanguageTypeFilterInput = {
  id?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicAlternateLanguageTypeFilterListInput = {
  elemMatch?: Maybe<PrismicAlternateLanguageTypeFilterInput>;
};

export type PrismicBlogCategory = Node & {
  __typename?: 'PrismicBlogCategory';
  uid: Scalars['String'];
  data?: Maybe<PrismicBlogCategoryDataType>;
  dataRaw: Scalars['JSON'];
  prismicId: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicBlogCategoryFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicBlogCategoryLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicBlogCategoryConnection = {
  __typename?: 'PrismicBlogCategoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicBlogCategoryEdge>;
  nodes: Array<PrismicBlogCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicBlogCategoryGroupConnection>;
};


export type PrismicBlogCategoryConnectionDistinctArgs = {
  field: PrismicBlogCategoryFieldsEnum;
};


export type PrismicBlogCategoryConnectionMaxArgs = {
  field: PrismicBlogCategoryFieldsEnum;
};


export type PrismicBlogCategoryConnectionMinArgs = {
  field: PrismicBlogCategoryFieldsEnum;
};


export type PrismicBlogCategoryConnectionSumArgs = {
  field: PrismicBlogCategoryFieldsEnum;
};


export type PrismicBlogCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicBlogCategoryFieldsEnum;
};

export type PrismicBlogCategoryDataType = {
  __typename?: 'PrismicBlogCategoryDataType';
  category_name?: Maybe<Scalars['String']>;
};

export type PrismicBlogCategoryDataTypeFilterInput = {
  category_name?: Maybe<StringQueryOperatorInput>;
};

export type PrismicBlogCategoryEdge = {
  __typename?: 'PrismicBlogCategoryEdge';
  next?: Maybe<PrismicBlogCategory>;
  node: PrismicBlogCategory;
  previous?: Maybe<PrismicBlogCategory>;
};

export enum PrismicBlogCategoryFieldsEnum {
  Uid = 'uid',
  DataCategoryName = 'data___category_name',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicBlogCategoryFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicBlogCategoryDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicBlogCategoryGroupConnection = {
  __typename?: 'PrismicBlogCategoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicBlogCategoryEdge>;
  nodes: Array<PrismicBlogCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicBlogCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type PrismicBlogCategoryGroupConnectionDistinctArgs = {
  field: PrismicBlogCategoryFieldsEnum;
};


export type PrismicBlogCategoryGroupConnectionMaxArgs = {
  field: PrismicBlogCategoryFieldsEnum;
};


export type PrismicBlogCategoryGroupConnectionMinArgs = {
  field: PrismicBlogCategoryFieldsEnum;
};


export type PrismicBlogCategoryGroupConnectionSumArgs = {
  field: PrismicBlogCategoryFieldsEnum;
};


export type PrismicBlogCategoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicBlogCategoryFieldsEnum;
};

export type PrismicBlogCategorySortInput = {
  fields?: Maybe<Array<Maybe<PrismicBlogCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicBlogPost = Node & {
  __typename?: 'PrismicBlogPost';
  uid: Scalars['String'];
  data?: Maybe<PrismicBlogPostDataType>;
  dataRaw: Scalars['JSON'];
  prismicId: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicBlogPostFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicBlogPostLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicBlogPostConnection = {
  __typename?: 'PrismicBlogPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicBlogPostEdge>;
  nodes: Array<PrismicBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicBlogPostGroupConnection>;
};


export type PrismicBlogPostConnectionDistinctArgs = {
  field: PrismicBlogPostFieldsEnum;
};


export type PrismicBlogPostConnectionMaxArgs = {
  field: PrismicBlogPostFieldsEnum;
};


export type PrismicBlogPostConnectionMinArgs = {
  field: PrismicBlogPostFieldsEnum;
};


export type PrismicBlogPostConnectionSumArgs = {
  field: PrismicBlogPostFieldsEnum;
};


export type PrismicBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostDataFeaturedImageImageType = {
  __typename?: 'PrismicBlogPostDataFeaturedImageImageType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<ImgixFixed>;
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
};


export type PrismicBlogPostDataFeaturedImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


export type PrismicBlogPostDataFeaturedImageImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


export type PrismicBlogPostDataFeaturedImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


export type PrismicBlogPostDataFeaturedImageImageTypeGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
  placeholder?: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

export type PrismicBlogPostDataFeaturedImageImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ImgixFixedFilterInput>;
  fluid?: Maybe<ImgixFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type PrismicBlogPostDataType = {
  __typename?: 'PrismicBlogPostDataType';
  blog_category?: Maybe<PrismicLinkType>;
  blog_title?: Maybe<PrismicStructuredTextType>;
  date?: Maybe<Scalars['Date']>;
  featured_image?: Maybe<PrismicBlogPostDataFeaturedImageImageType>;
  post_content?: Maybe<PrismicStructuredTextType>;
};


export type PrismicBlogPostDataTypeDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicBlogPostDataTypeFilterInput = {
  blog_category?: Maybe<PrismicLinkTypeFilterInput>;
  blog_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  featured_image?: Maybe<PrismicBlogPostDataFeaturedImageImageTypeFilterInput>;
  post_content?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicBlogPostEdge = {
  __typename?: 'PrismicBlogPostEdge';
  next?: Maybe<PrismicBlogPost>;
  node: PrismicBlogPost;
  previous?: Maybe<PrismicBlogPost>;
};

export enum PrismicBlogPostFieldsEnum {
  Uid = 'uid',
  DataBlogCategoryLinkType = 'data___blog_category___link_type',
  DataBlogCategoryIsBroken = 'data___blog_category___isBroken',
  DataBlogCategoryUrl = 'data___blog_category___url',
  DataBlogCategoryTarget = 'data___blog_category___target',
  DataBlogCategorySize = 'data___blog_category___size',
  DataBlogCategoryId = 'data___blog_category___id',
  DataBlogCategoryType = 'data___blog_category___type',
  DataBlogCategoryTags = 'data___blog_category___tags',
  DataBlogCategoryLang = 'data___blog_category___lang',
  DataBlogCategorySlug = 'data___blog_category___slug',
  DataBlogCategoryUid = 'data___blog_category___uid',
  DataBlogCategoryLocalFileSourceInstanceName = 'data___blog_category___localFile___sourceInstanceName',
  DataBlogCategoryLocalFileAbsolutePath = 'data___blog_category___localFile___absolutePath',
  DataBlogCategoryLocalFileRelativePath = 'data___blog_category___localFile___relativePath',
  DataBlogCategoryLocalFileExtension = 'data___blog_category___localFile___extension',
  DataBlogCategoryLocalFileSize = 'data___blog_category___localFile___size',
  DataBlogCategoryLocalFilePrettySize = 'data___blog_category___localFile___prettySize',
  DataBlogCategoryLocalFileModifiedTime = 'data___blog_category___localFile___modifiedTime',
  DataBlogCategoryLocalFileAccessTime = 'data___blog_category___localFile___accessTime',
  DataBlogCategoryLocalFileChangeTime = 'data___blog_category___localFile___changeTime',
  DataBlogCategoryLocalFileBirthTime = 'data___blog_category___localFile___birthTime',
  DataBlogCategoryLocalFileRoot = 'data___blog_category___localFile___root',
  DataBlogCategoryLocalFileDir = 'data___blog_category___localFile___dir',
  DataBlogCategoryLocalFileBase = 'data___blog_category___localFile___base',
  DataBlogCategoryLocalFileExt = 'data___blog_category___localFile___ext',
  DataBlogCategoryLocalFileName = 'data___blog_category___localFile___name',
  DataBlogCategoryLocalFileRelativeDirectory = 'data___blog_category___localFile___relativeDirectory',
  DataBlogCategoryLocalFileDev = 'data___blog_category___localFile___dev',
  DataBlogCategoryLocalFileMode = 'data___blog_category___localFile___mode',
  DataBlogCategoryLocalFileNlink = 'data___blog_category___localFile___nlink',
  DataBlogCategoryLocalFileUid = 'data___blog_category___localFile___uid',
  DataBlogCategoryLocalFileGid = 'data___blog_category___localFile___gid',
  DataBlogCategoryLocalFileRdev = 'data___blog_category___localFile___rdev',
  DataBlogCategoryLocalFileIno = 'data___blog_category___localFile___ino',
  DataBlogCategoryLocalFileAtimeMs = 'data___blog_category___localFile___atimeMs',
  DataBlogCategoryLocalFileMtimeMs = 'data___blog_category___localFile___mtimeMs',
  DataBlogCategoryLocalFileCtimeMs = 'data___blog_category___localFile___ctimeMs',
  DataBlogCategoryLocalFileAtime = 'data___blog_category___localFile___atime',
  DataBlogCategoryLocalFileMtime = 'data___blog_category___localFile___mtime',
  DataBlogCategoryLocalFileCtime = 'data___blog_category___localFile___ctime',
  DataBlogCategoryLocalFileBirthtime = 'data___blog_category___localFile___birthtime',
  DataBlogCategoryLocalFileBirthtimeMs = 'data___blog_category___localFile___birthtimeMs',
  DataBlogCategoryLocalFileBlksize = 'data___blog_category___localFile___blksize',
  DataBlogCategoryLocalFileBlocks = 'data___blog_category___localFile___blocks',
  DataBlogCategoryLocalFilePublicUrl = 'data___blog_category___localFile___publicURL',
  DataBlogCategoryLocalFileChildrenImageSharp = 'data___blog_category___localFile___childrenImageSharp',
  DataBlogCategoryLocalFileId = 'data___blog_category___localFile___id',
  DataBlogCategoryLocalFileChildren = 'data___blog_category___localFile___children',
  DataBlogCategoryRaw = 'data___blog_category___raw',
  DataBlogTitleText = 'data___blog_title___text',
  DataBlogTitleHtml = 'data___blog_title___html',
  DataBlogTitleRaw = 'data___blog_title___raw',
  DataDate = 'data___date',
  DataFeaturedImageAlt = 'data___featured_image___alt',
  DataFeaturedImageCopyright = 'data___featured_image___copyright',
  DataFeaturedImageDimensionsWidth = 'data___featured_image___dimensions___width',
  DataFeaturedImageDimensionsHeight = 'data___featured_image___dimensions___height',
  DataFeaturedImageUrl = 'data___featured_image___url',
  DataFeaturedImageFixedBase64 = 'data___featured_image___fixed___base64',
  DataFeaturedImageFixedSrc = 'data___featured_image___fixed___src',
  DataFeaturedImageFixedSrcSet = 'data___featured_image___fixed___srcSet',
  DataFeaturedImageFixedSrcWebp = 'data___featured_image___fixed___srcWebp',
  DataFeaturedImageFixedSrcSetWebp = 'data___featured_image___fixed___srcSetWebp',
  DataFeaturedImageFixedSizes = 'data___featured_image___fixed___sizes',
  DataFeaturedImageFixedWidth = 'data___featured_image___fixed___width',
  DataFeaturedImageFixedHeight = 'data___featured_image___fixed___height',
  DataFeaturedImageFluidBase64 = 'data___featured_image___fluid___base64',
  DataFeaturedImageFluidSrc = 'data___featured_image___fluid___src',
  DataFeaturedImageFluidSrcSet = 'data___featured_image___fluid___srcSet',
  DataFeaturedImageFluidSrcWebp = 'data___featured_image___fluid___srcWebp',
  DataFeaturedImageFluidSrcSetWebp = 'data___featured_image___fluid___srcSetWebp',
  DataFeaturedImageFluidSizes = 'data___featured_image___fluid___sizes',
  DataFeaturedImageFluidAspectRatio = 'data___featured_image___fluid___aspectRatio',
  DataFeaturedImageGatsbyImageData = 'data___featured_image___gatsbyImageData',
  DataFeaturedImageLocalFileSourceInstanceName = 'data___featured_image___localFile___sourceInstanceName',
  DataFeaturedImageLocalFileAbsolutePath = 'data___featured_image___localFile___absolutePath',
  DataFeaturedImageLocalFileRelativePath = 'data___featured_image___localFile___relativePath',
  DataFeaturedImageLocalFileExtension = 'data___featured_image___localFile___extension',
  DataFeaturedImageLocalFileSize = 'data___featured_image___localFile___size',
  DataFeaturedImageLocalFilePrettySize = 'data___featured_image___localFile___prettySize',
  DataFeaturedImageLocalFileModifiedTime = 'data___featured_image___localFile___modifiedTime',
  DataFeaturedImageLocalFileAccessTime = 'data___featured_image___localFile___accessTime',
  DataFeaturedImageLocalFileChangeTime = 'data___featured_image___localFile___changeTime',
  DataFeaturedImageLocalFileBirthTime = 'data___featured_image___localFile___birthTime',
  DataFeaturedImageLocalFileRoot = 'data___featured_image___localFile___root',
  DataFeaturedImageLocalFileDir = 'data___featured_image___localFile___dir',
  DataFeaturedImageLocalFileBase = 'data___featured_image___localFile___base',
  DataFeaturedImageLocalFileExt = 'data___featured_image___localFile___ext',
  DataFeaturedImageLocalFileName = 'data___featured_image___localFile___name',
  DataFeaturedImageLocalFileRelativeDirectory = 'data___featured_image___localFile___relativeDirectory',
  DataFeaturedImageLocalFileDev = 'data___featured_image___localFile___dev',
  DataFeaturedImageLocalFileMode = 'data___featured_image___localFile___mode',
  DataFeaturedImageLocalFileNlink = 'data___featured_image___localFile___nlink',
  DataFeaturedImageLocalFileUid = 'data___featured_image___localFile___uid',
  DataFeaturedImageLocalFileGid = 'data___featured_image___localFile___gid',
  DataFeaturedImageLocalFileRdev = 'data___featured_image___localFile___rdev',
  DataFeaturedImageLocalFileIno = 'data___featured_image___localFile___ino',
  DataFeaturedImageLocalFileAtimeMs = 'data___featured_image___localFile___atimeMs',
  DataFeaturedImageLocalFileMtimeMs = 'data___featured_image___localFile___mtimeMs',
  DataFeaturedImageLocalFileCtimeMs = 'data___featured_image___localFile___ctimeMs',
  DataFeaturedImageLocalFileAtime = 'data___featured_image___localFile___atime',
  DataFeaturedImageLocalFileMtime = 'data___featured_image___localFile___mtime',
  DataFeaturedImageLocalFileCtime = 'data___featured_image___localFile___ctime',
  DataFeaturedImageLocalFileBirthtime = 'data___featured_image___localFile___birthtime',
  DataFeaturedImageLocalFileBirthtimeMs = 'data___featured_image___localFile___birthtimeMs',
  DataFeaturedImageLocalFileBlksize = 'data___featured_image___localFile___blksize',
  DataFeaturedImageLocalFileBlocks = 'data___featured_image___localFile___blocks',
  DataFeaturedImageLocalFilePublicUrl = 'data___featured_image___localFile___publicURL',
  DataFeaturedImageLocalFileChildrenImageSharp = 'data___featured_image___localFile___childrenImageSharp',
  DataFeaturedImageLocalFileId = 'data___featured_image___localFile___id',
  DataFeaturedImageLocalFileChildren = 'data___featured_image___localFile___children',
  DataPostContentText = 'data___post_content___text',
  DataPostContentHtml = 'data___post_content___html',
  DataPostContentRaw = 'data___post_content___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicBlogPostFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicBlogPostDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicBlogPostGroupConnection = {
  __typename?: 'PrismicBlogPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicBlogPostEdge>;
  nodes: Array<PrismicBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicBlogPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type PrismicBlogPostGroupConnectionDistinctArgs = {
  field: PrismicBlogPostFieldsEnum;
};


export type PrismicBlogPostGroupConnectionMaxArgs = {
  field: PrismicBlogPostFieldsEnum;
};


export type PrismicBlogPostGroupConnectionMinArgs = {
  field: PrismicBlogPostFieldsEnum;
};


export type PrismicBlogPostGroupConnectionSumArgs = {
  field: PrismicBlogPostFieldsEnum;
};


export type PrismicBlogPostGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<PrismicBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicEmbedType = Node & {
  __typename?: 'PrismicEmbedType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicEmbedTypeConnection = {
  __typename?: 'PrismicEmbedTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicEmbedTypeEdge>;
  nodes: Array<PrismicEmbedType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicEmbedTypeGroupConnection>;
};


export type PrismicEmbedTypeConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


export type PrismicEmbedTypeConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


export type PrismicEmbedTypeConnectionMinArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


export type PrismicEmbedTypeConnectionSumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


export type PrismicEmbedTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeEdge = {
  __typename?: 'PrismicEmbedTypeEdge';
  next?: Maybe<PrismicEmbedType>;
  node: PrismicEmbedType;
  previous?: Maybe<PrismicEmbedType>;
};

export enum PrismicEmbedTypeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicEmbedTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicEmbedTypeGroupConnection = {
  __typename?: 'PrismicEmbedTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicEmbedTypeEdge>;
  nodes: Array<PrismicEmbedType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicEmbedTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type PrismicEmbedTypeGroupConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


export type PrismicEmbedTypeGroupConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


export type PrismicEmbedTypeGroupConnectionMinArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


export type PrismicEmbedTypeGroupConnectionSumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


export type PrismicEmbedTypeGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeSortInput = {
  fields?: Maybe<Array<Maybe<PrismicEmbedTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicGeoPointType = {
  __typename?: 'PrismicGeoPointType';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PrismicImageDimensionsType = {
  __typename?: 'PrismicImageDimensionsType';
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageThumbnailType = {
  __typename?: 'PrismicImageThumbnailType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<ImgixFixed>;
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
};


export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


export type PrismicImageThumbnailTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
  placeholder?: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

export type PrismicLinkType = {
  __typename?: 'PrismicLinkType';
  link_type?: Maybe<PrismicLinkTypeEnum>;
  isBroken?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  document?: Maybe<PrismicAllDocumentTypes>;
  localFile?: Maybe<File>;
  raw?: Maybe<Scalars['JSON']>;
};

export enum PrismicLinkTypeEnum {
  Any = 'Any',
  Document = 'Document',
  Media = 'Media',
  Web = 'Web'
}

export type PrismicLinkTypeEnumQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypeEnum>;
  ne?: Maybe<PrismicLinkTypeEnum>;
  in?: Maybe<Array<Maybe<PrismicLinkTypeEnum>>>;
  nin?: Maybe<Array<Maybe<PrismicLinkTypeEnum>>>;
};

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypeEnumQueryOperatorInput>;
  isBroken?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicSliceType = {
  id: Scalars['ID'];
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
};

export type PrismicStructuredTextType = {
  __typename?: 'PrismicStructuredTextType';
  text?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicStructuredTextTypeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicTypePathType = Node & {
  __typename?: 'PrismicTypePathType';
  path: Array<Scalars['String']>;
  type: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicTypePathTypeConnection = {
  __typename?: 'PrismicTypePathTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicTypePathTypeEdge>;
  nodes: Array<PrismicTypePathType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicTypePathTypeGroupConnection>;
};


export type PrismicTypePathTypeConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


export type PrismicTypePathTypeConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


export type PrismicTypePathTypeConnectionMinArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


export type PrismicTypePathTypeConnectionSumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


export type PrismicTypePathTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeEdge = {
  __typename?: 'PrismicTypePathTypeEdge';
  next?: Maybe<PrismicTypePathType>;
  node: PrismicTypePathType;
  previous?: Maybe<PrismicTypePathType>;
};

export enum PrismicTypePathTypeFieldsEnum {
  Path = 'path',
  Type = 'type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicTypePathTypeFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicTypePathTypeGroupConnection = {
  __typename?: 'PrismicTypePathTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicTypePathTypeEdge>;
  nodes: Array<PrismicTypePathType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicTypePathTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type PrismicTypePathTypeGroupConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


export type PrismicTypePathTypeGroupConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


export type PrismicTypePathTypeGroupConnectionMinArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


export type PrismicTypePathTypeGroupConnectionSumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


export type PrismicTypePathTypeGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeSortInput = {
  fields?: Maybe<Array<Maybe<PrismicTypePathTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  prismicEmbedType?: Maybe<PrismicEmbedType>;
  allPrismicEmbedType: PrismicEmbedTypeConnection;
  prismicTypePathType?: Maybe<PrismicTypePathType>;
  allPrismicTypePathType: PrismicTypePathTypeConnection;
  prismicBlogCategory?: Maybe<PrismicBlogCategory>;
  allPrismicBlogCategory: PrismicBlogCategoryConnection;
  prismicBlogPost?: Maybe<PrismicBlogPost>;
  allPrismicBlogPost: PrismicBlogPostConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicEmbedTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicEmbedTypeArgs = {
  filter?: Maybe<PrismicEmbedTypeFilterInput>;
  sort?: Maybe<PrismicEmbedTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicTypePathTypeArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicTypePathTypeArgs = {
  filter?: Maybe<PrismicTypePathTypeFilterInput>;
  sort?: Maybe<PrismicTypePathTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicBlogCategoryArgs = {
  uid?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicBlogCategoryDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicBlogCategoryArgs = {
  filter?: Maybe<PrismicBlogCategoryFilterInput>;
  sort?: Maybe<PrismicBlogCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicBlogPostArgs = {
  uid?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicBlogPostDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicBlogPostArgs = {
  filter?: Maybe<PrismicBlogPostFilterInput>;
  sort?: Maybe<PrismicBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  FunctionRoute = 'functionRoute',
  PluginName = 'pluginName',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptionsSourceMap = 'pluginCreator___pluginOptions___sourceMap',
  PluginCreatorPluginOptionsCssPropOptimization = 'pluginCreator___pluginOptions___cssPropOptimization',
  PluginCreatorPluginOptionsAutoLabel = 'pluginCreator___pluginOptions___autoLabel',
  PluginCreatorPluginOptionsLabelFormat = 'pluginCreator___pluginOptions___labelFormat',
  PluginCreatorPluginOptionsRepositoryName = 'pluginCreator___pluginOptions___repositoryName',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsCustomTypesApiToken = 'pluginCreator___pluginOptions___customTypesApiToken',
  PluginCreatorPluginOptionsApiEndpoint = 'pluginCreator___pluginOptions___apiEndpoint',
  PluginCreatorPluginOptionsLang = 'pluginCreator___pluginOptions___lang',
  PluginCreatorPluginOptionsImageImgixParamsAuto = 'pluginCreator___pluginOptions___imageImgixParams___auto',
  PluginCreatorPluginOptionsImageImgixParamsFit = 'pluginCreator___pluginOptions___imageImgixParams___fit',
  PluginCreatorPluginOptionsImageImgixParamsQ = 'pluginCreator___pluginOptions___imageImgixParams___q',
  PluginCreatorPluginOptionsImagePlaceholderImgixParamsW = 'pluginCreator___pluginOptions___imagePlaceholderImgixParams___w',
  PluginCreatorPluginOptionsImagePlaceholderImgixParamsBlur = 'pluginCreator___pluginOptions___imagePlaceholderImgixParams___blur',
  PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
  PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  PluginCreatorPluginOptionsEntryLimit = 'pluginCreator___pluginOptions___entryLimit',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsHeadersFonts = 'pluginCreator___pluginOptions___headers____fonts__',
  PluginCreatorPluginOptionsHeadersXxxxwoff = 'pluginCreator___pluginOptions___headers____xxxxwoff',
  PluginCreatorPluginOptionsHeadersXxxxwoff2 = 'pluginCreator___pluginOptions___headers____xxxxwoff2',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorId = 'pluginCreatorId'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  packageJson?: Maybe<SitePluginPackageJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PluginOptionsSourceMap = 'pluginOptions___sourceMap',
  PluginOptionsCssPropOptimization = 'pluginOptions___cssPropOptimization',
  PluginOptionsAutoLabel = 'pluginOptions___autoLabel',
  PluginOptionsLabelFormat = 'pluginOptions___labelFormat',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsCustomTypesApiToken = 'pluginOptions___customTypesApiToken',
  PluginOptionsApiEndpoint = 'pluginOptions___apiEndpoint',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsImageImgixParamsAuto = 'pluginOptions___imageImgixParams___auto',
  PluginOptionsImageImgixParamsFit = 'pluginOptions___imageImgixParams___fit',
  PluginOptionsImageImgixParamsQ = 'pluginOptions___imageImgixParams___q',
  PluginOptionsImagePlaceholderImgixParamsW = 'pluginOptions___imagePlaceholderImgixParams___w',
  PluginOptionsImagePlaceholderImgixParamsBlur = 'pluginOptions___imagePlaceholderImgixParams___blur',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsEntryLimit = 'pluginOptions___entryLimit',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsHeadersFonts = 'pluginOptions___headers____fonts__',
  PluginOptionsHeadersXxxxwoff = 'pluginOptions___headers____xxxxwoff',
  PluginOptionsHeadersXxxxwoff2 = 'pluginOptions___headers____xxxxwoff2',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SitePluginFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  sourceMap?: Maybe<Scalars['Boolean']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  repositoryName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  customTypesApiToken?: Maybe<Scalars['String']>;
  apiEndpoint?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  imageImgixParams?: Maybe<SitePluginPluginOptionsImageImgixParams>;
  imagePlaceholderImgixParams?: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParams>;
  schemas?: Maybe<SitePluginPluginOptionsSchemas>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  customTypesApiToken?: Maybe<StringQueryOperatorInput>;
  apiEndpoint?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  imageImgixParams?: Maybe<SitePluginPluginOptionsImageImgixParamsFilterInput>;
  imagePlaceholderImgixParams?: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput>;
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  __typename?: 'SitePluginPluginOptionsHeaders';
  _fonts__?: Maybe<Array<Maybe<Scalars['String']>>>;
  _xxxxwoff?: Maybe<Array<Maybe<Scalars['String']>>>;
  _xxxxwoff2?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _fonts__?: Maybe<StringQueryOperatorInput>;
  _xxxxwoff?: Maybe<StringQueryOperatorInput>;
  _xxxxwoff2?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsImageImgixParams = {
  __typename?: 'SitePluginPluginOptionsImageImgixParams';
  auto?: Maybe<Scalars['String']>;
  fit?: Maybe<Scalars['String']>;
  q?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsImageImgixParamsFilterInput = {
  auto?: Maybe<StringQueryOperatorInput>;
  fit?: Maybe<StringQueryOperatorInput>;
  q?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsImagePlaceholderImgixParams = {
  __typename?: 'SitePluginPluginOptionsImagePlaceholderImgixParams';
  w?: Maybe<Scalars['Int']>;
  blur?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput = {
  w?: Maybe<IntQueryOperatorInput>;
  blur?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemas = {
  __typename?: 'SitePluginPluginOptionsSchemas';
  blog_category?: Maybe<SitePluginPluginOptionsSchemasBlog_Category>;
  blog_post?: Maybe<SitePluginPluginOptionsSchemasBlog_Post>;
};

export type SitePluginPluginOptionsSchemasBlog_Category = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_category';
  Main?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMain>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMain = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_categoryMain';
  uid?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainUid>;
  category_name?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_Name>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_Name = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_categoryMainCategory_name';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfig>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainUidFilterInput>;
  category_name?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainUid = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_categoryMainUid';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_categoryMainUidConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_Post = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_post';
  Main?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMain>;
};

export type SitePluginPluginOptionsSchemasBlog_PostFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMain = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMain';
  uid?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainUid>;
  blog_title?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainBlog_Title>;
  date?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainDate>;
  blog_category?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainBlog_Category>;
  featured_image?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainFeatured_Image>;
  post_content?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainPost_Content>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_Category = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainBlog_category';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfig>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfig';
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainBlog_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainDate = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainDate';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainDateConfig>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainDateConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainDateConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainDateConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainDateFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainDateConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainFeatured_Image = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainFeatured_image';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainUidFilterInput>;
  blog_title?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleFilterInput>;
  date?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainDateFilterInput>;
  blog_category?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryFilterInput>;
  featured_image?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageFilterInput>;
  post_content?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainPost_Content = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainPost_content';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfig>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainUid = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainUid';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainUidConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasBlog_postMainUidConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasBlog_PostMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFilterInput = {
  blog_category?: Maybe<SitePluginPluginOptionsSchemasBlog_CategoryFilterInput>;
  blog_post?: Maybe<SitePluginPluginOptionsSchemasBlog_PostFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed', base64?: Maybe<string>, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG?: Maybe<string>, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed', base64?: Maybe<string>, width: number, height: number, src: string, srcSet: string, srcWebp?: Maybe<string>, srcSetWebp?: Maybe<string> };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG?: Maybe<string>, width: number, height: number, src: string, srcSet: string, srcWebp?: Maybe<string>, srcSetWebp?: Maybe<string> };

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string, srcWebp?: Maybe<string>, srcSetWebp?: Maybe<string> };

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid', base64?: Maybe<string>, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { __typename?: 'ImageSharpFluid', maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG?: Maybe<string>, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid', base64?: Maybe<string>, aspectRatio: number, src: string, srcSet: string, srcWebp?: Maybe<string>, srcSetWebp?: Maybe<string>, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG?: Maybe<string>, aspectRatio: number, src: string, srcSet: string, srcWebp?: Maybe<string>, srcSetWebp?: Maybe<string>, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, srcWebp?: Maybe<string>, srcSetWebp?: Maybe<string>, sizes: string };

export type GatsbyImgixFluidFragment = { __typename?: 'ImgixFluid', aspectRatio: number, src: string, srcWebp: string, srcSet: string, srcSetWebp: string, sizes: string, base64: string };

export type GatsbyImgixFluid_NoBase64Fragment = { __typename?: 'ImgixFluid', aspectRatio: number, src: string, srcWebp: string, srcSet: string, srcSetWebp: string, sizes: string };

export type GatsbyImgixFixedFragment = { __typename?: 'ImgixFixed', base64: string, width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImgixFixed_NoBase64Fragment = { __typename?: 'ImgixFixed', width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyPrismicImageFixedFragment = (
  { __typename?: 'ImgixFixed' }
  & GatsbyImgixFixedFragment
);

export type GatsbyPrismicImageFixed_NoBase64Fragment = (
  { __typename?: 'ImgixFixed' }
  & GatsbyImgixFixed_NoBase64Fragment
);

export type GatsbyPrismicImageFixed_WithWebpFragment = (
  { __typename?: 'ImgixFixed' }
  & GatsbyImgixFixedFragment
);

export type GatsbyPrismicImageFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImgixFixed' }
  & GatsbyImgixFixed_NoBase64Fragment
);

export type GatsbyPrismicImageFluidFragment = (
  { __typename?: 'ImgixFluid' }
  & GatsbyImgixFluidFragment
);

export type GatsbyPrismicImageFluid_NoBase64Fragment = (
  { __typename?: 'ImgixFluid' }
  & GatsbyImgixFluid_NoBase64Fragment
);

export type GatsbyPrismicImageFluid_WithWebpFragment = (
  { __typename?: 'ImgixFluid' }
  & GatsbyImgixFluidFragment
);

export type GatsbyPrismicImageFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImgixFluid' }
  & GatsbyImgixFluid_NoBase64Fragment
);

export type BlogPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type BlogPostQuery = { prismicBlogPost?: Maybe<{ __typename?: 'PrismicBlogPost', prismicId: string, uid: string, url?: Maybe<string>, type: string, id: string, lastUpdated: any, data?: Maybe<{ __typename?: 'PrismicBlogPostDataType', date?: Maybe<any>, title?: Maybe<{ __typename?: 'PrismicStructuredTextType', html?: Maybe<string>, text?: Maybe<string> }>, featuredImage?: Maybe<{ __typename?: 'PrismicBlogPostDataFeaturedImageImageType', gatsbyImageData?: Maybe<any> }>, content?: Maybe<{ __typename?: 'PrismicStructuredTextType', html?: Maybe<string> }>, category?: Maybe<{ __typename?: 'PrismicLinkType', document?: Maybe<{ __typename?: 'PrismicBlogCategory', id: string, prismicId: string, uid: string, data?: Maybe<{ __typename?: 'PrismicBlogCategoryDataType', name?: Maybe<string> }> } | { __typename?: 'PrismicBlogPost' }> }> }> }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AVIFOptions: AvifOptions;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BlurredOptions: BlurredOptions;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateQueryOperatorInput: DateQueryOperatorInput;
  Directory: ResolverTypeWrapper<Directory>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  DirectoryConnection: ResolverTypeWrapper<DirectoryConnection>;
  DirectoryEdge: ResolverTypeWrapper<DirectoryEdge>;
  DirectoryFieldsEnum: DirectoryFieldsEnum;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectoryGroupConnection: ResolverTypeWrapper<DirectoryGroupConnection>;
  DirectorySortInput: DirectorySortInput;
  DuotoneGradient: DuotoneGradient;
  File: ResolverTypeWrapper<File>;
  FileConnection: ResolverTypeWrapper<FileConnection>;
  FileEdge: ResolverTypeWrapper<FileEdge>;
  FileFieldsEnum: FileFieldsEnum;
  FileFilterInput: FileFilterInput;
  FileGroupConnection: ResolverTypeWrapper<FileGroupConnection>;
  FileSortInput: FileSortInput;
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  GatsbyImageLayout: GatsbyImageLayout;
  IDQueryOperatorInput: IdQueryOperatorInput;
  ImageCropFocus: ImageCropFocus;
  ImageFit: ImageFit;
  ImageFormat: ImageFormat;
  ImageLayout: ImageLayout;
  ImagePlaceholder: ImagePlaceholder;
  ImageSharp: ResolverTypeWrapper<ImageSharp>;
  ImageSharpConnection: ResolverTypeWrapper<ImageSharpConnection>;
  ImageSharpEdge: ResolverTypeWrapper<ImageSharpEdge>;
  ImageSharpFieldsEnum: ImageSharpFieldsEnum;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFilterListInput: ImageSharpFilterListInput;
  ImageSharpFixed: ResolverTypeWrapper<ImageSharpFixed>;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpFluid: ResolverTypeWrapper<ImageSharpFluid>;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  ImageSharpGroupConnection: ResolverTypeWrapper<ImageSharpGroupConnection>;
  ImageSharpOriginal: ResolverTypeWrapper<ImageSharpOriginal>;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResize: ResolverTypeWrapper<ImageSharpResize>;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  ImageSharpSortInput: ImageSharpSortInput;
  ImgixFixed: ResolverTypeWrapper<ImgixFixed>;
  ImgixFixedFilterInput: ImgixFixedFilterInput;
  ImgixFluid: ResolverTypeWrapper<ImgixFluid>;
  ImgixFluidFilterInput: ImgixFluidFilterInput;
  ImgixParamsInput: ImgixParamsInput;
  ImgixPlaceholder: ImgixPlaceholder;
  IntQueryOperatorInput: IntQueryOperatorInput;
  Internal: ResolverTypeWrapper<Internal>;
  InternalFilterInput: InternalFilterInput;
  JPGOptions: JpgOptions;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONQueryOperatorInput: JsonQueryOperatorInput;
  Node: ResolversTypes['Directory'] | ResolversTypes['File'] | ResolversTypes['ImageSharp'] | ResolversTypes['PrismicBlogCategory'] | ResolversTypes['PrismicBlogPost'] | ResolversTypes['PrismicEmbedType'] | ResolversTypes['PrismicTypePathType'] | ResolversTypes['Site'] | ResolversTypes['SiteBuildMetadata'] | ResolversTypes['SiteFunction'] | ResolversTypes['SitePage'] | ResolversTypes['SitePlugin'];
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  PNGOptions: PngOptions;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Potrace: Potrace;
  PotraceTurnPolicy: PotraceTurnPolicy;
  PrismicAllDocumentTypes: ResolversTypes['PrismicBlogCategory'] | ResolversTypes['PrismicBlogPost'];
  PrismicAlternateLanguageType: ResolverTypeWrapper<Omit<PrismicAlternateLanguageType, 'document'> & { document?: Maybe<ResolversTypes['PrismicAllDocumentTypes']> }>;
  PrismicAlternateLanguageTypeFilterInput: PrismicAlternateLanguageTypeFilterInput;
  PrismicAlternateLanguageTypeFilterListInput: PrismicAlternateLanguageTypeFilterListInput;
  PrismicBlogCategory: ResolverTypeWrapper<PrismicBlogCategory>;
  PrismicBlogCategoryConnection: ResolverTypeWrapper<PrismicBlogCategoryConnection>;
  PrismicBlogCategoryDataType: ResolverTypeWrapper<PrismicBlogCategoryDataType>;
  PrismicBlogCategoryDataTypeFilterInput: PrismicBlogCategoryDataTypeFilterInput;
  PrismicBlogCategoryEdge: ResolverTypeWrapper<PrismicBlogCategoryEdge>;
  PrismicBlogCategoryFieldsEnum: PrismicBlogCategoryFieldsEnum;
  PrismicBlogCategoryFilterInput: PrismicBlogCategoryFilterInput;
  PrismicBlogCategoryGroupConnection: ResolverTypeWrapper<PrismicBlogCategoryGroupConnection>;
  PrismicBlogCategorySortInput: PrismicBlogCategorySortInput;
  PrismicBlogPost: ResolverTypeWrapper<PrismicBlogPost>;
  PrismicBlogPostConnection: ResolverTypeWrapper<PrismicBlogPostConnection>;
  PrismicBlogPostDataFeaturedImageImageType: ResolverTypeWrapper<PrismicBlogPostDataFeaturedImageImageType>;
  PrismicBlogPostDataFeaturedImageImageTypeFilterInput: PrismicBlogPostDataFeaturedImageImageTypeFilterInput;
  PrismicBlogPostDataType: ResolverTypeWrapper<PrismicBlogPostDataType>;
  PrismicBlogPostDataTypeFilterInput: PrismicBlogPostDataTypeFilterInput;
  PrismicBlogPostEdge: ResolverTypeWrapper<PrismicBlogPostEdge>;
  PrismicBlogPostFieldsEnum: PrismicBlogPostFieldsEnum;
  PrismicBlogPostFilterInput: PrismicBlogPostFilterInput;
  PrismicBlogPostGroupConnection: ResolverTypeWrapper<PrismicBlogPostGroupConnection>;
  PrismicBlogPostSortInput: PrismicBlogPostSortInput;
  PrismicEmbedType: ResolverTypeWrapper<PrismicEmbedType>;
  PrismicEmbedTypeConnection: ResolverTypeWrapper<PrismicEmbedTypeConnection>;
  PrismicEmbedTypeEdge: ResolverTypeWrapper<PrismicEmbedTypeEdge>;
  PrismicEmbedTypeFieldsEnum: PrismicEmbedTypeFieldsEnum;
  PrismicEmbedTypeFilterInput: PrismicEmbedTypeFilterInput;
  PrismicEmbedTypeGroupConnection: ResolverTypeWrapper<PrismicEmbedTypeGroupConnection>;
  PrismicEmbedTypeSortInput: PrismicEmbedTypeSortInput;
  PrismicGeoPointType: ResolverTypeWrapper<PrismicGeoPointType>;
  PrismicImageDimensionsType: ResolverTypeWrapper<PrismicImageDimensionsType>;
  PrismicImageDimensionsTypeFilterInput: PrismicImageDimensionsTypeFilterInput;
  PrismicImageThumbnailType: ResolverTypeWrapper<PrismicImageThumbnailType>;
  PrismicLinkType: ResolverTypeWrapper<Omit<PrismicLinkType, 'document'> & { document?: Maybe<ResolversTypes['PrismicAllDocumentTypes']> }>;
  PrismicLinkTypeEnum: PrismicLinkTypeEnum;
  PrismicLinkTypeEnumQueryOperatorInput: PrismicLinkTypeEnumQueryOperatorInput;
  PrismicLinkTypeFilterInput: PrismicLinkTypeFilterInput;
  PrismicSliceType: never;
  PrismicStructuredTextType: ResolverTypeWrapper<PrismicStructuredTextType>;
  PrismicStructuredTextTypeFilterInput: PrismicStructuredTextTypeFilterInput;
  PrismicTypePathType: ResolverTypeWrapper<PrismicTypePathType>;
  PrismicTypePathTypeConnection: ResolverTypeWrapper<PrismicTypePathTypeConnection>;
  PrismicTypePathTypeEdge: ResolverTypeWrapper<PrismicTypePathTypeEdge>;
  PrismicTypePathTypeFieldsEnum: PrismicTypePathTypeFieldsEnum;
  PrismicTypePathTypeFilterInput: PrismicTypePathTypeFilterInput;
  PrismicTypePathTypeGroupConnection: ResolverTypeWrapper<PrismicTypePathTypeGroupConnection>;
  PrismicTypePathTypeSortInput: PrismicTypePathTypeSortInput;
  Query: ResolverTypeWrapper<{}>;
  Site: ResolverTypeWrapper<Site>;
  SiteBuildMetadata: ResolverTypeWrapper<SiteBuildMetadata>;
  SiteBuildMetadataConnection: ResolverTypeWrapper<SiteBuildMetadataConnection>;
  SiteBuildMetadataEdge: ResolverTypeWrapper<SiteBuildMetadataEdge>;
  SiteBuildMetadataFieldsEnum: SiteBuildMetadataFieldsEnum;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataGroupConnection: ResolverTypeWrapper<SiteBuildMetadataGroupConnection>;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  SiteConnection: ResolverTypeWrapper<SiteConnection>;
  SiteEdge: ResolverTypeWrapper<SiteEdge>;
  SiteFieldsEnum: SiteFieldsEnum;
  SiteFilterInput: SiteFilterInput;
  SiteFunction: ResolverTypeWrapper<SiteFunction>;
  SiteFunctionConnection: ResolverTypeWrapper<SiteFunctionConnection>;
  SiteFunctionEdge: ResolverTypeWrapper<SiteFunctionEdge>;
  SiteFunctionFieldsEnum: SiteFunctionFieldsEnum;
  SiteFunctionFilterInput: SiteFunctionFilterInput;
  SiteFunctionGroupConnection: ResolverTypeWrapper<SiteFunctionGroupConnection>;
  SiteFunctionSortInput: SiteFunctionSortInput;
  SiteGroupConnection: ResolverTypeWrapper<SiteGroupConnection>;
  SitePage: ResolverTypeWrapper<SitePage>;
  SitePageConnection: ResolverTypeWrapper<SitePageConnection>;
  SitePageEdge: ResolverTypeWrapper<SitePageEdge>;
  SitePageFieldsEnum: SitePageFieldsEnum;
  SitePageFilterInput: SitePageFilterInput;
  SitePageGroupConnection: ResolverTypeWrapper<SitePageGroupConnection>;
  SitePageSortInput: SitePageSortInput;
  SitePlugin: ResolverTypeWrapper<SitePlugin>;
  SitePluginConnection: ResolverTypeWrapper<SitePluginConnection>;
  SitePluginEdge: ResolverTypeWrapper<SitePluginEdge>;
  SitePluginFieldsEnum: SitePluginFieldsEnum;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePluginGroupConnection: ResolverTypeWrapper<SitePluginGroupConnection>;
  SitePluginPackageJson: ResolverTypeWrapper<SitePluginPackageJson>;
  SitePluginPackageJsonDependencies: ResolverTypeWrapper<SitePluginPackageJsonDependencies>;
  SitePluginPackageJsonDependenciesFilterInput: SitePluginPackageJsonDependenciesFilterInput;
  SitePluginPackageJsonDependenciesFilterListInput: SitePluginPackageJsonDependenciesFilterListInput;
  SitePluginPackageJsonDevDependencies: ResolverTypeWrapper<SitePluginPackageJsonDevDependencies>;
  SitePluginPackageJsonDevDependenciesFilterInput: SitePluginPackageJsonDevDependenciesFilterInput;
  SitePluginPackageJsonDevDependenciesFilterListInput: SitePluginPackageJsonDevDependenciesFilterListInput;
  SitePluginPackageJsonFilterInput: SitePluginPackageJsonFilterInput;
  SitePluginPackageJsonPeerDependencies: ResolverTypeWrapper<SitePluginPackageJsonPeerDependencies>;
  SitePluginPackageJsonPeerDependenciesFilterInput: SitePluginPackageJsonPeerDependenciesFilterInput;
  SitePluginPackageJsonPeerDependenciesFilterListInput: SitePluginPackageJsonPeerDependenciesFilterListInput;
  SitePluginPluginOptions: ResolverTypeWrapper<SitePluginPluginOptions>;
  SitePluginPluginOptionsFilterInput: SitePluginPluginOptionsFilterInput;
  SitePluginPluginOptionsHeaders: ResolverTypeWrapper<SitePluginPluginOptionsHeaders>;
  SitePluginPluginOptionsHeadersFilterInput: SitePluginPluginOptionsHeadersFilterInput;
  SitePluginPluginOptionsImageImgixParams: ResolverTypeWrapper<SitePluginPluginOptionsImageImgixParams>;
  SitePluginPluginOptionsImageImgixParamsFilterInput: SitePluginPluginOptionsImageImgixParamsFilterInput;
  SitePluginPluginOptionsImagePlaceholderImgixParams: ResolverTypeWrapper<SitePluginPluginOptionsImagePlaceholderImgixParams>;
  SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput: SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput;
  SitePluginPluginOptionsSchemas: ResolverTypeWrapper<SitePluginPluginOptionsSchemas>;
  SitePluginPluginOptionsSchemasBlog_category: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_Category>;
  SitePluginPluginOptionsSchemasBlog_categoryFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMain: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_CategoryMain>;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_name: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_Name>;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfig: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfig>;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfigFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMainFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMainUid: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_CategoryMainUid>;
  SitePluginPluginOptionsSchemasBlog_categoryMainUidConfig: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfig>;
  SitePluginPluginOptionsSchemasBlog_categoryMainUidConfigFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMainUidFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainUidFilterInput;
  SitePluginPluginOptionsSchemasBlog_post: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_Post>;
  SitePluginPluginOptionsSchemasBlog_postFilterInput: SitePluginPluginOptionsSchemasBlog_PostFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMain: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMain>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_category: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainBlog_Category>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfig: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfig>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_title: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainBlog_Title>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfig: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfig>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_titleFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainDate: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainDate>;
  SitePluginPluginOptionsSchemasBlog_postMainDateConfig: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainDateConfig>;
  SitePluginPluginOptionsSchemasBlog_postMainDateConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainDateConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainDateFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainDateFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_image: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainFeatured_Image>;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfig: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfig>;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainPost_content: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainPost_Content>;
  SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfig: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfig>;
  SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainPost_contentFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainUid: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainUid>;
  SitePluginPluginOptionsSchemasBlog_postMainUidConfig: ResolverTypeWrapper<SitePluginPluginOptionsSchemasBlog_PostMainUidConfig>;
  SitePluginPluginOptionsSchemasBlog_postMainUidConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainUidConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainUidFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainUidFilterInput;
  SitePluginPluginOptionsSchemasFilterInput: SitePluginPluginOptionsSchemasFilterInput;
  SitePluginSortInput: SitePluginSortInput;
  SiteSiteMetadata: ResolverTypeWrapper<SiteSiteMetadata>;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  SiteSortInput: SiteSortInput;
  SortOrderEnum: SortOrderEnum;
  StringQueryOperatorInput: StringQueryOperatorInput;
  TransformOptions: TransformOptions;
  WebPOptions: WebPOptions;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AVIFOptions: AvifOptions;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  BlurredOptions: BlurredOptions;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  Date: Scalars['Date'];
  DateQueryOperatorInput: DateQueryOperatorInput;
  Directory: Directory;
  String: Scalars['String'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  DirectoryConnection: DirectoryConnection;
  DirectoryEdge: DirectoryEdge;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectoryGroupConnection: DirectoryGroupConnection;
  DirectorySortInput: DirectorySortInput;
  DuotoneGradient: DuotoneGradient;
  File: File;
  FileConnection: FileConnection;
  FileEdge: FileEdge;
  FileFilterInput: FileFilterInput;
  FileGroupConnection: FileGroupConnection;
  FileSortInput: FileSortInput;
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  IDQueryOperatorInput: IdQueryOperatorInput;
  ImageSharp: ImageSharp;
  ImageSharpConnection: ImageSharpConnection;
  ImageSharpEdge: ImageSharpEdge;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFilterListInput: ImageSharpFilterListInput;
  ImageSharpFixed: ImageSharpFixed;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpFluid: ImageSharpFluid;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  ImageSharpGroupConnection: ImageSharpGroupConnection;
  ImageSharpOriginal: ImageSharpOriginal;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResize: ImageSharpResize;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  ImageSharpSortInput: ImageSharpSortInput;
  ImgixFixed: ImgixFixed;
  ImgixFixedFilterInput: ImgixFixedFilterInput;
  ImgixFluid: ImgixFluid;
  ImgixFluidFilterInput: ImgixFluidFilterInput;
  ImgixParamsInput: ImgixParamsInput;
  IntQueryOperatorInput: IntQueryOperatorInput;
  Internal: Internal;
  InternalFilterInput: InternalFilterInput;
  JPGOptions: JpgOptions;
  JSON: Scalars['JSON'];
  JSONQueryOperatorInput: JsonQueryOperatorInput;
  Node: ResolversParentTypes['Directory'] | ResolversParentTypes['File'] | ResolversParentTypes['ImageSharp'] | ResolversParentTypes['PrismicBlogCategory'] | ResolversParentTypes['PrismicBlogPost'] | ResolversParentTypes['PrismicEmbedType'] | ResolversParentTypes['PrismicTypePathType'] | ResolversParentTypes['Site'] | ResolversParentTypes['SiteBuildMetadata'] | ResolversParentTypes['SiteFunction'] | ResolversParentTypes['SitePage'] | ResolversParentTypes['SitePlugin'];
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  PNGOptions: PngOptions;
  PageInfo: PageInfo;
  Potrace: Potrace;
  PrismicAllDocumentTypes: ResolversParentTypes['PrismicBlogCategory'] | ResolversParentTypes['PrismicBlogPost'];
  PrismicAlternateLanguageType: Omit<PrismicAlternateLanguageType, 'document'> & { document?: Maybe<ResolversParentTypes['PrismicAllDocumentTypes']> };
  PrismicAlternateLanguageTypeFilterInput: PrismicAlternateLanguageTypeFilterInput;
  PrismicAlternateLanguageTypeFilterListInput: PrismicAlternateLanguageTypeFilterListInput;
  PrismicBlogCategory: PrismicBlogCategory;
  PrismicBlogCategoryConnection: PrismicBlogCategoryConnection;
  PrismicBlogCategoryDataType: PrismicBlogCategoryDataType;
  PrismicBlogCategoryDataTypeFilterInput: PrismicBlogCategoryDataTypeFilterInput;
  PrismicBlogCategoryEdge: PrismicBlogCategoryEdge;
  PrismicBlogCategoryFilterInput: PrismicBlogCategoryFilterInput;
  PrismicBlogCategoryGroupConnection: PrismicBlogCategoryGroupConnection;
  PrismicBlogCategorySortInput: PrismicBlogCategorySortInput;
  PrismicBlogPost: PrismicBlogPost;
  PrismicBlogPostConnection: PrismicBlogPostConnection;
  PrismicBlogPostDataFeaturedImageImageType: PrismicBlogPostDataFeaturedImageImageType;
  PrismicBlogPostDataFeaturedImageImageTypeFilterInput: PrismicBlogPostDataFeaturedImageImageTypeFilterInput;
  PrismicBlogPostDataType: PrismicBlogPostDataType;
  PrismicBlogPostDataTypeFilterInput: PrismicBlogPostDataTypeFilterInput;
  PrismicBlogPostEdge: PrismicBlogPostEdge;
  PrismicBlogPostFilterInput: PrismicBlogPostFilterInput;
  PrismicBlogPostGroupConnection: PrismicBlogPostGroupConnection;
  PrismicBlogPostSortInput: PrismicBlogPostSortInput;
  PrismicEmbedType: PrismicEmbedType;
  PrismicEmbedTypeConnection: PrismicEmbedTypeConnection;
  PrismicEmbedTypeEdge: PrismicEmbedTypeEdge;
  PrismicEmbedTypeFilterInput: PrismicEmbedTypeFilterInput;
  PrismicEmbedTypeGroupConnection: PrismicEmbedTypeGroupConnection;
  PrismicEmbedTypeSortInput: PrismicEmbedTypeSortInput;
  PrismicGeoPointType: PrismicGeoPointType;
  PrismicImageDimensionsType: PrismicImageDimensionsType;
  PrismicImageDimensionsTypeFilterInput: PrismicImageDimensionsTypeFilterInput;
  PrismicImageThumbnailType: PrismicImageThumbnailType;
  PrismicLinkType: Omit<PrismicLinkType, 'document'> & { document?: Maybe<ResolversParentTypes['PrismicAllDocumentTypes']> };
  PrismicLinkTypeEnumQueryOperatorInput: PrismicLinkTypeEnumQueryOperatorInput;
  PrismicLinkTypeFilterInput: PrismicLinkTypeFilterInput;
  PrismicSliceType: never;
  PrismicStructuredTextType: PrismicStructuredTextType;
  PrismicStructuredTextTypeFilterInput: PrismicStructuredTextTypeFilterInput;
  PrismicTypePathType: PrismicTypePathType;
  PrismicTypePathTypeConnection: PrismicTypePathTypeConnection;
  PrismicTypePathTypeEdge: PrismicTypePathTypeEdge;
  PrismicTypePathTypeFilterInput: PrismicTypePathTypeFilterInput;
  PrismicTypePathTypeGroupConnection: PrismicTypePathTypeGroupConnection;
  PrismicTypePathTypeSortInput: PrismicTypePathTypeSortInput;
  Query: {};
  Site: Site;
  SiteBuildMetadata: SiteBuildMetadata;
  SiteBuildMetadataConnection: SiteBuildMetadataConnection;
  SiteBuildMetadataEdge: SiteBuildMetadataEdge;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataGroupConnection: SiteBuildMetadataGroupConnection;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  SiteConnection: SiteConnection;
  SiteEdge: SiteEdge;
  SiteFilterInput: SiteFilterInput;
  SiteFunction: SiteFunction;
  SiteFunctionConnection: SiteFunctionConnection;
  SiteFunctionEdge: SiteFunctionEdge;
  SiteFunctionFilterInput: SiteFunctionFilterInput;
  SiteFunctionGroupConnection: SiteFunctionGroupConnection;
  SiteFunctionSortInput: SiteFunctionSortInput;
  SiteGroupConnection: SiteGroupConnection;
  SitePage: SitePage;
  SitePageConnection: SitePageConnection;
  SitePageEdge: SitePageEdge;
  SitePageFilterInput: SitePageFilterInput;
  SitePageGroupConnection: SitePageGroupConnection;
  SitePageSortInput: SitePageSortInput;
  SitePlugin: SitePlugin;
  SitePluginConnection: SitePluginConnection;
  SitePluginEdge: SitePluginEdge;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePluginGroupConnection: SitePluginGroupConnection;
  SitePluginPackageJson: SitePluginPackageJson;
  SitePluginPackageJsonDependencies: SitePluginPackageJsonDependencies;
  SitePluginPackageJsonDependenciesFilterInput: SitePluginPackageJsonDependenciesFilterInput;
  SitePluginPackageJsonDependenciesFilterListInput: SitePluginPackageJsonDependenciesFilterListInput;
  SitePluginPackageJsonDevDependencies: SitePluginPackageJsonDevDependencies;
  SitePluginPackageJsonDevDependenciesFilterInput: SitePluginPackageJsonDevDependenciesFilterInput;
  SitePluginPackageJsonDevDependenciesFilterListInput: SitePluginPackageJsonDevDependenciesFilterListInput;
  SitePluginPackageJsonFilterInput: SitePluginPackageJsonFilterInput;
  SitePluginPackageJsonPeerDependencies: SitePluginPackageJsonPeerDependencies;
  SitePluginPackageJsonPeerDependenciesFilterInput: SitePluginPackageJsonPeerDependenciesFilterInput;
  SitePluginPackageJsonPeerDependenciesFilterListInput: SitePluginPackageJsonPeerDependenciesFilterListInput;
  SitePluginPluginOptions: SitePluginPluginOptions;
  SitePluginPluginOptionsFilterInput: SitePluginPluginOptionsFilterInput;
  SitePluginPluginOptionsHeaders: SitePluginPluginOptionsHeaders;
  SitePluginPluginOptionsHeadersFilterInput: SitePluginPluginOptionsHeadersFilterInput;
  SitePluginPluginOptionsImageImgixParams: SitePluginPluginOptionsImageImgixParams;
  SitePluginPluginOptionsImageImgixParamsFilterInput: SitePluginPluginOptionsImageImgixParamsFilterInput;
  SitePluginPluginOptionsImagePlaceholderImgixParams: SitePluginPluginOptionsImagePlaceholderImgixParams;
  SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput: SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput;
  SitePluginPluginOptionsSchemas: SitePluginPluginOptionsSchemas;
  SitePluginPluginOptionsSchemasBlog_category: SitePluginPluginOptionsSchemasBlog_Category;
  SitePluginPluginOptionsSchemasBlog_categoryFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMain: SitePluginPluginOptionsSchemasBlog_CategoryMain;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_name: SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_Name;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfig: SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfig;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfigFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMainFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMainUid: SitePluginPluginOptionsSchemasBlog_CategoryMainUid;
  SitePluginPluginOptionsSchemasBlog_categoryMainUidConfig: SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfig;
  SitePluginPluginOptionsSchemasBlog_categoryMainUidConfigFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_categoryMainUidFilterInput: SitePluginPluginOptionsSchemasBlog_CategoryMainUidFilterInput;
  SitePluginPluginOptionsSchemasBlog_post: SitePluginPluginOptionsSchemasBlog_Post;
  SitePluginPluginOptionsSchemasBlog_postFilterInput: SitePluginPluginOptionsSchemasBlog_PostFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMain: SitePluginPluginOptionsSchemasBlog_PostMain;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_category: SitePluginPluginOptionsSchemasBlog_PostMainBlog_Category;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfig: SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfig;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_title: SitePluginPluginOptionsSchemasBlog_PostMainBlog_Title;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfig: SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfig;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_titleFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainDate: SitePluginPluginOptionsSchemasBlog_PostMainDate;
  SitePluginPluginOptionsSchemasBlog_postMainDateConfig: SitePluginPluginOptionsSchemasBlog_PostMainDateConfig;
  SitePluginPluginOptionsSchemasBlog_postMainDateConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainDateConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainDateFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainDateFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_image: SitePluginPluginOptionsSchemasBlog_PostMainFeatured_Image;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfig: SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfig;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainPost_content: SitePluginPluginOptionsSchemasBlog_PostMainPost_Content;
  SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfig: SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfig;
  SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainPost_contentFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainUid: SitePluginPluginOptionsSchemasBlog_PostMainUid;
  SitePluginPluginOptionsSchemasBlog_postMainUidConfig: SitePluginPluginOptionsSchemasBlog_PostMainUidConfig;
  SitePluginPluginOptionsSchemasBlog_postMainUidConfigFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainUidConfigFilterInput;
  SitePluginPluginOptionsSchemasBlog_postMainUidFilterInput: SitePluginPluginOptionsSchemasBlog_PostMainUidFilterInput;
  SitePluginPluginOptionsSchemasFilterInput: SitePluginPluginOptionsSchemasFilterInput;
  SitePluginSortInput: SitePluginSortInput;
  SiteSiteMetadata: SiteSiteMetadata;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  SiteSortInput: SiteSortInput;
  StringQueryOperatorInput: StringQueryOperatorInput;
  TransformOptions: TransformOptions;
  WebPOptions: WebPOptions;
};

export type ChildOfDirectiveArgs = {   mimeTypes?: Array<Scalars['String']>;
  types?: Array<Scalars['String']>; };

export type ChildOfDirectiveResolver<Result, Parent, ContextType = any, Args = ChildOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DateformatDirectiveArgs = {   formatString?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>; };

export type DateformatDirectiveResolver<Result, Parent, ContextType = any, Args = DateformatDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DontInferDirectiveArgs = {  };

export type DontInferDirectiveResolver<Result, Parent, ContextType = any, Args = DontInferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FileByRelativePathDirectiveArgs = {   from?: Maybe<Scalars['String']>; };

export type FileByRelativePathDirectiveResolver<Result, Parent, ContextType = any, Args = FileByRelativePathDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type InferDirectiveArgs = {  };

export type InferDirectiveResolver<Result, Parent, ContextType = any, Args = InferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {   by?: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  on?: Maybe<Scalars['String']>; };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MimeTypesDirectiveArgs = {   types?: Array<Scalars['String']>; };

export type MimeTypesDirectiveResolver<Result, Parent, ContextType = any, Args = MimeTypesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type NodeInterfaceDirectiveArgs = {  };

export type NodeInterfaceDirectiveResolver<Result, Parent, ContextType = any, Args = NodeInterfaceDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProxyDirectiveArgs = {   from: Scalars['String'];
  fromNode?: Scalars['Boolean']; };

export type ProxyDirectiveResolver<Result, Parent, ContextType = any, Args = ProxyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DirectoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Directory'] = ResolversParentTypes['Directory']> = {
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<DirectoryModifiedTimeArgs, never>>;
  accessTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<DirectoryAccessTimeArgs, never>>;
  changeTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<DirectoryChangeTimeArgs, never>>;
  birthTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<DirectoryBirthTimeArgs, never>>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<DirectoryAtimeArgs, never>>;
  mtime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<DirectoryMtimeArgs, never>>;
  ctime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<DirectoryCtimeArgs, never>>;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryConnection'] = ResolversParentTypes['DirectoryConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<DirectoryConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['DirectoryGroupConnection']>, ParentType, ContextType, RequireFields<DirectoryConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryEdge'] = ResolversParentTypes['DirectoryEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Directory'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryGroupConnection'] = ResolversParentTypes['DirectoryGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['DirectoryGroupConnection']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<FileModifiedTimeArgs, never>>;
  accessTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<FileAccessTimeArgs, never>>;
  changeTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<FileChangeTimeArgs, never>>;
  birthTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<FileBirthTimeArgs, never>>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<FileAtimeArgs, never>>;
  mtime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<FileMtimeArgs, never>>;
  ctime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<FileCtimeArgs, never>>;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publicURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childrenImageSharp?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageSharp']>>>, ParentType, ContextType>;
  childImageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileConnection'] = ResolversParentTypes['FileConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<FileConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['FileGroupConnection']>, ParentType, ContextType, RequireFields<FileConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileEdge'] = ResolversParentTypes['FileEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileGroupConnection'] = ResolversParentTypes['FileGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<FileGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['FileGroupConnection']>, ParentType, ContextType, RequireFields<FileGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharp'] = ResolversParentTypes['ImageSharp']> = {
  fixed?: Resolver<Maybe<ResolversTypes['ImageSharpFixed']>, ParentType, ContextType, RequireFields<ImageSharpFixedArgs, 'jpegProgressive' | 'pngCompressionSpeed' | 'grayscale' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>;
  fluid?: Resolver<Maybe<ResolversTypes['ImageSharpFluid']>, ParentType, ContextType, RequireFields<ImageSharpFluidArgs, 'grayscale' | 'jpegProgressive' | 'pngCompressionSpeed' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim' | 'sizes' | 'srcSetBreakpoints'>>;
  gatsbyImageData?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<ImageSharpGatsbyImageDataArgs, 'layout'>>;
  original?: Resolver<Maybe<ResolversTypes['ImageSharpOriginal']>, ParentType, ContextType>;
  resize?: Resolver<Maybe<ResolversTypes['ImageSharpResize']>, ParentType, ContextType, RequireFields<ImageSharpResizeArgs, 'jpegProgressive' | 'pngCompressionLevel' | 'pngCompressionSpeed' | 'grayscale' | 'base64' | 'toFormat' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpConnection'] = ResolversParentTypes['ImageSharpConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ImageSharpConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['ImageSharpGroupConnection']>, ParentType, ContextType, RequireFields<ImageSharpConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpEdge'] = ResolversParentTypes['ImageSharpEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ImageSharp'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFixedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpFixed'] = ResolversParentTypes['ImageSharpFixed']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFluidResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpFluid'] = ResolversParentTypes['ImageSharpFluid']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presentationWidth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  presentationHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpGroupConnection'] = ResolversParentTypes['ImageSharpGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['ImageSharpGroupConnection']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpOriginalResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpOriginal'] = ResolversParentTypes['ImageSharpOriginal']> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpResize'] = ResolversParentTypes['ImageSharpResize']> = {
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImgixFixedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImgixFixed'] = ResolversParentTypes['ImgixFixed']> = {
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSetWebp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImgixFluidResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImgixFluid'] = ResolversParentTypes['ImgixFluid']> = {
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSetWebp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InternalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Internal'] = ResolversParentTypes['Internal']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentDigest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldOwners?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ignoreType?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Directory' | 'File' | 'ImageSharp' | 'PrismicBlogCategory' | 'PrismicBlogPost' | 'PrismicEmbedType' | 'PrismicTypePathType' | 'Site' | 'SiteBuildMetadata' | 'SiteFunction' | 'SitePage' | 'SitePlugin', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicAllDocumentTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicAllDocumentTypes'] = ResolversParentTypes['PrismicAllDocumentTypes']> = {
  __resolveType: TypeResolveFn<'PrismicBlogCategory' | 'PrismicBlogPost', ParentType, ContextType>;
};

export type PrismicAlternateLanguageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicAlternateLanguageType'] = ResolversParentTypes['PrismicAlternateLanguageType']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['PrismicAllDocumentTypes']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogCategory'] = ResolversParentTypes['PrismicBlogCategory']> = {
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['PrismicBlogCategoryDataType']>, ParentType, ContextType>;
  dataRaw?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  prismicId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  alternate_languages?: Resolver<Array<ResolversTypes['PrismicAlternateLanguageType']>, ParentType, ContextType>;
  first_publication_date?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<PrismicBlogCategoryFirst_Publication_DateArgs, never>>;
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_publication_date?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<PrismicBlogCategoryLast_Publication_DateArgs, never>>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _previewable?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogCategoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogCategoryConnection'] = ResolversParentTypes['PrismicBlogCategoryConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicBlogCategoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicBlogCategory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['PrismicBlogCategoryGroupConnection']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogCategoryDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogCategoryDataType'] = ResolversParentTypes['PrismicBlogCategoryDataType']> = {
  category_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogCategoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogCategoryEdge'] = ResolversParentTypes['PrismicBlogCategoryEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['PrismicBlogCategory']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PrismicBlogCategory'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['PrismicBlogCategory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogCategoryGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogCategoryGroupConnection'] = ResolversParentTypes['PrismicBlogCategoryGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicBlogCategoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicBlogCategory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['PrismicBlogCategoryGroupConnection']>, ParentType, ContextType, RequireFields<PrismicBlogCategoryGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogPost'] = ResolversParentTypes['PrismicBlogPost']> = {
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['PrismicBlogPostDataType']>, ParentType, ContextType>;
  dataRaw?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  prismicId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  alternate_languages?: Resolver<Array<ResolversTypes['PrismicAlternateLanguageType']>, ParentType, ContextType>;
  first_publication_date?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<PrismicBlogPostFirst_Publication_DateArgs, never>>;
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_publication_date?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<PrismicBlogPostLast_Publication_DateArgs, never>>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _previewable?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogPostConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogPostConnection'] = ResolversParentTypes['PrismicBlogPostConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicBlogPostEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicBlogPost']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicBlogPostConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogPostConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogPostConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogPostConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['PrismicBlogPostGroupConnection']>, ParentType, ContextType, RequireFields<PrismicBlogPostConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogPostDataFeaturedImageImageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogPostDataFeaturedImageImageType'] = ResolversParentTypes['PrismicBlogPostDataFeaturedImageImageType']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['PrismicImageDimensionsType']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicBlogPostDataFeaturedImageImageTypeUrlArgs, 'imgixParams'>>;
  fixed?: Resolver<Maybe<ResolversTypes['ImgixFixed']>, ParentType, ContextType, RequireFields<PrismicBlogPostDataFeaturedImageImageTypeFixedArgs, 'width' | 'imgixParams' | 'placeholderImgixParams'>>;
  fluid?: Resolver<Maybe<ResolversTypes['ImgixFluid']>, ParentType, ContextType, RequireFields<PrismicBlogPostDataFeaturedImageImageTypeFluidArgs, 'imgixParams' | 'maxWidth' | 'placeholderImgixParams'>>;
  gatsbyImageData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<PrismicBlogPostDataFeaturedImageImageTypeGatsbyImageDataArgs, 'widthTolerance' | 'srcSetMinWidth' | 'srcSetMaxWidth'>>;
  localFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogPostDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogPostDataType'] = ResolversParentTypes['PrismicBlogPostDataType']> = {
  blog_category?: Resolver<Maybe<ResolversTypes['PrismicLinkType']>, ParentType, ContextType>;
  blog_title?: Resolver<Maybe<ResolversTypes['PrismicStructuredTextType']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<PrismicBlogPostDataTypeDateArgs, never>>;
  featured_image?: Resolver<Maybe<ResolversTypes['PrismicBlogPostDataFeaturedImageImageType']>, ParentType, ContextType>;
  post_content?: Resolver<Maybe<ResolversTypes['PrismicStructuredTextType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogPostEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogPostEdge'] = ResolversParentTypes['PrismicBlogPostEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['PrismicBlogPost']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PrismicBlogPost'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['PrismicBlogPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicBlogPostGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicBlogPostGroupConnection'] = ResolversParentTypes['PrismicBlogPostGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicBlogPostEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicBlogPost']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicBlogPostGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogPostGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogPostGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicBlogPostGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['PrismicBlogPostGroupConnection']>, ParentType, ContextType, RequireFields<PrismicBlogPostGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicEmbedTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicEmbedType'] = ResolversParentTypes['PrismicEmbedType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicEmbedTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicEmbedTypeConnection'] = ResolversParentTypes['PrismicEmbedTypeConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicEmbedTypeEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicEmbedType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['PrismicEmbedTypeGroupConnection']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicEmbedTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicEmbedTypeEdge'] = ResolversParentTypes['PrismicEmbedTypeEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['PrismicEmbedType']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PrismicEmbedType'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['PrismicEmbedType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicEmbedTypeGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicEmbedTypeGroupConnection'] = ResolversParentTypes['PrismicEmbedTypeGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicEmbedTypeEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicEmbedType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['PrismicEmbedTypeGroupConnection']>, ParentType, ContextType, RequireFields<PrismicEmbedTypeGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicGeoPointTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicGeoPointType'] = ResolversParentTypes['PrismicGeoPointType']> = {
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicImageDimensionsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicImageDimensionsType'] = ResolversParentTypes['PrismicImageDimensionsType']> = {
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicImageThumbnailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicImageThumbnailType'] = ResolversParentTypes['PrismicImageThumbnailType']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['PrismicImageDimensionsType']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicImageThumbnailTypeUrlArgs, 'imgixParams'>>;
  fixed?: Resolver<Maybe<ResolversTypes['ImgixFixed']>, ParentType, ContextType, RequireFields<PrismicImageThumbnailTypeFixedArgs, 'width' | 'imgixParams' | 'placeholderImgixParams'>>;
  fluid?: Resolver<Maybe<ResolversTypes['ImgixFluid']>, ParentType, ContextType, RequireFields<PrismicImageThumbnailTypeFluidArgs, 'imgixParams' | 'maxWidth' | 'placeholderImgixParams'>>;
  gatsbyImageData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<PrismicImageThumbnailTypeGatsbyImageDataArgs, 'widthTolerance' | 'srcSetMinWidth' | 'srcSetMaxWidth'>>;
  localFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicLinkTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicLinkType'] = ResolversParentTypes['PrismicLinkType']> = {
  link_type?: Resolver<Maybe<ResolversTypes['PrismicLinkTypeEnum']>, ParentType, ContextType>;
  isBroken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['PrismicAllDocumentTypes']>, ParentType, ContextType>;
  localFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicSliceTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicSliceType'] = ResolversParentTypes['PrismicSliceType']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slice_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slice_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PrismicStructuredTextTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicStructuredTextType'] = ResolversParentTypes['PrismicStructuredTextType']> = {
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicTypePathTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicTypePathType'] = ResolversParentTypes['PrismicTypePathType']> = {
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicTypePathTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicTypePathTypeConnection'] = ResolversParentTypes['PrismicTypePathTypeConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicTypePathTypeEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicTypePathType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['PrismicTypePathTypeGroupConnection']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicTypePathTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicTypePathTypeEdge'] = ResolversParentTypes['PrismicTypePathTypeEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['PrismicTypePathType']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PrismicTypePathType'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['PrismicTypePathType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicTypePathTypeGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrismicTypePathTypeGroupConnection'] = ResolversParentTypes['PrismicTypePathTypeGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicTypePathTypeEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicTypePathType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['PrismicTypePathTypeGroupConnection']>, ParentType, ContextType, RequireFields<PrismicTypePathTypeGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryFileArgs, never>>;
  allFile?: Resolver<ResolversTypes['FileConnection'], ParentType, ContextType, RequireFields<QueryAllFileArgs, never>>;
  directory?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType, RequireFields<QueryDirectoryArgs, never>>;
  allDirectory?: Resolver<ResolversTypes['DirectoryConnection'], ParentType, ContextType, RequireFields<QueryAllDirectoryArgs, never>>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType, RequireFields<QuerySiteArgs, never>>;
  allSite?: Resolver<ResolversTypes['SiteConnection'], ParentType, ContextType, RequireFields<QueryAllSiteArgs, never>>;
  siteFunction?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType, RequireFields<QuerySiteFunctionArgs, never>>;
  allSiteFunction?: Resolver<ResolversTypes['SiteFunctionConnection'], ParentType, ContextType, RequireFields<QueryAllSiteFunctionArgs, never>>;
  sitePage?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType, RequireFields<QuerySitePageArgs, never>>;
  allSitePage?: Resolver<ResolversTypes['SitePageConnection'], ParentType, ContextType, RequireFields<QueryAllSitePageArgs, never>>;
  sitePlugin?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType, RequireFields<QuerySitePluginArgs, never>>;
  allSitePlugin?: Resolver<ResolversTypes['SitePluginConnection'], ParentType, ContextType, RequireFields<QueryAllSitePluginArgs, never>>;
  siteBuildMetadata?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType, RequireFields<QuerySiteBuildMetadataArgs, never>>;
  allSiteBuildMetadata?: Resolver<ResolversTypes['SiteBuildMetadataConnection'], ParentType, ContextType, RequireFields<QueryAllSiteBuildMetadataArgs, never>>;
  prismicEmbedType?: Resolver<Maybe<ResolversTypes['PrismicEmbedType']>, ParentType, ContextType, RequireFields<QueryPrismicEmbedTypeArgs, never>>;
  allPrismicEmbedType?: Resolver<ResolversTypes['PrismicEmbedTypeConnection'], ParentType, ContextType, RequireFields<QueryAllPrismicEmbedTypeArgs, never>>;
  prismicTypePathType?: Resolver<Maybe<ResolversTypes['PrismicTypePathType']>, ParentType, ContextType, RequireFields<QueryPrismicTypePathTypeArgs, never>>;
  allPrismicTypePathType?: Resolver<ResolversTypes['PrismicTypePathTypeConnection'], ParentType, ContextType, RequireFields<QueryAllPrismicTypePathTypeArgs, never>>;
  prismicBlogCategory?: Resolver<Maybe<ResolversTypes['PrismicBlogCategory']>, ParentType, ContextType, RequireFields<QueryPrismicBlogCategoryArgs, never>>;
  allPrismicBlogCategory?: Resolver<ResolversTypes['PrismicBlogCategoryConnection'], ParentType, ContextType, RequireFields<QueryAllPrismicBlogCategoryArgs, never>>;
  prismicBlogPost?: Resolver<Maybe<ResolversTypes['PrismicBlogPost']>, ParentType, ContextType, RequireFields<QueryPrismicBlogPostArgs, never>>;
  allPrismicBlogPost?: Resolver<ResolversTypes['PrismicBlogPostConnection'], ParentType, ContextType, RequireFields<QueryAllPrismicBlogPostArgs, never>>;
  imageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType, RequireFields<QueryImageSharpArgs, never>>;
  allImageSharp?: Resolver<ResolversTypes['ImageSharpConnection'], ParentType, ContextType, RequireFields<QueryAllImageSharpArgs, never>>;
};

export type SiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<SiteBuildTimeArgs, never>>;
  siteMetadata?: Resolver<Maybe<ResolversTypes['SiteSiteMetadata']>, ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polyfill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pathPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteBuildMetadata'] = ResolversParentTypes['SiteBuildMetadata']> = {
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<SiteBuildMetadataBuildTimeArgs, never>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteBuildMetadataConnection'] = ResolversParentTypes['SiteBuildMetadataConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteBuildMetadataGroupConnection']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteBuildMetadataEdge'] = ResolversParentTypes['SiteBuildMetadataEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteBuildMetadata'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteBuildMetadataGroupConnection'] = ResolversParentTypes['SiteBuildMetadataGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteBuildMetadataGroupConnection']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteConnection'] = ResolversParentTypes['SiteConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteGroupConnection']>, ParentType, ContextType, RequireFields<SiteConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteEdge'] = ResolversParentTypes['SiteEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Site'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFunction'] = ResolversParentTypes['SiteFunction']> = {
  functionRoute?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pluginName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalAbsoluteFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalRelativeFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeCompiledFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absoluteCompiledFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFunctionConnection'] = ResolversParentTypes['SiteFunctionConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteFunctionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteFunctionGroupConnection']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFunctionEdge'] = ResolversParentTypes['SiteFunctionEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteFunction'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFunctionGroupConnection'] = ResolversParentTypes['SiteFunctionGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteFunctionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteFunctionGroupConnection']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteGroupConnection'] = ResolversParentTypes['SiteGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteGroupConnection']>, ParentType, ContextType, RequireFields<SiteGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePage'] = ResolversParentTypes['SitePage']> = {
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  component?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  internalComponentName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  componentChunkName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  isCreatedByStatefulCreatePages?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pluginCreator?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pluginCreatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageConnection'] = ResolversParentTypes['SitePageConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePageConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePageGroupConnection']>, ParentType, ContextType, RequireFields<SitePageConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageEdge'] = ResolversParentTypes['SitePageEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePage'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageGroupConnection'] = ResolversParentTypes['SitePageGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePageGroupConnection']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePlugin'] = ResolversParentTypes['SitePlugin']> = {
  resolve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  browserAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ssrAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pluginFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pluginOptions?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptions']>, ParentType, ContextType>;
  packageJson?: Resolver<Maybe<ResolversTypes['SitePluginPackageJson']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginConnection'] = ResolversParentTypes['SitePluginConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePluginConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePluginGroupConnection']>, ParentType, ContextType, RequireFields<SitePluginConnectionGroupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginEdge'] = ResolversParentTypes['SitePluginEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePlugin'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginGroupConnection'] = ResolversParentTypes['SitePluginGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionDistinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionMinArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionSumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePluginGroupConnection']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionGroupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPackageJson'] = ResolversParentTypes['SitePluginPackageJson']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  main?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonDependencies']>>>, ParentType, ContextType>;
  devDependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonDevDependencies']>>>, ParentType, ContextType>;
  peerDependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonPeerDependencies']>>>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonDependenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPackageJsonDependencies'] = ResolversParentTypes['SitePluginPackageJsonDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonDevDependenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPackageJsonDevDependencies'] = ResolversParentTypes['SitePluginPackageJsonDevDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonPeerDependenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPackageJsonPeerDependencies'] = ResolversParentTypes['SitePluginPackageJsonPeerDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptions'] = ResolversParentTypes['SitePluginPluginOptions']> = {
  sourceMap?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cssPropOptimization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  autoLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelFormat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repositoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customTypesApiToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  apiEndpoint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageImgixParams?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsImageImgixParams']>, ParentType, ContextType>;
  imagePlaceholderImgixParams?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsImagePlaceholderImgixParams']>, ParentType, ContextType>;
  schemas?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemas']>, ParentType, ContextType>;
  output?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createLinkInHead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  entryLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base64Width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stripMetadata?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  defaultQuality?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failOnError?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTSX?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jsxPragma?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allExtensions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  headers?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsHeaders']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pathCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsHeadersResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsHeaders'] = ResolversParentTypes['SitePluginPluginOptionsHeaders']> = {
  _fonts__?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  _xxxxwoff?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  _xxxxwoff2?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsImageImgixParamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsImageImgixParams'] = ResolversParentTypes['SitePluginPluginOptionsImageImgixParams']> = {
  auto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  q?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsImagePlaceholderImgixParamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsImagePlaceholderImgixParams'] = ResolversParentTypes['SitePluginPluginOptionsImagePlaceholderImgixParams']> = {
  w?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blur?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemas'] = ResolversParentTypes['SitePluginPluginOptionsSchemas']> = {
  blog_category?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_category']>, ParentType, ContextType>;
  blog_post?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_category'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_category']> = {
  Main?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_categoryMain']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMain'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMain']> = {
  uid?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_categoryMainUid']>, ParentType, ContextType>;
  category_name?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_categoryMainCategory_name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMainCategory_name'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMainCategory_name']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfig']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainUidResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMainUid'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMainUid']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_categoryMainUidConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMainUidConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_categoryMainUidConfig']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_post'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_post']> = {
  Main?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMain']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMain'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMain']> = {
  uid?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainUid']>, ParentType, ContextType>;
  blog_title?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_title']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainDate']>, ParentType, ContextType>;
  blog_category?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_category']>, ParentType, ContextType>;
  featured_image?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainFeatured_image']>, ParentType, ContextType>;
  post_content?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainPost_content']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_category'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_category']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfig']> = {
  select?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customtypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_title'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_title']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfig']> = {
  single?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainDate'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainDate']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainDateConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainDateConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainDateConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainDateConfig']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainFeatured_image'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainFeatured_image']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfig']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainPost_content'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainPost_content']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfig']> = {
  multi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainUidResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainUid'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainUid']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSchemasBlog_postMainUidConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasBlog_PostMainUidConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainUidConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasBlog_postMainUidConfig']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteSiteMetadata'] = ResolversParentTypes['SiteSiteMetadata']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Directory?: DirectoryResolvers<ContextType>;
  DirectoryConnection?: DirectoryConnectionResolvers<ContextType>;
  DirectoryEdge?: DirectoryEdgeResolvers<ContextType>;
  DirectoryGroupConnection?: DirectoryGroupConnectionResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FileConnection?: FileConnectionResolvers<ContextType>;
  FileEdge?: FileEdgeResolvers<ContextType>;
  FileGroupConnection?: FileGroupConnectionResolvers<ContextType>;
  ImageSharp?: ImageSharpResolvers<ContextType>;
  ImageSharpConnection?: ImageSharpConnectionResolvers<ContextType>;
  ImageSharpEdge?: ImageSharpEdgeResolvers<ContextType>;
  ImageSharpFixed?: ImageSharpFixedResolvers<ContextType>;
  ImageSharpFluid?: ImageSharpFluidResolvers<ContextType>;
  ImageSharpGroupConnection?: ImageSharpGroupConnectionResolvers<ContextType>;
  ImageSharpOriginal?: ImageSharpOriginalResolvers<ContextType>;
  ImageSharpResize?: ImageSharpResizeResolvers<ContextType>;
  ImgixFixed?: ImgixFixedResolvers<ContextType>;
  ImgixFluid?: ImgixFluidResolvers<ContextType>;
  Internal?: InternalResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PrismicAllDocumentTypes?: PrismicAllDocumentTypesResolvers<ContextType>;
  PrismicAlternateLanguageType?: PrismicAlternateLanguageTypeResolvers<ContextType>;
  PrismicBlogCategory?: PrismicBlogCategoryResolvers<ContextType>;
  PrismicBlogCategoryConnection?: PrismicBlogCategoryConnectionResolvers<ContextType>;
  PrismicBlogCategoryDataType?: PrismicBlogCategoryDataTypeResolvers<ContextType>;
  PrismicBlogCategoryEdge?: PrismicBlogCategoryEdgeResolvers<ContextType>;
  PrismicBlogCategoryGroupConnection?: PrismicBlogCategoryGroupConnectionResolvers<ContextType>;
  PrismicBlogPost?: PrismicBlogPostResolvers<ContextType>;
  PrismicBlogPostConnection?: PrismicBlogPostConnectionResolvers<ContextType>;
  PrismicBlogPostDataFeaturedImageImageType?: PrismicBlogPostDataFeaturedImageImageTypeResolvers<ContextType>;
  PrismicBlogPostDataType?: PrismicBlogPostDataTypeResolvers<ContextType>;
  PrismicBlogPostEdge?: PrismicBlogPostEdgeResolvers<ContextType>;
  PrismicBlogPostGroupConnection?: PrismicBlogPostGroupConnectionResolvers<ContextType>;
  PrismicEmbedType?: PrismicEmbedTypeResolvers<ContextType>;
  PrismicEmbedTypeConnection?: PrismicEmbedTypeConnectionResolvers<ContextType>;
  PrismicEmbedTypeEdge?: PrismicEmbedTypeEdgeResolvers<ContextType>;
  PrismicEmbedTypeGroupConnection?: PrismicEmbedTypeGroupConnectionResolvers<ContextType>;
  PrismicGeoPointType?: PrismicGeoPointTypeResolvers<ContextType>;
  PrismicImageDimensionsType?: PrismicImageDimensionsTypeResolvers<ContextType>;
  PrismicImageThumbnailType?: PrismicImageThumbnailTypeResolvers<ContextType>;
  PrismicLinkType?: PrismicLinkTypeResolvers<ContextType>;
  PrismicSliceType?: PrismicSliceTypeResolvers<ContextType>;
  PrismicStructuredTextType?: PrismicStructuredTextTypeResolvers<ContextType>;
  PrismicTypePathType?: PrismicTypePathTypeResolvers<ContextType>;
  PrismicTypePathTypeConnection?: PrismicTypePathTypeConnectionResolvers<ContextType>;
  PrismicTypePathTypeEdge?: PrismicTypePathTypeEdgeResolvers<ContextType>;
  PrismicTypePathTypeGroupConnection?: PrismicTypePathTypeGroupConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SiteBuildMetadata?: SiteBuildMetadataResolvers<ContextType>;
  SiteBuildMetadataConnection?: SiteBuildMetadataConnectionResolvers<ContextType>;
  SiteBuildMetadataEdge?: SiteBuildMetadataEdgeResolvers<ContextType>;
  SiteBuildMetadataGroupConnection?: SiteBuildMetadataGroupConnectionResolvers<ContextType>;
  SiteConnection?: SiteConnectionResolvers<ContextType>;
  SiteEdge?: SiteEdgeResolvers<ContextType>;
  SiteFunction?: SiteFunctionResolvers<ContextType>;
  SiteFunctionConnection?: SiteFunctionConnectionResolvers<ContextType>;
  SiteFunctionEdge?: SiteFunctionEdgeResolvers<ContextType>;
  SiteFunctionGroupConnection?: SiteFunctionGroupConnectionResolvers<ContextType>;
  SiteGroupConnection?: SiteGroupConnectionResolvers<ContextType>;
  SitePage?: SitePageResolvers<ContextType>;
  SitePageConnection?: SitePageConnectionResolvers<ContextType>;
  SitePageEdge?: SitePageEdgeResolvers<ContextType>;
  SitePageGroupConnection?: SitePageGroupConnectionResolvers<ContextType>;
  SitePlugin?: SitePluginResolvers<ContextType>;
  SitePluginConnection?: SitePluginConnectionResolvers<ContextType>;
  SitePluginEdge?: SitePluginEdgeResolvers<ContextType>;
  SitePluginGroupConnection?: SitePluginGroupConnectionResolvers<ContextType>;
  SitePluginPackageJson?: SitePluginPackageJsonResolvers<ContextType>;
  SitePluginPackageJsonDependencies?: SitePluginPackageJsonDependenciesResolvers<ContextType>;
  SitePluginPackageJsonDevDependencies?: SitePluginPackageJsonDevDependenciesResolvers<ContextType>;
  SitePluginPackageJsonPeerDependencies?: SitePluginPackageJsonPeerDependenciesResolvers<ContextType>;
  SitePluginPluginOptions?: SitePluginPluginOptionsResolvers<ContextType>;
  SitePluginPluginOptionsHeaders?: SitePluginPluginOptionsHeadersResolvers<ContextType>;
  SitePluginPluginOptionsImageImgixParams?: SitePluginPluginOptionsImageImgixParamsResolvers<ContextType>;
  SitePluginPluginOptionsImagePlaceholderImgixParams?: SitePluginPluginOptionsImagePlaceholderImgixParamsResolvers<ContextType>;
  SitePluginPluginOptionsSchemas?: SitePluginPluginOptionsSchemasResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_category?: SitePluginPluginOptionsSchemasBlog_CategoryResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_categoryMain?: SitePluginPluginOptionsSchemasBlog_CategoryMainResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_name?: SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_categoryMainCategory_nameConfig?: SitePluginPluginOptionsSchemasBlog_CategoryMainCategory_NameConfigResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_categoryMainUid?: SitePluginPluginOptionsSchemasBlog_CategoryMainUidResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_categoryMainUidConfig?: SitePluginPluginOptionsSchemasBlog_CategoryMainUidConfigResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_post?: SitePluginPluginOptionsSchemasBlog_PostResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMain?: SitePluginPluginOptionsSchemasBlog_PostMainResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_category?: SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_categoryConfig?: SitePluginPluginOptionsSchemasBlog_PostMainBlog_CategoryConfigResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_title?: SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainBlog_titleConfig?: SitePluginPluginOptionsSchemasBlog_PostMainBlog_TitleConfigResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainDate?: SitePluginPluginOptionsSchemasBlog_PostMainDateResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainDateConfig?: SitePluginPluginOptionsSchemasBlog_PostMainDateConfigResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_image?: SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainFeatured_imageConfig?: SitePluginPluginOptionsSchemasBlog_PostMainFeatured_ImageConfigResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainPost_content?: SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainPost_contentConfig?: SitePluginPluginOptionsSchemasBlog_PostMainPost_ContentConfigResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainUid?: SitePluginPluginOptionsSchemasBlog_PostMainUidResolvers<ContextType>;
  SitePluginPluginOptionsSchemasBlog_postMainUidConfig?: SitePluginPluginOptionsSchemasBlog_PostMainUidConfigResolvers<ContextType>;
  SiteSiteMetadata?: SiteSiteMetadataResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  childOf?: ChildOfDirectiveResolver<any, any, ContextType>;
  dateformat?: DateformatDirectiveResolver<any, any, ContextType>;
  dontInfer?: DontInferDirectiveResolver<any, any, ContextType>;
  fileByRelativePath?: FileByRelativePathDirectiveResolver<any, any, ContextType>;
  infer?: InferDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  mimeTypes?: MimeTypesDirectiveResolver<any, any, ContextType>;
  nodeInterface?: NodeInterfaceDirectiveResolver<any, any, ContextType>;
  proxy?: ProxyDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;