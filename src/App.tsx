import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Home, Project } from './pages'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Project />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}