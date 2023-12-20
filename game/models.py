from django.db import models

class GameImage(models.Model):
    image = models.ImageField(upload_to='game_images/')

    def __str__(self):
        return f"Image {self.id}"
