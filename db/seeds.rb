# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cat1 = Category.create(name: 'Development')
cat2 = Category.create(name: 'Design')

tag1 = Tag.create(name: 'javascript')
tag2 = Tag.create(name: 'api')
tag3 = Tag.create(name: 'usability')

bm1 = Bookmark.create(name: 'Intro to ember api consumption', url: 'www.emberjs.com', category: cat1)
bm2 = Bookmark.create(name: "Don't make me think", url: 'www.dontmakemethink.com', category: cat2)