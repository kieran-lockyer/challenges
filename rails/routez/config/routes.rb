Rails.application.routes.draw do
  get 'pages/hello', to: 'page#hello'
  get '/hello', to: 'page#hello'
  get 'hello/:id', to: 'page#hello'

  root 'page#welcome'
end
