import { EventEmitter } from 'eventemitter3'

class Events extends EventEmitter {}

export const messages = new Events()
