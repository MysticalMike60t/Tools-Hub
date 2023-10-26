import os
import json
from bs4 import BeautifulSoup

# Define the new theme color you want to set
new_theme_color = "#FF5733"

# Define the directory where your files are located
directory = "../"

# Function to update the theme color in a manifest file
def update_manifest_theme_color(file_path, new_color):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        if 'theme_color' in data:
            data['theme_color'] = new_color
            with open(file_path, 'w', encoding='utf-8') as file:
                json.dump(data, file, indent=4)
            print(f"Updated theme_color in {file_path}")
        else:
            print(f"No 'theme_color' field found in {file_path}. Skipped.")
    except (FileNotFoundError, json.JSONDecodeError, UnicodeDecodeError):
        print(f"Failed to update theme_color in {file_path}")

# Function to update the theme color in an HTML file
def update_html_theme_color(file_path, new_color):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            meta_tag = soup.find("meta", {"name": "theme-color"})
            if meta_tag:
                meta_tag["content"] = new_color
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(str(soup))
                print(f"Updated theme-color meta tag in {file_path}")
            else:
                print(f"No 'theme-color' meta tag found in {file_path}. Skipped.")
    except (FileNotFoundError, UnicodeDecodeError):
        print(f"Failed to update theme-color meta tag in {file_path}")

# Loop through all files in the directory
for root, dirs, files in os.walk(directory):
    for file_name in files:
        file_path = os.path.join(root, file_name)
        if file_name.endswith(".json"):
            update_manifest_theme_color(file_path, new_theme_color)
        elif file_name.lower() == "index.html":
            update_html_theme_color(file_path, new_theme_color)
