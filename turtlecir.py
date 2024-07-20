import turtle
turtle.bgcolor('black')
for i in range(7):
    c=['red','silver','dark red','white','green','purple','black']
    turtle.color(c[i%7])
    turtle.speed(1.4)
    turtle.hideturtle()
    turtle.pensize(3)
    turtle.circle(100)
    #turtle.fd(i+1)
    #turtle.left(601)

turtle.done()