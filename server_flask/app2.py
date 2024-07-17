import pymongo

client = pymongo.MongoClient("mongodb+srv://mhmmdalfn1502:Alfanaja@cluster0.hh8koxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
try:
    client.admin.command('ping')
    print("Berhasil")
except Exception as e:
    print(f"Error: {e}")
