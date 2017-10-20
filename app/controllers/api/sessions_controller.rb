class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      login!(user)
      render json: user
    else
      render json: ["invalid credentials"], status: 422
    end
  end

  def destroy
    if current_user
      render json: {}
      logout
    else
      render json: ['Not Found'], status: 404
    end
  end
end
