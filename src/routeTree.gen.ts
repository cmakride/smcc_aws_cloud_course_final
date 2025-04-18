/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TestImport } from './routes/test'
import { Route as GetPlaylistImport } from './routes/getPlaylist'
import { Route as CreateUserImport } from './routes/createUser'
import { Route as CreateSongImport } from './routes/createSong'
import { Route as PublicImport } from './routes/_public'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TestRoute = TestImport.update({
  id: '/test',
  path: '/test',
  getParentRoute: () => rootRoute,
} as any)

const GetPlaylistRoute = GetPlaylistImport.update({
  id: '/getPlaylist',
  path: '/getPlaylist',
  getParentRoute: () => rootRoute,
} as any)

const CreateUserRoute = CreateUserImport.update({
  id: '/createUser',
  path: '/createUser',
  getParentRoute: () => rootRoute,
} as any)

const CreateSongRoute = CreateSongImport.update({
  id: '/createSong',
  path: '/createSong',
  getParentRoute: () => rootRoute,
} as any)

const PublicRoute = PublicImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      id: '/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/createSong': {
      id: '/createSong'
      path: '/createSong'
      fullPath: '/createSong'
      preLoaderRoute: typeof CreateSongImport
      parentRoute: typeof rootRoute
    }
    '/createUser': {
      id: '/createUser'
      path: '/createUser'
      fullPath: '/createUser'
      preLoaderRoute: typeof CreateUserImport
      parentRoute: typeof rootRoute
    }
    '/getPlaylist': {
      id: '/getPlaylist'
      path: '/getPlaylist'
      fullPath: '/getPlaylist'
      preLoaderRoute: typeof GetPlaylistImport
      parentRoute: typeof rootRoute
    }
    '/test': {
      id: '/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof TestImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof PublicRoute
  '/createSong': typeof CreateSongRoute
  '/createUser': typeof CreateUserRoute
  '/getPlaylist': typeof GetPlaylistRoute
  '/test': typeof TestRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof PublicRoute
  '/createSong': typeof CreateSongRoute
  '/createUser': typeof CreateUserRoute
  '/getPlaylist': typeof GetPlaylistRoute
  '/test': typeof TestRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_public': typeof PublicRoute
  '/createSong': typeof CreateSongRoute
  '/createUser': typeof CreateUserRoute
  '/getPlaylist': typeof GetPlaylistRoute
  '/test': typeof TestRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/createSong' | '/createUser' | '/getPlaylist' | '/test'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/createSong' | '/createUser' | '/getPlaylist' | '/test'
  id:
    | '__root__'
    | '/'
    | '/_public'
    | '/createSong'
    | '/createUser'
    | '/getPlaylist'
    | '/test'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PublicRoute: typeof PublicRoute
  CreateSongRoute: typeof CreateSongRoute
  CreateUserRoute: typeof CreateUserRoute
  GetPlaylistRoute: typeof GetPlaylistRoute
  TestRoute: typeof TestRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PublicRoute: PublicRoute,
  CreateSongRoute: CreateSongRoute,
  CreateUserRoute: CreateUserRoute,
  GetPlaylistRoute: GetPlaylistRoute,
  TestRoute: TestRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_public",
        "/createSong",
        "/createUser",
        "/getPlaylist",
        "/test"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_public": {
      "filePath": "_public.tsx"
    },
    "/createSong": {
      "filePath": "createSong.tsx"
    },
    "/createUser": {
      "filePath": "createUser.tsx"
    },
    "/getPlaylist": {
      "filePath": "getPlaylist.tsx"
    },
    "/test": {
      "filePath": "test.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
