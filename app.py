from flask import Flask, request, jsonify
from flask_cors import CORS
from waitress import serve

app = Flask(__name__)
CORS(app)

@app.route('/api/checkout', methods=['POST'])
def checkout():
    data = request.json
    print("Checkout Data:", data)
    return jsonify({"message": "Order placed successfully!"}), 200

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    print("Contact Form:", data)
    return jsonify({"message": "Thank you! We'll contact you soon."}), 200

@app.route('/api/wholesale', methods=['POST'])
def wholesale():
    data = request.json
    print("Wholesale Inquiry:", data)
    return jsonify({"message": "Your wholesale inquiry was submitted!"}), 200

@app.route('/api/conversion', methods=['POST'])
def conversion():
    data = request.json
    print("Paddy Conversion:", data)
    return jsonify({"message": "Paddy-to-rice conversion request received!"}), 200

if __name__ == '__main__':
    serve(app, host="0.0.0.0", port=8000)
