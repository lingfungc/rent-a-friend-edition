class FavouritesController < ApplicationController
  def index
    @favourites = current_user.favourites
  end

  def create
    @favourite = Favourite.new
    @favourite.user = current_user
    @favourite.friend = Friend.find(params[:friend_id])
    @favourite.liked = true
    redirect_to friends_path if @favourite.save
  end

  def update
    @favourite = Favourite.find(params[:id])
    if @favourite.liked == false
      @favourite.liked = true
    else
      @favourite.liked = false
    end
    redirect_to friends_path if @favourite.save
  end

  private

  # Not necessary for favourite because there is any params input by user
  def favourite_params
    params.require(:favourite).permit(:liked)
  end
end
