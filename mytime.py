import time
import tkinter as tk
from tkinter import ttk 

noa=tk.Tk()
noa.geometry('200x120')
noa.title('Time')

ip=False
p=0
st=time.time()    

noa.le=tk.Label(noa,text='Digital Clock',font=('Areal',17))
noa.le.pack()

noa.ll=tk.Label(noa,font=('Arial',30))
noa.ll.pack()

def tt():
    
    nn=time.time() - st
    c=time.strftime('%H:%M:%S',time.gmtime(nn))
    noa.ll.config(text=c)
    noa.ll.after(1000,tt)
    
def close_button():
    noa.destroy()
 
noa.close=ttk.Button(noa,text='Close',command=close_button)
noa.close.pack()

tt()
noa.mainloop()
    