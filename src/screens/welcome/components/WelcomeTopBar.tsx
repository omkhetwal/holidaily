import React from 'react'
import { Box, useTheme } from 'utils/theme'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BackArrowIcon from 'assets/icons/icon-back2.svg'
import AboutIcon from 'assets/icons/icon-info2.svg'
import { isIos } from 'utils/layout'
import { AuthNavigationType } from 'navigation/types'

type WelcomeTopBarProps = { openModal: F0 }

export const WelcomeTopBar = ({ openModal }: WelcomeTopBarProps) => {
  const { navigate } = useNavigation<AuthNavigationType<'WELCOME'>>()
  const theme = useTheme()

  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      paddingTop={isIos ? 's' : 'l'}>
      <Box>
        <TouchableOpacity
          onPress={() => navigate('SLIDER', { disableInitialAnimation: true })}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
          <BackArrowIcon height={18} width={18} color={theme.colors.black} />
        </TouchableOpacity>
      </Box>
      <Box>
        <TouchableOpacity
          onPress={openModal}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
          <AboutIcon height={23} width={23} color={theme.colors.grey} />
        </TouchableOpacity>
      </Box>
    </Box>
  )
}
