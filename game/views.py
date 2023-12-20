from django.shortcuts import render
from django.http import JsonResponse
import random
from .models import GameImage

def index(request):
    images = GameImage.objects.all()
    if images:
        hidden_image = random.choice(images)
        hidden_image_number = random.randint(1, 9)
    else:
        hidden_image = None
        hidden_image_number = None  # Handle case where no images or no game squares are available
    
    context = {
        'hidden_image': hidden_image,
        'hidden_image_number': hidden_image_number
    }
    return render(request, 'game/index.html', context)
