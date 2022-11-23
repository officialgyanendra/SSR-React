import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

const PORT = 8080
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  const sampleData = [{
    "id": 1,
    "name": "testData1",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status":"Active",
    "Desc": "This is to test for node render 1"
    },
    {
    "id": 2,
    "name": "testData2",
    "value": "MULTIPLY",
    "config": "rootEVAL",
    "status":"InActive",
    "Desc": "This is to test for node render 2"
    },
    {
    "id": 3,
    "name": "testData3",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status":"Active",
    "Desc": "This is to test for node render 3"
    },
    {
    
    "id": 4,
    "name": "testData4",
    "value": "ADD",
    "config": "rootEVAL",
    "status":"Active",
    "Desc": "This is to test for node render 4"
    },
    {
    "id": 5,
    "name": "testData5",
    "value": "ADD",
    "config": "rootEVAL",
    "status":"InActive",
    "Desc": "This is to test for node render 5"
    },
    {
    "id": 6,
    "name": "testData6",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status":"Active",
    "Desc": "This is to test for node render 6"
    },
    {
    "id": 7,
    "name": "testData7",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status":"InActive",
    "Desc": "This is to test for node render 7"
    },
    {
    "id": 8,
    "name": "testData8",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status":"Active",
    "Desc": "This is to test for node render 8"
    },
    
    {
    "id": 9,
    "name": "testData9",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status":"Active",
    "Desc": "This is to test for node render 9"
    },
    {
    "id": 10,
    "name": "testData10",
    "value": "ADD",
    "config": "rootEVAL",
    "status":"InActive",
    "Desc": "This is to test for node render 10"
    }
    ]
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App sampleData={sampleData}/>)}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.get(router);


// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
