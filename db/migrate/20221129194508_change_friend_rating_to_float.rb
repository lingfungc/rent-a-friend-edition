class ChangeFriendRatingToFloat < ActiveRecord::Migration[7.0]
  def change
    change_column :friends, :rating, :float
  end
end
