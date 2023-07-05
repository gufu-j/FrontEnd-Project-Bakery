class Bakery < ActiveRecord::Base
    has_many :breads

    #Add another bakery
    def self.create_bakery_instance(name, location, branch)
        Bakery.create(name: name, location: location, branch: branch)
    end

    #Updates a single instance from the Bakery Table
    def update_with_attributes(attribute)
        self.update(attribute)
    end
end


