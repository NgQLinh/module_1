let electricLamp_1 = new ElectricLamp(false);
let switchButton_1 = new SwitchButton(electricLamp_1,false); // kết nối giữa  công tắc 1 và đèn 1

document.write(switchButton_1.switchOn());
document.write(electricLamp_1.getStatus());
document.write(switchButton_1.switchOff());
document.write(electricLamp_1.getStatus());