from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.exc import SQLAlchemyError
# Other imports

from sqlalchemy.orm import sessionmaker
from typing import List, Optional

# Database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./books9.db"  # Changed database file name to books.db
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# FastAPI instance
app = FastAPI()

# CORS configuration (optional, remove if not needed)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust as needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Review(BaseModel):
    user: str
    rating: int  # Assume rating is between 1 and 5
    comment: str
# Database model
class Book(Base):
    __tablename__ = "books"  # Changed table name to books
    id = Column(Integer, primary_key=True,nullable=False)
    title = Column(String, index=True)
    description = Column(String)
    imageUrl = Column(String)
    price = Column(String)
    author = Column(String, nullable=True)  # Optional field
    genre = Column(String, nullable=True)  # Optional field

Base.metadata.create_all(bind=engine)

# Pydantic models
class BookBase(BaseModel):
    # id:int
    title: Optional[str]=None
    description: Optional[str] = None
    imageUrl: Optional[str] = None
    price: Optional[str] = None
    author: Optional[str] = None
    genre: Optional[str] = None

    class Config:
        orm_mode = True
        
# class BookCreate(BaseModel):
#     title: str
#     description: str
#     imageUrl: str
#     price: str
#     author: Optional[str] = None
#     genre: Optional[str] = None

#     class Config:
#         orm_mode = True

@app.post("/books/")
def create_book(book: BookBase):
    db = SessionLocal()
    db_book = Book(**book.dict())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    db.close()
    return db_book
# @app.post("/books/", response_model=BookBase)
# def create_book(book: BookBase):
#     db = SessionLocal()

#         # Convert the pydantic model to a dictionary, excluding 'id'
#     db_book = Book(**book.model_dump())
#     db.add(db_book)
#     db.commit()
#     db.refresh(db_book)  # This will assign the auto-generated ID
        
#     db.close()

# @app.post("/books/", response_model=BookBase)
# def create_book(book: BookCreate):
#     db = SessionLocal()  # Assuming SessionLocal is defined elsewhere
#     try:
#         db_book = Book(**book.model_dump())  # Create book without ID
#         db.add(db_book)
#         db.commit()
#         db.refresh(db_book)  # Fetch the book with the generated ID
#         return db_book
#     except SQLAlchemyError as e: # type: ignore
#         db.rollback()
#         raise HTTPException(status_code=500, detail=str(e))
#     finally:
#         db.close()
        
@app.get("/books/")
def read_books():
    db = SessionLocal()
    books = db.query(Book).all()
    db.close()
    return books

@app.get("/books/{book_id}/")
def read_book(book_id: int):
    db = SessionLocal()
    book = db.query(Book).filter(Book.id == book_id).first()
    db.close()
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    return book

@app.put("/books/{book_id}/")
def update_book(book_id: int, book: BookBase):
    db = SessionLocal()
    db_book = db.query(Book).filter(Book.id == book_id).first()
    if db_book is None:
        db.close()
        raise HTTPException(status_code=404, detail="Book not found")
    for key, value in book.dict().items():
        setattr(db_book, key, value)
    db.commit()
    db.refresh(db_book)
    db.close()
    return db_book


# @app.delete("/books/{book_id}", response_model=BookBase)
# def delete_book(book_id:int):
#     db = SessionLocal()
#     db_book = db.query(Book).filter(Book.id == book_id).first()
#     if db_book is None:
#         db.close()
#         raise HTTPException(status_code=404, detail="Book not found")
#     db.delete(db_book)
#     db.commit()
#     db.close()
#     return db_book
@app.delete("/books/{id}/")
def delete_book(id: int):
    db = SessionLocal()  # Assuming SessionLocal is defined elsewhere
    try:
        db_book = db.query(Book).filter(Book.id == id).first()
        if db_book is None:
            raise HTTPException(status_code=404, detail="Book not found")
        db.delete(db_book)
        db.commit()
        return db_book
    except SQLAlchemyError as e: # type: ignore
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()


@app.get("/books/search/")
def search_books(title: str, author: Optional[str] = None, genre: Optional[str] = None):
    db = SessionLocal()
    query = db.query(Book)
    if title:
        query = query.filter(Book.title.ilike(f"%{title}%"))
    if author:
        query = query.filter(Book.author.ilike(f"%{author}%"))
    if genre:
        query = query.filter(Book.genre.ilike(f"%{genre}%"))
    books = query.all()
    db.close()
    return books

@app.get("/")
def read_root():
    return {"message": "Welcome to the Book API"}





