import { useEffect, useState } from 'react'
import { type Usuario } from '../../types'
import { URLS } from '../constants/enums'

const useFetch = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(URLS.GET_50_RANDOM_USERS)
      .then(async res => await res.json())
      .then(data => {
        setUsuarios(data.results)
      })
      .catch(err => { console.error(err) })
      .finally(() => { setIsLoading(false) })
  }, [])
  return { usuarios, isLoading }
}
export default useFetch
