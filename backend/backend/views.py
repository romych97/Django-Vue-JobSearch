import json
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

def index(request):
    # create a dictionary to pass
    # data to the template
    context ={
        "data":"Gfg is the best",
        "list":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    return render(request, 'index.html', context)