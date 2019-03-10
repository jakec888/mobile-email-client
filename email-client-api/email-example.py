from retriever import Retriever
from sender import Mail, Message
import config
import time

# emails = []

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
        print(message.subject)
        # print(message.headers)
        # print(message.message_id)
        # print(message.date)
        # print(message.body.plain)
        # print(message.body.html)
        # print(message.attachments)

        # print(message.keys())

        # email = {
        #     "message_id": message.message_id,
        #     "subject": message.subject
        # }

        # emails.append(email)

# print(emails)
