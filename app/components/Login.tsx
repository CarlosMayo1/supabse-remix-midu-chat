import { useSupabase } from "~/hooks/useSupabase"

export function Login () {
  const supabase = useSupabase()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error al cerrar sesión', error)
  }

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    })

    if (error) console.log('Error al iniciar sesión', error)
  }

  return (
    <div style={{ display: 'flex', gap: "12px"}}>
      <button onClick={handleLogout}>Log out</button>
      <button onClick={handleLogin}>Log in</button>
    </div>
  )
}