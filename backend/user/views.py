import json

from django.shortcuts import render
from django.utils.safestring import mark_safe


def userProfile(request):
    """Главная страница"""
    return render(request, 'chat/index.html', {})
