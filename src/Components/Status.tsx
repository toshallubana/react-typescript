type StatusProps = {
    status: string
}


const Status = (props: StatusProps) => {
    let message;
    if(props.status === "loading"){
        message='loading...'
    }else if(props.status === "success") {
        message='success...'
    }else if(props.status === "failure") {
        message='failure...'
    }

    return (
        <div>
            {message}
        </div>
    )
}
export default Status;