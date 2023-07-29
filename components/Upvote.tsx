"use client"

import { useEffect, useState } from "react"

interface UpvoteInterface {
  color: string;
  upvoteHeading: string
}

const totalHexDigits = 6

const Upvote = ({ color, upvoteHeading }: UpvoteInterface) => {
  const [voteCount, setVoteCount] = useState<number>(0);
  const [voteCountFormat, setVoteCountFormat] = useState<string>('hex')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await fetch('/api/votes', {
          method: 'GET'
        })
        
        if (response.ok) {
          const votes = await response.text()
          setVoteCount(Number(votes))
          setIsLoading(false)
        } else {
          const msg = await response.text()
          console.log(msg)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchVotes()
  }, [])

  const decimalToHex = (decimal: number): string => {
    return decimal.toString(16);
  }

  const getHexCountArray = (hexVotes: string): string[] => {
    let length = hexVotes.length
    if (length < totalHexDigits) hexVotes = '0'.repeat(totalHexDigits-length) + hexVotes
    return hexVotes.split('')
  }

  const updateVoteCount = async () => {
    try {
      const response = await fetch('/api/votes/increase', {
        method: 'PATCH',
        body: JSON.stringify({
          currentVoteCount: voteCount + 1
        })
      })
      
      if (response.ok) {
        const res = await response.text()
        console.log(res)
      } else {
        const msg = await response.text()
        console.log(msg)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const toggleVoteCountFormat = () => {
    if (voteCountFormat == 'hex') {
      setVoteCountFormat('dec')
    } else {
      setVoteCountFormat('hex')
    }
  }

  return (
    <div className="upvotes">
      <p className="upvote_heading">{upvoteHeading}</p>
      <div className="upvote_container">
        <button className="vote_format_toggle_button" onClick={() => {
          toggleVoteCountFormat()
        }}>{voteCountFormat}</button>
        {
          voteCountFormat === 'hex' ? 
          <div className="hex_upvote">
            {
              isLoading ? <span className="hex_digit" style={{color: color}}>-</span> : 
              <>
                <span className="hex_text">0</span>
                <span className="hex_text">x</span>
                {
                  getHexCountArray(decimalToHex(voteCount)).map((number, index) => (
                    <span key={index} className="hex_digit" style={{color: color}}>{number}</span>
                  ))
                }
              </>
            }
            
          </div>
          :
          <div className="dec_upvote" style={{color: color}}>
            {
              voteCount.toString().split('').map((number, index) => (
                <span key={index} className="hex_digit" style={{color: color}}>{number}</span>
              ))
            }
          </div>
        }
        <button className="upvote_button" onClick={() => {
          setVoteCount(prev => prev+1)
          updateVoteCount()
        }}>+</button>
      </div>
    </div>
  )
}

export default Upvote


