import React, { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, Wrapper } from './styles'
import { AppContext } from 'contexts/AppContext'
import ACTIONS from 'reducers/user/actions'
import { LanguageSelect } from '../LanguageSelect'

import { Hr } from 'components/Hr'
import { Button } from 'components/Button'
import { H1 } from 'components/Typography'

export function Logged() {
  const { userState, dispatchUser } = useContext(AppContext)
  const { t, i18n } = useTranslation()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatchUser({ type: ACTIONS.LOGOUT })
  }

  const maskedPassword = useMemo(() => {
    const firstFourLetter = userState.user.password.substring(0, 4)
    return firstFourLetter.padEnd(userState.user.password.length, '*')
  }, [userState.user.password])

  return (
    <Wrapper>
      <H1>{t('account.about')}</H1>
      <Text>
        {t('account.email')}: {userState.user.name}
      </Text>
      <Text>
        {t('account.password')}: {maskedPassword}
      </Text>
      <Text>
        {t('account.current_locale')}: {i18n.language.toUpperCase()}
      </Text>
      <Hr margin="20px 0"></Hr>
      <LanguageSelect></LanguageSelect>
      <Button type="button" onClick={handleLogout} isBordered>
        {t('account.logout')}
      </Button>
    </Wrapper>
  )
}
