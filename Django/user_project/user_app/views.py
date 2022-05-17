from django.shortcuts import render
# from user_app.models import User
from user_app.forms import NewUserForm
# Create your views here.



def home(request):
    return render(request, 'home.html')


def users(request):
    
    
    form = NewUserForm()
    
    if request.method == 'POST':
        form = NewUserForm(request.POST)
        
        if form.is_valid():
            
            form.save(commit=True)
            
            return  home(request)
        else: 
            print("EROOR FORM INVALID")
            
    return render(request, 'user.html', {'form': form})