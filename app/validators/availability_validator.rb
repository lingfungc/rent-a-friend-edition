class AvailabilitiyValidator < ActiveModel::EachValidator

  # record = the qureied friend instance
  # attribute = either start_date or end_date which is what we want to check and validate
  # value = whatever is currently assigned to start_date and end_date
  def validate_each(record, attribute, value)
    bookings = Booking.where(['friend_id =?', record.friend_id])
    date_ranges = bookings.map { |booking| booking.start_date..booking.end_date }

    date_ranges.each do |range|
      record.errors.add(attribute, 'not available') if range.include?(value)
    end
  end
end
