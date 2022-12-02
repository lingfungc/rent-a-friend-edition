class FavouritesController < ApplicationController

  def create
    @favourite = Favourite.new
    @favourite.user = current_user
    @favourite.friend = Friend.find(params[:friend_id])
    @favourite.liked = true
    flash[:notice] = 'Added to favourite' if @favourite.save
  end

  def edit
    @favourite = Favourite.find(params[:id])
    if @favourite.liked == false
      @favourite.liked = true
      @favourite.save
      flash[:notice] = 'Added to favourite'
    else
      @favourite.liked = false
      @favourite.save
      flash[:notice] = 'Removed from favourite'
    end
  end

  private

  # Not necessary for favourite because there is any params input by user
  def favourite_params
    params.require(:favourite).permit(:liked)
  end
end
