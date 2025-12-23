from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.utils.timezone import now

#from elders.models import Elder
#from caregivers.models import Caregiver
#from appointments.models import Appointment

# Create your views here.
class AdminDashboardStats(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        today = now().date()

        data = {
            "total_elders": Elder.objects.count(),
            "total_caregivers": Caregiver.objects.filter(active=True).count(),
            "total_appointments": Appointment.objects.filter(date=today).count(),
            "pending_requests": Appointment.objects.filter(status="pending").count(),
        }

        return Response(data)
