# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create!([
    {
        name: "A Thousand Splendid Suns",
        image: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=300",
        description: "A book written by Khaled Hosseini, released on May 22, 2007. It was New York Times Best Seller for 15 weeks following its release",
        price: 20 
    },
    {
        name: "A Grain Of Wheat",
        image: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=300",
        description: "A book written by Ngugi wa Thiong'o. It was published in 1967 by Heinemann. He wrote it while he was studying at Leeds University",
        price: 15
    },
    {
        name: "Half Of A Yellow Sun",
        image: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=300",
        description: "A novel written by NIgerian author Chimamanda Ngozi Adichie. It was published in 2006 by 4th Estate in London. The novel tells the story of the Biafran War",
        price: 15
    }
    {
        name: "Half Of A Yellow Sun",
        image: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=300",
        description: "A novel written by NIgerian author Chimamanda Ngozi Adichie. It was published in 2006 by 4th Estate in London. The novel tells the story of the Biafran War",
        price: 15
    }
])

User.create!([
    {
        username: "bookworm",
        bio: "find me lost in a book"
    },
    {
        username: "reader123",
        bio: "reading is the game"
    }, 
    {
        username: "booklover", 
        bio: "i love books"
    }
])

Review.create!([
    {
        description: "Amazing read",
        user_id: 1,
        book_id: 3
    },
    {
        description: "Good read, could've been better",
        user_id: 2,
        book_id: 2
    },
    {
        description: "Great! Couldn't stop reading",
        user_id: 3,
        book_id: 1
    }
])