from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise
import os
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mygame.settings')

application = get_wsgi_application()
application = WhiteNoise(application, root=os.path.join(BASE_DIR, 'staticfiles'))