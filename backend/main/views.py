from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import ContactSubmission
from django.core.mail import send_mail

@csrf_exempt
@require_http_methods(["POST"])
def contact_submit(request):
    try:
        data = json.loads(request.body)
        submission = ContactSubmission.objects.create(
            name=data.get('name'),
            email=data.get('email'),
            phone=data.get('phone'),
            company=data.get('company', ''),
            message=data.get('message'),
            service_interest=data.get('serviceInterest', '')
        )
        email_subject = "New Contact Submission"
        email_body = f"""
        Name: {submission.name}
        Email: {submission.email}
        Phone: {submission.phone}
        Company: {submission.company}
        Message: {submission.message}
        Service Interest: {submission.service_interest}
        """
        send_mail(email_subject, email_body, 'ravikirankasabe@gmail.com', ['']    )

        return JsonResponse({'success': True, 'message': 'Thank you for your submission!'})
    except Exception as e:
        return JsonResponse({'success': False, 'message': 'Error submitting form'})

def home(request):
    return JsonResponse({'message': 'Done Commercials API'})