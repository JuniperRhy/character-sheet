require_relative './config/environment'
  
# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
  allow do
    # origins '*' allows requests from ALL frontend origins
    # (if you deploy your application, change this to
    # ONLY allow requests from YOUR frontend origin, like:
    # origins 'my-react-app.netlify.app')
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end 

run ApplicationController
