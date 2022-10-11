class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 

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

    private 

    def find_book
        Book.find_by(id: params[:id])
    end 

    def book_params
        params.permit(:name, :image, :description, :price)
    end 

    def render_not_found_response
        render json: { error: "Book not found" }, status: :not_found
    end
end
