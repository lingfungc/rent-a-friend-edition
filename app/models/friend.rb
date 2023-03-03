class Friend < ApplicationRecord
  PRONOUNS = ['She/her', 'He/him', 'They/them', 'Ze/zir']
  CATEGORIES = %w[Sports Music Family Date Travel Funeral]

  belongs_to :user
  has_many_attached :photos                 # Attach images linked in Cloudinary
  has_many :bookings, dependent: :destroy   # Destroy bookings when friend is deleted
  has_many :favourites, dependent: :destroy  # Destroy favourites when friend is deleted
  geocoded_by :location                     # Mapping the location attribute of friend
  after_validation :geocode, if: :will_save_change_to_location?

  validates :first_name, :last_name, :bio, :categories, :pronouns, :location, :age, :daily_rate, presence: true
  validates :first_name, :last_name, format: { with: /\A[a-zA-Z]+\z/, message: "only allows letters" }
  validates :bio, length: { minimum: 50 }
  validates :categories, inclusion: { in: CATEGORIES }
  validates :age, numericality: { only_integer: true, greater_than_or_equal_to: 18 }
  validates :daily_rate, numericality: { greater_than: 0 }
  validate :photos_count_limit

  include PgSearch::Model
  pg_search_scope :search_by_categories_and_location_and_age,
  against: [ :categories, :location, :age, :first_name, :last_name ],
  using: {
    tsearch: { prefix: true } # <-- now `superman batm` will return something!
  }

  # scope :filter_by_categories, -> (catagories) { where("catagories LIKE ?", catagories) }
  # include Filterable

  def unavailable_dates
    # Use .pluck get the values from the hash by the given keys
    # Then these values which are start_date and end_date is stored in range as an array temporarily
    # Next use .map to create an array of hashes which have [:from] and [:to] as keys
    # While range[0] and range[1] which are start_date and end_date as values
    bookings.pluck(:start_date, :end_date).map do |range|
      { from: range[0], to: range[1] }
    end
  end

  private

  def photos_count_limit
    return if photos.count <= 5

    errors.add(:photos, 'You can upload max 5 photos.')
  end

end
