class GamesController < ApplicationController
    def index
        @games = ['Lego Batman', 'Mario Brothers', 'Doom']
    end
end
