import { mainModel } from './schema'
import { messages } from './events'

messages.on('update', buffer => {
  const data = mainModel.fromBuffer(buffer)

  console.log('[CLIENT]', 'buffer.byteLength', buffer.byteLength)
  console.log('[CLIENT]', 'data.length', JSON.stringify(data).length)
  console.log('[CLIENT]', data)
})
