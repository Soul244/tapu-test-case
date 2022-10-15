import React, { useState, useEffect } from 'react'
import { changeLanguage } from 'i18next'
import { Select } from './styles'
import { useTranslation } from 'react-i18next'

export function LanguageSelect() {
  const [language, setLanguage] = useState('')
  const { i18n } = useTranslation()

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  const handleLanguage = (e) => {
    changeLanguage(e.target.value)
  }

  return (
    <Select name="locale" id="locale" onChange={handleLanguage} value={language}>
      <option value="tr">Turkish</option>
      <option value="en">English</option>
    </Select>
  )
}
