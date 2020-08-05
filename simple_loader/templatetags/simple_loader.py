from django.utils.safestring import mark_safe
from django import template 
register = template.Library()

from simple_loader.utils import get_clean_bundle

@register.simple_tag
def inject_bundle():
    pack = get_clean_bundle()
    return mark_safe('\n'.join(pack))
