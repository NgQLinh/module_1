let adam= new Human("adam", 1, 65)
let eva= new Human("eva", 2, 65)
let apple_1= new Apple(10)

adam.say("I am Adam" + "<br>")
eva.say("I am Eva" + "<br>")

while (apple_1.isEmpty() !== true){
    document.write("Adam ăn quả táo" + "<br>")
    adam.eat(apple_1)

    document.write("Quả táo còn: " +"<br>")
    document.write(apple_1.getWeight() + " đơn vị " + "<br>")
    document.write("Cân nặng của Adam là: " + adam.getWeight() + " đơn vị " + "<br>")

    document.write("<br>")

    document.write("Eva ăn quả táo" + "<br>")
    eva.eat(apple_1)

    document.write("Quả táo còn: " +"<br>")
    document.write(apple_1.getWeight() + " đơn vị " + "<br>")
    document.write("Cân nặng của Adam là: " + eva.getWeight() + " đơn vị " + "<br>")

    document.write("<br>")




}
