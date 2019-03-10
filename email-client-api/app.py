from flask import Flask, request, json
from retriever import Retriever
from sender import Mail, Message

import config
import time

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


@app.route("/retriever-emails", methods=['GET'])
def retriever_emails():
    try:
        emails = []

        with Retriever(
            config.IMAP_HOST,
            port=config.IMAP_PORT,
            username=config.EMAIL,
            password=config.APP_PASSWORD,
            ssl=True
        ) as retriever:

            all_inbox_messages = retriever.messages()

            for uid, message in all_inbox_messages:

                # print(message.raw_email)
                # print(message.sent_from)
                # print(message.sent_to)
                # print(message.subject)
                # print(message.headers)
                # print(message.message_id)
                # print(message.date)
                # print(message.body.plain)
                # print(message.body.html)
                # print(message.attachments)
		

                # print(message.keys())

                email = {
                    "message_id": message.message_id,
                    "subject": message.subject
                }

                emails.append(email)

        print(json.dumps(emails))

        return json.dumps(emails)

    except Exception as e:
        return(str(e))


@app.route("/send-email", methods=['POST'])
def send_email():
    mail = Mail(
        host=config.SMTP_HOST,
        port=config.SMTP_PORT,
        username=config.EMAIL,
        password=config.APP_PASSWORD,
        use_ssl=True
    )

    msg = Message()
    msg.subject = "This is the Subject Jake For Lambda"
    msg.fromaddr = ("Jake", config.EMAIL)
    msg.to = "jaconjcondes@gmail.com"
    msg.body = "Hello Jake | Lambda"
    msg.html = "<b>Hello Jake | Lambda</b>"
    # msg.cc = "cc@example.com"
    # msg.bcc = ["bcc01@example.com", "bcc02@example.com"]
    msg.reply_to = config.EMAIL
    msg.date = time.time()
    msg.charset = "utf-8"
    msg.extra_headers = {}
    msg.mail_options = []
    msg.rcpt_options = []

    mail.send(msg)

    # return json.dumps(example)
    return "Successfully Sent"


if __name__ == "__main__":
    app.run()
