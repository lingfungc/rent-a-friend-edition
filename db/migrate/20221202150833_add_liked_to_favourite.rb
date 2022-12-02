class AddLikedToFavourite < ActiveRecord::Migration[7.0]
  def change
    add_column :favourites, :liked, :boolean, default: false
  end
end
