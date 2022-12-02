class FavouritesController < ApplicationController

  def create
    @favourite = Favourite.new
    @favourite.user = current_user
    @favourite.friend = Friend.find(params[:friend_id])
    @favourite.liked = true
    flash[:notice] = 'Added to favourite' if @favourite.save
  end

  private

  # Not necessary for favourite because there is any params input by user
  def favourite_params
    params.require(:favourite).permit(:user_id, :friend_id)
  end
end
