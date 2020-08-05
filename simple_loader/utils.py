import json

def get_webpack_status():
    with open('webpack-status.json') as webpack_json:
        data = json.load(webpack_json)
        if data['status'] == 'done':
            return data['chunks']['app']
        else:
            return []

def htmlify(bundles):
    ctx = []
    for bundle in bundles:
        if bundle.endswith(('.js', )):
            ctx.append('<script src="static/build/' + bundle + '"></script>')

        else:
            raise Exception('not supported asset')

    return ctx


def get_clean_bundle():
    bundles = get_webpack_status()
    return htmlify(bundles)