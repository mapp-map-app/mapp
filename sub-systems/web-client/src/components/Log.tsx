import styled from 'styled-components'
import getConfig from 'next/config'
import io from 'socket.io-client'
import React, { useState, useEffect } from 'react'
import Stats from 'moving-average'
import now from 'performance-now'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`

type Props = {
  event: string
  showStats?: boolean
}

const Log = ({ event, showStats }: Props) => {
  const [count, setCount] = useState(0)
  const [ring, setRing] = useState<string[]>([])
  const [stats] = useState(new Stats(5 * 1000))

  useEffect(() => {
    const {
      publicRuntimeConfig: { apiUrl },
    } = getConfig()
    const pocSocket = io(`${apiUrl}/poc`, {
      path: '/socket.io',
    })
    let lastTimestamp: number
    pocSocket.on(event, (message: string) => {
      const nowTime = now()
      setCount((count) => count + 1)
      setRing((ring) => [message, ...ring.slice(0, 49)])
      if (lastTimestamp) stats.push(nowTime, nowTime - lastTimestamp)
      lastTimestamp = nowTime
    })
    return () => {
      pocSocket.disconnect()
    }
  }, [])

  return (
    <FlexContainer>
      <h2>{`${event}(s): ${count}`}</h2>
      {showStats ? <p>{`${(60000 / stats.movingAverage()).toFixed(2)} per minute`}</p> : null}
      {ring.map((message: string, index) => (
        <div key={index}>{message}</div>
      ))}
    </FlexContainer>
  )
}

export default Log
