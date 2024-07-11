import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {RouteObject} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PokemonDetailPage from './pages/pokemon-detail.tsx'
import ErrorPage from './pages/error.tsx'

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta/',
  cache: new InMemoryCache(),
})

const routes: RouteObject[] = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <App />},
      {path: 'pokemon/:id', element: <PokemonDetailPage />},
    ],
  },
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
