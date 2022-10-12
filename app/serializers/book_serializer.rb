class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price 
  has_many :reviews
end
