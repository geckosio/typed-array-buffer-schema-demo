import { mainModel } from './schema'
import { messages } from './events'

const worldState = {
  time: new Date().getTime(),
  tick: 1234,
  players: [
    {
      id: 0,
      name: 'Thisç',
      x: 14.58645979,
      y: -32.8454547,
    },
    {
      id: 1,
      name: 'Thisç',
      x: -15.58645979,
      y: -32.8454547,
    },
  ],
}

setTimeout(() => {
  const buffer = mainModel.toBuffer(worldState)

  messages.emit('update', buffer)
}, 1000)
