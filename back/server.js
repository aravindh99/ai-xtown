import express from 'express'
import cors from 'cors'
import { getTaggAiResponse } from './utils/ai.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/ask', async (req, res) => {
    const { question } = req.body
    if (!question) return res.status(400).json({ error: 'No question provided' })
    const answer = await getTaggAiResponse(question)
    res.json({ answer })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) 