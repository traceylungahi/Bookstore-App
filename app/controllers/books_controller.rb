class BooksController < ApplicationController
 
    def index 
        books = Book.all 
        render json: books, except: [:created_at, :updated_at]
    end 

    def show 
        book = find_book
        render json: book 
    end 

    def create 
        book = @user.book.create!(book_params)
        render json: book, status: :created 
    end 

    # def update 
    #     book = find_book
    #     book.update!(book_params)
    #     render json: book 
    # end 

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

end
