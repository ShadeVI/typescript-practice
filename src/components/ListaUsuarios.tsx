import { useEffect, useState } from 'react'
import { type Usuario } from '../../types'
import Loading from './Loading'

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://randomuser.me/api/?results=50')
      .then(async res => await res.json())
      .then(data => {
        setUsuarios(data.results)
      })
      .catch(err => { console.error(err) })
      .finally(() => { setLoading(false) })
  }, [])

  if (loading) return <Loading />

  return (
    <div>
      <h2>Componente Usuarios</h2>
      <ul>
        {
          usuarios.map((usuario) => {
            const { login: { uuid }, name: { first: firstName } } = usuario
            return (
              <li key={uuid}>{firstName}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default ListaUsuarios
