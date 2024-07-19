import tkinter as tk
import random
from tkinter import ttk


class app():
    def __init__(self):
        
        self.root=tk.Tk()
        self.root.title('Rock_Paper_Scissor')
        self.root.config(bg='#39a3bb')
        self.root.geometry('400x200')
        
        self.label=tk.Label(self.root,text='Rock(1),Paper(2),Scissor(3)',font=('Arial',22),bg='#39A3BB')
        self.label.pack()
        
        self.user11=tk.Label(self.root,text=' Enter here ',font=('Arial',15),bg='#39A3BB')
        self.user11.pack()
        
        self.entry1=tk.Entry(self.root,bg='#39A3BB')
        self.entry1.pack()
         
        #self.entry2=tk.Entry(self.root)
        #self.entry2.pack()
        
        self.button=tk.Button(self.root,text='Submit',command=self.button_click,bg='#ffff55')
        self.button.pack()
        
        self.user22=tk.Label(self.root,text='',font=('Arial',15),bg='#39A3BB')
        self.user22.pack() 
        
        self.out=tk.Label(self.root,text='',font=('Arial',17),bg='#39A3BB')
        self.out.pack()
        
        self.close=tk.Button(self.root,text='Close',command=self.close_button,font=(16),bg='#ff6a6a')
        self.close.pack()  
        
        self.root.mainloop()
        
    def button_click(self):
        user_score=0
        #user2_score=0 
        
        user12=self.entry1.get()
        #user21=self.entry2.get()
        
        user1=int(user12)
        user2=random.randint(1,3)
        self.user22.config(text='Computer choosen '+str(user2))
        if user1==user2:
            self.out.config(text="Draw!!!")
        if user1==1 and user2==3:
            self.out.config(text=' You win!!')
            
        if user1==1 and user2==2:
            self.out.config(text=' You loss!!')
            
        elif user1==2 and user2==3:
            self.out.config(text=" You loss!!")
            
        elif user1==2 and user2==1:
            self.out.config(text=' You win!!')
            
        elif user1==3 and user2==1:
            self.out.config(text=' You loss!!')
            
        elif user1==3 and user2==2:
            self.out.config(text='User, You win!!')
            
        if user1>3:
            self.out.config(text='Invalid input')
        elif user2>3:
            self.out.config(text='Invalid input')
        
    def close_button(self):
        self.root.destroy() 
            
            
        
if __name__=='__main__':
    app()