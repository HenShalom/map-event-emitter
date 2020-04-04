import { v4 as uuidv4 } from 'uuid';


const DEFAULT_RADIUS = 200
const DEFAULT_COLOR = "blue"

export default class Tower {
  constructor(location, settings, id) {
    this.key = id || uuidv4()
    this.location = location
    this.radius = settings.radius || DEFAULT_RADIUS
    this.color = settings.color || DEFAULT_COLOR
    this.split = settings.split || []
  }
}