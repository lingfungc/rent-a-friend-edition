class BookingsController < ApplicationController
  def new
    @booking = Booking.new
    @friend = Friend.find(params[:friend_id])
    # raise
  end

  def create
    @friend = Friend.find(params[:friend_id])
    @booking = Booking.new(booking_params)
    @booking.total_price = (@booking.end_date - @booking.start_date + 1) * @friend.daily_rate
    @booking.user = current_user
    @booking.friend = @friend
    if @booking.save
      redirect_to user_path(@booking.user)
    else
      render 'friends/show', status: :unprocessable_entity
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @friend = booking.friend
    @booking.destroy
    redirect_to friend_path(@friend), status: :see_other
  end

  def confirm
    if user_signed_in?
      @friend = Friend.find(params[:friend_id])
      @booking = Booking.new(booking_params)
      @booking.total_price = (@booking.end_date - @booking.start_date + 1) * @friend.daily_rate
      @booking.user = current_user
      @booking.friend = @friend
      # make sure the start_date and end_date are valid before link to the confirmation page
      render 'friends/show', status: :unprocessable_entity unless @booking.valid?
    else
      flash[:danger] = "Please log in before making any booking."
      redirect_to user_session_path
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date)
  end
end
