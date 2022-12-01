class User < ApplicationRecord
  # has_many :friends
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :friends, dependent: :destroy
  has_many :bookings, dependent: :destroy
  has_many :favourite, dependent: :destroy
  has_one_attached :photo

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
