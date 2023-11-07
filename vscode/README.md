# Extensions for vscode

# List Extensions
```powershell
code --list-extensions > extensions.txt
```

# Install Extensions

```powershell
Get-Content extensions.txt | ForEach-Object { code --install-extension $_ }
```
