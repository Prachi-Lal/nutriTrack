from passlib.context import CryptContext
from jose import jwt 
from datetime import datetime, timedelta
from ...src import config


pwd_content = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_content.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_content.verify(plain_password, hashed_password)

secret_key = config.SECRET_KEY
algorithm = config.ALGORITHM
secret_key_token_expire = config.ACCESS_TOKEN_EXPIRE_MINUTES

def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=secret_key_token_expire)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, secret_key, algorithm=algorithm)
    return encoded_jwt
