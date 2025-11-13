@echo off
cd /d "%~dp0"
echo Starting web server...
echo.
echo Open your browser to: http://localhost:8080/
echo Press Ctrl+C to stop the server
echo.
powershell -Command "$listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:8080/'); $listener.Start(); Write-Host 'Server running from:' (Get-Location); while ($listener.IsListening) { $context = $listener.GetContext(); $request = $context.Request; $response = $context.Response; $file = if ($request.Url.LocalPath -eq '/') { 'index.html' } else { $request.Url.LocalPath.TrimStart('/') }; $filePath = Join-Path $PWD $file; if (Test-Path $filePath) { $content = [System.IO.File]::ReadAllBytes($filePath); $response.ContentType = if ($file -like '*.html') { 'text/html' } elseif ($file -like '*.css') { 'text/css' } elseif ($file -like '*.js') { 'application/javascript' } else { 'application/octet-stream' }; $response.ContentLength64 = $content.Length; $response.OutputStream.Write($content, 0, $content.Length); } else { $response.StatusCode = 404; }; $response.Close(); }"
pause
