import React, { Component } from 'react'
import styled from 'styled-components/native'
import theme from '~/styles/theme'

type ContainerProps = {}

class Container extends Component<ContainerProps> {
  render() {
    return <ViewContainer>{this.props.children}</ViewContainer>
  }
}

export default Container

const ViewContainer = styled.View`
  padding: ${theme.safeAreaSpacing} ${theme.spacing4};
`
