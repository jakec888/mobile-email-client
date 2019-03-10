from flask import Flask, jsonify, request, json

app = Flask(__name__)


tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    }
]


@app.route("/get-example", methods=['GET'])
def getexample():
    return jsonify({'tasks': tasks})


@app.route("/post-example", methods=['POST'])
def postexample():
    data = request.json

    example = {
        'id': data['id'],
        'title': data['title'],
        'description': data['description'],
        'done': data['done'],
    }

    return json.dumps(example)


if __name__ == "__main__":
    app.run()
