Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, controllers: { registrations: 'users/registrations' }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"

  root to: "pages#home"

  resources :friends, only: %i[index show new create] do
    get 'friends/:id/confirm', to: 'bookings#confirm', as: :confirm

    # bookings new is not needed because the form is in friend show page
    resources :bookings, only: %i[create]

    # wont allow user to delete favourite but can change "liked" column in table
    resources :favourite, only: %i[create edit]
  end
  resources :users, only: [:show]
  resources :bookings, only: [:destroy]
end
