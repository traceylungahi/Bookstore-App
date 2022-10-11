class RatingsController < ApplicationController
    def show 
        rating = find_rating
        render json: rating 
    end 

    def create 
        rating = Rating.create!(rating_params)
        render json: rating, status: :created
    end 

    def destroy
        rating = find_rating
        rating.destroy
        head :no_content
    end 

    private 

    def find_book
        Rating.find_by(id: params[:id])
    end 

    def rating_params
        params.permit(:review, :description, :book_id, :user_id)
    end 
end
