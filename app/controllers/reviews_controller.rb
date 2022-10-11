class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def show 
        review = find_review
        render json: review
    end 

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created
    end 

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end 

    private 

    def find_review
        Review.find_by(id: params[:id])
    end 

    def review_params
        params.permit(:description, :book_id, :user_id)
    end 
end
