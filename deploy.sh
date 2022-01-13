set -e

cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/larrylinr5/VuePractcieSort.git master:gh-pages
cd -