// #### Паттерн Стратегия — Система уведомлений
// Создайте систему отправки уведомлений, используя паттерн Стратегия для реализации различных способов доставки
// (например, email, SMS, push). Реализуйте интерфейс стратегии уведомлений и класс NotificationService,
//  который использует выбранную стратегию для отправки сообщений. Предусмотрите возможность динамической смены стратегии.
// Требования:
// * Реализуйте динамическую смену стратегии уведомлений.
// * Каждая стратегия должна возвращать строку с информацией об отправке уведомления.
// * Добавьте проверку на непустое сообщение перед отправкой.
// PS: реализация важна с точки зрения типов. Фактическую реализацию можно не делать.
interface Strategy {
  send: (message: string) => void
}

class EmailNotification implements Strategy {
  send(message: string) {
    console.log(`${message} sended`)
  }
}
class SmsNotification implements Strategy {
  send(message: string) {
    console.log(`${message} sended`)
  }
}
class PushNotification implements Strategy {
  send(message: string) {
    console.log(`${message} sended`)
  }
}
class NotificationService {
  constructor(private sender: Strategy) {}
  send(message: string) {
    if (message.length) {
      this.sender.send(message)
    } else {
      throw new TypeError("Message can't be empty!")
    }
  }
}
const emailNotification = new NotificationService(new EmailNotification())
const smsNotification = new NotificationService(new SmsNotification())
const pushNotification = new NotificationService(new PushNotification())

emailNotification.send('Email message')
smsNotification.send('SMS message')
pushNotification.send('Push message')
pushNotification.send('')
