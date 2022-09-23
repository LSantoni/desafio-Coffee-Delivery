import { MapPin } from 'phosphor-react'

import { Content, DeliveryInfo, DesliveryCompletedContainer } from './styles'

import delivery from '../../assets/icons/delivery.svg';

export function DeliveryCompleted() {
  return (
    <DesliveryCompletedContainer>
      <Content>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <DeliveryInfo>
          
        </DeliveryInfo>
      </Content>
      <img src={delivery} alt="" />
    </DesliveryCompletedContainer>
  )
}