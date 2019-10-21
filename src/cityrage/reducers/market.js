import market from '../Cards/cards';

export default function (state = market, action) {
  switch (action.type) {
    case 'BUY_CARD':
      return action.payload;
    case 'DEAL_CARD':
      return action.payload;
    case 'DEAL_NEW_MARKET':
      return action.payload;
    default:
      return state;
  }
}
