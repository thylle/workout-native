import React, { Component } from 'react'
import styled from 'styled-components/native'
import theme from '~/styles/theme'
import { TextInput, TextInputProps } from 'react-native'

type OwnProps = {} & TextInputProps

class Input extends Component<OwnProps> {
  render() {
    return (
      <InputField {...this.props} placeholderTextColor={theme.textColor}>
        {this.props.children}
      </InputField>
    )
  }
}

export default Input

const InputField = styled.TextInput`
  width: 100%;
  padding: ${theme.spacing4};
  text-align: center;
  border: 1px solid ${theme.grayLight};
`
