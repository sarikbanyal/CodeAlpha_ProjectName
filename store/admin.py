from django.contrib import admin
from .models import Product, Category, UserProfile, CartItem, Order, OrderItem

# Register your models here so they show up in the Django Admin panel
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(UserProfile)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)