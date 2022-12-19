
import './App.css';

/* import { useRoutes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom' */
import {Routes, Route, Link} from 'react-router-dom'

import { LinksPage } from './pages/LinksPage';
import { AuthPage } from './pages/AuthPage';
import { CreatePage } from './pages/CreatePage';
import { DetailPage } from './pages/DetailPage';
import { HomePage } from './pages/HomePage';
/* import { Menu } from './compMy/Menu'; */
import { NoFound } from './pages/NoFound';
import { Layout } from './compMy/Layout';
import { BlogPage } from './pages/BlogPage';
import { SinglePage } from './pages/SinglePage';
import { DoctorSinglPage } from './pages/DoctorSinglPage';
import { DoctorsAll } from './pages/DoctorsAll';
import { Service } from './pages/Service';
import { ServiceSingle } from './pages/ServiceSingle';





const App = () => {



  return (
    <div className=''>
      <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<HomePage/>} />
        <Route path="create" element={<CreatePage/>} />
        <Route path="links" element={<LinksPage/>} />
        <Route path="auth" element={<AuthPage/>} />
        <Route path="detaile" element={<DetailPage/>} />
        <Route path="blog" element={<BlogPage/>} />
        <Route path="blog/:id" element={<SinglePage/>} />
        <Route path="doctor/:id" element={<DoctorSinglPage/>}/>
        <Route path="doctor" element={<DoctorsAll/>} />
        <Route path="service" element={<Service/>}/>
        <Route path="service/:id" element={<ServiceSingle/>}/>
        <Route path="*" element={<NoFound/>}/>
      </Route>
    </Routes>
  
    </div>
  )
}

export default  App;


