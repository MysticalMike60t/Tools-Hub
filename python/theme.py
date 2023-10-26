import os
import json

# Define the new theme color you want to set
new_theme_color = "#0074d9"

# Define the directory where your files are located
directory = "../"

# Function to update theme color in a manifest file
def update_manifest_theme_color(file_path, new_color):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        if 'theme_color' in data:
            data['theme_color'] = new_color
            with open(file_path, 'w', encoding='utf-8') as file:
                json.dump(data, file, indent=4)
            print(f"Updated theme color in {file_path}")
        else:
            print(f"No 'theme_color' field found in {file_path}. Skipped.")
    except (FileNotFoundError, json.JSONDecodeError, UnicodeDecodeError):
        print(f"Failed to update theme color in {file_path}")

# Loop through all files in the directory
for root, dirs, files in os.walk(directory):
    for file_name in files:
        file_path = os.path.join(root, file_name)
        if file_name.endswith(".json"):
            update_manifest_theme_color(file_path, new_theme_color)
