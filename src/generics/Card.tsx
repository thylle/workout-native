import React, { Component } from 'react'
import styled from 'styled-components/native'
import theme from '~/styles/theme'

type OwnProps = {
  title: string
}

class Card extends Component<OwnProps> {
  render() {
    const { title } = this.props

    return (
      <View>
        <Title>{title}</Title>
      </View>
    )
  }
}

export default Card

const View = styled.View`
  margin-bottom: ${theme.spacing4};
  padding: ${theme.spacing4};
  background: ${theme.white};
`

const Title = styled.Text`
  text-transform: uppercase;
`
