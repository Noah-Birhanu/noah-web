import time
import tkinter as tk
from tkinter import ttk 


root=tk.Tk()
root.title('Clock')
root.geometry('200x120')
root.config(bg='#39A3BB')

root.la=tk.Label(root,text='Clock',font=('Arial',20),bg='#39A3BB')
root.la.pack(side=tk.TOP)
        
co_ll=tk.Label(root,font=('Arial', 28),bg='#39A3BB')
co_ll.pack()
def update_clock():
    co_ll.config(text=time.strftime('%H:%M:%S'))
    
    co_ll.after(1000, update_clock)
def close_button():
        root.destroy()
    
root.close=tk.Button(root,text='Close',command=close_button,bg='red',font=(16))
root.close.pack()    

update_clock()
root.mainloop()
