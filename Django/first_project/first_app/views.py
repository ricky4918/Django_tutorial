from django.shortcuts import render
from django.http import HttpResponse #1


# Create your views here.

def index(request): #2
    
    my_dict = {
        
        "insert_me" : "hello I am from views.py !"
        
    }
    return render(request,'index.html', context = my_dict)
    
