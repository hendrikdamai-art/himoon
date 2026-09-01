#!/usr/bin/env bash
set -euo pipefail

GITHUB_URL="https://github.com/hendrikdamai-art/himoon.git"
ORIGIN_REPO="hendrik-dipayadi/himoon-store"

echo "==> HiMoon — push to GitHub"
echo "Target: $GITHUB_URL"
echo

if ! command -v origin >/dev/null 2>&1; then
  echo "Installing Origin CLI..."
  curl -fsSL https://downloads.cursor.com/origin/install.sh | sh
  export PATH="$HOME/.local/bin:$PATH"
fi

WORKDIR="${1:-himoon-store}"

if [ ! -d "$WORKDIR/.git" ]; then
  echo "==> Cloning from Cursor Origin..."
  origin auth login
  origin repo clone "$ORIGIN_REPO" "$WORKDIR"
fi

cd "$WORKDIR"

echo "==> Checking project files..."
test -f package.json
grep -q '"next"' package.json

echo "==> Setting GitHub remote..."
git remote set-url origin "$GITHUB_URL" 2>/dev/null || git remote add origin "$GITHUB_URL"

echo "==> Pushing main branch..."
if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
  git push -u origin main --force
else
  echo "Tip: run 'gh auth login' first if push asks for credentials."
  git push -u origin main --force
fi

echo
echo "Done. Verify: https://github.com/hendrikdamai-art/himoon"
echo "You should see package.json, src/, public/ at the repo root."
echo "Then redeploy on Vercel with Root Directory = empty."
