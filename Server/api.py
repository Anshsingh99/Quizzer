from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

api = FastAPI()

questions = []
options = []
answersKey = []

api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Quiz(BaseModel):
    questions: list
    options: list
    answersKey: list



@api.get('/')
async def test():

    return 'Quizzer_Api'


@api.post('/post')
async def postQuiz(quiz: Quiz):
    
    global questions, options, answersKey
    questions = quiz.questions
    options = quiz.options
    answersKey = quiz.answersKey
    print(questions)
    print(options)
    print(answersKey)
    return JSONResponse('request recieved')

@api.get('/get')
async def getQuiz():

    return JSONResponse({'questions':questions, 'options':options, 'answers':answersKey})

# @api.get('/getq')
# async def getQuizz():

#     return JSONResponse({'questions':questions})
    