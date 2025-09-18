"use client"

import { useState } from "react"

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("blue")

  const themes = {
    blue: {
      name: "Blue Theme",
      primary: "#2563eb",
      primaryDark: "#1e40af",
      primaryLight: "#dbeafe"
    },
    green: {
      name: "Green Theme",
      primary: "#16a34a",
      primaryDark: "#15803d",
      primaryLight: "#dcfce7"
    },
    purple: {
      name: "Purple Theme",
      primary: "#9333ea",
      primaryDark: "#7c3aed",
      primaryLight: "#f3e8ff"
    },
    red: {
      name: "Red Theme",
      primary: "#dc2626",
      primaryDark: "#b91c1c",
      primaryLight: "#fee2e2"
    }
  }

  const changeTheme = (themeName: string) => {
    setCurrentTheme(themeName)
    const theme = themes[themeName as keyof typeof themes]
    
    // Update CSS variables
    document.documentElement.style.setProperty('--color-primary-600', theme.primary)
    document.documentElement.style.setProperty('--color-primary-800', theme.primaryDark)
    document.documentElement.style.setProperty('--color-primary-100', theme.primaryLight)
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Theme Switcher</h3>
      <div className="space-y-2">
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => changeTheme(key)}
            className={`w-full px-3 py-2 text-xs rounded-md transition-colors ${
              currentTheme === key
                ? 'bg-primary-100 text-primary-700 border border-primary-300'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Change colors instantly!
      </p>
    </div>
  )
}

export default ThemeSwitcher 