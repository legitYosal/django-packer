from django.test import TestCase



class TestWebpackStatusLoader(TestCase):
    def test_loader_output(self):
        from .utils import get_clean_bundle
        print(get_clean_bundle())
