class Mobile {

    constructor() {
        this.battery = 100; // trạng thái pin ti đa 100
        this.isOn = false; // trạng thái điệt thoại (bật/tắt)
        this.drafts = ""; // tin nhắn đang soạn thảo
        this.inbox = []; // tin nhắn trong hộp thư
        this.sentMessages = []; // tin nhắn đã gửi
    }

    powerOn(){
        this.isOn = true;
        console.log(this.isOn);
        console.log(" điện thoại đã được bật")
    }

    powerOff(){
        this.isOn = false;
        console.log(" điện thoại đã đc tắt");
    }

    charge(amount){
        if (this.isOn){
            console.log("không thể sạc khi điện thoại đang bật")
            return;
        }
        this.battery = Math.min(this.battery + amount, 100);
        console.log(this.battery);
        console.log(`đã sạc pin. Trạng thái hiện tại: ${this.battery}%`);
    }

    composeMessage(message){
        if (!this.isOn){
            console.log("điện thoại đang tắt. vui lòng bật điện thoại để soạn tin nhắn")
            return;
        }
        this.drafts= message;
        this.battery -= 1;
        console.log("đã soạn tin nhắn");
    }

    receiveMessage(message){
        if (this.isOn){
            console.log("điện thoại đang tắt. ko thể nhận tin nhắn")
            return;
        }
        this.inbox.push(message);
        this.battery -=1;
        console.log("tin nhắn đã được nhận")
    }

    sendMessage(otherMobile){
        if (this.isOn){
            console.log("điện thoại đang tắt. ko thể nhận tin nhắn")
            return;
        }
        if (this.drafts){
            otherMobile.receiveMessage(this.drafts);
            this.sentMessages.push(this.drafts)
            this.drafts = ""
            this.battery -=1
            console.log("tin nhắn đã được gửi")
        }else {
            console.log("ko có tin nhắn nào để gửi")
        }
    }

    viewInbox(){
        if (!this.isOn){
            console.log("điện thoại đã tắt. ko thể xem hộp thư đến")
            return;
        }
        console.log("hộp thư đến: ")
        this.inbox.forEach(msg => console.log(`- ${msg}`));
        this.battery -=1
    }

    viewSentMessage(){
        if (!this.isOn){
            console.log(" điện thoạ đang tắt. ko th xem tin đã gửi")
            return;
        }
        console.log("tin đã gửi: ")
        this.sentMessages.forEach(msg => console.log(`- ${msg}`));
        this.battery -= 1;

    }
}
