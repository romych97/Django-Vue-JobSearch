import json
from django.http import JsonResponse, HttpResponse

from django.shortcuts import render

from project.models import Project
from django.core import serializers
# def index(request):
#     return render(request, 'index.html', locals())


def data(request):

    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'

    return HttpResponse(json.dumps(response_data), content_type="application/json")


def projects(request):
    exampleData = Project.objects.all()
    serialized_qs = serializers.serialize('json', exampleData)
    return HttpResponse(serialized_qs)  # or JsonResponse({'data': data})

def project(request, id):
    exampleData = Project.objects.filter(pk=id)
    serialized_qs = serializers.serialize('json', exampleData)
    return HttpResponse(serialized_qs)

def freelancers(request):
    exampleData = [

    ]
    return JsonResponse({'data': exampleData})


def clients(request):
    exampleData = [

    ]
    return JsonResponse({'data': exampleData})