from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import requests as req
import numpy as np
import json
from PIL import Image  
from io import BytesIO
import base64
import os
from dotenv import load_dotenv
# from google import genai
# import google.generativeai as genai



# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

from random import randrange

def upload_file(file, url="http://localhost:8000/classify"):
    with BytesIO() as buf:
      file.save(buf, 'jpeg')
      image_bytes = buf.getvalue()

      files = {"image": image_bytes}
      response = req.post(url, files=files)

    return response.json()

class Recycle(Resource):
    def get(self):
        return {
        'message': "recycle Get"
        }

    def post(self):
        print(self)
        
        res =  request.json["files"]

        img = Image.open(BytesIO(base64.b64decode(res))).convert("RGB")

        # url = "https://seyf1elislam-test-test.hf.space/classify"
        url = "https://missingbreath-template-project.hf.space/classify"

        try:
            response = upload_file(img,url)
            prediction = response["prediction"]
        except:
            print("error")
            prediction = randrange(12)
        return {"output":prediction}

load_dotenv()  # Load environment variables from .env file
API = os.getenv("GOOGLE_API")
if not API:
    raise ValueError("GOOGLE_API environment variable is not set")


# client = genai.Client(api_key=API)
# Set API key
# genai.configure(api_key=API)

class Chat(Resource):
    def get(self):
        return {
        'message': "chat Get"
        }

    def post(self):
        print(self)
        context = ""

        question =  request.json["question"]

        # response = client.models.generate_content(
        #     model="gemini-2.0-flash",
        #     contents="Explain how AI works",
        # )
        
        # genai.configure(api_key=API)
        # # Select a model
        # model = genai.GenerativeModel("gemini-2.0-flash")
  
        # # Generate a response
        # response = model.generate_content(question)

        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API}"

        headers = {
            "Content-Type": "application/json"
        }

        data = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": question
                        }
                    ]
                }
            ]
        }

        response = req.post(url, headers=headers, json=data)
        
        data = json.loads(response.text)
        
        # return {"output":response.text}
        return {"output":data["candidates"][0]["content"]["parts"][0]["text"]}