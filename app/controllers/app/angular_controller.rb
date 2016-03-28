module App
  class AngularController < ActionController::Base
    include ActionController::MimeResponds

    def index
      respond_to do |format|
        format.json { render_not_found }
        format.html { render_index }
      end
    end

    def not_found
      render_not_found
    end

    private

    def render_index
      render file: "public/index.html", status: :ok, layout: false
    end

    def render_not_found
      head :not_found
    end
  end
end
