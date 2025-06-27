from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return HttpResponse('<h1>Welcome django learners</h1>')
def pen(request):
    return HttpResponse('<h1>Use me to write notes</h1>')