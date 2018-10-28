class PageController < ApplicationController
  def hello
    @name = params[:id] || 'World'
  end

  def welcome
  end
end
