require './config/environment'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/" do
   {message: "sanity check"}.to_json
  end

end
