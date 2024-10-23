class SwitchButton {
    constructor(lamp, status) {
        this.lamp = lamp;
        this.status = status;
    }
    get lamp() {
        return this.lamp;
    }
    setLamp(lamp){
        this.lamp = lamp;
    }
    connectToLamp(ElectricLamp) {
        return this.lamp=ElectricLamp
    }
    switchOff(){
        this.lamp.status=false;
        return this.lamp.status=false;
    }
    switchOn(){
        this.lamp.status=true;
        return this.status=true;
    }
}