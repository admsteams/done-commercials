from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from django.core.mail import send_mail
from django.conf import settings

@csrf_exempt
@require_http_methods(["POST"])
def contact_submit(request):
    try:
        data = json.loads(request.body)
        
        # Send email notification
        email_subject = f"New Contact Form Submission from {data.get('name', 'Unknown')}"
        email_body = f"""
        New contact form submission:

        Name: {data.get('name')}
        Email: {data.get('email')}
        Phone: {data.get('phone')}
        Company: {data.get('company', 'Not provided')}
        Service Interest: {data.get('service_interest', 'Not specified')}
        
        Message:
        {data.get('message')}
        """
        
        # Send to the configured email
        send_mail(
            email_subject,
            email_body,
            settings.DEFAULT_FROM_EMAIL,
            [settings.EMAIL_HOST_USER],  # Send to yourself
            fail_silently=False,
        )

        return JsonResponse({'success': True, 'message': 'Thank you for your submission! We will contact you soon.'})
    except Exception as e:
        print(f"Error sending email: {e}")
        return JsonResponse({'success': False, 'message': 'Error submitting form. Please try again.'})

def home(request):
    return JsonResponse({'message': 'Done Commercials API'})