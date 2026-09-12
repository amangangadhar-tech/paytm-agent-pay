# One-click start for build day: sandbox + public tunnel.
# Run from PowerShell:  .\start-demo.ps1
# Leaves two windows open (sandbox, tunnel). Prints the SANDBOX_URL to paste into Phinite.

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$cf = "C:\Program Files (x86)\cloudflared\cloudflared.exe"
if (-not (Test-Path $cf)) { $cf = (Get-Command cloudflared -ErrorAction SilentlyContinue).Source }
if (-not $cf) { Write-Host "cloudflared not found. Install: winget install --id Cloudflare.cloudflared" -ForegroundColor Red; exit 1 }

# 1. sandbox
Start-Process powershell -ArgumentList "-NoExit","-Command","cd '$root\sandbox'; npm start"
Start-Sleep 4
try { $h = (Invoke-WebRequest -UseBasicParsing http://localhost:3000/api/health).Content; Write-Host "Sandbox: $h" }
catch { Write-Host "Sandbox not up yet - give it a few seconds and re-check http://localhost:3000/api/health" -ForegroundColor Yellow }

# 2. tunnel
$log = "$env:TEMP\cf-tunnel.log"
if (Test-Path $log) { Remove-Item $log -Force }
Start-Process -FilePath $cf -ArgumentList "tunnel","--protocol","http2","--url","http://localhost:3000" -RedirectStandardError $log -WindowStyle Minimized
$url = $null
for ($i = 0; $i -lt 20 -and -not $url; $i++) {
  Start-Sleep 1
  if (Test-Path $log) { $m = Select-String -Path $log -Pattern "https://[a-z0-9-]+\.trycloudflare\.com" | Select-Object -First 1; if ($m) { $url = $m.Matches[0].Value } }
}
if (-not $url) { Write-Host "Tunnel URL not found yet. Check $log" -ForegroundColor Yellow; exit 1 }

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  SANDBOX_URL = $url" -ForegroundColor Green
Write-Host "  Paste this into Phinite -> Env. variables -> SANDBOX_URL (DEV)" -ForegroundColor Cyan
Write-Host "  Demo page:    http://localhost:3000" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Set-Clipboard -Value $url
Write-Host "(copied to clipboard)"
try { (Invoke-WebRequest -UseBasicParsing "$url/api/health").Content | Out-Null; Write-Host "Public URL check: OK" -ForegroundColor Green } catch { Write-Host "Public URL check failed - wait 10s and open $url/api/health" -ForegroundColor Yellow }
Start-Process "http://localhost:3000"
