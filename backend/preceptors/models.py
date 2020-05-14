from django.db import models


class Preceptor(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)

# class NewsLetterItem(models.Model):
#     title = models.CharField(max_length = 200)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add = True)