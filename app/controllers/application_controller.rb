class ApplicationController < ActionController::API
  include ActionController::Cookies

  # protect_from_forgery with: :null_session 

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorize

  private 

  def authorize
    @user = User.find_by(id: session[:user_id])
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless @user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Book not found" }, status: :not_found
  end
end
