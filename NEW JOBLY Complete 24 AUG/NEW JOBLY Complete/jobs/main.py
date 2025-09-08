from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, resources={
    r"/jobs": {"origins": "*"},
    r"/jobs-page": {"origins": "*"}
})

# Adzuna API credentials (using your provided keys)
ADZUNA_APP_ID = "23c1b28a"  # Your App ID
ADZUNA_API_KEY = "4b9b103c5696357dc79c7c98d7ba5d6d"  # API Key
COUNTRY_CODE = "za"  # South Africa

# Fetch jobs from Adzuna API
def fetch_jobs(country="za", results=1000, keyword=None):
    url = f"https://api.adzuna.com/v1/api/jobs/{country}/search/1"
    params = {
        "app_id": ADZUNA_APP_ID,
        "app_key": ADZUNA_API_KEY,
        "results_per_page": results,
    }
    if keyword:
        params["what"] = keyword
    
    print(f"Requesting Adzuna API with params: {params}")  # Debug log
    
    response = requests.get(url, params=params)
    print(f"Adzuna API status code: {response.status_code}")  # Debug log
    
    try:
        data = response.json()
        print(f"Raw Adzuna response: {data}")  # Debug log
    except Exception as e:
        print(f"Failed to parse Adzuna response: {e}")
        return {"error": "Adzuna API returned invalid data"}
    
    data = response.json()
    jobs = []
    
    # Extract and flatten job data
    for job in data.get("results", []):
        jobs.append({
            "title": job.get("title"),
            "company": job.get("company", {}).get("display_name"),
            "location": job.get("location", {}).get("display_name"),
            "salary_min": job.get("salary_min"),
            "url": job.get("redirect_url")
        })
    
    return jobs

# Homepage
@app.route('/')
def home():
    return "South African Jobs API - Try /jobs or /jobs?keyword=developer"

# Get job listings (with optional keyword filtering)
@app.route('/jobs', methods=['GET'])
def get_jobs():
    try:
        keyword = request.args.get('keyword')
        jobs = fetch_jobs(country=COUNTRY_CODE, results=1000, keyword=keyword)
        return jsonify(jobs)
    except Exception as e:
        print(f"Error in get_jobs: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/jobs-page')
def jobs_page():
    return render_template('index.html') 

if __name__ == '__main__':
    app.run(debug=True)