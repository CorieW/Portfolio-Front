import { useState, useEffect } from 'react'
import './ThemeSelect.css'

export default function ThemeSelect()
{
  const themes = useState({
      LIGHT: 'light',
      DARK: 'dark'
    })
  const [activeTheme, setActiveTheme] = useState(themes.LIGHT)
  
  useEffect(() => {
    const parsedActiveTheme = localStorage.getItem('activeTheme') || themes.LIGHT
    setActiveTheme(parsedActiveTheme)
  }, [themes])

  useEffect(() => {
    const root = document.documentElement;

    localStorage.setItem('activeTheme', activeTheme)

    if (activeTheme === themes.LIGHT)
    {
      root.style.setProperty('--primary-color', 'mediumslateblue');
      root.style.setProperty('--bg-color', 'white');
      root.style.setProperty('--secondary-bg-color', 'whitesmoke');
      root.style.setProperty('--header-color', 'black');
      root.style.setProperty('--text-color', 'rgb(25, 25, 25)');
      root.style.setProperty('--slideshow-btn-color', 'mediumslateblue');
      root.style.setProperty('--social-btn-color', 'black');
      root.style.setProperty('--link-color', 'mediumslateblue');
      root.style.setProperty('--button-color', 'mediumslateblue');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.2)');
      root.style.setProperty('--soft-transparent-color', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--hard-transparent-color', 'rgba(0, 0, 0, 0.2)');
    }
    else if (activeTheme === themes.DARK)
    {
      root.style.setProperty('--primary-color', 'mediumslateblue');
      root.style.setProperty('--bg-color', 'rgb(25, 25, 25)');
      root.style.setProperty('--secondary-bg-color', 'rgb(50, 50, 50)');
      root.style.setProperty('--header-color', 'white');
      root.style.setProperty('--text-color', 'whitesmoke');
      root.style.setProperty('--slideshow-btn-color', 'mediumslateblue');
      root.style.setProperty('--social-btn-color', 'white');
      root.style.setProperty('--link-color', 'mediumslateblue');
      root.style.setProperty('--button-color', 'mediumslateblue');
      root.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.2)');
      root.style.setProperty('--soft-transparent-color', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--hard-transparent-color', 'rgba(255, 255, 255, 0.2)');
    }
  }, [themes, activeTheme])

  return (
      <div id='theme-select-container'>
          <p>Select theme:</p>
          <button id='light-theme-select-btn' className={ `theme-select-btn ${ activeTheme === themes.LIGHT ? 'active' : '' }` } onClick={ () => setActiveTheme(themes.LIGHT) }></button>
          <button id='dark-theme-select-btn' className={ `theme-select-btn ${ activeTheme === themes.DARK ? 'active' : '' }` } onClick={ () => setActiveTheme(themes.DARK) }></button>
      </div>
  )
}
