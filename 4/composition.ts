interface Device {
  turnOn: () => void
  turnOff: () => void
  getState: () => void
}

class Termostat implements Device {
  private state: string
  constructor() {
    this.state = 'Термостат выключен'
  }
  turnOn() {
    this.state = 'Термостат включен'
  }
  turnOff() {
    this.state = 'Термостат выключен'
  }
  getState() {
    console.log(this.state)
  }
}

class Light implements Device {
  private state: string
  constructor() {
    this.state = 'Свет выключен'
  }
  turnOn() {
    this.state = 'Свет включен'
  }
  turnOff() {
    this.state = 'Свет выключен'
  }
  getState() {
    console.log(this.state)
  }
}

class SmartHome {
  devices: Device[] = []

  add(device: Device) {
    this.devices.push(device)
  }
  turnDevicesOn() {
    this.devices.forEach((item) => item.turnOn())
  }
  turnDevicesOff() {
    this.devices.forEach((item) => item.turnOff())
  }
  getAllState() {
    this.devices.forEach((item) => item.getState())
  }
}
const smartHome = new SmartHome()
const lightDevice = new Light()
const termostatDevice = new Light()

smartHome.add(lightDevice)
smartHome.add(termostatDevice)
smartHome.getAllState()
smartHome.turnDevicesOn()
smartHome.getAllState()
