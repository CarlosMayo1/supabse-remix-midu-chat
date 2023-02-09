import { useSupabase } from "../hooks/useSupabase"
import type { Database } from "~/types/database"
import { useEffect, useState } from 'react'

type Message = Database['public']['Tables']['messages']['Row']

export function RealTimeMessages({
  serverMessages
}: {
  serverMessages: Message[]
}) {
  const [messages, setMessages] = useState<Message[]>(serverMessages)
  const supabase = useSupabase()

  useEffect(() => {
    setMessages(serverMessages)
  }, [serverMessages])

  // useEffect(() => {
  //   const channel = supabase
  //   .channel('*')
  //   .on('postgres_changes', 
  //     { event: 'INSERT', schema: 'public', table: 'messages' },
  //   (payload) => {
  //     console.log({payload})
  //     const newMessage = payload.new as Message
  //     setMessages((messages) => [...messages, newMessage])

  //     // if(!messages.some(message => message.id)) {
  //     //   setMessages((messages) => [...messages])
  //     // }

  //     return () => { supabase.removeChannel(channel) }
  //   })
  // },[supabase])

  return(
    <pre>
    {JSON.stringify(messages,null,2)}
  </pre>
  )
}