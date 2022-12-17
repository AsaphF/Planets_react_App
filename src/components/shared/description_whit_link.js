
export default function DescriptionWhitLink (props) {
    if(props.link){  // Essa condição é para verificar se o elemento planet tiver um link ou não, como ele deve se comportar.
        return (
            <>
            <p>{props.description}</p>
            <a href={props.link}>Acesse para aprender mais!</a>
            </>
        )        
    }else{
        return (
            <>
            <p><u>{props.description}</u></p>
            </>
        )    
    }
    
}

