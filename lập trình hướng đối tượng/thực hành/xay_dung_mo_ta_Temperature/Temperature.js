class Temperature {
    constructor(celsius) {
        if (celsius < -273 ){
            throw new  Error('Nhiệt độ ko thể nhỏ hơn -273 !!!');
        }
        this.celsius = celsius;
    }
    toFahrenheit(){
        return (this.celsius *9/5) +32;
    }
    toKelvin(){
        return this.celsius + 273.15
    }
}