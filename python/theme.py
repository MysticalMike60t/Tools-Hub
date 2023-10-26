import os
import json
from bs4 import BeautifulSoup
import re

# Function to validate a hexadecimal color code
def is_valid_hex_color(color):
    if not color:
        return False
    return re.match(r'^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', color) is not None

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

# Function to update the SCSS file
def update_scss_theme_color(file_path, new_color):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            scss_content = file.read()
            updated_scss = re.sub(r'\$primary:.*?;', f'$primary: {new_color};', scss_content)
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(updated_scss)
            print(f"Updated SCSS variable in {file_path}")
    except (FileNotFoundError, UnicodeDecodeError):
        print(f"Failed to update SCSS variable in {file_path}")

# Function to update the theme color in a JavaScript config file
def update_js_config_theme_color(file_path, new_color):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            js_content = file.read()
            updated_js = re.sub(r'const themeColor = ".*?";', f'const themeColor = "{new_color}";', js_content)
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(updated_js)
            print(f"Updated themeColor in {file_path}")
    except (FileNotFoundError, UnicodeDecodeError):
        print(f"Failed to update themeColor in {file_path}")

# Accept user input for the new theme color with validation
while True:
    new_theme_color = input("Enter the new theme color (e.g., #FF5733): ")
    if is_valid_hex_color(new_theme_color):
        break
    else:
        print("Invalid color code. Please enter a valid hexadecimal color code.")

# Define the directory where your files are located
directory = "../"

# Loop through all files in the directory
for root, dirs, files in os.walk(directory):
    for file_name in files:
        file_path = os.path.join(root, file_name)
        if file_name.endswith(".json"):
            update_manifest_theme_color(file_path, new_theme_color)
        elif file_name.lower() == "index.html":
            update_html_theme_color(file_path, new_theme_color)
        elif file_name.lower() == "_vars.scss":
            update_scss_theme_color(file_path, new_theme_color)
        elif file_name.endswith(".config.js"):
            update_js_config_theme_color(file_path, new_theme_color)
