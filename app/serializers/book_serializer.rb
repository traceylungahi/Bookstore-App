class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :available
  has_many :reviews
end
