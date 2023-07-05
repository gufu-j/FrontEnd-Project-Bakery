class AddTypeOfBreadToBreads < ActiveRecord::Migration[6.1]
  def change
    add_column :breads, :type_of_bread, :string
  end
end
