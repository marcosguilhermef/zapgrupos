import { setStatus, setGrupos, setGrupo } from '../slices/Grupos'

var config = [
  {'link': 'api//maisAcessados?page', 'action': setGrupos, 'status': setStatus },
]



export const makeOneRequest = ({link,parameter,action,status}) => async (dispatch) => {
  dispatch(fetchDados({
      'link': link+(parameter || ''),
      'action': action,
      'status': status
    }))
}
export const fetchDados =  ({link,action, status}) => async (dispatch)  => {
    try{
      const response =  await fetch(link)
      const dados    =  await response.json()
      if(response.ok){
        dispatch(action(dados))
        dispatch(status('ok'))
      }
    }catch(e){
      console.log('redux ',e)
      //window.location.href = window.location.origin+'/404'
    }
}

export {setStatus, setGrupos, setGrupo }
