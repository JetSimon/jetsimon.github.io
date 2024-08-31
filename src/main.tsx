import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutMe from './AboutMe.tsx'
import ErrorPage from './ErrorPage.tsx';
import Portfolio from './Portfolio.tsx';
import './index.css'
import Layout from './Layout.tsx';
import Blog from './Blog.tsx';
import BlogPostList from './BlogPostList.tsx';

const router = createBrowserRouter([
  {
  element: <Layout></Layout>,
  errorElement: <ErrorPage></ErrorPage>,
  children: [
    {
      path: "/",
      element: <AboutMe></AboutMe>,
    },
    {
      path: "/portfolio",
      element: <Portfolio></Portfolio>
    },
    {
      path: "/blog",
      element: <BlogPostList></BlogPostList>
    },
    {
      path: "/blog/:postId",
      element: <Blog></Blog>
    }
  ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
