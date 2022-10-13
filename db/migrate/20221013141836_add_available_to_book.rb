class AddAvailableToBook < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :available, :boolean
  end
end
