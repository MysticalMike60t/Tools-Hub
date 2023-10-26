import subprocess

# Define a list of npm commands you want to execute
npm_commands = [
    "cd client && npm i && npm start && npm run build",
    "npm i && npm start"
]

# Iterate through the list and run each npm command
for command in npm_commands:
    try:
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError:
        print(f"Failed to execute npm command: {command}")
    else:
        print(f"Successfully executed npm command: {command}")
