from django.contrib import admin
from .models import ContactSubmission

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'service_interest', 'submitted_at', 'is_processed')
    list_filter = ('is_processed', 'submitted_at', 'service_interest')
    search_fields = ('name', 'email', 'company', 'message')
    readonly_fields = ('submitted_at',)
    list_per_page = 20
    
    actions = ['mark_as_processed']
    
    def mark_as_processed(self, request, queryset):
        queryset.update(is_processed=True)
    mark_as_processed.short_description = "Mark selected submissions as processed"