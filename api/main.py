from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import requests as req
import numpy as np
import json
from PIL import Image  
from io import BytesIO
import base64
from google import genai



# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

from random import randrange

def upload_file(file, url="http://localhost:8000/classify"):
    """
    Uploads a file to the FastAPI endpoint specified by the URL.

    Args:
        file_path (str): The path to the file to upload.
        url (str, optional): The URL of the FastAPI endpoint. Defaults to "http://localhost:8000/classify".

    Returns:
        dict: The response from the FastAPI endpoint.
    """ 
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

        url = "https://seyf1elislam-test-test.hf.space/classify"

        try:
            response = upload_file(img,url)
            prediction = response["prediction"]
        except:
            print("error")
            prediction = randrange(12)
        return {"output":prediction}

API="AIzaSyCZVM0_yjl3Un-mR32EgG1lnFxgQOBNOhE"
client = genai.Client(api_key=API)
class Chat(Resource):
    def get(self):
        return {
        'message': "chat Get"
        }

    def post(self):
        print(self)
        context = ""
        question =  request.json["question"]

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents="Explain how AI works",
        )
        
        return {"output":response.text}