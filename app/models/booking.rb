class Booking < ApplicationRecord
  belongs_to :friend
  belongs_to :user

  # validates :start_date, :end_date, presence: true, availability: true
  validates :start_date, :end_date, presence: true, availability: true
  # validates_with AvailabilityValidator

  validate :start_date_cannot_be_in_the_past
  validate :end_date_after_start_date
  # validates :start_date, presence: true
  # validates :end_date, presence: true, comparison: { greater_than: :start_date }

  # validates :total_price, presence: true, numericality: { only_float: true }

  private

  def start_date_cannot_be_in_the_past
    errors.add(:start_date, "can't be in the past") if start_date.present? && start_date < Date.today
  end

  def end_date_after_start_date
    return if end_date.blank? || start_date.blank?

    errors.add(:end_date, "must be after the start date") if end_date < start_date
  end
end
