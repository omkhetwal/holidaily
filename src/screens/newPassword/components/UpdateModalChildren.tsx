import React, { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CustomButton } from 'components/CustomButton'
import { Box, Text, theme } from 'utils/theme/index'
import { AppNavigationType } from 'navigation/types'

export const UpdateModalChildren: FC = () => {
  const { t } = useTranslation('updatePasswordModal')
  const navigation = useNavigation<AppNavigationType<'NewPassword'>>()

  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login')
  }, [navigation])

  return (
    <Box backgroundColor="primary" alignItems="center" padding="lplus" borderRadius="mplus">
      <Text variant="boldBlack18">{t('passwordUpdated')}</Text>
      <Box
        backgroundColor="tertiary"
        marginVertical="xl"
        width={59}
        height={59}
        borderRadius="xm"
      />
      <TouchableOpacity onPress={navigateToLogin}>
        <CustomButton
          label={t('loginButton')}
          variant="blackBgButton"
          marginTop={theme.spacing.xl}
          marginBottom={theme.spacing.m}
        />
      </TouchableOpacity>
    </Box>
  )
}