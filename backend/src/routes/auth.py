from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models.user import User
from core.security import verify_password, create_access_token

from backend.src.core.security import create_access_token


router = APIRounter()

@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=400, detail="Invalid email or password")
    if not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid email or password")
    token = create_access_token(
        data={"user_id": user.id, "email": user.email}
    )
    return {"access_token": token, "token_type": "bearer"}