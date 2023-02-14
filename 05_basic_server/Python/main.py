from fastapi import FastAPI

app = FastAPI()
@app.get("/")
def root():
    return {"message":"Frist FastAPI route"}

@app.get("/newroute")
def _():
    return {"message":"This is my second route"}

# uvicorn main:app --reload
# 