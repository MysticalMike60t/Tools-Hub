import json
import yaml

def update_version(package_json_path, new_version):
    try:
        with open(package_json_path, 'r') as package_json_file:
            data = json.load(package_json_file)

        # Update the version in the package.json file
        data['version'] = new_version

        # Write the updated data back to the file
        with open(package_json_path, 'w') as package_json_file:
            json.dump(data, package_json_file, indent=2)

        print(f'Updated version to {new_version} in {package_json_path}')

    except FileNotFoundError:
        print(f'Error: package.json file not found at {package_json_path}')
    except json.JSONDecodeError:
        print(f'Error: Invalid JSON in {package_json_path}')
    except Exception as e:
        print(f'An error occurred while updating {package_json_path}: {str(e)}')

def update_yaml(yaml_path, new_version):
    try:
        with open(yaml_path, 'r') as yaml_file:
            data = yaml.safe_load(yaml_file)

        # Update the currentVersion in the YAML file
        data['currentVersion'] = new_version

        # Write the updated data back to the file
        with open(yaml_path, 'w') as yaml_file:
            yaml.dump(data, yaml_file, default_flow_style=False)

        print(f'Updated currentVersion to {new_version} in {yaml_path}')

    except FileNotFoundError:
        print(f'Error: YAML file not found at {yaml_path}')
    except Exception as e:
        print(f'An error occurred while updating {yaml_path}: {str(e)}')

# List of package.json and YAML file paths to update
package_json_files = [
    '../package.json',
    '../client/package.json',
    # Add more package.json file paths as needed
]

yaml_files = [
    '../dev-app-update.yml',
    # Add more YAML file paths as needed
]

new_version = input('Enter the new version: ')  # Prompt the user for the version

# Update the version in package.json files
for package_json_path in package_json_files:
    update_version(package_json_path, new_version)

# Update the currentVersion in the YAML files
for yaml_file in yaml_files:
    update_yaml(yaml_file, new_version)
