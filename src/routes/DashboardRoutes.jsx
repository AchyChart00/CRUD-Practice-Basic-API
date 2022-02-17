import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateCrud } from '../components/crud_ui/Create'
import { DeleteCrud } from '../components/crud_ui/Delete'
import { ReadCrud } from '../components/crud_ui/Read'
import { UpdateCrud } from '../components/crud_ui/Update'
import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <div>

        <NavBar />
        <Routes>
            <Route path="create" element={<CreateCrud />} />
            <Route path="read" element={<ReadCrud />} />
            <Route path="update" element={<UpdateCrud />} />
            <Route path="delete" element={<DeleteCrud />} />
            
            <Route path="/" element={<CreateCrud />} /> 

            <Route />
        </Routes>
    </div>
  )
}
