import tkinter as tk
from tkinter import ttk
import random
class App():
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Best Password")
        self.root.config(bg='red')
        self.root.geometry("300x200")
        
        self.label = tk.Label(self.root, text="Enter number", font=("Arial", 16), bg='red')
        self.label.pack()
        
        self.input = tk.Entry(self.root)
        self.input.pack()
        
        self.button = tk.Button(self.root, text="Get", command=self.changes, bg='red')
        self.button.pack()
        
        self.password = tk.Label(self.root, text="", bg="red", font=("Arial", 17))
        self.password.pack()
         
        self.root.mainloop()
    def changes(self):
        try:
            gets = self.input.get()
            gets = int(gets)
            texts = self.password
            something = ""
            for i in range(gets):
                number = random.choice('1234567890qwertyuioasdfghjklxcvnmp|\>/<;:[{]}+=-!@#$%^&*()_')
                something += number
            texts.config(text=something)
            if gets > 50:
                texts.config(text="enter smaller number")
            if gets < 1:
                texts.config(text="enter greater number")
        except ValueError:
            texts = self.password
            texts.config(text="enter a number")

if __name__ == '__main__':
    App()