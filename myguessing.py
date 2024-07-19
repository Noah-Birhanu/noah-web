import tkinter as tk
import random
from tkinter import ttk


root=tk.Tk()
root.geometry('300x170')
root.config(bg='#39A3BB')
root.title('Guessing game')

root.la=tk.Label(root,text='Guess number between 0 and 100',font=('Arial',13),bg='#39A3BB')
root.la.pack()
        
root.entry=tk.Entry(root,bg='#39A3BB')
root.entry.pack()

computer=random.randint(0,100)

def button_click():
    trial=0
    gett=root.entry.get()
    user=int(gett)
    trial+=1
    if computer>user:
        root.label.config(text='Guess higher')
        trial+=1
        #print(trial)
    elif computer<user:
        root.label.config(text='Guess Lower')

        trial+=1
        #print(trial)
    else:
        root.label.config(text='You win')
        
    if trial==7:
        root.label.config(text='The number was '+computer)
def close_button():
        root.destroy()

 
root.buton=tk.Button(root,text='Submit',command=button_click,bg='orange')
root.buton.pack()

root.label=tk.Label(root,text='',bg='#39A3BB')
root.label.pack()

root.close=tk.Button(root,text='Close',command=close_button,bg='red',font=(16))
root.close.pack()
        
root.mainloop()
        
