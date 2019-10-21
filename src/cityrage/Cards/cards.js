import shuffle from 'lodash/shuffle';

const cards = [
  // bellow are cards with type='discard'
  {
    title: 'Blue Shell',
    cost: 5,
    type: 'Discard',
    ability: 'LOSING PLYR +2 PTS & WINNING PLYR —2 PTS',
    effect: 'blue_shell',
  },
  {
    title: 'Golden Goose',
    cost: 4,
    type: 'Discard',
    ability: 'GAIN 2 PTS',
    effect: 'golden_goose',
  },
  {
    title: 'Demolished Treasury',
    cost: 6,
    type: 'Discard',
    ability: 'GAIN 3 PTS',
    effect: 'demolished_treasury',
  },
  {
    title: 'Kamikaze',
    cost: 4,
    type: 'Discard',
    ability: 'TAKE 3 DMG, DEAL 2 DMG TO ALL OTHER PLAYERS',
    effect: 'kamikaze',
  },
  {
    title: 'Quake',
    cost: 4,
    type: 'Discard',
    ability: 'DEAL 1 DMG TO ALL OTHER PLAYERS',
    effect: 'quake',
  },
  {
    title: 'Apocalypse',
    cost: 7,
    type: 'Discard',
    ability: 'DEAL 3 DMG TO ALL OTHER PLAYERS',
    effect: 'apocalypse',
  },
  {
    title: 'Gobbler',
    cost: 3,
    type: 'Discard',
    ability: '+4 ENERGY',
    effect: 'gobbler',
  },
  {
    title: 'PowerUp!',
    cost: 6,
    type: 'Discard',
    ability: '+8 ENERGY',
    effect: 'power_up',
  },
  {
    title: 'Super Saiyan!',
    cost: 8,
    type: 'Discard',
    ability: '+11 ENERGY',
    effect: 'super_saiyan',
  },
  {
    title: 'Heal',
    cost: 3,
    type: 'Discard',
    ability: 'GAIN 2 HEALTH',
    effect: 'heal',
  },
  {
    title: 'Miracle',
    cost: 7,
    type: 'Discard',
    ability: 'GAIN 5 HEALTH',
    effect: 'miracle',
  },
  {
    title: 'Siphon',
    cost: 5,
    type: 'Discard',
    ability: 'KING: 1 DMG TO ALL OTHER PLAYERS & HEAL BY THAT MUCH',
    effect: 'siphon',
  },
  {
    title: 'Pax Romana',
    cost: 5,
    type: 'Discard',
    ability: 'ALL PLAYERS HEAL 3',
    effect: 'pax_romana',
  },
  {
    title: 'Triple Bird',
    cost: 5,
    type: 'Discard',
    ability: '—3 HEALTH & +3 PTS',
    effect: 'triple_bird',
  },
  // bellow are cards with type='keep'

  // start: window = dice
  {
    title: 'Boost!',
    cost: 5,
    type: 'Keep',
    ability: 'DEAL +1 WHEN ATTACKING',
    effect: 'boost',
    window: 'dice',
  },
  {
    title: 'Brain Growth',
    cost: 2,
    type: 'Keep',
    ability: 'ADD A 1 TO YOUR DICE ON SUBMIT',
    effect: 'brain_growth',
    window: 'dice',
  },
  {
    title: 'Singularity',
    cost: 9,
    type: 'Keep',
    ability: 'ADD A 3 TO YOUR DICE ON SUBMIT',
    effect: 'singularity',
    window: 'dice',
  },
  // end: window = dice

  // effect on end turn
  {
    title: 'Savant',
    cost: 8,
    type: 'Discard',
    ability: 'TAKE ANOTHER TURN AFTER THIS ONE',
    effect: 'savant',
  },
  {
    title: 'Aura',
    cost: 9,
    type: 'Keep',
    ability: 'ON END TURN: +1 HEALTH',
    effect: 'aura',
    window: 'end_turn',
  },
  {
    title: 'Symbiosis X',
    cost: 3,
    type: 'Keep',
    ability: 'ON END TURN: -1 HEALTH, +2 ENERGY',
    effect: 'symbiosis_x',
    window: 'end_turn',
  },
  {
    title: 'Symbiosis Z',
    cost: 3,
    type: 'Keep',
    ability: 'ON END TURN: -2 ENERGY, +1 HEALTH',
    effect: 'symbiosis_z',
    window: 'end_turn',
  },
  {
    title: 'Symbiosis Super',
    cost: 4,
    type: 'Keep',
    ability: 'ON END TURN: -2 ENERGY, +1 POINT',
    effect: 'symbiosis_super',
    window: 'end_turn',
  },
  // end: effect on end turn
];

const market = {
  deck: shuffle(cards),
  face_up: [],
  discarded: [],
};

export default market;
