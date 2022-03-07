import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <DiretaFilho nome='Julio' idade={20} nerd={true}/>
            <DiretaFilho nome='Caio' idade={16} nerd={false}/>
        </div>
    )
}