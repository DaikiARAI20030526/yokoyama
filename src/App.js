// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Header from './components/Header'
import Footer from './components/Footer'

import Top from './components/Top'
import Copy from './components/Copy'
import Slider from './components/Slider'
import News from './components/News'
import ProductContainer from './components/ProductContainer'

import Products from './components/Products'
import Caption from './components/Caption'
import Interview from './components/Interview'

import Company from './components/Company'
import Companycopy from './components/Companycopy'
import Companyinfo from './components/Companyinfo'
import Suppliers from './components/Suppliers'

import Headers from './components/Headers'
import Sliders from './components/Sliders'
import Today from './components/Today'
import RecipeContainer from './components/RecipeContainer'
import RecipeDetail    from './components/RecipeDetail'

import './styles.css'
import './products.css'
import './company.css'

function AppContent() {

  return (
    <div className="App" id ="Top">
      {/* hideHeader ロジックを削除し、常に Header を表示 */}
      <Header />
      <Routes>
        <Route path="/" element={<><Top /><Copy /><News /><ProductContainer /><Slider /></>} />
        <Route path="/products" element={<><Products /><Caption /><Interview /><Slider /></>} />
        <Route path="/company" element={<><Company /><Companycopy /><Companyinfo /><Suppliers /></>} />
        <Route path="/tyogo" element={<><Headers /><Sliders /><Today /><RecipeContainer /></>} />
        <Route path="/tyogo/:slug" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}
