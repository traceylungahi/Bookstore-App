class BooksController < ApplicationController
    def index 
        books = Book.all 
        render json: books 
    end 

    def show 
        book = find_book
        render json: book 
    end 

    def create 
        book = Book.create!(book_params)
        render json: book, status: :created 
    end 

    def update 
        book = find_book
        book.update!(book_params)
        render json: book 
    end 

    def destroy 
        book = find_book
        book.destroy
        head :no_content 
    end 
end
