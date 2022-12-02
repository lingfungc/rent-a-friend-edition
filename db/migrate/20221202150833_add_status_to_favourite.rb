class AddStatusToFavourite < ActiveRecord::Migration[7.0]
  def change
    add_column :favourite, :liked, :boolean, default: false
  end
end
