import {
  BufferSchema,
  Model,
  string16,
} from '@geckos.io/typed-array-buffer-schema'
import {
  uint8,
  int16,
  uint16,
  int64,
  string8,
} from '@geckos.io/typed-array-buffer-schema'

const playerSchema = BufferSchema.schema('player', {
  id: uint8,
  name: { type: string8, length: 5 },
  x: { type: int16, digits: 3 },
  y: { type: int16, digits: 3 },
})

const mainSchema = BufferSchema.schema('main', {
  time: int64,
  tick: uint16,
  players: [playerSchema],
})

export const mainModel = new Model(mainSchema)
