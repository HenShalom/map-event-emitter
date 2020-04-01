const DEFAULT_RADIUS = 200
const DEFAULT_COLOR = "blue"

export default class Tower {
  Tower(location, settings) {
    this.location = location
    this.radius = settings.radius || DEFAULT_RADIUS
    this.color = settings.color || DEFAULT_COLOR
    this.split = settings.split || []
  }
}