import turtle
turtle.bgcolor('black')
t=turtle.Turtle()
t.speed(200)
fill_color='red'
t.hideturtle()
t.begin_fill()
color=['silver','purple','red','green','pink','cyan','red']
for number in range(2,4000,2):
    t.pensize(1.3)
    t.speed(200)
    t.forward(number+1)
    t.left(92)
    t.pencolor(color[number%2])

t.end_fill()
turtle.exitonclick()