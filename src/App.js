import './App.scss';
import {Route, Routes, useLocation} from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Home from './components/Home';
import {AnimatePresence} from 'framer-motion'

function App() {
    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/my-projects" element={<Projects color={'teal'}/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default App;