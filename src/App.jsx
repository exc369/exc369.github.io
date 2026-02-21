import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'

function App() {
  const [activePage, setActivePage] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavigate = (page) => {
    setActivePage(page)
    window.scrollTo(0, 0)
  }

  return (
    <main>
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-content">
        <Navbar activePage={activePage} onNavigate={handleNavigate} />
        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
      </div>
    </main>
  )
}

export default App
