import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'

import { Content, DeliveryInfo, DeliveryInfoContainer, DesliveryCompletedContainer } from './styles'

import delivery from '../../assets/icons/delivery.svg';

export function DeliveryCompleted() {
  return (
    <DesliveryCompletedContainer>
      <Content>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </header>
        <DeliveryInfoContainer>
          <div id='border-background'>
            <DeliveryInfo coffeeColors="purple">
              <MapPin size={20} />
              <div>
                <p>Entrega em <span>Rua João Daniel Matinelli, 102</span></p>
                <p>Farrapos - Poto Alegre, RS</p>
              </div>
            </DeliveryInfo>
            <DeliveryInfo coffeeColors="yellow">
              <Timer size={20} />
              <div>
                <p>Previsão de entrega</p>
                <p><span>20 - 30 min</span></p>
              </div>
            </DeliveryInfo>
            <DeliveryInfo coffeeColors="orange">
              <CurrencyDollar size={20} />
              <div>
                <p>Pagamento na entrega</p>
                <p><span>Cartão de Crédito</span></p>
              </div>
            </DeliveryInfo>
          </div>
        </DeliveryInfoContainer>
      </Content>
      <img src={delivery} alt="" />
    </DesliveryCompletedContainer>
  )
}