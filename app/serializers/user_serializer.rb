class UserSerializer < ActiveModel::Serializer
  attributes :id, bio, :username, :password_digest 
end
