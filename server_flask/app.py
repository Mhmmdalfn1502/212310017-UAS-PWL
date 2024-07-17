from flask import Flask, request, jsonify, send_from_directory
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from bson.objectid import ObjectId
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://mhmmdalfn1502:Alfanaja@cluster0.hh8koxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongo = PyMongo(app)
bcrypt = Bcrypt(app)
CORS(app) 

ADMIN_EMAIL = "admin@LearnSL.com"

UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data['username']
    email = data['email']
    password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    
    is_admin = email == ADMIN_EMAIL

    user = {
        "username": username,
        "email": email,
        "password": password,
        "isAdmin": is_admin
    }
    
    mongo.db.users.insert_one(user)
    return jsonify({"message": "User registered successfully"}), 201

@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()
    email = data['email']
    password = data['password']

    user = mongo.db.users.find_one({"email": email})
    if user and bcrypt.check_password_hash(user['password'], password):
        return jsonify({
            "message": "Login successful",
            "isAdmin": user.get('isAdmin', False)
        }), 200
    return jsonify({"message": "Invalid email or password"}), 401

@app.route('/images', methods=['GET'])
def get_images():
    category = request.args.get('category')
    query = {}
    if category:
        query['category'] = category
    images = mongo.db.images.find(query)
    result = []
    for image in images:
        result.append({
            '_id': str(image['_id']),
            'title': image['title'],
            'description': image['description'],
            'url': image['url'],
            'category': image['category']
        })
    return jsonify(result)

@app.route('/images', methods=['POST'])
def add_image():
    data = request.form
    file = request.files.get('file')
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        url = f"/uploads/{filename}"
        image_id = mongo.db.images.insert_one({
            'title': data['title'],
            'description': data['description'],
            'url': url,
            'category': data['category']
        }).inserted_id
        return jsonify({'_id': str(image_id)})
    return jsonify({'error': 'File upload failed'}), 400

@app.route('/images/<id>', methods=['PUT'])
def update_image(id):
    data = request.form
    file = request.files.get('file')
    update_data = {
        'title': data['title'],
        'description': data['description'],
        'category': data['category']
    }
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        update_data['url'] = f"/uploads/{filename}"
    mongo.db.images.update_one(
        {'_id': ObjectId(id)},
        {'$set': update_data}
    )
    return jsonify({'msg': 'Image updated'})

@app.route('/images/<id>', methods=['DELETE'])
def delete_image(id):
    mongo.db.images.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Image deleted'})

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == "__main__":
    app.run(debug=True)
