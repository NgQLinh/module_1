const circle = new Circle(100, 100, 30, "red");
circle.draw(); // Vẽ hình tròn ban đầu

function play() {
    circle.moveRight(); // Di chuyển hình tròn
    requestAnimationFrame(play); // Gọi lại hàm play cho frame tiếp theo
}

play(); // Bắt đầu hoạt động