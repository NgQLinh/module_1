const phone1 =new Mobile()
const phone2 = new Mobile()

phone1.powerOn()
phone1.composeMessage("chào bạn!")
phone1.sendMessage(phone2)

phone2.powerOn()
phone2.viewInbox()
phone2.viewSentMessage()

phone1.charge(20)
phone1.powerOff()
phone1.charge(20)