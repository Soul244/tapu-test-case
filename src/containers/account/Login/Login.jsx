import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Form, H1, Input } from './styles'
import { AppContext } from 'contexts/AppContext'
import ACTIONS from 'reducers/user/actions'
import { LanguageSelect } from '../LanguageSelect'
import { Button } from 'components/Button'

export function Login() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })

  const { dispatchUser } = useContext(AppContext)
  const { t } = useTranslation()

  const handleLogin = (e) => {
    e.preventDefault()
    dispatchUser({ type: ACTIONS.LOGIN, payload: { user: formData } })
  }

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Form onSubmit={handleLogin}>
      <H1>{t('account.about')}</H1>
      <Input type="email" name="name" onChange={handleFormData} value={formData.name} placeholder={t('account.email')} required />
      <Input type="password" name="password" onChange={handleFormData} placeholder={t('account.password')} />
      <LanguageSelect></LanguageSelect>
      <Button type="submit">{t('account.signup')}</Button>
    </Form>
  )
}
