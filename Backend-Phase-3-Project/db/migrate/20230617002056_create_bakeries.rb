class CreateBakeries < ActiveRecord::Migration[6.1]
  def change
    create_table :bakeries do |t|
      t.string :name
      t.string :location
      t.integer :branch
      t.timestamps
    end
  end
end
