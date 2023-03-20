import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import {Container, Info, IconsContainer, Icons } from './styles';

const [ user, setUser ] = useState(props.profile)

useEffect(() => {
    setProfile(props.user)
}, [props.user])

const edit = () => {
    const body = {
        id: user.id,
        choice: true
    }
    axios
    .post(`https://desafio.pontue.com.br/redacao/redacao_id/update`, body)
    .then(() => {
        {props.getProfile()}
        setUser()
    })
    .catch(err => {
        console.log(err)
    })
}

const deleteRed = () => {
    const body = {
        id: user.id,
        choice: false
    }
    axios
    .post(`https://desafio.pontue.com.br/redacao/{redacao_id}/delete`, body)
    .then(() => {
        {props.getProfile()}
        setUser()
    })
    .catch(err =>{ 
        console.log(err)
    })
}

const Card = (props) => {
    return (
        <div>
            <Container>
                <Info>
                    <p><b>{props.name}</b></p>
                    <p>{props.redacao}</p>
                </Info>
            </Container>    
            <IconsContainer>
                <Icons src={ModeEditIcon } onClick={edit} />
                <Icons src={DeleteForeverIcon} onClick={deleteRed} />
            </IconsContainer>
        </div>
    )
}
export default Card