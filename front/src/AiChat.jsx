import React, { useState } from 'react'
import axios from 'axios'
  
export default function AiChat() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAnswer('')
    try {
      const res = await axios.post('http://localhost:5000/api/ask', { question })
      setAnswer(res.data.answer)
    } catch (err) {
      console.error(err.message)
      setAnswer('Sorry, something went wrong.')
    }
    setLoading(false)
  }

  return (
    <div style={{
      maxWidth: 550,
      margin: '50px auto',
      padding: 40,
      borderRadius: 20,
      boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
      background: '#ffffff',
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif',
      border: '1px solid #e0e0e0'
    }}>
      <div>
        <span role="img" aria-label="AI" style={{ fontSize: 100, color: '#673ab7' }}>🤖</span>
      </div>
      <h2 style={{ color: '#424242', marginBottom: 30 }}>Ask Tagg AI</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask anything about Tagg..."
          style={{
            flexGrow: 1,
            padding: '14px 18px',
            fontSize: 17,
            borderRadius: 25,
            background: '#ffffff',
            color: '#000000',
            border: '1px solid #bdbdbd',
            marginRight: 15,
            outline: 'none',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '14px 28px',
            fontSize: 17,
            borderRadius: 25,
            background: '#7e57c2',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          disabled={loading}
        >
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>
      {answer && (
        <div style={{
          marginTop: 25,
          padding: 20,
          background: '#f3e5f5',
          borderRadius: 15,
          textAlign: 'left',
          color: '#424242',
          lineHeight: '1.6',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <div dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, '<br/>') }} />
        </div>
      )}
    </div>
  )
} 