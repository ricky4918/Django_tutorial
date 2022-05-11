from django.shortcuts import render
from user_app.models import User
# Create your views here.



def home(request):
    return render(request, 'home.html')


def users(request):
    
    user_list = User.objects.order_by('first_name')
    user_dict = {
        
        'users': user_list
    }
    
    return render(request, 'user.html', context=user_dict)