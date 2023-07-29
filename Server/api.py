from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

api = FastAPI()

questions = []
options = []
answersKey = []
title=''


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
    title: str


@api.get('/')
async def test():

    return 'Quizzer_Api'


@api.post('/post')
async def postQuiz(quiz: Quiz):
    
    global questions, options, answersKey,title
    questions = quiz.questions
    options = quiz.options
    answersKey = quiz.answersKey
    title=quiz.title
    print(questions)
    print(options)
    print(answersKey)
    print(title)
    return JSONResponse('request recieved')

@api.get('/get')
async def getQuiz():

    return JSONResponse({'questions':questions, 'options':options, 'answers':answersKey, 'title':title})

Pyquestions=[
  "1. What is the result of the following expression? 3 + 5 * 2",
  "2. Which of the following data types is mutable in Python?",
  "3. What does the 'len()' function return?",
  "4. What is the output of this code? print('Hello, ' + 'world!')",
  "5. How do you create a function in Python?",
  "6. What is the correct way to open a file 'data.txt' forwriting?",
  "7. What is the output of this code? print(10 / 3)",
  "8. How do you add an element to a list in Python?",
  "9. What does the 'import' keyword do in Python?",
  "10. How do you check the number of elements in a list?"
]
Pyoptions=[
        ["1) 10", "2) 13", "3) 8", "4) 16"],
        ["1) int", "2) str", "3) list", "4) tuple"],
        ["1) The length of a string", "2) The number of elements in a list", "3) The sum of a tuple", "4) The maximum value in a dictionary"],
        ["1) Hello, world!", "2) Hello + world!", "3) Hello, + world!", "4) Hello +, world!"],
        ["1) def my_function():", "2) function my_function():", "3) create my_function():", "4) my_function():"],
        ["1) file = open('data.txt', 'r')", "2) file = open('data.txt', 'wb')", "3) file = open('data.txt', 'w')", "4) file = open('data.txt', 'write')"],
        ["1) 3.333", "2) 3.0", "3) 3", "4) 3.33"],
        ["1) list.append(item)", "2) list.add(item)", "3) list.insert(item)", "4) list.extend(item)"],
        ["1) It defines a new class", "2) It includes a module in the code", "3) It reads user input", "4) It allows access to external functions"],
        ["1) len(list)", "2) size(list)", "3) count(list)", "4) length(list)"],
        
]
PyanswersKey=[3, 3, 2, 1, 1, 3, 2, 1, 2, 1]
@api.get('/getPy')
async def getPyQuiz():
  
  return JSONResponse({'Pyquestions':Pyquestions,'Pyoptions':Pyoptions,'PyanswersKey':PyanswersKey})
  
Flquestions=[
  "1. What is Flutter?",
    "2. What language is Flutter based on?",
    "3. What widget is used to create a reusable part of the user interface in Flutter?",
    "4. What is the main function in a Flutter app?",
    "5. What is a StatefulWidget in Flutter?",
    "6. How do you add padding around a widget in Flutter?",
    "7. What is the purpose of the 'setState' method in Flutter?",
    "8. How do you navigate to a new screen in Flutter?",
    "9. What is the 'pubspec.yaml' file used for in a Flutter project?",
    "10. What is the purpose of a 'BuildContext' in Flutter?"
]
Floptions=[
  ["1. A mobile app development framework", "2. A programming language", "3. A version control system", "4. An IDE for Flutter development"],
    ["1. Dart", "2. Java", "3. Swift", "4. JavaScript"],
    ["1. Widget", "2. Component", "3. Element", "4. Container"],
    ["1. main()", "2. runApp()", "3. start()", "4. init()"],
    ["1. A widget that cannot be changed", "2. A widget that can be changed", "3. A stateless widget", "4. A widget that has no child"],
    ["1. Use a Padding widget", "2. Use the margin property", "3. Wrap it with a Center widget", "4. Flutter automatically adds padding"],
    ["1. To create a new widget", "2. To update the state of a widget", "3. To change the layout of the app", "4. To perform asynchronous tasks"],
    ["1. Navigator.push()", "2. Navigator.go()", "3. Navigator.pushScreen()", "4. Navigator.navigateTo()"],
    ["1. To specify the app's name", "2. To define the app's package name", "3. To list all installed packages", "4. To manage app dependencies"],
    ["1. It's a function to build the UI", "2. It's used to retrieve the parent widget", "3. It's used to rebuild the widget tree", "4. It provides contextual information about the widget"]
]
FlanswersKey=[1, 1, 1, 1, 2, 1, 2, 1, 4, 4]
@api.get('/getFl')
async def getFlQuiz():
  
  return JSONResponse({'Flquestions':Flquestions,'Floptions':Floptions,'FlanswersKey':FlanswersKey})

Jsquestions=[
  "1.What is the correct way to declare a JavaScript variable?",
        "2.Which operator is used for strict equality check in JavaScript?",
        "3.What does the 'typeof' operator return?",
        "4.What is an example of a JavaScript primitive data type?",
        "5.How do you write a single-line comment in JavaScript?",
        "6.What is the purpose of 'NaN' in JavaScript?",
        "7.What keyword is used to define a function in JavaScript?",
        "8.What is the result of '3' + 2 in JavaScript?",
        "9.How do you check if a variable is an array in JavaScript?",
        "10.What is the purpose of 'JSON.parse()' in JavaScript?"
]
Jsoptions=[
  ["1.var name;", "2.variable name;", "3.v name;", "4.variable-name;"],
        ["1.===", "2.==", "3.=", "4.===="],
        ["1.string", "2.number", "3.boolean", "4.object"],
        ["1.null", "2.undefined", "3.boolean", "4.string"],
        ["1. // This is a comment", "2. /* This is a comment */", "3. # This is a comment", "4. /* This is a comment */"],
        ["1.To represent an error state", "2.To represent a valid number", "3.To represent a boolean value", "4.To represent a function"],
        ["1.function", "2.func", "3.def", "4.fun"],
        ["1. 32", "2. 5", "3. 52", "4. 7"],
        ["1.Array.isArray(myVar)", "2.myVar.isArray()", "3.isArray(myVar)", "4.myVar instanceof Array"],
        ["1.To parse a JSON object into a JavaScript object", "2.To stringify a JavaScript object into JSON", "3.To validate JSON data", "4.To create a JSON object"]
]
JsanswersKey=[1, 4, 2, 3, 1, 1, 1, 3, 1, 1]

@api.get('/getJs')
async def getJsQuiz():
  
  return JSONResponse({'Jsquestions':Jsquestions,'Jsoptions':Jsoptions,'JsanswersKey':JsanswersKey})