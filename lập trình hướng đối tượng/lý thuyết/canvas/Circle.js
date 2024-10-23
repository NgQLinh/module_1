class Circle {
    radius;
    color;
    canvas;
    ctx;
    x;
    y;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.fillStyle = this.color; // Đặt màu nền
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill(); // Làm đầy hình tròn
        this.ctx.stroke(); // Vẽ đường viền
        this.ctx.closePath();
    }

    moveRight(speed = 3) {
        if (this.x + this.radius + speed < this.canvas.width) { // Kiểm tra biên
            this.clearCanvas();
            this.x += speed;
            this.draw();
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}