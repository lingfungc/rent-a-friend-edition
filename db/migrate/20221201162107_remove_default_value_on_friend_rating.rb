class RemoveDefaultValueOnFriendRating < ActiveRecord::Migration[7.0]
  def change
    change_column_default :friends, :rating, from: 4, to: nil
  end
end
