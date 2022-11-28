class AvailabilityValidator < ActiveModel::EachValidator
  # record = the queried friend instance in the booking model
  # attribute = either start_date or end_date which is what we want to check and validate
  # value = whatever is currently assigned to start_date and end_date which is the user's input in the form
  def validate_each(record, attribute, value)
    bookings = Booking.where(['friend_id =?', record.friend_id])
    date_ranges = bookings.map { |booking| booking.start_date..booking.end_date }

    date_ranges.each do |range|
      record.errors.add(attribute, 'not available') if range.include?(value)
    end
  end
end

# added the below line in booking.rb
# validates :start_date, :end_date, presence: true, availability: true
