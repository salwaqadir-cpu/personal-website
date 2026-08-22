#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "${project_root}"
node_modules/.bin/next build

# Next generates the technical metadata routes. Replace only the public-facing
# page shells with the approved static editorial design.
cp public/index.html out/index.html

for page in about approach contact program; do
  mkdir -p "out/${page}"
  cp "public/${page}.html" "out/${page}/index.html"
done

mkdir -p out/revamp
cp public/index.html out/revamp/index.html
