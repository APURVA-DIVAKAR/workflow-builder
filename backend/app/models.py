
from sqlalchemy import Column, Integer, String, Text
from app.database import Base

class workflow(Base):
    _tablename_ = "workflows"
    id = Column(Integer,primary_key=True)
    defination = Column(Text)

class ChatLog(Base):
    __tablename__ = "chat_logs"
    id = Column(Integer,primary_key=True)
    message = Column(Text)
    response = Column(Text)
    