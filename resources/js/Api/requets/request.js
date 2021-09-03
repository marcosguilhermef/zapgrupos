import { comparadorReducer, setDados, setStatus as setComparadorStatus, setJogos } from '../slices/Comparador'
import { setBancas, setSelect, setStatus as setBancaStatus } from '../slices/Bancas'

var config = [
  {'link': 'api/bancarastreavel', 'action': setBancas, 'status': setBancaStatus },
  {'link': 'api/allMatchs', 'action': setJogos },
  {'link': 'api/jogos', 'action': setDados, 'status': setComparadorStatus  },
]

/* const makeRequest = () => async (dispatch) => {
  config.map( (e,i,a) => {
    dispatch(fetchDados(e['link'],e['action'],e['status']))
  } )
} */

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
        !status || dispatch(status('ok'))
      }
    }catch(e){
      //window.location.href = window.location.origin+'/404'
    }
}

export {setDados,setJogos, setSelect,setBancas, setBancaStatus, setComparadorStatus }