import sys
from flask_sqlalchemy import sqlalchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

# Create declarative base instance
Base = declarative_base()

# Classes/tables will go here
# Create the user class and extend from Base


class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(250), nullable=False)
    password = Column(String(250), nullable=False)
    department = Column(String(250), nullable=False)


engine = create_engine('sqlite:///users.db')

Base.metadata.create_all(engine)
