class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description
  belongs_to :book
end
