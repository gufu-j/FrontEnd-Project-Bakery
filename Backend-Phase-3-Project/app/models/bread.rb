class Bread < ActiveRecord::Base
    belongs_to :bakery

    ## Full CRUD capability for one of the models. 
    def self.create_bread_instance(name, price, bakery_id, type_of_bread)
        Bread.create(name: name, price: price, bakery_id: bakery_id, type_of_bread: type_of_bread)
    end

    #returns the number of breads' records in the table
    def self.bread_count
        Bread.count
    end

    #updates a single bread using the #update method.
    def update_with_attributes(attribute)
        self.update(attribute)
    end

    #deletes a single item with the #destroy method 
    def self.delete_by_id(id)
        bread = Bread.find(id)
        bread.destroy
    end

end
