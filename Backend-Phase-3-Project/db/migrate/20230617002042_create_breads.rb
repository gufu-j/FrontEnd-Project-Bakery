class CreateBreads < ActiveRecord::Migration[6.1]
  def change
    create_table :breads do |t|
      t.string :name
      t.integer :price
      t.integer :bakery_id
      t.timestamps
    end
  end
end
