import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def chatbot_response(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_message = data.get('message', '')

            # Forward the message to Rasa server (replace with the correct Rasa endpoint)
            rasa_response = requests.post(
                'http://localhost:5002/webhooks/rest/webhook',  # Rasa REST endpoint
                json={"sender": "user", "message": user_message}
            )

            # Parse the Rasa response
            rasa_data = rasa_response.json()
            if rasa_data:
                bot_reply = rasa_data[0].get('text', 'Sorry, I didn\'t understand that.')
                return JsonResponse({"response": bot_reply})
            else:
                return JsonResponse({"response": "No response from Rasa"}, status=500)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)

