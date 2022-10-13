# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create!([
    {
        name: "River and the source",
        image: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=300",
        description: "A book written by Margaret Ogola",
        price: 25
    },
    {
        name: "When the sun goes down",
        image: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=300",
        description: "A book written by various authors.",
        price: 20
    },
    {
        name: "Atomic habits",
        image: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=300",
        description: "Great book",
        price: 10
    },
    {
        name: "Mkurugenzi",
        image: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=300",
        description: "A novel written by Zack",
        price: 18
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