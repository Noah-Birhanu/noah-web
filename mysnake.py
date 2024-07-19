import turtle
import tkinter as tk
import random
#screen
s=turtle.Screen()
s.bgcolor('black')
s.title('Snake Game')
s.setup(width=900,height=700)
s.tracer(0)
pen=turtle.Turtle()
score=0

game=4
#label=tk.Tk()

#label.ll=tk.Label(label,text='You scored '+str(score))
#label.ll.pack()

pen.goto(0,310)
pen.hideturtle()
pen.color('White')
pen.write('Score: '+str(score),font=('Arial',20))

pen2=turtle.Turtle()
pen2.goto(-200,310)
pen2.hideturtle()
pen2.color('White')
pen2.write('Score: '+str(game),font=('Arial',20))



#snake
sh=['triangle','square','turtle']
mm=random.choice(sh)
sn=turtle.Turtle()
sn.shape('turtle')
sn.color('yellow')
sn.penup()
sn.speed(0)
sn.goto(0, 0)

#function
def move_up():
    sn.setheading(90)
def move_down():
    sn.setheading(270)
def move_left():
    sn.setheading(180)
def move_right():
    sn.setheading(0)
    
#food
food=turtle.Turtle()
food.shape('circle')
food.color('red')
food.penup()
food.goto(100,70)
    
#keyboard
s.listen()
s.onkeypress(move_up,'Up')
s.onkeypress(move_right,'Right')
s.onkeypress(move_left,'Left')
s.onkeypress(move_down,'Down')


while True:
    s.update()
    sn.fd(0.3)
    sn.speed(0)
    if sn.distance(food) < 20:
        x=random.randint(-380,380)
        y=random.randint(-380,380)
        food.goto(x,y)
        
        score+=1
        #print(score) 
        s.title('Snake Game')
        pen.clear()
        pen2.clear()
        pen2.write('Heart: '+str(game),font=('Arial',20))
        pen.write('Score: '+str(score),font=('Arial',20))
        #label.ll.config(text='You scored '+str(score),font=('Arial',17))
    if not -400<food.xcor()<400 or not -260<food.ycor()<300:
       # print('Game noah')

        food.goto(0,100)
        
        
    if not -420 < sn.xcor() < 420 or not -280 < sn.ycor() < 300:
        game-=1
        sn.goto(0, 0)
        s.title('Snake Game')
        pen.clear()
        pen2.clear()
        pen2.write('Heart: '+str(game),font=('Arial',20))
        pen.write('Score: '+str(score),font=('Arial',20))
        #label.ll.config(text="You scored "+str(score),font=('Arial',17))
        if game==0:#and -390 < sn.xcor() < 390 or not score>0 and -280 < sn.ycor() < 320:
            s.title('Snake Game')
           # pen.clear()
            sn.clear()
            food.clear()
            pen2.clear()
            pen.goto(-180,100)
            pen.pencolor('red')
            pen.clear()
            pen.write('GAME OVER',font=('Arial',40))
            pen2.goto(-140,0)
            pen2.pencolor('gold')
            pen2.clear()
            pen2.write('You scored '+str(score),font=('Arial',30))
            turtle.done()
               

turtle.done()